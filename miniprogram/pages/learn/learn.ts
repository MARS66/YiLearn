import { WORDS, TOTAL_WORDS, displayText } from '../../data/words'
import { loadProgress, markWordLearned, recordReview } from '../../utils/progress'
import { getStatusBarHeight } from '../../utils/system'
import { playFeedback } from '../../utils/feedback'

interface CardData {
  g: string
  initial: string
  final: string
  radical: string
  strokes: string
  phrases: { yi: string; han: string } | null
  tone: string
  audioUrl: string
}

let wordAudioCtx: WechatMiniprogram.InnerAudioContext | null = null
let phraseAudioCtx: WechatMiniprogram.InnerAudioContext | null = null
let phraseBusy = false
const phraseCache = new Map<string, string>()

const wordAudioMap: Record<string, string> = {}
for (const w of WORDS) {
  wordAudioMap[w.g] = w.audioUrl
}

function stripMp3Tags(buf: ArrayBuffer): ArrayBuffer {
  const bytes = new Uint8Array(buf)
  let start = 0
  let end = bytes.length
  if (bytes.length > 10 && bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) {
    const size =
      ((bytes[6] & 0x7f) << 21) |
      ((bytes[7] & 0x7f) << 14) |
      ((bytes[8] & 0x7f) << 7) |
      (bytes[9] & 0x7f)
    start = 10 + size
  }
  if (end - start > 128 && bytes[end - 128] === 0x54 && bytes[end - 127] === 0x41 && bytes[end - 126] === 0x47) {
    end -= 128
  }
  if (start === 0 && end === bytes.length) return buf
  return bytes.slice(start, end).buffer
}

function concatBuffers(buffers: ArrayBuffer[]): ArrayBuffer {
  const total = buffers.reduce((sum, b) => sum + b.byteLength, 0)
  const merged = new Uint8Array(total)
  let offset = 0
  for (const b of buffers) {
    merged.set(new Uint8Array(b), offset)
    offset += b.byteLength
  }
  return merged.buffer
}

function downloadFile(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    wx.downloadFile({
      url,
      success: (res) => {
        if (res.statusCode === 200) resolve(res.tempFilePath)
        else reject(new Error('download status ' + res.statusCode))
      },
      fail: reject,
    })
  })
}

function readFileBuffer(filePath: string): Promise<ArrayBuffer> {
  const fs = wx.getFileSystemManager()
  return new Promise((resolve, reject) => {
    fs.readFile({ filePath, success: (res) => resolve(res.data as ArrayBuffer), fail: reject })
  })
}

function playUrl(url: string): void {
  if (!wordAudioCtx) {
    wordAudioCtx = wx.createInnerAudioContext()
    wordAudioCtx.obeyMuteSwitch = false
    wordAudioCtx.onError(() => {
      wx.showToast({ title: '音频播放失败，请检查网络', icon: 'none' })
    })
  }
  if (phraseAudioCtx) phraseAudioCtx.stop()
  wordAudioCtx.stop()
  wordAudioCtx.src = url
  wordAudioCtx.play()
}

function playLocalPath(path: string): void {
  if (!phraseAudioCtx) {
    phraseAudioCtx = wx.createInnerAudioContext()
    phraseAudioCtx.obeyMuteSwitch = false
    phraseAudioCtx.onError(() => {
      wx.showToast({ title: '音频播放失败，请检查网络', icon: 'none' })
    })
  }
  if (wordAudioCtx) wordAudioCtx.stop()
  phraseAudioCtx.stop()
  phraseAudioCtx.src = path
  phraseAudioCtx.play()
}

interface DecodedSegment {
  channel: Float32Array
  sampleRate: number
}

interface WebAudioBufferLike {
  numberOfChannels: number
  sampleRate: number
  getChannelData(channel: number): Float32Array
}

interface WebAudioContextLike {
  decodeAudioData(
    data: ArrayBuffer,
    success: (buffer: WebAudioBufferLike) => void,
    fail?: (err: unknown) => void
  ): void
}

function createWebAudio(): WebAudioContextLike | null {
  try {
    const anyWx = wx as unknown as { createWebAudioContext?: () => WebAudioContextLike }
    if (typeof anyWx.createWebAudioContext === 'function') return anyWx.createWebAudioContext()
  } catch (e) {
    /* 低版本基础库不支持时回退到 MP3 直接拼接 */
  }
  return null
}

function decodeSegment(audio: WebAudioContextLike, buf: ArrayBuffer): Promise<DecodedSegment> {
  return new Promise((resolve, reject) => {
    audio.decodeAudioData(
      buf.slice(0),
      (buffer) => {
        const channel = new Float32Array(buffer.getChannelData(0))
        resolve({ channel, sampleRate: buffer.sampleRate })
      },
      reject
    )
  })
}

function trimSilence(channel: Float32Array, sampleRate: number): Float32Array {
  const THRESHOLD = 0.01
  let start = -1
  let end = -1
  for (let i = 0; i < channel.length; i++) {
    if (Math.abs(channel[i]) > THRESHOLD) {
      start = i
      break
    }
  }
  for (let i = channel.length - 1; i >= 0; i--) {
    if (Math.abs(channel[i]) > THRESHOLD) {
      end = i + 1
      break
    }
  }
  if (start < 0 || end <= start) return channel
  const margin = Math.round((20 / 1000) * sampleRate)
  return channel.subarray(Math.max(0, start - margin), Math.min(channel.length, end + margin))
}

function resampleTo(channel: Float32Array, from: number, to: number): Float32Array {
  if (from === to) return channel
  const out = new Float32Array(Math.max(1, Math.round((channel.length * to) / from)))
  const ratio = from / to
  for (let i = 0; i < out.length; i++) {
    const pos = i * ratio
    const i0 = Math.floor(pos)
    const i1 = Math.min(channel.length - 1, i0 + 1)
    const frac = pos - i0
    out[i] = channel[i0] * (1 - frac) + channel[i1] * frac
  }
  return out
}

function encodeWav(channel: Float32Array, sampleRate: number): ArrayBuffer {
  const numSamples = channel.length
  const buffer = new ArrayBuffer(44 + numSamples * 2)
  const view = new DataView(buffer)
  const writeStr = (offset: number, s: string) => {
    for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i))
  }
  writeStr(0, 'RIFF')
  view.setUint32(4, 36 + numSamples * 2, true)
  writeStr(8, 'WAVE')
  writeStr(12, 'fmt ')
  view.setUint32(16, 16, true)
  view.setUint16(20, 1, true)
  view.setUint16(22, 1, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * 2, true)
  view.setUint16(32, 2, true)
  view.setUint16(34, 16, true)
  writeStr(36, 'data')
  view.setUint32(40, numSamples * 2, true)
  let offset = 44
  for (let i = 0; i < numSamples; i++) {
    const s = Math.max(-1, Math.min(1, channel[i]))
    view.setInt16(offset, s < 0 ? Math.round(s * 0x8000) : Math.round(s * 0x7fff), true)
    offset += 2
  }
  return buffer
}

function writeFileBuffer(filePath: string, data: ArrayBuffer): Promise<string> {
  return new Promise((resolve, reject) => {
    wx.getFileSystemManager().writeFile({
      filePath,
      data,
      success: () => resolve(filePath),
      fail: reject,
    })
  })
}

function buildTrimmedWav(audio: WebAudioContextLike, urls: string[]): Promise<string> {
  return Promise.all(urls.map(downloadFile))
    .then((paths) => Promise.all(paths.map(readFileBuffer)))
    .then((buffers) => Promise.all(buffers.map((b) => decodeSegment(audio, b))))
    .then((segments) => {
      const sampleRate = segments[0].sampleRate
      const trimmed = segments.map((s) => {
        const ch = resampleTo(s.channel, s.sampleRate, sampleRate)
        return trimSilence(ch, sampleRate)
      })
      let total = 0
      for (const t of trimmed) total += t.length
      const merged = new Float32Array(total)
      let offset = 0
      for (const t of trimmed) {
        merged.set(t, offset)
        offset += t.length
      }
      return writeFileBuffer(`${wx.env.USER_DATA_PATH}/phrase_${Date.now()}.wav`, encodeWav(merged, sampleRate))
    })
}

function buildJoinedMp3(urls: string[]): Promise<string> {
  return Promise.all(urls.map(downloadFile))
    .then((paths) => Promise.all(paths.map(readFileBuffer)))
    .then((buffers) => {
      const merged = concatBuffers(buffers.map(stripMp3Tags))
      return writeFileBuffer(`${wx.env.USER_DATA_PATH}/phrase_${Date.now()}.mp3`, merged)
    })
}

function playJoinedAudio(yiText: string, urls: string[]): void {
  if (phraseBusy) return
  const cached = phraseCache.get(yiText)
  if (cached) {
    playLocalPath(cached)
    return
  }
  phraseBusy = true
  const audio = createWebAudio()
  const task = audio ? buildTrimmedWav(audio, urls) : buildJoinedMp3(urls)
  task
    .then((dest) => {
      phraseCache.set(yiText, dest)
      playLocalPath(dest)
    })
    .catch(() => {
      wx.showToast({ title: '词组音频生成失败，请稍后重试', icon: 'none' })
    })
    .finally(() => {
      phraseBusy = false
    })
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const t = a[i]
    a[i] = a[j]
    a[j] = t
  }
  return a
}

function pickPhrases(phrases: { yi: string; han: string }[] | undefined): { yi: string; han: string } | null {
  if (!phrases || phrases.length === 0) return null
  return shuffle(phrases)[0] ?? null
}

let sessionWords: number[] = []

Page({
  data: {
    statusBarHeight: 20,
    mode: 'learn' as 'learn' | 'review',
    pos: 0,
    total: 0,
    progress: '1 / 10',
    percent: 0,
    bars: [] as boolean[],
    card: { g: '', initial: '', final: '', radical: '', strokes: '', phrases: null, tone: '', audioUrl: '' } as CardData,
    revealed: false,
    prevDisabled: true,
    nextText: '下一个',
    encourage: '',
    mascot: '',
    empty: false,
  },
  onLoad(options: Record<string, string | undefined>) {
    const mode = options.mode === 'review' ? 'review' : 'learn'
    this.setData({ statusBarHeight: getStatusBarHeight(), mode })
    this.initSession()
    // getAudioList('ꀆ')
  },
  initSession() {
    const p = loadProgress()
    if (this.data.mode === 'learn') {
      const start = p.nextWordIndex
      const remaining = Math.max(0, TOTAL_WORDS - start)
      const total = Math.min(10, remaining)
      if (total === 0) {
        wx.switchTab({ url: '/pages/index/index' })
        return
      }
      const words: number[] = []
      for (let i = 0; i < total; i++) words.push(start + i)
      sessionWords = words
      this.setData({
        total,
        encourage: '慢慢来，\n记住一个就是进步',
        mascot: 'https://bee-reg-ab.imagency.cn/mr/6209/26/c8d683c8a4ce8ab57710e69c4cde3072.png',
      })
    } else {
      const learned = Object.keys(p.learnedWords)
        .map(Number)
        .filter(i => i >= 0 && i < TOTAL_WORDS)
      if (learned.length === 0) {
        this.setData({
          total: 0,
          empty: true,
          encourage: '先认识第一个字',
          mascot: 'https://bee-reg-ab.imagency.cn/mr/6209/26/f3aae776781130467ebdb59e37032ceb.png',
        })
        return
      }
      const picked = shuffle(learned).slice(0, 10)
      sessionWords = picked
      this.setData({
        total: picked.length,
        encourage: '先看字形，\n想一想它的读音',
        mascot: 'https://bee-reg-ab.imagency.cn/mr/6209/26/f3aae776781130467ebdb59e37032ceb.png',
      })
    }
    this.showCard(0)
  },
  showCard(pos: number) {
    const wordIndex = sessionWords[pos]
    const w = WORDS[wordIndex]
    const total = this.data.total
    const bars: boolean[] = []
    for (let i = 0; i < total; i++) bars.push(i <= pos)

    const isLast = pos === total - 1
    let nextText: string
    if (this.data.mode === 'learn') {
      if (wordIndex === TOTAL_WORDS - 1) nextText = '完成全部识字'
      else if (isLast) nextText = '完成学习'
      else nextText = '下一个'
    } else {
      nextText = isLast ? '完成回顾' : '下一个'
    }

    this.setData({
      pos,
      revealed: false,
      prevDisabled: pos === 0,
      nextText,
      progress: `${pos + 1} / ${total}`,
      percent: Math.round(((pos + 1) / total) * 100),
      bars,
      card: {
        g: w.g,
        initial: w.initial,
        final: w.final,
        radical: displayText(w.radical),
        strokes: displayText(w.strokes),
        phrases: pickPhrases(w.phrases),
        tone: w.tone,
        audioUrl: w.audioUrl,
      },
    })

    // 顺序识字：首次进入新字卡即记为已学习（重复查看不重复计数）
    if (this.data.mode === 'learn') {
      markWordLearned(wordIndex)
    }

    // 卡片切换反馈（遵循声音/振动设置）
    playFeedback()
  },
  onPrev() {
    if (this.data.pos === 0) return
    this.showCard(this.data.pos - 1)
  },
  onNext() {
    if (this.data.pos === this.data.total - 1) {
      if (this.data.mode === 'review') {
        recordReview(this.data.total)
        wx.navigateTo({ url: '/pages/complete/complete?mode=review&count=' + this.data.total })
      } else {
        wx.navigateTo({ url: '/pages/complete/complete?mode=learn' })
      }
      return
    }
    this.showCard(this.data.pos + 1)
  },
  onCardTap() {
    if (this.data.mode === 'review' && !this.data.revealed) {
      this.setData({ revealed: true })
      // 资料揭晓反馈（遵循声音/振动设置）
      playFeedback()
    }
  },
  onPlayAudio() {
    const url = this.data.card.audioUrl
    if (!url) return
    playFeedback()
    try {
      playUrl(url)
    } catch (e) {
      wx.showToast({ title: '音频播放失败，请检查网络', icon: 'none' })
    }
  },
  onPlayPhraseAudio() {
    const yi = this.data.card.phrases && this.data.card.phrases.yi
    if (!yi) return
    playFeedback()
    const urls: string[] = []
    for (const c of Array.from(yi)) {
      const u = wordAudioMap[c]
      if (u) urls.push(u)
    }
    if (urls.length === 0) return
    if (urls.length === 1) {
      try {
        playUrl(urls[0])
      } catch (e) {
        wx.showToast({ title: '音频播放失败，请检查网络', icon: 'none' })
      }
      return
    }
    playJoinedAudio(yi, urls)
  },
  onRefreshPhrase() {
    const w = WORDS[sessionWords[this.data.pos]]
    if (!w.phrases || w.phrases.length === 0) return
    const current = this.data.card.phrases
    const pool = w.phrases.filter(p => p.yi !== (current && current.yi))
    const next = pickPhrases(pool.length > 0 ? pool : w.phrases)
    if (!next) return
    this.setData({ 'card.phrases': next })
    playFeedback()
  },
  onBack() {
    const pages = getCurrentPages()
    if (pages.length > 1) wx.navigateBack()
    else wx.switchTab({ url: '/pages/index/index' })
  },
  goFirstLearn() {
    wx.switchTab({ url: '/pages/index/index' })
  },
})

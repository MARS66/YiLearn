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
        mascot: '/assets/mascot/mascot-reading.png',
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
          mascot: '/assets/mascot/mascot-peek-curious.png',
        })
        return
      }
      const picked = shuffle(learned).slice(0, 10)
      sessionWords = picked
      this.setData({
        total: picked.length,
        encourage: '先看字形，\n想一想它的读音',
        mascot: '/assets/mascot/mascot-peek-curious.png',
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
    try {
      if (!wordAudioCtx) {
        wordAudioCtx = wx.createInnerAudioContext()
        wordAudioCtx.obeyMuteSwitch = false
      }
      wordAudioCtx.stop()
      wordAudioCtx.src = url
      wordAudioCtx.play()
    } catch (e) {
      /* 播放失败时忽略 */
    }
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

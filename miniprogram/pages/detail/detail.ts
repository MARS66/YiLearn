import { WORDS, TOTAL_WORDS, displayText } from '../../data/words'
import { playFeedback } from '../../utils/feedback'
import { playWordAudio, playPhraseAudio } from '../../utils/audio'

interface CardData {
  g: string
  initial: string
  final: string
  radical: string
  strokes: string
  phrases: { yi: string; han: string }[]
  tone: string
  audioUrl: string
}

Page({
  data: {
    card: { g: '', initial: '', final: '', radical: '', strokes: '', phrases: [], tone: '', audioUrl: '' } as CardData,
    seqText: '',
  },
  onLoad(options: Record<string, string | undefined>) {
    const index = Number(options.index)
    const w = WORDS[index]
    if (!w) {
      wx.showToast({ title: '未找到该文字', icon: 'none' })
      setTimeout(() => wx.navigateBack(), 600)
      return
    }
    this.setData({
      card: {
        g: w.g,
        initial: w.initial,
        final: w.final,
        radical: displayText(w.radical),
        strokes: displayText(w.strokes),
        phrases: w.phrases ?? [],
        tone: w.tone,
        audioUrl: w.audioUrl,
      },
      seqText: `${index + 1} / ${TOTAL_WORDS}`,
    })
  },
  onPlayAudio() {
    const url = this.data.card.audioUrl
    if (!url) return
    playFeedback()
    try {
      playWordAudio(url)
    } catch (e) {
      wx.showToast({ title: '音频播放失败，请检查网络', icon: 'none' })
    }
  },
  onPlayPhraseAudio(e: { currentTarget: { dataset: { yi?: string } } }) {
    const yi = e.currentTarget.dataset.yi
    if (!yi) return
    playFeedback()
    try {
      playPhraseAudio(yi)
    } catch (err) {
      wx.showToast({ title: '音频播放失败，请检查网络', icon: 'none' })
    }
  },
  onBack() {
    const pages = getCurrentPages()
    if (pages.length > 1) {
      wx.navigateBack()
    } else {
      wx.switchTab({ url: '/pages/dictionary/dictionary' })
    }
  },
})
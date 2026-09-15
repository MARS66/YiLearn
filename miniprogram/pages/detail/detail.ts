import { WORDS, TOTAL_WORDS, displayText } from '../../data/words'
import { loadProgress } from '../../utils/progress'
import { getStatusBarHeight } from '../../utils/system'

Page({
  data: {
    statusBarHeight: 20,
    learned: false,
    g: '',
    initial: '',
    final: '',
    py: '',
    finalText: '',
    radical: '',
    strokes: '',
    remain: '',
    group: '',
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
    const p = loadProgress()
    this.setData({
      statusBarHeight: getStatusBarHeight(),
      learned: !!p.learnedWords[String(index)],
      g: w.g,
      initial: w.initial,
      final: w.final,
      py: w.py,
      finalText: displayText(w.final),
      radical: displayText(w.radical),
      strokes: displayText(w.strokes),
      remain: displayText(w.remain),
      group: displayText(w.group),
      seqText: `${index + 1} / ${TOTAL_WORDS}`,
    })
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
import { loadProgress, getTotalLearned, clearProgress } from '../../utils/progress'
import { getStatusBarHeight } from '../../utils/system'

Page({
  data: {
    statusBarHeight: 20,
    learnedCount: 0,
    studyDays: 0,
    reviewCount: 0,
    modalVisible: false,
  },
  onLoad() {
    this.setData({ statusBarHeight: getStatusBarHeight() })
  },
  onShow() {
    this.refresh()
  },
  refresh() {
    const p = loadProgress()
    this.setData({
      learnedCount: getTotalLearned(p),
      studyDays: p.studyDates.length,
      reviewCount: p.totalReviewCount,
    })
  },
  onBack() {
    const pages = getCurrentPages()
    if (pages.length > 1) wx.navigateBack()
    else wx.switchTab({ url: '/pages/profile/profile' })
  },
  openClearModal() {
    this.setData({ modalVisible: true })
  },
  closeModal() {
    this.setData({ modalVisible: false })
  },
  noop() {},
  confirmClear() {
    clearProgress()
    this.setData({ modalVisible: false })
    this.refresh()
    wx.showToast({ title: '本地学习记录已清除', icon: 'none' })
  },
})
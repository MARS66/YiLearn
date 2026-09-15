import {
  loadProgress,
  getTotalLearned,
  getTodayLearnCount,
  getCurrentStreak,
  getWeekCheckIn,
} from '../../utils/progress'
import { getStatusBarHeight } from '../../utils/system'

interface WeekItem {
  label: string
  done: boolean
}

Page({
  data: {
    statusBarHeight: 20,
    mode: 'learn' as 'learn' | 'review',
    reviewCount: '0',
    newCount: '0',
    streak: 0,
    totalLearned: 0,
    todayLearned: 0,
    week: [] as WeekItem[],
    dateText: '',
  },
  onLoad(options: Record<string, string | undefined>) {
    const mode = options.mode === 'review' ? 'review' : 'learn'
    const p = loadProgress()
    const todayLearned = getTodayLearnCount(p)

    this.setData({
      statusBarHeight: getStatusBarHeight(),
      mode,
      reviewCount: options.count ? String(Number(options.count)) : '0',
      newCount: String(todayLearned),
      streak: getCurrentStreak(p),
      totalLearned: getTotalLearned(p),
      todayLearned,
      week: getWeekCheckIn(p) as WeekItem[],
      dateText: this.formatNow(),
    })
  },
  formatNow(): string {
    const d = new Date()
    const pad = (n: number): string => (n < 10 ? '0' + n : '' + n)
    return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
  },
  onBack() {
    const pages = getCurrentPages()
    if (pages.length > 1) wx.navigateBack()
    else wx.switchTab({ url: '/pages/index/index' })
  },
  goHome() {
    wx.switchTab({ url: '/pages/index/index' })
  },
  goReview() {
    wx.navigateTo({ url: '/pages/learn/learn?mode=review' })
  },
  continueLearn() {
    wx.navigateTo({ url: '/pages/learn/learn?mode=learn' })
  },
  savePoster() {
    wx.showToast({ title: '海报已保存到相册', icon: 'none' })
  },
  sharePoster() {
    wx.showToast({ title: '已打开微信分享', icon: 'none' })
  },
  onShareAppMessage() {
    const p = loadProgress()
    return {
      title: `我在彝学今天认识了 ${getTodayLearnCount(p)} 个彝文字，一起来识字吧`,
      path: '/pages/index/index',
    }
  },
})
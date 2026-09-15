import { TOTAL_WORDS } from '../../data/words'
import {
  loadProgress,
  clearProgress,
  getTotalLearned,
  getTodayLearnCount,
  getCurrentStreak,
  getWeekCheckIn,
  setSound,
  setVibration,
  computeLiteracyAchievements,
  computeStreakAchievements,
} from '../../utils/progress'
import { getStatusBarHeight } from '../../utils/system'

interface WeekItem {
  label: string
  done: boolean
}

interface BadgePreview {
  name: string
  unlocked: boolean
  image: string
}

const HALF_WORDS = 582
const DAILY_GOAL = 10

Page({
  data: {
    statusBarHeight: 20,
    totalLearned: 0,
    totalWords: TOTAL_WORDS,
    percent: 0,
    halfRemaining: HALF_WORDS,
    streak: 0,
    longestStreak: 0,
    todayLearned: 0,
    reviewCount: 0,
    studyDays: 0,
    bars: [] as boolean[],
    week: [] as WeekItem[],
    sound: true,
    vibration: true,
    badges: [] as BadgePreview[],
    modalVisible: false,
  },
  onLoad() {
    this.setData({ statusBarHeight: getStatusBarHeight() })
  },
  onShow() {
    this.refresh()
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 2 })
    }
  },
  refresh() {
    const p = loadProgress()
    const totalLearned = getTotalLearned(p)
    const todayLearned = getTodayLearnCount(p)
    const percent = Math.min(100, Math.round((todayLearned / DAILY_GOAL) * 100))
    const bars: boolean[] = []
    for (let i = 0; i < DAILY_GOAL; i++) bars.push(i < todayLearned)

    const latestLiteracy = [...computeLiteracyAchievements(p)].reverse().find(a => a.unlocked)
    const latestStreak = [...computeStreakAchievements(p)].reverse().find(a => a.unlocked)
    this.setData({
      totalLearned,
      percent,
      halfRemaining: Math.max(0, HALF_WORDS - totalLearned),
      streak: getCurrentStreak(p),
      longestStreak: p.longestStreak,
      todayLearned,
      reviewCount: p.totalReviewCount,
      studyDays: p.studyDates.length,
      bars,
      week: getWeekCheckIn(p) as WeekItem[],
      sound: p.settings.sound,
      vibration: p.settings.vibration,
      badges: [
        { name: latestLiteracy ? latestLiteracy.name : '初识彝文', unlocked: !!latestLiteracy, image: latestLiteracy ? latestLiteracy.image : '/assets/a1.png' },
        { name: latestStreak ? latestStreak.name : '连续学习 3 天', unlocked: !!latestStreak, image: latestStreak ? latestStreak.image : '/assets/3.png' },
      ],
    })
  },
  goAchievements() {
    wx.navigateTo({ url: '/pages/achievements/achievements' })
  },
  goStorage() {
    wx.navigateTo({ url: '/pages/storage-info/storage-info' })
  },
  toggleSound() {
    const next = !this.data.sound
    setSound(next)
    this.setData({ sound: next })
  },
  toggleVibration() {
    const next = !this.data.vibration
    setVibration(next)
    this.setData({ vibration: next })
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

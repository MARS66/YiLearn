import { TOTAL_WORDS } from '../../data/words'
import {
  loadProgress,
  clearProgress,
  getTotalLearned,
  getTodayLearnCount,
  getCurrentStreak,
  getDailyGoal,
  setDailyGoal,
  getWeekCheckIn,
  setSound,
  setVibration,
  computeLiteracyAchievements,
  computeStreakAchievements,
} from '../../utils/progress'
import { getStatusBarHeight } from '../../utils/system'
import { playFeedback } from '../../utils/feedback'

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
/** 每日目标快速选项（可在弹窗中自定义任意字数） */
const PLAN_PRESETS = [5, 10, 20, 30, 50]

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
    dailyGoal: 10,
    planPresets: PLAN_PRESETS,
    planModalVisible: false,
    planSelected: 1,
    planUseCustom: false,
    planCustomValue: '',
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
    const dailyGoal = getDailyGoal(p)
    const percent = Math.min(100, Math.round((todayLearned / dailyGoal) * 100))
    const bars: boolean[] = []
    for (let i = 0; i < dailyGoal; i++) bars.push(i < todayLearned)

    const latestLiteracy = [...computeLiteracyAchievements(p)].reverse().find(a => a.unlocked)
    const latestStreak = [...computeStreakAchievements(p)].reverse().find(a => a.unlocked)
    this.setData({
      totalLearned,
      percent,
      halfRemaining: Math.max(0, HALF_WORDS - totalLearned),
      dailyGoal,
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
        { name: latestStreak ? latestStreak.name : '连续学习 3 天', unlocked: !!latestStreak, image: latestStreak ? latestStreak.image : 'https://bee-reg-ab.imagency.cn/mr/6209/26/1282dc1111b4e32a9aa3d47ad2ef2432.png' },
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
  /* ------------------- 学习计划 ------------------- */
  openPlanModal() {
    const goal = this.data.dailyGoal
    const idx = PLAN_PRESETS.indexOf(goal)
    this.setData({
      planModalVisible: true,
      planSelected: idx >= 0 ? idx : 1,
      planUseCustom: idx < 0,
      planCustomValue: idx < 0 ? String(goal) : '',
    })
  },
  closePlanModal() {
    this.setData({ planModalVisible: false })
  },
  onSelectPlanPreset(e: WechatMiniprogram.TouchEvent) {
    const idx = Number(e.currentTarget.dataset.index)
    playFeedback()
    this.setData({ planSelected: idx, planUseCustom: false })
  },
  onPlanCustomInput(e: WechatMiniprogram.Input) {
    this.setData({ planCustomValue: e.detail.value, planUseCustom: true })
  },
  confirmPlan() {
    let goal: number
    if (this.data.planUseCustom) {
      goal = parseInt(this.data.planCustomValue, 10)
      if (!goal || goal <= 0) {
        wx.showToast({ title: '请输入有效的学习字数', icon: 'none' })
        return
      }
    } else {
      goal = PLAN_PRESETS[this.data.planSelected]
    }
    setDailyGoal(goal)
    this.setData({ planModalVisible: false })
    this.refresh()
    wx.showToast({ title: `每日计划已更新为 ${goal} 字`, icon: 'none' })
  },
})

import { WORDS, TOTAL_WORDS } from '../../data/words'
import {
  loadProgress,
  getTotalLearned,
  getTodayLearnCount,
  getCurrentStreak,
  computeStreakAchievements,
} from '../../utils/progress'
import { currentWeekKeys } from '../../utils/date'
import { getStatusBarHeight } from '../../utils/system'

interface WeekItem {
  label: string
  done: boolean
  dayNum: string
}

const DAILY_GOAL = 10

Page({
  data: {
    statusBarHeight: 20,
    streak: 0,
    dateText: '',
    percent: 0,
    todayLearned: 0,
    totalLearned: 0,
    totalWords: TOTAL_WORDS,
    allLearned: false,
    buttonText: '开始学习',
    latestStreak: { name: '', unlocked: false, image: '' },
    nextWord: { g: '', initial: '', final: '' },
    todayBars: [] as boolean[],
    week: [] as WeekItem[],
  },
  onLoad() {
    const now = new Date()
    const p = loadProgress()
    const latestStreak = [...computeStreakAchievements(p)].reverse().find(a => a.unlocked)
    this.setData({
      statusBarHeight: getStatusBarHeight(),
      latestStreak: { 
          name: latestStreak ? latestStreak.name : '连续学习 3 天',
          unlocked: !!latestStreak, 
          image: latestStreak ? latestStreak.image : '/assets/3.png'
        },
      dateText: `${now.getMonth() + 1}月${now.getDate()}日`,
    })
  },
  onShow() {
    this.refresh()
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 0 })
    }
  },
  refresh() {
    const p = loadProgress()
    const totalLearned = getTotalLearned(p)
    const todayLearned = getTodayLearnCount(p)
    const idx = p.nextWordIndex
    const allLearned = idx >= TOTAL_WORDS
    const nextWord = allLearned
      ? { g: '', initial: '', final: '' }
      : { g: WORDS[idx].g, initial: WORDS[idx].initial, final: WORDS[idx].final }

    const bars: boolean[] = []
    for (let i = 0; i < DAILY_GOAL; i++) bars.push(i < todayLearned)

    const percent = Math.min(100, Math.round((todayLearned / DAILY_GOAL) * 100))

    let buttonText: string
    if (allLearned) buttonText = '开始回顾'
    else if (totalLearned === 0) buttonText = '开始学习'
    else buttonText = '继续学习'

    // 本周打卡：未打卡日显示日期号（还原原型 week()）
    const keys = currentWeekKeys()
    const set: Record<string, boolean> = {}
    p.studyDates.forEach(k => (set[k] = true))
    const labels = ['一', '二', '三', '四', '五', '六', '日']
    const week: WeekItem[] = keys.map((k, i) => ({
      label: labels[i],
      done: !!set[k],
      dayNum: String(Number(k.slice(8, 10))),
    }))

    this.setData({
      streak: getCurrentStreak(p),
      percent,
      todayLearned,
      totalLearned,
      allLearned,
      nextWord,
      todayBars: bars,
      week,
      buttonText,
    })
  },
  goLearn() {
    const url = this.data.allLearned
      ? '/pages/learn/learn?mode=review'
      : '/pages/learn/learn?mode=learn'
    wx.navigateTo({ url })
  },
  goReview() {
    wx.navigateTo({ url: '/pages/learn/learn?mode=review' })
  },
  goAchievements() {
    wx.navigateTo({ url: '/pages/achievements/achievements' })
  },
})

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

function timeGreeting(now: Date): string {
  const h = now.getHours()
  if (h >= 5 && h < 11) return '早上好'
  if (h >= 11 && h < 13) return '中午好'
  if (h >= 13 && h < 18) return '下午好'
  return '晚上好'
}

const ENCOURAGEMENTS = [
  '今天也来学一点',
  '每天进步一点点，积少成多',
  '坚持就是胜利，继续加油',
  '小步快跑，慢慢变强大',
  '又见面啦，今天也元气满满',
  '每一个字都算数，继续冲',
  '学无止境，今天的你也超棒',
  '别急，稳稳地往前学',
]

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
    greeting: '',
    encouragement: '',
    latestStreak: { name: '', unlocked: false, image: '' },
    nextWord: { g: '', initial: '', final: '', tone: '' },
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
          image: latestStreak ? latestStreak.image : 'https://bee-reg-ab.imagency.cn/mr/6209/26/1282dc1111b4e32a9aa3d47ad2ef2432.png'
        },
      dateText: `${now.getMonth() + 1}月${now.getDate()}日`,
        greeting: `${timeGreeting(now)}，`,
        encouragement: ENCOURAGEMENTS[Math.floor(Math.random() * ENCOURAGEMENTS.length)],
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
      ? { g: '', initial: '', final: '', tone: '' }
      : { g: WORDS[idx].g, initial: WORDS[idx].initial, final: WORDS[idx].final, tone: WORDS[idx].tone }

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

import { loadProgress, computeLiteracyAchievements, computeStreakAchievements } from '../../utils/progress'
import { getStatusBarHeight } from '../../utils/system'

interface AchievementItem {
  id: string
  name: string
  desc: string
  image: string
  unlocked: boolean
}

Page({
  data: {
    statusBarHeight: 20,
    literacyAchievements: [] as AchievementItem[],
    streakAchievements: [] as AchievementItem[],
  },
  onLoad() {
    const p = loadProgress()
    this.setData({
      statusBarHeight: getStatusBarHeight(),
      literacyAchievements: computeLiteracyAchievements(p) as AchievementItem[],
      streakAchievements: computeStreakAchievements(p) as AchievementItem[],
    })
  },
  onBack() {
    const pages = getCurrentPages()
    if (pages.length > 1) wx.navigateBack()
    else wx.switchTab({ url: '/pages/profile/profile' })
  },
})
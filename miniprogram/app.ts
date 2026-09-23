// app.ts
import { loadProgress, saveProgress, isOnboarded } from './utils/progress'

App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 首次启动时初始化本地学习进度（单一版本化 Storage 根对象）
    const p = loadProgress()

    // 未完成首次引导设置时：
    // - 已有学习记录的老用户（含从旧版本升级）自动标记已引导，避免打断
    // - 全新用户进入引导页，通过简问答设置每日计划学习字数
    if (!isOnboarded(p)) {
      const hasLearned = Object.keys(p.learnedWords || {}).length > 0
      if (hasLearned) {
        p.plan.onboarded = true
        saveProgress(p)
      } else {
        wx.reLaunch({ url: '/pages/onboard/onboard' })
      }
    }
  },
})
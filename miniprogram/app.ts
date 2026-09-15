// app.ts
import { loadProgress } from './utils/progress'

App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 首次启动时初始化本地学习进度（单一版本化 Storage 根对象）
    loadProgress()
  },
})
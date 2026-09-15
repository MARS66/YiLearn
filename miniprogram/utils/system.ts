/**
 * 系统信息：状态栏高度（custom navigation 下顶部占位需要）。
 */
let cached = 0

export function getStatusBarHeight(): number {
  if (cached) return cached
  try {
    const w: any = wx
    const info: any = w.getWindowInfo ? w.getWindowInfo() : wx.getSystemInfoSync()
    cached = info.statusBarHeight || 20
  } catch (e) {
    cached = 20
  }
  return cached
}
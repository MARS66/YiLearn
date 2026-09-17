/**
 * 系统信息：状态栏高度、胶囊按钮位置、导航栏总高与底部安全区。
 * 供自定义头部（navigationStyle: custom）布局使用。
 *
 * 全部读取均带缓存与失败兜底：任一 API 在低版本或部分平台不可用时
 * 返回合理默认值，不影响页面正常渲染。
 */

let statusBarHeightCached = 0
let menuButtonCached: MenuButtonRect | null | undefined // undefined=未获取, null=获取失败
let safeAreaBottomCached = 0
let screenInfoCached: { screenWidth: number; screenHeight: number } | null = null

export interface MenuButtonRect {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
}

export interface CustomHeaderInfo {
  /** 状态栏高度（px） */
  statusBarHeight: number
  /** 自定义导航栏总高度（px）= 状态栏 + 胶囊按钮区域，头部占位用 */
  navBarHeight: number
  /** 导航内容区（标题/返回按钮）顶部坐标（px），即状态栏底部 */
  navBarContentTop: number
  /** 胶囊按钮矩形；不可用时为 null */
  menuButton: MenuButtonRect | null
  /** 底部安全区高度（px），如 iPhone 底部横条，无则为 0 */
  safeAreaBottom: number
  /** 屏幕宽度（px） */
  screenWidth: number
  /** 屏幕高度（px） */
  screenHeight: number
}

function getWindowInfo(): any {
  const w: any = wx
  try {
    return w.getWindowInfo ? w.getWindowInfo() : wx.getSystemInfoSync()
  } catch (e) {
    return null
  }
}

/** 状态栏高度（px），失败默认 20 */
export function getStatusBarHeight(): number {
  if (statusBarHeightCached) return statusBarHeightCached
  const info = getWindowInfo()
  statusBarHeightCached = (info && info.statusBarHeight) || 20
  return statusBarHeightCached
}

/** 胶囊按钮（右上角菜单）位置；获取失败返回 null */
export function getMenuButtonRect(): MenuButtonRect | null {
  if (menuButtonCached !== undefined) return menuButtonCached
  try {
    const rect = wx.getMenuButtonBoundingClientRect()
    menuButtonCached = rect && typeof rect === 'object' ? rect : null
  } catch (e) {
    menuButtonCached = null
  }
  return menuButtonCached
}

/**
 * 自定义导航栏总高度（px）：
 * 从屏幕顶部到胶囊按钮底部的距离，即
 * 状态栏高度 + 胶囊上间距 * 2 + 胶囊高度。
 * 胶囊不可用时按常见值兜底（状态栏 + 44）。
 */
export function getNavBarHeight(): number {
  const statusBarHeight = getStatusBarHeight()
  const menu = getMenuButtonRect()
  if (!menu) return statusBarHeight + 44
  return (menu.top - statusBarHeight) * 2 + menu.height
}

/** 底部安全区高度（px）：屏幕高度 - 安全区底部；无安全区时为 0 */
export function getSafeAreaBottom(): number {
  if (safeAreaBottomCached) return safeAreaBottomCached
  const info = getWindowInfo()
  if (info && info.safeArea && info.screenHeight > info.safeArea.bottom) {
    safeAreaBottomCached = info.screenHeight - info.safeArea.bottom
  } else {
    safeAreaBottomCached = 0
  }
  return safeAreaBottomCached
}

/** 屏幕尺寸（px），失败时使用常规 375 x 667 兜底 */
export function getScreenInfo(): { screenWidth: number; screenHeight: number } {
  if (screenInfoCached) return screenInfoCached
  const info = getWindowInfo()
  screenInfoCached = {
    screenWidth: (info && info.screenWidth) || 375,
    screenHeight: (info && info.screenHeight) || 667,
  }
  return screenInfoCached
}

/** 一次获取自定义头部所需的全部参数 */
export function getHeaderInfo(): CustomHeaderInfo {
  const statusBarHeight = getStatusBarHeight()
  const menuButton = getMenuButtonRect()
  const navBarHeight = menuButton
    ? (menuButton.top - statusBarHeight) * 2 + menuButton.height
    : statusBarHeight + 44
  const screen = getScreenInfo()
  return {
    statusBarHeight,
    navBarHeight,
    navBarContentTop: statusBarHeight,
    menuButton,
    safeAreaBottom: getSafeAreaBottom(),
    screenWidth: screen.screenWidth,
    screenHeight: screen.screenHeight,
  }
}

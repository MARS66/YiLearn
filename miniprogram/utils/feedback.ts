/**
 * 交互反馈：根据用户设置播放提示音和触发轻振动（PRD 8「声音、振动设置」）。
 * 声音使用本地极短提示音（离线可用），振动使用 wx.vibrateShort。
 * 任一能力不可用或设置关闭时静默跳过，不影响正常浏览。
 */
import { loadProgress } from './progress'

let audioCtx: WechatMiniprogram.InnerAudioContext | null = null

export function playFeedback(): void {
  const p = loadProgress()

  if (p.settings.vibration) {
    try {
      wx.vibrateShort({ type: 'light' })
    } catch (e) {
      /* 低版本或不支持时忽略 */
    }
  }

  if (p.settings.sound) {
    try {
      if (!audioCtx) {
        audioCtx = wx.createInnerAudioContext()
        audioCtx.src = '/assets/sound/tap.wav'
        audioCtx.obeyMuteSwitch = false
      }
      audioCtx.stop()
      audioCtx.seek(0)
      audioCtx.play()
    } catch (e) {
      /* 播放失败时忽略 */
    }
  }
}

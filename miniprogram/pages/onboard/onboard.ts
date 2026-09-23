// 首次进入引导页：通过简问答设置每日计划学习字数
import { completeOnboarding } from '../../utils/progress'
import { getStatusBarHeight } from '../../utils/system'
import { playFeedback } from '../../utils/feedback'

const PRESETS = [5, 10, 20, 30, 50]

Page({
  data: {
    statusBarHeight: 20,
    presets: PRESETS,
    selected: 1, // 默认选中 10 字
    useCustom: false,
    customValue: '',
  },
  onLoad() {
    this.setData({ statusBarHeight: getStatusBarHeight() })
  },
  onSelectPreset(e: WechatMiniprogram.TouchEvent) {
    const idx = Number(e.currentTarget.dataset.index)
    playFeedback()
    this.setData({ selected: idx, useCustom: false })
  },
  onCustomInput(e: WechatMiniprogram.Input) {
    this.setData({ customValue: e.detail.value, useCustom: true })
  },
  /** 确认计划：写入每日目标并标记已完成引导，随后进入首页 */
  confirm() {
    let goal: number
    if (this.data.useCustom) {
      goal = parseInt(this.data.customValue, 10)
      if (!goal || goal <= 0) {
        wx.showToast({ title: '请输入有效的学习字数', icon: 'none' })
        return
      }
    } else {
      goal = PRESETS[this.data.selected]
    }
    completeOnboarding(goal)
    wx.reLaunch({ url: '/pages/index/index' })
  },
})

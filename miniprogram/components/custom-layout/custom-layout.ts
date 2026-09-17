// components/custom-layout/custom-layout.ts
import { getHeaderInfo } from '../../utils/system'
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    showHeader: {
      type: Boolean,
      value: true
    },
    title: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    headerInfo: getHeaderInfo()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack() {
      const pages = getCurrentPages()
      if (pages.length > 1) {
        wx.navigateBack()
      } else {
        wx.switchTab({ url: '/pages/index/index' })
      }
    }
  }
})
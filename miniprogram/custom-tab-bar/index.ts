Component({
  data: {
    selected: 0,
    list: [
      { pagePath: '/pages/index/index', text: '识字', icon: 'home' },
      { pagePath: '/pages/dictionary/dictionary', text: '字典', icon: 'dict' },
      { pagePath: '/pages/profile/profile', text: '我的', icon: 'profile' },
    ],
  },
  lifetimes: {
    attached() {
      const pages = getCurrentPages()
      const route = pages.length ? pages[pages.length - 1].route : ''
      this.setSelectedByRoute(route)
    },
  },
  methods: {
    setSelectedByRoute(route: string) {
      const list = this.data.list
      for (let i = 0; i < list.length; i++) {
        if (route === list[i].pagePath.replace(/^\//, '')) {
          this.setData({ selected: i })
          break
        }
      }
    },
    onTabTap(e: WechatMiniprogram.TouchEvent) {
      const { index, path } = e.currentTarget.dataset
      if (index === this.data.selected) return
      wx.switchTab({ url: path })
    },
  },
})
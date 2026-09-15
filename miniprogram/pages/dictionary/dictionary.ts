import { WORDS } from '../../data/words'
import { loadProgress } from '../../utils/progress'
import { getStatusBarHeight } from '../../utils/system'

interface GlyphItem {
  index: number
  py: string
  g: string
  learned: boolean
}

interface Group {
  letter: string
  items: GlyphItem[]
}

// 凉山规范彝文：44 声母（含零声母）、10 韵母，与 words.ts 拼音拆分保持一致
const INITIALS = [
  '', 'b', 'p', 'bb', 'nb', 'hm', 'm', 'f', 'v',
  'd', 't', 'dd', 'nd', 'hn', 'n', 'hl', 'l',
  'g', 'k', 'gg', 'mg', 'hx', 'ng', 'h', 'w',
  'z', 'c', 'zz', 'nz', 's', 'ss',
  'zh', 'ch', 'rr', 'nr', 'sh', 'r',
  'j', 'q', 'jj', 'nj', 'ny', 'x', 'y',
]
const FINALS = ['i', 'ie', 'a', 'uo', 'o', 'e', 'u', 'ur', 'y', 'yr']
const TONE_CHARS = ['t', 'x', 'p']

const EMPTY_LABEL = '-'
const ZERO_INITIAL_LABEL = '无'

/** 从完整拼音拆出声母与基本韵母（韵母不含声调字母） */
function splitPinyin(py: string): { sheng: string; yun: string } {
  for (const ini of INITIALS) {
    if (!ini) continue
    if (!py.startsWith(ini)) continue
    const rest = py.slice(ini.length)
    const isFinal = (r: string) => FINALS.some(f => r === f || r === f + 't' || r === f + 'x' || r === f + 'p')
    if (isFinal(rest)) {
      const yun = TONE_CHARS.some(t => rest.endsWith(t)) ? rest.slice(0, -1) : rest
      return { sheng: ini, yun }
    }
  }
  // 零声母：整段为韵母（含声调），去掉声调字母即为基本韵母
  let rest = py
  if (TONE_CHARS.some(t => rest.endsWith(t))) rest = rest.slice(0, -1)
  return { sheng: '', yun: rest }
}

/** 按当前筛选 tab 返回某字所属的分组标签 */
function groupKeyOf(tab: string, py: string, radical: string, strokes: number): string {
  switch (tab) {
    case '声母': {
      const { sheng } = splitPinyin(py)
      return sheng || ZERO_INITIAL_LABEL
    }
    case '韵母':
      return splitPinyin(py).yun
    case '部首':
      return radical || EMPTY_LABEL
    case '笔画':
      return strokes > 0 ? String(strokes) : EMPTY_LABEL
    default:
      return py.charAt(0)
  }
}

Page({
  data: {
    statusBarHeight: 20,
    tabs: ['拼音', '声母', '韵母', '部首', '笔画'] as string[],
    activeTab: '拼音',
    indexOptions: [] as string[],
    activeIndex: '全部',
    query: '',
    groups: [] as Group[],
    empty: false,
  },
  onLoad() {
    this.setData({ statusBarHeight: getStatusBarHeight() })
  },
  onShow() {
    this.rebuild()
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 })
    }
  },
  buildOptions(tab: string): string[] {
    const keys: string[] = []
    const seen: Record<string, boolean> = {}
    WORDS.forEach(w => {
      const key = groupKeyOf(tab, w.py, w.radical, w.strokes)
      if (!seen[key]) {
        seen[key] = true
        keys.push(key)
      }
    })

    let list: string[]
    if (tab === '声母') {
      list = INITIALS.map(i => i || ZERO_INITIAL_LABEL).filter(k => seen[k])
    } else if (tab === '韵母') {
      list = FINALS.filter(f => seen[f])
    } else if (tab === '笔画') {
      list = keys.sort((a, b) => {
        if (a === EMPTY_LABEL) return 1
        if (b === EMPTY_LABEL) return -1
        return Number(a) - Number(b)
      })
    } else {
      list = keys
    }
    return ['全部'].concat(list)
  },
  rebuild() {
    const p = loadProgress()
    const learned = p.learnedWords
    const query = (this.data.query || '').trim()
    const tab = this.data.activeTab

    const indexOptions = this.buildOptions(tab)
    const activeIndex = indexOptions.indexOf(this.data.activeIndex) >= 0 ? this.data.activeIndex : '全部'

    const filtered = WORDS.filter(w => {
      const matchQuery = !query || w.g.indexOf(query) >= 0 || w.py.indexOf(query) >= 0
      const matchIndex = activeIndex === '全部' || groupKeyOf(tab, w.py, w.radical, w.strokes) === activeIndex
      return matchQuery && matchIndex
    })

    const groupMap: Record<string, GlyphItem[]> = {}
    for (let i = 0; i < WORDS.length; i++) {
      const w = WORDS[i]
      const key = groupKeyOf(tab, w.py, w.radical, w.strokes)
      if (activeIndex !== '全部' && key !== activeIndex) continue
      if (query && w.g.indexOf(query) < 0 && w.py.indexOf(query) < 0) continue
      if (!groupMap[key]) groupMap[key] = []
      groupMap[key].push({ index: i, py: w.py, g: w.g, learned: !!learned[String(i)] })
    }

    const groups = indexOptions
      .filter(opt => opt !== '全部')
      .map(letter => ({ letter, items: groupMap[letter] || [] }))
      .filter(g => g.items.length > 0)

    this.setData({
      indexOptions,
      activeIndex,
      groups,
      empty: filtered.length === 0,
    })
  },
  onSearchInput(e: WechatMiniprogram.Input) {
    this.setData({ query: e.detail.value })
    this.rebuild()
  },
  onTabTap(e: WechatMiniprogram.TouchEvent) {
    this.setData({ activeTab: e.currentTarget.dataset.tab, activeIndex: '全部' })
    this.rebuild()
  },
  onIndexTap(e: WechatMiniprogram.TouchEvent) {
    this.setData({ activeIndex: e.currentTarget.dataset.index })
    this.rebuild()
  },
  onWordTap(e: WechatMiniprogram.TouchEvent) {
    const index = e.currentTarget.dataset.index
    wx.navigateTo({ url: '/pages/detail/detail?index=' + index })
  },
  clearFilter() {
    this.setData({ query: '', activeIndex: '全部' })
    this.rebuild()
  },
})

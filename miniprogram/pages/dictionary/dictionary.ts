import { WORDS, TOTAL_WORDS, displayText } from '../../data/words'
import { YI_INITIALS,YI_FINALS,YI_RADICAL } from '../../data/yidict-pinyin'

interface Option {
  value: string
  label: string
  selected: boolean
}

interface ResultItem {
  index: number
  g: string
  py: string
  initial: string
  final: string
  radicalText: string
  strokesText: string
}
type CondField = 'initial' | 'final' | 'radical' | 'strokes'
function selectedSet(options: Option[]): Set<string> {
  return new Set(options.filter(o => o.selected).map(o => o.value))
}

Page({
  data: {
    totalWords: TOTAL_WORDS,
    exactQuery: '',
    initialOptions: YI_INITIALS.map(i => ({ value: i, label: i, selected: false })) as Option[],
    finalOptions: YI_FINALS.map(i => ({ value: i, label: i, selected: false })) as Option[],
    radicalOptions: YI_RADICAL.map(i => ({ value: i, label: i, selected: false })) as Option[],
    strokeOptions: [1,2,3,4,5,6,7,8].map(i => ({ value: i.toString(), label: i.toString()+"画", selected: false })) as Option[],
    resultList: [] as ResultItem[],
    hasCondition: false,
  },
  onLoad() {
    this.refresh()
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({ selected: 1 })
    }
  },
  /** 按精确查询 + 已选条件重新计算结果列表 */
  refresh() {
    const { exactQuery, initialOptions, finalOptions, radicalOptions, strokeOptions } = this.data
    const q = exactQuery.trim().toLowerCase()
    const selInitial = selectedSet(initialOptions)
    const selFinal = selectedSet(finalOptions)
    const selRadical = selectedSet(radicalOptions)
    const selStroke = selectedSet(strokeOptions)
    const hasCondition =
      q.length > 0 || selInitial.size > 0 || selFinal.size > 0 || selRadical.size > 0 || selStroke.size > 0

    const list: ResultItem[] = []
    WORDS.forEach((w, i) => {
      if (q && w.g !== q && w.py !== q) return
      if (selInitial.size > 0 && !selInitial.has(String(w.initial))) return
      if (selFinal.size > 0 && !selFinal.has(String(w.final))) return
      if (selRadical.size > 0 && !selRadical.has(String(w.radical))) return
      if (selStroke.size > 0 && !selStroke.has(String(w.strokes))) return
      list.push({
        index: i,
        g: w.g,
        py: w.py,
        initial: w.initial,
        final: w.final,
        radicalText: displayText(w.radical),
        strokesText: displayText(w.strokes),
      })
    })

    this.setData({ resultList: list, hasCondition })
  },
  onExactInput(e: { detail: { value: string } }) {
    this.setData({ exactQuery: e.detail.value })
  },
  onExactSearch(e: { detail: { value: string } }) {
    this.setData({ exactQuery: e.detail.value })
    this.refresh()
  },
  selectOption(options: Option[], value: string): Option[] {
    return options.map(o => ({ ...o, selected: o.value === value ? !o.selected : false }))
  },
  onChipTap(e: { currentTarget: { dataset: { cat: string; value: string } } }) {
    const cat = e.currentTarget.dataset.cat as CondField
    const value = String(e.currentTarget.dataset.value)
    if (cat === 'initial') {
      this.setData({ initialOptions: this.selectOption(this.data.initialOptions, value) })
    } else if (cat === 'final') {
      this.setData({ finalOptions: this.selectOption(this.data.finalOptions, value) })
    } else if (cat === 'radical') {
      this.setData({ radicalOptions: this.selectOption(this.data.radicalOptions, value) })
    } else if (cat === 'strokes') {
      this.setData({ strokeOptions: this.selectOption(this.data.strokeOptions, value) })
    }
    this.refresh()
  },
  resetConditions() {
    const clear = (options: Option[]) => options.map(o => ({ ...o, selected: false }))
    this.setData({
      exactQuery: '',
      initialOptions: clear(this.data.initialOptions),
      finalOptions: clear(this.data.finalOptions),
      radicalOptions: clear(this.data.radicalOptions),
      strokeOptions: clear(this.data.strokeOptions),
    })
    this.refresh()
  },
  goDetail(e: { currentTarget: { dataset: { index: number } } }) {
    wx.navigateTo({ url: `/pages/detail/detail?index=${e.currentTarget.dataset.index}` })
  },
})

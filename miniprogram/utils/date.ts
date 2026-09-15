/**
 * 日期工具：用于有效学习日、连续学习与本周打卡统计。
 * 统一使用「YYYY-MM-DD」本地日期 key。
 */

const pad = (n: number): string => (n < 10 ? '0' + n : '' + n)

export function todayKey(d: Date = new Date()): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

export function addDays(d: Date, days: number): Date {
  const r = new Date(d.getTime())
  r.setDate(r.getDate() + days)
  return r
}

/** 某日期的前一天 key */
export function yesterdayKey(d: Date = new Date()): string {
  return todayKey(addDays(d, -1))
}

/** 本周（周一到周日）的日期 key 列表 */
export function currentWeekKeys(d: Date = new Date()): string[] {
  const day = d.getDay() // 0=周日
  const mondayOffset = day === 0 ? -6 : 1 - day
  const monday = addDays(d, mondayOffset)
  const keys: string[] = []
  for (let i = 0; i < 7; i++) {
    keys.push(todayKey(addDays(monday, i)))
  }
  return keys
}

/** 本周打卡记录：周一到周日是否有学习记录 */
export function weekCheckIn(studyDates: string[], d: Date = new Date()): Array<{ label: string; done: boolean }> {
  const keys = currentWeekKeys(d)
  const set: Record<string, boolean> = {}
  studyDates.forEach(k => (set[k] = true))
  return keys.map((k, i) => ({
    label: ['一', '二', '三', '四', '五', '六', '日'][i],
    done: !!set[k],
  }))
}
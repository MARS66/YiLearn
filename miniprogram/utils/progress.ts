/**
 * 本地学习进度数据层。
 *
 * 使用单一版本化 Storage 根对象（PRD 第 11 节），避免多页面各自维护冲突状态。
 * 所有页面通过本模块读写进度，并在 onShow 时重新调用 loadProgress 保证数据刷新。
 */
import { todayKey, yesterdayKey, currentWeekKeys } from './date'

const STORAGE_KEY = 'yistudy_progress'
const CURRENT_VERSION = 2

export interface WordProgress {
  learnedAt: number
}

export interface UserProgress {
  version: 2
  nextWordIndex: number
  learnedWords: Record<string, WordProgress>
  dailyLearnCounts: Record<string, number>
  dailyReviewCounts: Record<string, number>
  studyDates: string[]
  streak: number
  longestStreak: number
  totalReviewCount: number
  unlockedAchievements: Record<string, number>
  settings: {
    sound: boolean
    vibration: boolean
  }
}

export interface Achievement {
  id: string
  name: string
  desc: string
  image: string
  unlocked: boolean
}

function defaultProgress(): UserProgress {
  return {
    version: CURRENT_VERSION,
    nextWordIndex: 0,
    learnedWords: {},
    dailyLearnCounts: {},
    dailyReviewCounts: {},
    studyDates: [],
    streak: 0,
    longestStreak: 0,
    totalReviewCount: 0,
    unlockedAchievements: {},
    settings: { sound: true, vibration: true },
  }
}

/**
 * 读取进度。读取失败或版本不匹配时返回新的默认值；
 * 首次读取会写入默认结构，保证 Storage 中存在单一根对象。
 */
export function loadProgress(): UserProgress {
  let raw: any = null
  try {
    raw = wx.getStorageSync(STORAGE_KEY)
  } catch (e) {
    raw = null
  }

  if (!raw || typeof raw !== 'object') {
    const p = defaultProgress()
    saveProgress(p)
    return p
  }

  // 旧版数据无法安全映射为「已学习」事实，按 PRD 要求舍弃并重建
  if (raw.version !== CURRENT_VERSION) {
    const p = migrate(raw)
    saveProgress(p)
    return p
  }

  return normalize(raw)
}

function normalize(raw: any): UserProgress {
  const d = defaultProgress()
  const p = raw as Partial<UserProgress>
  return {
    ...d,
    ...p,
    learnedWords: p.learnedWords || {},
    dailyLearnCounts: p.dailyLearnCounts || {},
    dailyReviewCounts: p.dailyReviewCounts || {},
    studyDates: p.studyDates || [],
    unlockedAchievements: p.unlockedAchievements || {},
    settings: { ...d.settings, ...(p.settings || {}) },
  }
}

/** 旧版本迁移：仅保留能映射为「已学习」的字段，其余舍弃 */
function migrate(raw: any): UserProgress {
  const d = defaultProgress()
  const learnedCount = raw && typeof raw.learnedCount === 'number' ? raw.learnedCount : 0
  const learnedWords: Record<string, WordProgress> = {}
  const now = Date.now()
  for (let i = 0; i < learnedCount; i++) {
    learnedWords[String(i)] = { learnedAt: now }
  }
  if (learnedCount > 0) {
    d.nextWordIndex = learnedCount
    d.dailyLearnCounts[todayKey()] = learnedCount
  }
  d.learnedWords = learnedWords
  return d
}

export function saveProgress(p: UserProgress): boolean {
  try {
    wx.setStorageSync(STORAGE_KEY, p)
    return true
  } catch (e) {
    wx.showToast({ title: '学习记录保存失败，请检查微信存储空间', icon: 'none' })
    return false
  }
}

export function clearProgress(): boolean {
  try {
    wx.removeStorageSync(STORAGE_KEY)
    return true
  } catch (e) {
    return false
  }
}

/* --------------------------- 统计查询 --------------------------- */

export function getTotalLearned(p: UserProgress): number {
  return Object.keys(p.learnedWords).length
}

export function getTodayLearnCount(p: UserProgress): number {
  return p.dailyLearnCounts[todayKey()] || 0
}

export function getTodayReviewCount(p: UserProgress): number {
  return p.dailyReviewCounts[todayKey()] || 0
}

export function getStudyDays(p: UserProgress): number {
  return p.studyDates.length
}

/** 当前连续学习天数：断签（最近学习日不是今天或昨天）时显示 0 */
export function getCurrentStreak(p: UserProgress): number {
  const dates = p.studyDates
  if (dates.length === 0) return 0
  const last = dates[dates.length - 1]
  if (last === todayKey() || last === yesterdayKey()) return p.streak
  return 0
}

export function getWeekCheckIn(p: UserProgress, now: Date = new Date()): Array<{ label: string; done: boolean }> {
  const keys = currentWeekKeys(now)
  const set: Record<string, boolean> = {}
  p.studyDates.forEach(k => (set[k] = true))
  const labels = ['一', '二', '三', '四', '五', '六', '日']
  return keys.map((k, i) => ({ label: labels[i], done: !!set[k] }))
}

/* --------------------------- 学习/复习写入 --------------------------- */

function markStudyDate(p: UserProgress, key: string) {
  if (p.studyDates.indexOf(key) >= 0) return
  p.studyDates.push(key)
  // 今日首次产生有效学习：昨日有记录则连续 +1，否则从 1 重新开始
  if (p.studyDates.indexOf(yesterdayKey()) >= 0) {
    p.streak += 1
  } else {
    p.streak = 1
  }
  if (p.streak > p.longestStreak) p.longestStreak = p.streak
}

/** 顺序识字：首次学习某字时记为已学习，并推进 nextWordIndex */
export function markWordLearned(index: number): UserProgress {
  const p = loadProgress()
  const key = String(index)
  const today = todayKey()

  if (!p.learnedWords[key]) {
    p.learnedWords[key] = { learnedAt: Date.now() }
    p.dailyLearnCounts[today] = (p.dailyLearnCounts[today] || 0) + 1
    markStudyDate(p, today)
  }
  if (index + 1 > p.nextWordIndex) {
    p.nextWordIndex = index + 1
  }
  saveProgress(p)
  return p
}

/** 完成一轮随机复习：累加回顾字数，并记为有效学习日 */
export function recordReview(count: number): UserProgress {
  const p = loadProgress()
  const today = todayKey()
  p.dailyReviewCounts[today] = (p.dailyReviewCounts[today] || 0) + count
  p.totalReviewCount += count
  markStudyDate(p, today)
  saveProgress(p)
  return p
}

/* --------------------------- 设置 --------------------------- */

export function setSound(enabled: boolean): UserProgress {
  const p = loadProgress()
  p.settings.sound = enabled
  saveProgress(p)
  return p
}

export function setVibration(enabled: boolean): UserProgress {
  const p = loadProgress()
  p.settings.vibration = enabled
  saveProgress(p)
  return p
}

/* --------------------------- 成就 --------------------------- */

interface AchievementDef {
  id: string
  name: string
  desc: string
  image: string
}

/** 识字类成就 */
const LITERACY_ACHIEVEMENTS: AchievementDef[] = [
  { id: 'first', name: '初识彝文', desc: '学习第一个彝文字', image: 'https://bee-reg-ab.imagency.cn/mr/6209/26/d4ec0d8798a165abb6364ad677bb817a.png' },
  { id: 'under100', name: '小有积累', desc: '累计学习不足 100 字', image: 'https://bee-reg-ab.imagency.cn/mr/6209/26/e752693a933105211b5c5e4b5440ec94.png' },
  { id: 'hundred', name: '百字同行', desc: '累计学习 100～581 字', image: 'https://bee-reg-ab.imagency.cn/mr/6209/26/6f2d70fadb8e4d512f403d7d081de9df.png' },
  { id: 'half', name: '半程同行', desc: '累计学习 582～999 字', image: 'https://bee-reg-ab.imagency.cn/mr/6209/26/5fd2b1d5a3d475a55270a53c56009831.png' },
  { id: 'inheritor', name: '彝文传承者', desc: '累计学习 1000 字以上', image: 'https://bee-reg-ab.imagency.cn/mr/6209/26/0f4c934d500b5f9e4fe1a5a3dba0ff4b.png' },
]

/** 连续学习类成就 */
const STREAK_ACHIEVEMENTS: AchievementDef[] = [
  { id: 'streak3', name: '连续学习 3 天', desc: '连续学习达到 3 天', image: 'https://bee-reg-ab.imagency.cn/mr/6209/26/1282dc1111b4e32a9aa3d47ad2ef2432.png' },
  { id: 'streak7', name: '连续学习 7 天', desc: '连续学习达到 7 天', image: 'https://bee-reg-ab.imagency.cn/mr/6209/26/c33dc084e42d74d56b4216f029fa2c36.png' },
  { id: 'streak30', name: '连续学习 30 天', desc: '连续学习达到 30 天', image: 'https://bee-reg-ab.imagency.cn/mr/6209/26/f01185e6a52ac163131d36143cccd2f7.png' },
  { id: 'streak100', name: '连续学习 100 天', desc: '连续学习达到 100 天', image: 'https://bee-reg-ab.imagency.cn/mr/6209/26/0c9d490882d729fcae5113a59c470152.png' },
]

function evaluateAchievements(defs: AchievementDef[], p: UserProgress): Achievement[] {
  const learned = getTotalLearned(p)
  const streak = Math.max(p.streak, p.longestStreak)
  return defs.map(def => {
    let unlocked = false
    switch (def.id) {
      case 'first':
        unlocked = learned >= 1
        break
      case 'under100':
        unlocked = learned >= 1 && learned < 100
        break
      case 'hundred':
        unlocked = learned >= 100 && learned < 582
        break
      case 'half':
        unlocked = learned >= 582 && learned < 1000
        break
      case 'inheritor':
        unlocked = learned >= 1000
        break
      case 'streak3':
        unlocked = streak >= 3
        break
      case 'streak7':
        unlocked = streak >= 7
        break
      case 'streak30':
        unlocked = streak >= 30
        break
      case 'streak100':
        unlocked = streak >= 100
        break
    }
    if (unlocked && !p.unlockedAchievements[def.id]) {
      p.unlockedAchievements[def.id] = Date.now()
    }
    return { id: def.id, name: def.name, desc: def.desc, image: def.image, unlocked }
  })
}

/** 识字成就列表 */
export function computeLiteracyAchievements(p: UserProgress): Achievement[] {
  return evaluateAchievements(LITERACY_ACHIEVEMENTS, p)
}

/** 连续学习成就列表 */
export function computeStreakAchievements(p: UserProgress): Achievement[] {
  return evaluateAchievements(STREAK_ACHIEVEMENTS, p)
}

/** 全部成就（识字 + 连续学习），供「我的」页徽章预览复用 */
export function computeAchievements(p: UserProgress): Achievement[] {
  return [...computeLiteracyAchievements(p), ...computeStreakAchievements(p)]
}
const fs = require('fs')
const path = require('path')

const ROOT = __dirname
const WORDS_PATH = path.join(ROOT, 'miniprogram/data/words.ts')
const PRON_PATH = path.join(ROOT, 'yi-pronunciations.json')

// 1. 读取发音/词组数据，建立 g -> phrases 映射
const pron = JSON.parse(fs.readFileSync(PRON_PATH, 'utf8'))
const phraseMap = new Map(pron.map(e => [e.g, e.phrases || []]))

// 2. 解析 words.ts 中的 WORDS 数组（仅替换数组体，保留头注释/接口/尾部函数）
const src = fs.readFileSync(WORDS_PATH, 'utf8')
const marker = 'export const WORDS: Word[] = ['
const start = src.indexOf(marker)
if (start < 0) { console.error('未能在 words.ts 中找到 WORDS 声明'); process.exit(1) }
const open = start + marker.length - 1   // 指向 '['
const close = src.lastIndexOf(']')        // 数组结束的 ']'
if (close <= open) { console.error('WORDS 数组解析失败'); process.exit(1) }
const head = src.slice(0, open + 1)       // 含 '['
const tail = src.slice(close)             // 含 ']' 及之后内容
const words = JSON.parse('[' + src.slice(open + 1, close) + ']')

// 3. 每个字随机取 5 个词组
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

let matched = 0, missing = 0, lessThan5 = 0
for (const w of words) {
  const phrases = phraseMap.get(w.g)
  if (!phrases || phrases.length === 0) { missing++; continue }
  if (phrases.length < 5) lessThan5++
  w.phrases = shuffle(phrases).slice(0, 5)
  matched++
}

// 4. 序列化回 words.ts（保持原有 2/4 空格缩进风格）
const serializeWord = obj =>
  JSON.stringify(obj, null, 2).split('\n').map(l => '  ' + l).join('\n')

const body = words.map(serializeWord).join(',\n')
fs.writeFileSync(WORDS_PATH, head + '\n' + body + '\n' + tail, 'utf8')

console.log(`完成：${matched} 个字已填充 5 个词组；${missing} 个字未找到匹配；${lessThan5} 个字词组数不足 5 个`)
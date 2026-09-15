/**
 * 临时提取脚本：从参考应用（wx341a964308e737ca）提取彝文字典数据，
 * 生成当前项目可用的 TypeScript 数据文件。
 */
const fs = require('fs');
const path = require('path');

const REF_DIR = '/Users/kevin/mine_projects/dictionary/wx341a964308e737ca';
const VENDOR = path.join(REF_DIR, 'common/vendor.js');
const PINYIN = path.join(REF_DIR, 'pages/yjdict/pinyin.js');
const OUT_DIR = '/Users/kevin/mine_projects/YiLearn/miniprogram/data';

function extractJsonModule(src, moduleId) {
  // 匹配:  "6197: function _(t) { ... t.exports = JSON.parse('...');"
  const re = new RegExp(
    moduleId + ':\\s*function[\\s\\S]*?JSON\\.parse\\(\'((?:[^\'\\\\]|\\\\.)*)\'\\)',
    'm'
  );
  const m = src.match(re);
  if (!m) {
    throw new Error('module not found: ' + moduleId);
  }
  // 反转义 \' 与 \\（原始字符串中可能出现的转义）
  const jsonStr = m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\');
  return JSON.parse(jsonStr);
}

function extractYiList(src) {
  // 匹配: this.yiList = "..." .split(",")
  const re = /this\.yiList\s*=\s*"((?:[^"\\]|\\.)*)"\s*\.split\(","\)/;
  const m = src.match(re);
  if (!m) throw new Error('yiList not found in pinyin.js');
  const str = m[1].replace(/\\"/g, '"').replace(/\\\\/g, '\\');
  return str.split(',');
}

const vendorSrc = fs.readFileSync(VENDOR, 'utf8');
const pinyinSrc = fs.readFileSync(PINYIN, 'utf8');

const words = extractJsonModule(vendorSrc, '6197');
const radicals = extractJsonModule(vendorSrc, '9005');
const strokes = extractJsonModule(vendorSrc, 'd172');
const keyboard = extractJsonModule(vendorSrc, 'abaf');
const yiList = extractYiList(pinyinSrc);

console.log('words keys:', Object.keys(words).length);
console.log('radical keys:', Object.keys(radicals).length);
console.log('stroke keys:', Object.keys(strokes).length);
console.log('keyboard keys:', Object.keys(keyboard).length);
console.log('yiList length:', yiList.length);
console.log('yiList first/last:', yiList[0], yiList[yiList.length - 1]);

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function writeJsonModule(name, data, typeName, typeDecl) {
  const header = `// 由 scripts/extract-yidict.js 从参考应用自动生成，请勿手改\n`;
  const body = JSON.stringify(data, null, 0);
  fs.writeFileSync(
    path.join(OUT_DIR, name),
    header + `${typeDecl}\nexport const ${typeName} = ${body} as const;\n`
  );
}

writeJsonModule(
  'yidict-words.ts',
  words,
  'YI_WORDS',
  `export interface YiCj { h: string; y: string }\nexport interface YiWord { c?: YiCj[]; h: number; p: string; t: number; w: string; y: string }`
);
writeJsonModule('yidict-radicals.ts', radicals, 'YI_RADICALS', `export type YiEntry = { h: number; p: string; t: number; w: string; y: string }`);
writeJsonModule('yidict-strokes.ts', strokes, 'YI_STROKES', `export type YiEntry = { h: number; p: string; t: number; w: string; y: string }`);
writeJsonModule('yidict-keyboard.ts', keyboard, 'YI_KEYBOARD', ``);

// yiList 数组
fs.writeFileSync(
  path.join(OUT_DIR, 'yidict-pinyin.ts'),
  `// 由 scripts/extract-yidict.js 从参考应用自动生成，请勿手改\n// 44 声母 x 10 韵母 x 4 声调(t/x/无/p) = 1760 项，空位为 "A"\nexport const YI_INITIALS = ${JSON.stringify('-,b,p,bb,nb,hm,m,f,v,d,t,dd,nd,hn,n,hl,l,g,k,gg,mg,hx,ng,h,w,z,c,zz,nz,s,ss,zh,ch,rr,nr,sh,r,j,q,jj,nj,ny,x,y'.split(','))};\nexport const YI_FINALS = ${JSON.stringify('i,ie,a,uo,o,e,u,ur,y,yr'.split(','))};\nexport const YI_LIST = ${JSON.stringify(yiList)};\n`
);

console.log('done ->', OUT_DIR);

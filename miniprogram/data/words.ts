/**
 * 彝文字库数据（完整 1,164 字）
 *
 * 对应 PRD 中 `word.json`：1,164 个凉山规范彝文音节，固定顺序学习。
 * 顺序即 Unicode 彝文音节区段 U+A000–U+A48C 的码表顺序（44 声母 × 10 韵母 × 4 声调，跳过空位）。
 * 拼音来自 Unicode 官方字符名（如 U+A000 = YI SYLLABLE IT → it）。
 *
 * 字段说明：
 * - g        字形（彝文字符）
 * - py       完整拼音
 * - initial  拼音红色部分（零声母字显示韵母，否则显示声母）
 * - final    拼音黄色部分（零声母字显示声调字母，否则韵母+声调）
 * - radical  部首（空字符串表示暂无资料）
 * - strokes  总笔画（0 表示暂无资料）
 * - remain   剩余笔画
 * - group    词组
 */
export interface Word {
  g: string
  initial: string
  final: string
  tone: string
  py: string 
  ipa: string | null
  audioUrl: string
  radical: string
  strokes: number
  remainingStrokes: number
  phrases?: {yi: string, han: string}[]
}

export const WORDS: Word[] = [
  {
    "g": "ꀀ",
    "initial": "",
    "final": "i",
    "tone": "t",
    "py": "it",
    "ipa": "i⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_it.mp3",
    "radical": "꒤",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀁꇬꀀ",
        "han": "居家"
      },
      {
        "yi": "ꆏꀀꅉꎹꌠꉫꀕ",
        "han": "你要房间吗"
      },
      {
        "yi": "ꏓꋍꈜꀀ",
        "han": "群居"
      },
      {
        "yi": "ꀀꑴꑳꀂꉚꒉ",
        "han": "夜郎自大"
      },
      {
        "yi": "ꃌꒆꐯꇯꂿꑘꊿꀋꉬꀐꇬꉜꌊꂿꑘꀀꊿꃅꄉꌠ",
        "han": "本人及配偶均为农业户口或界定为农村居民户口的"
      }
    ]
  },
  {
    "g": "ꀖ",
    "initial": "b",
    "final": "i",
    "tone": "t",
    "py": "bit",
    "ipa": "pi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bit.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐴꀖꉱꌦ",
        "han": "根究"
      },
      {
        "yi": "ꎆꏣꀖꁉ",
        "han": "经济开发"
      },
      {
        "yi": "ꄸꀖ",
        "han": "揭短"
      },
      {
        "yi": "ꐴꋠꉐꀖꑫ",
        "han": "根菜类"
      },
      {
        "yi": "ꄩꀖ",
        "han": "高超"
      }
    ]
  },
  {
    "g": "ꀸ",
    "initial": "p",
    "final": "i",
    "tone": "t",
    "py": "pit",
    "ipa": "pʰi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pit.mp3",
    "radical": "꒬",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏶꈻꈂꀸ",
        "han": "虹吸式口器"
      },
      {
        "yi": "ꌧꇗꅐꀸ",
        "han": "因明"
      },
      {
        "yi": "ꉶꇤꉳꀸ",
        "han": "穿堂门"
      },
      {
        "yi": "ꈝꀸ",
        "han": "孔道"
      },
      {
        "yi": "ꈍꀸꉉꇬ",
        "han": "口称"
      }
    ]
  },
  {
    "g": "ꁖ",
    "initial": "bb",
    "final": "i",
    "tone": "t",
    "py": "bbit",
    "ipa": "bi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbit.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꁖꅑ",
        "han": "偶蹄目"
      },
      {
        "yi": "ꆱꑭꇬꁖ",
        "han": "破绽"
      },
      {
        "yi": "ꊨꏦꁖꒉꇉ",
        "han": "自流井"
      },
      {
        "yi": "ꑱꅳꁖ",
        "han": "针眼"
      },
      {
        "yi": "ꃷꁖ",
        "han": "放屁"
      }
    ]
  },
  {
    "g": "ꁶ",
    "initial": "nb",
    "final": "i",
    "tone": "t",
    "py": "nbit",
    "ipa": "mbi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbit.mp3",
    "radical": "꒓",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꁶꇷꅪ",
        "han": "红螺"
      },
      {
        "yi": "ꁶꑮ",
        "han": "腹足类"
      },
      {
        "yi": "ꃛꁶꏿꄉꌉ",
        "han": "苦战"
      },
      {
        "yi": "ꇌꃀꀊꁶ",
        "han": "鼻涕虫"
      },
      {
        "yi": "ꁶꌤ",
        "han": "蛊证"
      }
    ]
  },
  {
    "g": "ꂑ",
    "initial": "hm",
    "final": "i",
    "tone": "t",
    "py": "hmit",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmit.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꂮ",
    "initial": "m",
    "final": "i",
    "tone": "t",
    "py": "mit",
    "ipa": "mi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mit.mp3",
    "radical": "꒨",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꆏꁱꇐꃆꂮꈍꃅꐙ",
        "han": "你的写作水平怎么样"
      },
      {
        "yi": "ꂮꆏꋚꀋꌋ",
        "han": "饥不择食"
      },
      {
        "yi": "ꀑꐱꃆꂮ",
        "han": "概况"
      },
      {
        "yi": "ꉹꁌꉪꐨ、ꉹꁌꃆꂮ",
        "han": "民情"
      },
      {
        "yi": "ꆅꃆꂮ",
        "han": "病历"
      }
    ]
  },
  {
    "g": "ꃍ",
    "initial": "f",
    "final": "i",
    "tone": "t",
    "py": "fit",
    "ipa": "fi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fit.mp3",
    "radical": "꒧",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꃍꆦ",
        "han": "假扮"
      }
    ]
  },
  {
    "g": "ꃢ",
    "initial": "v",
    "final": "i",
    "tone": "t",
    "py": "vit",
    "ipa": "vi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vit.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃢꆦ",
        "han": "更衣"
      },
      {
        "yi": "ꉳꄉꌉꃢꌠ",
        "han": "邯郸战役"
      },
      {
        "yi": "ꃅꎸꃢꈜ",
        "han": "夏衣"
      },
      {
        "yi": "ꉼꃢꈜ",
        "han": "紧身儿"
      },
      {
        "yi": "ꌋꅪꃢꈜ",
        "han": "女装"
      }
    ]
  },
  {
    "g": "ꄀ",
    "initial": "d",
    "final": "i",
    "tone": "t",
    "py": "dit",
    "ipa": "ti⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dit.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉌꑍꄀꌠ",
        "han": "双重人格"
      },
      {
        "yi": "ꌩꁧꄀꌠ",
        "han": "乔木层"
      },
      {
        "yi": "ꏲꄀ",
        "han": "调度"
      },
      {
        "yi": "ꄆꌅꄀ",
        "han": "电子层"
      },
      {
        "yi": "ꄀꏤꁯꆮꉛ",
        "han": "丁加蝴蝶鱼"
      }
    ]
  },
  {
    "g": "ꄚ",
    "initial": "t",
    "final": "i",
    "tone": "t",
    "py": "tit",
    "ipa": "tʰi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tit.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꄚꒃꀊꄶꆶ",
        "han": "顾此失彼"
      },
      {
        "yi": "ꄚꏒꀕ",
        "han": "铿锵有力"
      },
      {
        "yi": "ꄚꇬꆿꅝꍔꐤꀕ",
        "han": "这里有茶壶卖吗"
      },
      {
        "yi": "ꉌꃅꄚꋦ",
        "han": "全神贯注"
      },
      {
        "yi": "ꄊꄚ",
        "han": "锅庄"
      }
    ]
  },
  {
    "g": "ꄶ",
    "initial": "dd",
    "final": "i",
    "tone": "t",
    "py": "ddit",
    "ipa": "di⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddit.mp3",
    "radical": "꒙",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄚꒃꀊꄶꆶ",
        "han": "顾此失彼"
      },
      {
        "yi": "ꌺꄶꌺꆠ",
        "han": "大少爷"
      },
      {
        "yi": "ꁋꅐꆠꄶ",
        "han": "时髦"
      },
      {
        "yi": "ꀊꄶꇬ",
        "han": "那里"
      },
      {
        "yi": "ꄶꆠ",
        "han": "浮华"
      }
    ]
  },
  {
    "g": "ꅑ",
    "initial": "nd",
    "final": "i",
    "tone": "t",
    "py": "ndit",
    "ipa": "ndi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndit.mp3",
    "radical": "꒙",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꂿꎭꂪꌦꅑ",
        "han": "穿孝"
      },
      {
        "yi": "ꉌꆓꉌꐡꅑ",
        "han": "多愁善感"
      },
      {
        "yi": "ꀊꆨꅑ ꅸꇁꌠ",
        "han": "古来"
      },
      {
        "yi": "ꐯꅑꇙ",
        "han": "牵动"
      },
      {
        "yi": "ꂓꅑꌠ",
        "han": "名流"
      }
    ]
  },
  {
    "g": "ꅨ",
    "initial": "hn",
    "final": "i",
    "tone": "t",
    "py": "hnit",
    "ipa": "n̥i⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnit.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꆭꑆꅨꋌ",
        "han": "皮硝"
      },
      {
        "yi": "ꅨꏦ",
        "han": "拘板"
      },
      {
        "yi": "ꅨꐎꃀꀕ",
        "han": "漂白粉"
      }
    ]
  },
  {
    "g": "ꅽ",
    "initial": "n",
    "final": "i",
    "tone": "t",
    "py": "nit",
    "ipa": "ni⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nit.mp3",
    "radical": "꒬",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꆏꑴꌠꎖꃅꅽꇭꀧꌋꃅꅊꇈ",
        "han": "希望你能很好的保养身体"
      },
      {
        "yi": "ꉢꈨꇬꅽꀁꇤꀑꌤꍈꅐꄷ",
        "han": "听说你家里出了点事"
      },
      {
        "yi": "ꉙꅽꐯꀋꌡ",
        "han": "色差"
      },
      {
        "yi": "ꅽꃀꈴꀋ ꄿ",
        "han": "借光"
      },
      {
        "yi": "ꅽꆅꋋꂷꀊꅰꃅꉻꌠꀋꉬ",
        "han": "你的病情不是很严重"
      }
    ]
  },
  {
    "g": "ꆗ",
    "initial": "hl",
    "final": "i",
    "tone": "t",
    "py": "hlit",
    "ipa": "ɬi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlit.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꁮꆗ",
        "han": "朝阳"
      },
      {
        "yi": "ꁮꆗ、ꎹꄓꈧꌺ",
        "han": "朝阳、朝阳"
      },
      {
        "yi": "ꐴꀖꃆꂮꍰꆗꄜꅇ",
        "han": "揭露问题的调查报告"
      },
      {
        "yi": "ꆗꈩ",
        "han": "舞动"
      },
      {
        "yi": "ꍰꆗꇬꌦ",
        "han": "调查公司"
      }
    ]
  },
  {
    "g": "ꆷ",
    "initial": "l",
    "final": "i",
    "tone": "t",
    "py": "lit",
    "ipa": "li⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lit.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇨꊸ、ꀋꆷꀋꃹ、ꀋꆷ",
        "han": "繁忙"
      },
      {
        "yi": "ꄉꆷ",
        "han": "勾当"
      },
      {
        "yi": "ꊥꆷꏿꋌ",
        "han": "催产剂"
      },
      {
        "yi": "ꉹꁌꐥꀨꐥꆷꀋ ꐥ",
        "han": "民不聊生"
      },
      {
        "yi": "ꉮꁮꆷꌭ",
        "han": "生物武器"
      }
    ]
  },
  {
    "g": "ꇚ",
    "initial": "g",
    "final": "i",
    "tone": "t",
    "py": "git",
    "ipa": "ki⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_git.mp3",
    "radical": "꒜",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇚꒉ",
        "han": "达官"
      },
      {
        "yi": "ꇚꀮꀱꐛꑭꊂ",
        "han": "雄性不育恢复系"
      },
      {
        "yi": "ꄮꇚꊐꐥꑳ",
        "han": "松明楼"
      },
      {
        "yi": "ꇚꑴ",
        "han": "或许"
      },
      {
        "yi": "ꋰꇚꅐ",
        "han": "流星雨"
      }
    ]
  },
  {
    "g": "ꇸ",
    "initial": "k",
    "final": "i",
    "tone": "t",
    "py": "kit",
    "ipa": "kʰi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kit.mp3",
    "radical": "꒒",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꊞꇸ",
        "han": "颠簸"
      },
      {
        "yi": "ꍔꇸ",
        "han": "灭种"
      },
      {
        "yi": "ꒉꇸꉛꁠꇁ",
        "han": "一箭双雕"
      },
      {
        "yi": "ꀆꐒꇸꄿ",
        "han": "桔槔"
      },
      {
        "yi": "ꀆꐒꇸꏮꄿ",
        "han": "辘轳"
      }
    ]
  },
  {
    "g": "ꈔ",
    "initial": "gg",
    "final": "i",
    "tone": "t",
    "py": "ggit",
    "ipa": "gi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggit.mp3",
    "radical": "꒰",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈔꄮ",
        "han": "末日"
      },
      {
        "yi": "ꑍꈤ、ꈔꋏ",
        "han": "消灭"
      },
      {
        "yi": "ꁮꈔ",
        "han": "淋巴液"
      },
      {
        "yi": "ꈔꀮ",
        "han": "雄性不育"
      },
      {
        "yi": "ꐡꈔ",
        "han": "溃散"
      }
    ]
  },
  {
    "g": "ꉆ",
    "initial": "hx",
    "final": "i",
    "tone": "t",
    "py": "hxit",
    "ipa": "hi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxit.mp3",
    "radical": "꒙",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉆꐽ",
        "han": "企稳"
      },
      {
        "yi": "ꑞꇷꑌꑠꃅꑌꉆꑴꄾ",
        "han": "所有的车都可以这样吗"
      },
      {
        "yi": "ꉆꋍꂽꒆꑍ",
        "han": "八一建军节"
      },
      {
        "yi": "ꉛꈹꉆꈹ",
        "han": "渔猎"
      },
      {
        "yi": "ꑾꃶꑾꉆꄵꄉꌠ",
        "han": "清炖羊杂"
      }
    ]
  },
  {
    "g": "ꉮ",
    "initial": "h",
    "final": "i",
    "tone": "t",
    "py": "hit",
    "ipa": "xi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hit.mp3",
    "radical": "꒓",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉮꇊꑱ",
        "han": "海洛因"
      },
      {
        "yi": "ꀑꇬꉮ",
        "han": "伤生"
      },
      {
        "yi": "ꉮꄊ",
        "han": "海胆"
      },
      {
        "yi": "ꑊꃴꅐꇐ、ꉮꀋꐊꅐꑘ",
        "han": "绿色产业"
      },
      {
        "yi": "ꉮꈉ",
        "han": "海葵"
      }
    ]
  },
  {
    "g": "ꊍ",
    "initial": "z",
    "final": "i",
    "tone": "t",
    "py": "zit",
    "ipa": "tsi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zit.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꁮꊍꇁ",
        "han": "灶马"
      }
    ]
  },
  {
    "g": "ꊮ",
    "initial": "c",
    "final": "i",
    "tone": "t",
    "py": "cit",
    "ipa": "tsʰi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cit.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊮꂷ",
        "han": "谷子"
      },
      {
        "yi": "ꑞꅉꀋꐥꊮꌺꃷꁨ",
        "han": "无限小数"
      },
      {
        "yi": "ꀰꏮꊮꌺ",
        "han": "循环点"
      },
      {
        "yi": "ꊮꌺꑟ",
        "han": "虚线"
      },
      {
        "yi": "ꊮꌐꁈ",
        "han": "描点法"
      }
    ]
  },
  {
    "g": "ꋐ",
    "initial": "zz",
    "final": "i",
    "tone": "t",
    "py": "zzit",
    "ipa": "dzi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzit.mp3",
    "radical": "꒙",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꆅꉁꌷꇐꏓꋐ",
        "han": "医学集体"
      },
      {
        "yi": "ꀨꋐ",
        "han": "蓝本"
      },
      {
        "yi": "ꍡꉙꋐ",
        "han": "唱本"
      },
      {
        "yi": "ꌡꀠꋐ",
        "han": "模本"
      },
      {
        "yi": "ꎭꋐ",
        "han": "辣椒"
      }
    ]
  },
  {
    "g": "ꋭ",
    "initial": "nz",
    "final": "i",
    "tone": "t",
    "py": "nzit",
    "ipa": "ndzi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzit.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꋭꌠꃅꀬ",
        "han": "见义勇为"
      },
      {
        "yi": "ꋭꋽ",
        "han": "正当"
      },
      {
        "yi": "ꉙꊌꂘꊌꌅꅍꌋꆀꋭꑘ",
        "han": "受教育的权利和义务"
      },
      {
        "yi": "ꋭꄮꃌꒆ",
        "han": "佳偶"
      },
      {
        "yi": "ꋭꏣ",
        "han": "权益"
      }
    ]
  },
  {
    "g": "ꌉ",
    "initial": "s",
    "final": "i",
    "tone": "t",
    "py": "sit",
    "ipa": "si⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sit.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌉꆳ",
        "han": "战争"
      },
      {
        "yi": "ꌤꃅꌉꈿꁥ",
        "han": "武工队"
      },
      {
        "yi": "ꌙꃛꌉꄸꏤꐪ",
        "han": "凇泸停战协定"
      },
      {
        "yi": "ꈛꌋꅉꄉꐯꌉ",
        "han": "前哨战"
      },
      {
        "yi": "ꎃꐚꌉꈿ",
        "han": "常规战争"
      }
    ]
  },
  {
    "g": "ꌪ",
    "initial": "ss",
    "final": "i",
    "tone": "t",
    "py": "ssit",
    "ipa": "zi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssit.mp3",
    "radical": "꒕",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꎴꇢꋎꌬ、ꎴꇢꌪꇺ",
        "han": "遥控"
      }
    ]
  },
  {
    "g": "ꏠ",
    "initial": "j",
    "final": "i",
    "tone": "t",
    "py": "jit",
    "ipa": "tɕi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jit.mp3",
    "radical": "꒢",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꊝꏠꅿ",
        "han": "总经理"
      },
      {
        "yi": "ꊸꑌꏠꐕ",
        "han": "热机"
      },
      {
        "yi": "ꏠꇑ",
        "han": "磨石"
      },
      {
        "yi": "ꊐꏠ",
        "han": "等级"
      },
      {
        "yi": "꒧ꃅꏠꐕꈜ",
        "han": "机耕道"
      }
    ]
  },
  {
    "g": "ꏼ",
    "initial": "q",
    "final": "i",
    "tone": "t",
    "py": "qit",
    "ipa": "tɕʰi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qit.mp3",
    "radical": "꒬",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏼꑳ",
        "han": "棚户"
      },
      {
        "yi": "ꃝꐨꏈꏼ",
        "han": "婚姻纠纷"
      },
      {
        "yi": "ꃆꏼ",
        "han": "麻经儿"
      },
      {
        "yi": "ꉜꆐꏼꏂ",
        "han": "黑勒期史"
      },
      {
        "yi": "ꈂꏼ",
        "han": "牙关"
      }
    ]
  },
  {
    "g": "ꐘ",
    "initial": "jj",
    "final": "i",
    "tone": "t",
    "py": "jjit",
    "ipa": "dʑi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjit.mp3",
    "radical": "꒡",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꀉꒉꐘ",
        "han": "大宗"
      },
      {
        "yi": "ꋍꂷꋍꐘꌌ",
        "han": "分工负责"
      },
      {
        "yi": "ꋍꑵꌠ、ꉻꌡꐘ",
        "han": "同类项"
      },
      {
        "yi": "ꐘꑌꉻꅿꐘ",
        "han": "多项式的项"
      },
      {
        "yi": "ꂷꑌꐘꑌꉻ",
        "han": "多元多项式"
      }
    ]
  },
  {
    "g": "ꐱ",
    "initial": "nj",
    "final": "i",
    "tone": "t",
    "py": "njit",
    "ipa": "ndʑi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njit.mp3",
    "radical": "꒑",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꐱꐂꐊꆌꉻꋉ",
        "han": "超越方程组"
      },
      {
        "yi": "ꑍꅝꐱ",
        "han": "哺乳纲"
      },
      {
        "yi": "ꀑꐱꃅꉜ",
        "han": "涉猎"
      },
      {
        "yi": "ꐱꀨꉉꈻꈬꊯꉬꏢ",
        "han": "九十五条论纲"
      },
      {
        "yi": "ꀑꐱꃅꌗꇬ",
        "han": "约计"
      }
    ]
  },
  {
    "g": "ꑊ",
    "initial": "ny",
    "final": "i",
    "tone": "t",
    "py": "nyit",
    "ipa": "ȵi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyit.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃴꑊꋠꇐ",
        "han": "绿色食品"
      },
      {
        "yi": "ꑊꒌꎹ",
        "han": "树立威信"
      },
      {
        "yi": "ꑊꐈꏀꐛ",
        "han": "面貌一新"
      },
      {
        "yi": "ꑊꄸ",
        "han": "丑"
      },
      {
        "yi": "ꀑꑊꃅꇏ",
        "han": "风貌"
      }
    ]
  },
  {
    "g": "ꑝ",
    "initial": "x",
    "final": "i",
    "tone": "t",
    "py": "xit",
    "ipa": "ɕi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xit.mp3",
    "radical": "꒳",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑝꎐ",
        "han": "裂齿"
      },
      {
        "yi": "ꁬꃷꃷꅍꑝ",
        "han": "蚂蚁啃骨头"
      },
      {
        "yi": "ꑝꅇꑤ",
        "han": "喜德县"
      },
      {
        "yi": "ꈌꃶꑝ",
        "han": "疯狗咬伤"
      },
      {
        "yi": "ꆦꑝꄯꒉ",
        "han": "衣包"
      }
    ]
  },
  {
    "g": "ꑱ",
    "initial": "y",
    "final": "i",
    "tone": "t",
    "py": "yit",
    "ipa": "ʑi⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yit.mp3",
    "radical": "꒮",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑱꉀꂱꎍ",
        "han": "针刺麻醉"
      },
      {
        "yi": "ꉢꑱꇩꌤꃅ",
        "han": "我在英国工作"
      },
      {
        "yi": "ꂱꑱꃅꅍ",
        "han": "本行"
      },
      {
        "yi": "ꄆꑱꆄꄻ",
        "han": "电针疗法"
      },
      {
        "yi": "ꃅꍜꄐꑱ",
        "han": "指南针"
      }
    ]
  },
  {
    "g": "ꀁ",
    "initial": "",
    "final": "i",
    "tone": "x",
    "py": "ix",
    "ipa": "i⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀏꉀ〈ꀁꋌ〉ꉜꃅꌗꀺꁈ",
        "han": "向上（下）排空法"
      },
      {
        "yi": "ꀁꂥꊐꌠ",
        "han": "低级"
      },
      {
        "yi": "ꀁꑌꐥꌗ",
        "han": "稀有气体"
      },
      {
        "yi": "ꑟꀁ ꊰꌠ",
        "han": "细纱"
      },
      {
        "yi": "ꀁꇬꌶꅉ",
        "han": "家塾"
      }
    ]
  },
  {
    "g": "ꀗ",
    "initial": "b",
    "final": "i",
    "tone": "x",
    "py": "bix",
    "ipa": "pi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀗꎆꃅꆳꎆ",
        "han": "悖入悖出"
      },
      {
        "yi": "ꃚꐈꀗꄟ",
        "han": "反切"
      },
      {
        "yi": "ꀗꄟꐈ",
        "han": "读破"
      },
      {
        "yi": "ꀗꊪ",
        "han": "酒盅"
      },
      {
        "yi": "ꀗꄟꀋꐊ",
        "han": "异读"
      }
    ]
  },
  {
    "g": "ꀹ",
    "initial": "p",
    "final": "i",
    "tone": "x",
    "py": "pix",
    "ipa": "pʰi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑌꀹ",
        "han": "座次"
      },
      {
        "yi": "ꄸꀹ",
        "han": "流俗"
      },
      {
        "yi": "ꃅꄷꃅꀹ",
        "han": "地方风格"
      },
      {
        "yi": "ꃅꀹ",
        "han": "习尚"
      },
      {
        "yi": "ꌷꀹ",
        "han": "校风"
      }
    ]
  },
  {
    "g": "ꁗ",
    "initial": "bb",
    "final": "i",
    "tone": "x",
    "py": "bbix",
    "ipa": "bi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁗꏒꉪꏦ",
        "han": "分散主义"
      },
      {
        "yi": "ꉌꐡꁗꁱꀕꇐ",
        "han": "抒情散文"
      },
      {
        "yi": "ꊱꀋꁨꃅꁱꌠ、ꈁꋧꁱꇐ、ꁗꁱꀕꇐ",
        "han": "散文"
      },
      {
        "yi": "ꊸꌗꁗꏒꅍ",
        "han": "散热器"
      },
      {
        "yi": "ꁗꏒꆘꅝ",
        "han": "散亡"
      }
    ]
  },
  {
    "g": "ꁷ",
    "initial": "nb",
    "final": "i",
    "tone": "x",
    "py": "nbix",
    "ipa": "mbi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃚꁷꅉ",
        "han": "音位"
      },
      {
        "yi": "ꁷꐞꑳꏣ",
        "han": "末梢神经"
      },
      {
        "yi": "ꁷꒆꁮ",
        "han": "裂殖菌"
      },
      {
        "yi": "ꏲꑘꎆꏂꑘꁷꐞ",
        "han": "政企分开"
      },
      {
        "yi": "ꎆꏣꁷꐞ",
        "han": "分流资金"
      }
    ]
  },
  {
    "g": "ꂒ",
    "initial": "hm",
    "final": "i",
    "tone": "x",
    "py": "hmix",
    "ipa": "m̥i⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑌꇐꂒꅉ",
        "han": "德望"
      },
      {
        "yi": "ꂒꈐ",
        "han": "冒牌"
      },
      {
        "yi": "ꌠꏀꂒꒉꂽꈅ",
        "han": "青年近卫军"
      },
      {
        "yi": "ꊿꂒꋦꌠ、ꌟꃅ",
        "han": "人士"
      },
      {
        "yi": "ꂒꋦꂓꆹ",
        "han": "老牌"
      }
    ]
  },
  {
    "g": "ꂯ",
    "initial": "m",
    "final": "i",
    "tone": "x",
    "py": "mix",
    "ipa": "mi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍡꂯꇁꉚ",
        "han": "候场"
      },
      {
        "yi": "ꊿꉚꄸꂯꂸꇖꀕ",
        "han": "欺人太甚"
      },
      {
        "yi": "ꂯ……ꈍꃅ",
        "han": "而况"
      },
      {
        "yi": "ꅓꁧꌌꈍꃅꂯ",
        "han": "行李怎么办"
      },
      {
        "yi": "ꊋꐛꂯꑲꆀꅞ",
        "han": "功败垂成"
      }
    ]
  },
  {
    "g": "ꃎ",
    "initial": "f",
    "final": "i",
    "tone": "x",
    "py": "fix",
    "ipa": "fi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃎꌅ",
        "han": "分子"
      },
      {
        "yi": "ꃎꄅ",
        "han": "非典"
      }
    ]
  },
  {
    "g": "ꃣ",
    "initial": "v",
    "final": "i",
    "tone": "x",
    "py": "vix",
    "ipa": "vi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋍꑍ.ꋍꌦꅐꐲꑷꃣꈌ",
        "han": "一二.一血案"
      },
      {
        "yi": "ꃣꎓꈌꐡ、ꆲꁏꄂꈧ",
        "han": "风雨飘摇"
      },
      {
        "yi": "ꌉ꒧ꃣꈌ",
        "han": "血案"
      },
      {
        "yi": "ꃣꈌꍝ",
        "han": "听讼"
      },
      {
        "yi": "ꃝꐨꃣꈌ",
        "han": "婚姻案件"
      }
    ]
  },
  {
    "g": "ꄁ",
    "initial": "d",
    "final": "i",
    "tone": "x",
    "py": "dix",
    "ipa": "ti⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꂱꏾꀺꀂꄁ",
        "han": "对襟"
      },
      {
        "yi": "ꄁꃰꐺ",
        "han": "打流"
      },
      {
        "yi": "ꀂꄁꇇꌐ",
        "han": "袖章"
      },
      {
        "yi": "ꄁꃰꐺꌠ",
        "han": "浪子"
      },
      {
        "yi": "ꉢꀂꄁꃼ",
        "han": "我要买衣服"
      }
    ]
  },
  {
    "g": "ꄛ",
    "initial": "t",
    "final": "i",
    "tone": "x",
    "py": "tix",
    "ipa": "tʰi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈨꏀꄛꇰ",
        "han": "新闻公报"
      },
      {
        "yi": "ꃅꎁꇔꄛꇰ",
        "han": "免责声明"
      },
      {
        "yi": "ꌐꄛꑮ",
        "han": "序幕"
      },
      {
        "yi": "ꉱꇤꌠꄛꇰ",
        "han": "告绝"
      },
      {
        "yi": "ꄛꇰꌋꏣ",
        "han": "传入神经"
      }
    ]
  },
  {
    "g": "ꄷ",
    "initial": "dd",
    "final": "i",
    "tone": "x",
    "py": "ddix",
    "ipa": "di⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃅꇏꀋꉾꀋꃪ、ꃅꇏꄷꅠ",
        "han": "歪风邪气"
      },
      {
        "yi": "ꉪꏤꃅꄷꈻꐯꈻꇬꈻꐨ1-5ꇬꑟ",
        "han": "我们家乡最冷的气温有1-5度"
      },
      {
        "yi": "ꏦꎭꃅꄷ",
        "han": "加沙地带"
      },
      {
        "yi": "ꃅꄷꊾꁘ",
        "han": "地痞"
      },
      {
        "yi": "ꏸꃴꃅꄷ",
        "han": "蓝色星区"
      }
    ]
  },
  {
    "g": "ꅒ",
    "initial": "nd",
    "final": "i",
    "tone": "x",
    "py": "ndix",
    "ipa": "ndi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉻꅒꀑꇬꁮ",
        "han": "殉节"
      },
      {
        "yi": "ꑗꅒꌦꀋꏦ",
        "han": "视死如归"
      },
      {
        "yi": "ꉻꅒꅇꎹꃣꈌ",
        "han": "公诉案件"
      },
      {
        "yi": "ꐮꇖꅒ",
        "han": "争持"
      },
      {
        "yi": "ꑗꅒꇨꃃ",
        "han": "悲天悯人"
      }
    ]
  },
  {
    "g": "ꅩ",
    "initial": "hn",
    "final": "i",
    "tone": "x",
    "py": "hnix",
    "ipa": "n̥i⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊾꇨꅩꌬꀕ",
        "han": "酷虐"
      },
      {
        "yi": "ꅩꇉꀕ",
        "han": "火红"
      },
      {
        "yi": "ꉓꀍꅩꍅꅍ",
        "han": "活气"
      },
      {
        "yi": "ꅩꇬꀕ",
        "han": "红艳艳"
      },
      {
        "yi": "ꉗꀍꅩꍅ",
        "han": "生气勃勃"
      }
    ]
  },
  {
    "g": "ꅾ",
    "initial": "n",
    "final": "i",
    "tone": "x",
    "py": "nix",
    "ipa": "ni⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꅾꁘ",
        "han": "滋蔓"
      },
      {
        "yi": "ꅾꑓ",
        "han": "蚜服"
      },
      {
        "yi": "ꂷꆀ.ꏸꅾ",
        "han": "玛丽居里"
      },
      {
        "yi": "ꑳꆀꃛ.ꏸꅾ",
        "han": "伊丽芙居里"
      },
      {
        "yi": "ꈈꅾꉪꆀꊋ",
        "han": "科里奥利力"
      }
    ]
  },
  {
    "g": "ꆘ",
    "initial": "hl",
    "final": "i",
    "tone": "x",
    "py": "hlix",
    "ipa": "ɬi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꆘꅝꅍꁱꄉꌠꄯꒉ",
        "han": "失单"
      },
      {
        "yi": "ꇩꏤꈔꆘꅝ",
        "han": "亡国"
      },
      {
        "yi": "ꆘꅝꌋ",
        "han": "失主"
      },
      {
        "yi": "ꌉꆘꅝ",
        "han": "遇害"
      },
      {
        "yi": "ꂃꈩꆘꅝ",
        "han": "闪失"
      }
    ]
  },
  {
    "g": "ꆸ",
    "initial": "l",
    "final": "i",
    "tone": "x",
    "py": "lix",
    "ipa": "li⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃷꅍꆸꐔ",
        "han": "骨折"
      },
      {
        "yi": "ꃅꆸꂡ",
        "han": "马鬃"
      },
      {
        "yi": "ꆸꎡꂷ",
        "han": "领结"
      },
      {
        "yi": "ꀑꆸꀮ",
        "han": "暴卒"
      },
      {
        "yi": "ꆼꇨꆸꊋ",
        "han": "暴烈"
      }
    ]
  },
  {
    "g": "ꇛ",
    "initial": "g",
    "final": "i",
    "tone": "x",
    "py": "gix",
    "ipa": "ki⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇛꌺꑋꅉ",
        "han": "官署"
      },
      {
        "yi": "ꇛꌺꀀꅉ",
        "han": "官邸"
      },
      {
        "yi": "ꇛꌺꐊꑭ",
        "han": "僚佐"
      },
      {
        "yi": "ꏃꉸꇛꌺ",
        "han": "石壕吏"
      },
      {
        "yi": "ꇛꒉꌠ",
        "han": "显要"
      }
    ]
  },
  {
    "g": "ꇹ",
    "initial": "k",
    "final": "i",
    "tone": "x",
    "py": "kix",
    "ipa": "kʰi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇉꇹꅍꐕ",
        "han": "起锚"
      },
      {
        "yi": "ꇹꄣ",
        "han": "安排"
      },
      {
        "yi": "ꑭꇹꏣ",
        "han": "绊脚绳"
      },
      {
        "yi": "ꑭꇹ",
        "han": "绊脚"
      },
      {
        "yi": "ꑭꇹꇓ",
        "han": "绊脚石"
      }
    ]
  },
  {
    "g": "ꈕ",
    "initial": "gg",
    "final": "i",
    "tone": "x",
    "py": "ggix",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꉇ",
    "initial": "hx",
    "final": "i",
    "tone": "x",
    "py": "hxix",
    "ipa": "hi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉇꐥꊿ",
        "han": "游子"
      },
      {
        "yi": "ꉇꇷꃅ",
        "han": "撑场面"
      },
      {
        "yi": "ꀿꑳꉇ ꇷꄀꄖꌠ",
        "han": "外胚层"
      },
      {
        "yi": "ꄟꌤꉇꉀ",
        "han": "细胞外消化"
      },
      {
        "yi": "ꉇꅐꎆ",
        "han": "出项"
      }
    ]
  },
  {
    "g": "ꊎ",
    "initial": "z",
    "final": "i",
    "tone": "x",
    "py": "zix",
    "ipa": "tsi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊿꊎ ꅍ",
        "han": "骗局"
      },
      {
        "yi": "ꀋꌦꃅꌌꇬꊎ",
        "han": "活埋"
      },
      {
        "yi": "ꒉꈻꒉꊎ",
        "han": "漫灌"
      },
      {
        "yi": "ꑸꇬꊎ ꄉ",
        "han": "拘押"
      },
      {
        "yi": "ꃅꄡꑍꊎꇖꄡ",
        "han": "二十四节气"
      }
    ]
  },
  {
    "g": "ꊯ",
    "initial": "c",
    "final": "i",
    "tone": "x",
    "py": "cix",
    "ipa": "tsʰi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈬꊯꈬꉘ",
        "han": "高寒地区"
      },
      {
        "yi": "ꊯꉬꇗꏸꋍ",
        "han": "十五税一"
      },
      {
        "yi": "ꊯꍠ",
        "han": "纤细"
      },
      {
        "yi": "ꀋꈐꀋꉈ；ꉻꐽ；ꐽꊯ",
        "han": "公平"
      },
      {
        "yi": "ꋍꑵꃅꉜ、ꐡꐯꊯ",
        "han": "一刀切"
      }
    ]
  },
  {
    "g": "ꋑ",
    "initial": "zz",
    "final": "i",
    "tone": "x",
    "py": "zzix",
    "ipa": "dzi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋑꇬꑭ",
        "han": "桥头"
      },
      {
        "yi": "ꉘꃀꐮꋑ",
        "han": "初赛"
      },
      {
        "yi": "ꋑꀋꋒ",
        "han": "累累"
      },
      {
        "yi": "ꁨꌊꐯꋑ",
        "han": "邀请赛"
      },
      {
        "yi": "ꋑꎆ",
        "han": "存项"
      }
    ]
  },
  {
    "g": "ꋮ",
    "initial": "nz",
    "final": "i",
    "tone": "x",
    "py": "nzix",
    "ipa": "ndzi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋮꁧꉪꏦ",
        "han": "民主主义"
      },
      {
        "yi": "ꄇꒉꋮ",
        "han": "沿江"
      },
      {
        "yi": "ꎿꋮꂤꏂꀞ",
        "han": "海涂"
      },
      {
        "yi": "ꆸꌦꃼꋮꈽꁮ",
        "han": "甲状旁腺"
      },
      {
        "yi": "ꏃꃅꒈꀑꁯꋮ",
        "han": "北天极"
      }
    ]
  },
  {
    "g": "ꌊ",
    "initial": "s",
    "final": "i",
    "tone": "x",
    "py": "six",
    "ipa": "si⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_six.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꂁꏹꌊꈴ",
        "han": "前行暗流"
      },
      {
        "yi": "ꐙꄏꌊꆜ",
        "han": "筋疲力尽"
      },
      {
        "yi": "ꈻꌊꍯ",
        "han": "拖车"
      },
      {
        "yi": "ꇽꌊꁧ",
        "han": "开拔"
      },
      {
        "yi": "ꌊꁁ",
        "han": "漏夜"
      }
    ]
  },
  {
    "g": "ꌫ",
    "initial": "ss",
    "final": "i",
    "tone": "x",
    "py": "ssix",
    "ipa": "zi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈆꑪꇮꇐꌕꑵꌫꎆ",
        "han": "科技三项费用"
      },
      {
        "yi": "ꌫꅐ",
        "han": "支出"
      },
      {
        "yi": "ꊿꀂꏽꌫꎆ",
        "han": "人头费"
      },
      {
        "yi": "ꄜꃑꌫꄻ",
        "han": "颁布实施"
      },
      {
        "yi": "ꌫꅉ",
        "han": "用途"
      }
    ]
  },
  {
    "g": "ꏡ",
    "initial": "j",
    "final": "i",
    "tone": "x",
    "py": "jix",
    "ipa": "tɕi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋒꏡꈘ",
        "han": "断绝"
      },
      {
        "yi": "ꏡꃏꊨꄅ",
        "han": "识别"
      },
      {
        "yi": "ꋍꏅꏡꁈꏂ",
        "han": "群策群力"
      },
      {
        "yi": "ꄮꇱꐽꏡꃷꁨ",
        "han": "调合平均数"
      },
      {
        "yi": "ꌗꈴꏡ",
        "han": "气管"
      }
    ]
  },
  {
    "g": "ꏽ",
    "initial": "q",
    "final": "i",
    "tone": "x",
    "py": "qix",
    "ipa": "tɕʰi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀂꀱꀂꅲꏽ",
        "han": "反躬自问"
      },
      {
        "yi": "ꇷꌒꏽ",
        "han": "公诸同好"
      },
      {
        "yi": "ꊿꀂꏽꌤꅐ",
        "han": "人身事故"
      },
      {
        "yi": "ꈁꌦꄉꏽ",
        "han": "亢奋"
      },
      {
        "yi": "ꐒꇖꏽ",
        "han": "悲叹"
      }
    ]
  },
  {
    "g": "ꐙ",
    "initial": "jj",
    "final": "i",
    "tone": "x",
    "py": "jjix",
    "ipa": "dʑi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐙꁏ",
        "han": "农奴"
      },
      {
        "yi": "ꄖꑟꄗꃅꈇꃅꐙꌠ",
        "han": "经度地带性"
      },
      {
        "yi": "ꐊꐙ",
        "han": "兼备"
      },
      {
        "yi": "ꋌꐛꋌꐙ、ꋌꐛꋌꐙꁆꏯ",
        "han": "自然界"
      },
      {
        "yi": "ꒉꃅꐙꌠꄊ",
        "han": "液态氮"
      }
    ]
  },
  {
    "g": "ꐲ",
    "initial": "nj",
    "final": "i",
    "tone": "x",
    "py": "njix",
    "ipa": "ndʑi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊿꐲ",
        "han": "命根"
      },
      {
        "yi": "ꐲꇨ",
        "han": "冒进"
      },
      {
        "yi": "ꐲꀠ",
        "han": "迅捷"
      },
      {
        "yi": "ꊿꐲꆏꋚ",
        "han": "粮是生命之根"
      },
      {
        "yi": "ꉐꐲꇙꃚ",
        "han": "带音"
      }
    ]
  },
  {
    "g": "ꑋ",
    "initial": "ny",
    "final": "i",
    "tone": "x",
    "py": "nyix",
    "ipa": "ȵi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑋꈌꊪꃅ",
        "han": "春地"
      },
      {
        "yi": "ꁁꍠꉷꁧꌠꀾꋍꁬꌠꈍꑋꉬ",
        "han": "去攀枝花的票多少钱一张"
      },
      {
        "yi": "ꀀꂱꑋꏵꉙ",
        "han": "摇篮曲"
      },
      {
        "yi": "ꍫꍪꀮꃀꏃꉐꑋꊏꐚ",
        "han": "早晚两餐七百二十顿"
      },
      {
        "yi": "ꂱꑱꑋꅉꑌ",
        "han": "入席"
      }
    ]
  },
  {
    "g": "ꑞ",
    "initial": "x",
    "final": "i",
    "tone": "x",
    "py": "xix",
    "ipa": "ɕi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑞꁆꏯꑌ",
        "han": "各条战线"
      },
      {
        "yi": "ꑞꏯꑌꐯꀋꌡ",
        "han": "各向异性"
      },
      {
        "yi": "ꑞꃅꄎꌠꑞꃅ",
        "han": "各尽其能"
      },
      {
        "yi": "ꆏꇩꏤꑞꀕꈨꇬꋽꎖꌠꆫꈩꅉꑟꋺ",
        "han": "你到过哪些国家的旅游景点"
      },
      {
        "yi": "ꑞꂷ",
        "han": "哪个"
      }
    ]
  },
  {
    "g": "ꑲ",
    "initial": "y",
    "final": "i",
    "tone": "x",
    "py": "yix",
    "ipa": "ʑi⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yix.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑞꉬꂿ；ꉬꑲꆏ",
        "han": "凡是"
      },
      {
        "yi": "ꆏꈌꀋꁧꑲꆏꉢꌤꋋꐘꃅꀋꀬ",
        "han": "没有你的批准我不敢做这件事"
      },
      {
        "yi": "ꑌꑲꇺꏣ",
        "han": "联系纽带"
      },
      {
        "yi": "ꑲꃼꑲꋉꑘ",
        "han": "房地产业"
      },
      {
        "yi": "ꆏꍮꊪꇽꑲꌧꀕ",
        "han": "你会开车吗"
      }
    ]
  },
  {
    "g": "ꀂ",
    "initial": "",
    "final": "i",
    "tone": "",
    "py": "i",
    "ipa": "i³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_i.mp3",
    "radical": "꒤",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃬꀂꏾꁬ",
        "han": "鸡头"
      },
      {
        "yi": "ꂱꏾꀺꀂꄁ",
        "han": "对襟"
      },
      {
        "yi": "ꌩꁧꀂꏽꃥꋩꅉ",
        "han": "树顶旅馆"
      },
      {
        "yi": "ꀂꏾꇮ",
        "han": "梳头"
      },
      {
        "yi": "ꀂꀱꀀꄸꎹ",
        "han": "反求诸己"
      }
    ]
  },
  {
    "g": "ꀘ",
    "initial": "b",
    "final": "i",
    "tone": "",
    "py": "bi",
    "ipa": "pi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bi.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌦꌋꋧꀘ",
        "han": "外道"
      },
      {
        "yi": "ꉢꄯꒉꀘꀋꏾ",
        "han": "我不愿意读书"
      },
      {
        "yi": "ꃚꀋꋊꃅꀘ",
        "han": "默读"
      },
      {
        "yi": "ꆄꁮꁋꀘ、ꆅꌌꊿꇳ",
        "han": "散步病菌"
      },
      {
        "yi": "ꎆꐆꋙꀘ",
        "han": "败家子"
      }
    ]
  },
  {
    "g": "ꀺ",
    "initial": "p",
    "final": "i",
    "tone": "",
    "py": "pi",
    "ipa": "pʰi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pi.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀺꇐꑲꇐ",
        "han": "风采"
      },
      {
        "yi": "ꐛꊂꀊꏀꀺ",
        "han": "开创新局面"
      },
      {
        "yi": "ꅇꉻꀺ",
        "han": "开宗明义"
      },
      {
        "yi": "ꑖꀺ",
        "han": "文雅"
      },
      {
        "yi": "ꀺꀖ、ꇧꈌꈴ、ꀺꀖ",
        "han": "攻关"
      }
    ]
  },
  {
    "g": "ꁘ",
    "initial": "bb",
    "final": "i",
    "tone": "",
    "py": "bbi",
    "ipa": "bi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbi.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꋍꁘꋍꊐꍆ",
        "han": "步步为营"
      },
      {
        "yi": "ꍔꁘꐛꐨ",
        "han": "扩散现象"
      },
      {
        "yi": "ꁮꋌꐙꁘ",
        "han": "敌伪"
      },
      {
        "yi": "ꅲꁘ",
        "han": "豁子"
      },
      {
        "yi": "ꒈꂪꁘꌠ",
        "han": "活水"
      }
    ]
  },
  {
    "g": "ꁸ",
    "initial": "nb",
    "final": "i",
    "tone": "",
    "py": "nbi",
    "ipa": "mbi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbi.mp3",
    "radical": "꒪",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꁸꄉꀵꄜ",
        "han": "分摊"
      },
      {
        "yi": "ꍔꁸ",
        "han": "扩分"
      },
      {
        "yi": "ꊋꁸꐞ",
        "han": "力的分解"
      },
      {
        "yi": "ꂷꌗꁸꏦ",
        "han": "珠算除法"
      },
      {
        "yi": "ꉹꁸ",
        "han": "门类"
      }
    ]
  },
  {
    "g": "ꂓ",
    "initial": "hm",
    "final": "i",
    "tone": "",
    "py": "hmi",
    "ipa": "m̥i³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmi.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꂓꌗꃅꇏ",
        "han": "名节"
      },
      {
        "yi": "ꂓꀨꇬꎍ",
        "han": "名列前茅"
      },
      {
        "yi": "ꂓꐥ",
        "han": "名家"
      },
      {
        "yi": "ꂓꌗꊿꄭ",
        "han": "名缰利锁"
      },
      {
        "yi": "ꌗꂓꏦ",
        "han": "单位制"
      }
    ]
  },
  {
    "g": "ꂰ",
    "initial": "m",
    "final": "i",
    "tone": "",
    "py": "mi",
    "ipa": "mi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mi.mp3",
    "radical": "꒘",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꑸꂰꆀꑸꉗꀑꅔꃀ",
        "han": "亚美尼亚高原"
      },
      {
        "yi": "ꇑꐊꂰ",
        "han": "氯化镁"
      },
      {
        "yi": "ꆆꂰꍏ",
        "han": "南美洲"
      },
      {
        "yi": "ꁍꂰꋇ",
        "han": "普米族"
      },
      {
        "yi": "ꂱꂰꈢ",
        "han": "痛风"
      }
    ]
  },
  {
    "g": "ꃏ",
    "initial": "f",
    "final": "i",
    "tone": "",
    "py": "fi",
    "ipa": "fi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fi.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎽꇑꃏꆹ",
        "han": "吊儿郎当"
      },
      {
        "yi": "ꀋꆏꃅꍯꄖꑟꌠꃏꏸꐤꀕ",
        "han": "有直达成都的飞机吗"
      },
      {
        "yi": "ꏾꃏꊮꊫ",
        "han": "大叶油菜"
      },
      {
        "yi": "ꃏꊪꊋ",
        "han": "分子力"
      },
      {
        "yi": "ꀃꑍꃏꏸꀙꏢꏭꁧꌠꐤꀕ",
        "han": "今天有飞往北京的飞机吗"
      }
    ]
  },
  {
    "g": "ꃤ",
    "initial": "v",
    "final": "i",
    "tone": "",
    "py": "vi",
    "ipa": "vi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vi.mp3",
    "radical": "꒟",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꁨꁻꊋꃤ",
        "han": "辐射能力"
      },
      {
        "yi": "ꂱꑱꇩꏤꃷꋪꏦꃤ",
        "han": "各国律例"
      },
      {
        "yi": "ꑽꃤꅓ",
        "han": "徒刑"
      },
      {
        "yi": "ꈨꑭꊋꃤ",
        "han": "太阳光能"
      },
      {
        "yi": "ꎆꐪꊋꃤ",
        "han": "财势"
      }
    ]
  },
  {
    "g": "ꄂ",
    "initial": "d",
    "final": "i",
    "tone": "",
    "py": "di",
    "ipa": "ti³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_di.mp3",
    "radical": "꒗",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꄂꄀꈭꄿꑅꇷ",
        "han": "单层柱状上皮"
      },
      {
        "yi": "ꄂꑣꌩ",
        "han": "丁香"
      },
      {
        "yi": "ꄂꎂꐊꐈꇐ",
        "han": "单调函数"
      },
      {
        "yi": "ꄂꃴꆏꈧꅐ",
        "han": "拨云见日"
      },
      {
        "yi": "ꈭꄅꄂꑟ",
        "han": "环抱折线"
      }
    ]
  },
  {
    "g": "ꄜ",
    "initial": "t",
    "final": "i",
    "tone": "",
    "py": "ti",
    "ipa": "tʰi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ti.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꂶꄜꁱꂷ",
        "han": "方块字"
      },
      {
        "yi": "ꎕꂓꄜ",
        "han": "报考"
      },
      {
        "yi": "ꌉꄜ",
        "han": "宣战"
      },
      {
        "yi": "ꃆꃀꁱꇐꄜ",
        "han": "报告文学"
      },
      {
        "yi": "ꃺꑌꄂꒆꌅꄜ",
        "han": "姐妹染色单体"
      }
    ]
  },
  {
    "g": "ꄸ",
    "initial": "dd",
    "final": "i",
    "tone": "",
    "py": "ddi",
    "ipa": "di³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddi.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꂄꃅꄸꏽ",
        "han": "忘恩负义"
      },
      {
        "yi": "ꆳꊸꇤꄸ",
        "han": "风炉"
      },
      {
        "yi": "ꂄꄸ",
        "han": "好歹"
      },
      {
        "yi": "ꐗꇤꄸꌗ",
        "han": "焦炉气"
      },
      {
        "yi": "ꑗꅪꁯꄸ",
        "han": "紫胶虫"
      }
    ]
  },
  {
    "g": "ꅓ",
    "initial": "nd",
    "final": "i",
    "tone": "",
    "py": "ndi",
    "ipa": "ndi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndi.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑽꃤꏓꄉꀞꅓ",
        "han": "数罪并罚"
      },
      {
        "yi": "ꌡꀠꅓꐨ",
        "han": "样本容量"
      },
      {
        "yi": "ꅓꐨꍔ",
        "han": "扩容"
      },
      {
        "yi": "ꄺꀱꑘꅓꌤꃅꅉ",
        "han": "劳动改造机关"
      },
      {
        "yi": "ꅓꃤꑽꃤꐯꀋꄐ",
        "han": "罚不当罪"
      }
    ]
  },
  {
    "g": "ꅪ",
    "initial": "hn",
    "final": "i",
    "tone": "",
    "py": "hni",
    "ipa": "n̥i³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hni.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌺꅪꐥꊯ",
        "han": "男女平等"
      },
      {
        "yi": "ꊾꋠꁍ ꈌꅪ",
        "han": "混世魔王"
      },
      {
        "yi": "ꇓꅪ",
        "han": "鸡冠石"
      },
      {
        "yi": "ꃀꉘꌺꅪ",
        "han": "妇幼"
      },
      {
        "yi": "ꌋꅪꎀꍹ",
        "han": "女性组织"
      }
    ]
  },
  {
    "g": "ꅿ",
    "initial": "n",
    "final": "i",
    "tone": "",
    "py": "ni",
    "ipa": "ni³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ni.mp3",
    "radical": "꒑",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꄬꅿꊱꆀꋒꃯꉜ",
        "han": "托里折利实验"
      },
      {
        "yi": "ꂪꑟꅿꎎꐨ",
        "han": "切线的斜率"
      },
      {
        "yi": "ꅿꅍꀋꐥ",
        "han": "无味"
      },
      {
        "yi": "ꅿꇳꑟ",
        "han": "线香"
      },
      {
        "yi": "ꁮꏶꅿꀊꐎ",
        "han": "银鼠"
      }
    ]
  },
  {
    "g": "ꆙ",
    "initial": "hl",
    "final": "i",
    "tone": "",
    "py": "hli",
    "ipa": "ɬi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hli.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꆙꀕꆠꀕꌺ",
        "han": "花花公子"
      },
      {
        "yi": "ꉱꈐꑮꆙꀀꅉ",
        "han": "闺房"
      },
      {
        "yi": "ꈎꏅꆪꆙ",
        "han": "年节"
      },
      {
        "yi": "ꆙꅝ",
        "han": "遗失"
      },
      {
        "yi": "ꂱꇱꎭꇯꆙ",
        "han": "喜怒哀乐混杂"
      }
    ]
  },
  {
    "g": "ꆹ",
    "initial": "l",
    "final": "i",
    "tone": "",
    "py": "li",
    "ipa": "li³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_li.mp3",
    "radical": "꒑",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꊨꆹꁘꆅ",
        "han": "大骨节病"
      },
      {
        "yi": "ꆹꏮꈌ",
        "han": "转折点"
      },
      {
        "yi": "ꂵꀒꆹꑟ",
        "han": "猛进"
      },
      {
        "yi": "ꅇꆹꉉꀱꏽ",
        "han": "旧调重弹"
      },
      {
        "yi": "……ꑎꆹꄈꍑ",
        "han": "宁肯"
      }
    ]
  },
  {
    "g": "ꇜ",
    "initial": "g",
    "final": "i",
    "tone": "",
    "py": "gi",
    "ipa": "ki³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gi.mp3",
    "radical": "꒜",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꇜꊐ",
        "han": "官阶"
      },
      {
        "yi": "ꀊꆨꇜꎖꏦ",
        "han": "科举"
      },
      {
        "yi": "ꇜꑳꈚꑳ",
        "han": "公馆"
      },
      {
        "yi": "ꇜꌋꏦ",
        "han": "科第"
      },
      {
        "yi": "ꃛꇨꊝꄖꇜ",
        "han": "湖广总督"
      }
    ]
  },
  {
    "g": "ꇺ",
    "initial": "k",
    "final": "i",
    "tone": "",
    "py": "ki",
    "ipa": "kʰi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ki.mp3",
    "radical": "꒧",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꌤꇺꄯꒉ",
        "han": "文牍"
      },
      {
        "yi": "ꏀꇺꊥꃃ",
        "han": "螺母"
      },
      {
        "yi": "ꎸꇺꑬꅮ",
        "han": "钉鞋"
      },
      {
        "yi": "ꎸꇺꂥꀠ",
        "han": "钉帽"
      },
      {
        "yi": "ꌐꁨꃅꏱꇺ",
        "han": "定向指导"
      }
    ]
  },
  {
    "g": "ꈖ",
    "initial": "gg",
    "final": "i",
    "tone": "",
    "py": "ggi",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggi.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꉈ",
    "initial": "hx",
    "final": "i",
    "tone": "",
    "py": "hxi",
    "ipa": "hi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxi.mp3",
    "radical": "꒿",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐮꐊꄉꉈꈽ",
        "han": "共同奋斗"
      },
      {
        "yi": "ꅔꀋꅐꃅꉈꈽ",
        "han": "地下斗争"
      },
      {
        "yi": "ꉈꏭ",
        "han": "外边"
      },
      {
        "yi": "ꐾꉈꀕ",
        "han": "平展"
      },
      {
        "yi": "ꇊꑴꉈꄉ",
        "han": "凭栏"
      }
    ]
  },
  {
    "g": "ꊏ",
    "initial": "z",
    "final": "i",
    "tone": "",
    "py": "zi",
    "ipa": "tsi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zi.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌡꎹꋲꊏ",
        "han": "求同存异"
      },
      {
        "yi": "ꊏꄉꌉ",
        "han": "诱杀"
      },
      {
        "yi": "ꃚꊏꏸ",
        "han": "留声机"
      },
      {
        "yi": "ꆏꄑꉡꊏ",
        "han": "尔诈我虞"
      },
      {
        "yi": "ꂁꊏꏽ",
        "han": "欺蒙"
      }
    ]
  },
  {
    "g": "ꊰ",
    "initial": "c",
    "final": "i",
    "tone": "",
    "py": "ci",
    "ipa": "tsʰi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ci.mp3",
    "radical": "꒓",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꋍꏳꌧꆏꊰꏱꈴ",
        "han": "举一反三"
      },
      {
        "yi": "ꂷꊰ",
        "han": "落果"
      },
      {
        "yi": "ꇉꆖꊰ",
        "han": "小花棘豆"
      },
      {
        "yi": "ꎆꃀ ꀨ ꊰ",
        "han": "金融资本"
      },
      {
        "yi": "ꁈꁧꊰꈫꁁꇬꅑ",
        "han": "下半旗"
      }
    ]
  },
  {
    "g": "ꋒ",
    "initial": "zz",
    "final": "i",
    "tone": "",
    "py": "zzi",
    "ipa": "dzi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzi.mp3",
    "radical": "꒬",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊨꋒꏤꇗ",
        "han": "乘余定理"
      },
      {
        "yi": "ꇇꋒꊂꀳ",
        "han": "背着手"
      },
      {
        "yi": "ꋒꏶꈻ",
        "han": "剩磁"
      },
      {
        "yi": "ꊨꋒꏓ",
        "han": "补集"
      },
      {
        "yi": "ꇇꋒꐧꄙ",
        "han": "叉腰"
      }
    ]
  },
  {
    "g": "ꋯ",
    "initial": "nz",
    "final": "i",
    "tone": "",
    "py": "nzi",
    "ipa": "ndzi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzi.mp3",
    "radical": "꓆",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꍡꋯ",
        "han": "伴唱"
      },
      {
        "yi": "ꋯꐊꃚ",
        "han": "伴音"
      },
      {
        "yi": "ꋯꊥꃃ",
        "han": "图钉"
      },
      {
        "yi": "ꋯꉈꎆꊐ",
        "han": "境外投资"
      },
      {
        "yi": "ꋯꉈ",
        "han": "境外"
      }
    ]
  },
  {
    "g": "ꌋ",
    "initial": "s",
    "final": "i",
    "tone": "",
    "py": "si",
    "ipa": "si³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_si.mp3",
    "radical": "꒩",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꋚꌋ",
        "han": "胎气"
      },
      {
        "yi": "ꍔꏓꄊꍗꑮꌋꀣ",
        "han": "镇人大主席候选人"
      },
      {
        "yi": "ꌋꅪꃚꋒ",
        "han": "女声"
      },
      {
        "yi": "ꌋꀸ",
        "han": "呕血"
      },
      {
        "yi": "ꇐꑌꌋꉆ",
        "han": "诗情画意"
      }
    ]
  },
  {
    "g": "ꌬ",
    "initial": "ss",
    "final": "i",
    "tone": "",
    "py": "ssi",
    "ipa": "zi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssi.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊋꌬ꒧ꃅ",
        "han": "体力劳动"
      },
      {
        "yi": "ꈎꆪꄯꒉꀉꑌꈎꃅꌬ",
        "han": "万年历"
      },
      {
        "yi": "ꅇꌬ",
        "han": "口齿"
      },
      {
        "yi": "ꀊꃴꌬꈧ",
        "han": "绿色消费"
      },
      {
        "yi": "ꍞꊟꃄꌬ",
        "han": "监督执行"
      }
    ]
  },
  {
    "g": "ꏢ",
    "initial": "j",
    "final": "i",
    "tone": "",
    "py": "ji",
    "ipa": "tɕi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ji.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊆꊧꉸꏢꆆ",
        "han": "烷基磺酸钠"
      },
      {
        "yi": "ꑴꏢꑴꑭꋌ",
        "han": "乙酸乙烯脂"
      },
      {
        "yi": "ꊰꑋꏢꌠ",
        "han": "第十二条"
      },
      {
        "yi": "ꋄꏢꇤ",
        "han": "醋酸酐"
      },
      {
        "yi": "ꇢꊭꏢꇋ",
        "han": "挡横儿"
      }
    ]
  },
  {
    "g": "ꏾ",
    "initial": "q",
    "final": "i",
    "tone": "",
    "py": "qi",
    "ipa": "tɕʰi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qi.mp3",
    "radical": "꒼",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃬꂵꏾꁒ",
        "han": "鸡筋菜"
      },
      {
        "yi": "ꉜꏾꁱꇐ",
        "han": "热门文章"
      },
      {
        "yi": "ꏾꏫꄳ",
        "han": "清教徒"
      },
      {
        "yi": "ꏾꂪꑴꁱ、ꅇꂫꑴꂷ",
        "han": "尾花"
      },
      {
        "yi": "ꏾꊨꊈꈐ",
        "han": "盆腔"
      }
    ]
  },
  {
    "g": "ꐚ",
    "initial": "jj",
    "final": "i",
    "tone": "",
    "py": "jji",
    "ipa": "dʑi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jji.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑌꐚꀕ",
        "han": "活活"
      },
      {
        "yi": "ꇗꊈ、ꇗꅉꃶꐚꌠ",
        "han": "真理"
      },
      {
        "yi": "ꃶꐚꃅꑇ",
        "han": "确信"
      },
      {
        "yi": "ꀁꑌꏓꎬꐚ",
        "han": "低聚糖"
      },
      {
        "yi": "ꎃꐚꋽꌠ",
        "han": "素雅"
      }
    ]
  },
  {
    "g": "ꐳ",
    "initial": "nj",
    "final": "i",
    "tone": "",
    "py": "nji",
    "ipa": "ndʑi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nji.mp3",
    "radical": "꒑",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꎆꏣꐳꇨ",
        "han": "经济过热"
      },
      {
        "yi": "ꀑꐳꂪꐳ",
        "han": "粗线条"
      },
      {
        "yi": "ꐳꆌꈭꏮꇙꐺ",
        "han": "匀速圆周运动"
      },
      {
        "yi": "ꐳꈌꉈꈌ",
        "han": "风口浪尖"
      },
      {
        "yi": "ꉪꐳꁏꐳ",
        "han": "不假思索"
      }
    ]
  },
  {
    "g": "ꑌ",
    "initial": "ny",
    "final": "i",
    "tone": "",
    "py": "nyi",
    "ipa": "ȵi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyi.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀉꑌꃅꌌꉉꀽ",
        "han": "旁征博引"
      },
      {
        "yi": "ꊸꑌ",
        "han": "潜热"
      },
      {
        "yi": "ꍠꑌꐴꀋꄓ",
        "han": "坚忍不拔"
      },
      {
        "yi": "ꐧꊈꀋꑌꇙꀕ",
        "han": "腔肠动物"
      },
      {
        "yi": "ꅇꑌꉐꑲ",
        "han": "通联"
      }
    ]
  },
  {
    "g": "ꑟ",
    "initial": "x",
    "final": "i",
    "tone": "",
    "py": "xi",
    "ipa": "ɕi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xi.mp3",
    "radical": "꒼",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꈊꃀꑟ",
        "han": "入夜"
      },
      {
        "yi": "ꈌꃖꄂꑟ",
        "han": "封闭折线"
      },
      {
        "yi": "ꑖꈈꀕ、ꑗꑟꅑ",
        "han": "温柔"
      },
      {
        "yi": "ꑳꑟ",
        "han": "烟斗丝"
      },
      {
        "yi": "ꈭꁁꈴꑟ",
        "han": "半径"
      }
    ]
  },
  {
    "g": "ꑳ",
    "initial": "y",
    "final": "i",
    "tone": "",
    "py": "yi",
    "ipa": "ʑi³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yi.mp3",
    "radical": "꒜",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑳꇑꋆꊵ",
        "han": "耶律楚材"
      },
      {
        "yi": "ꉘꃀꀉꑳꒆ",
        "han": "开怀儿"
      },
      {
        "yi": "ꒈꋌꑳ",
        "han": "浴室"
      },
      {
        "yi": "ꑳꇐ",
        "han": "才华"
      },
      {
        "yi": "ꈪꏮꈴꑳ",
        "han": "回廊"
      }
    ]
  },
  {
    "g": "ꀃ",
    "initial": "",
    "final": "i",
    "tone": "p",
    "py": "ip",
    "ipa": "i²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ip.mp3",
    "radical": "꒬",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀉꑳꀃꃀꃚ",
        "han": "小儿腹泻"
      },
      {
        "yi": "ꀱꀃꃅꁧ",
        "han": "旋里"
      },
      {
        "yi": "ꌩꀃꈈ",
        "han": "柴扉"
      },
      {
        "yi": "ꀃꃀꆊꌧ",
        "han": "腹肌"
      },
      {
        "yi": "ꉢꀃꑍꊼꇅꇁꑎꀐ",
        "han": "我今天来迟了"
      }
    ]
  },
  {
    "g": "ꀙ",
    "initial": "b",
    "final": "i",
    "tone": "p",
    "py": "bip",
    "ipa": "pi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bip.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃛꀙ、ꃛꆆ",
        "han": "湖广"
      },
      {
        "yi": "ꉢꈍꃅꁧꑲꆀꀙꏢꑟꄎ",
        "han": "我怎样走才能到达北京"
      },
      {
        "yi": "ꎹꄓꀙꄃꇓꈓꆹ",
        "han": "早发白帝城"
      },
      {
        "yi": "ꀙꉼ",
        "han": "百合"
      },
      {
        "yi": "ꀊꉼꀙꃀ",
        "han": "阿訇"
      }
    ]
  },
  {
    "g": "ꀻ",
    "initial": "p",
    "final": "i",
    "tone": "p",
    "py": "pip",
    "ipa": "pʰi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pip.mp3",
    "radical": "꒼",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀻꊪꀧ",
        "han": "匹兹堡"
      },
      {
        "yi": "ꆀꀻꏹ",
        "han": "泥盆纪"
      },
      {
        "yi": "ꇉꈴꈢꀻ",
        "han": "船闸"
      },
      {
        "yi": "ꄠꀻꄐ",
        "han": "太平道"
      },
      {
        "yi": "ꀻꎸ",
        "han": "平声"
      }
    ]
  },
  {
    "g": "ꁙ",
    "initial": "bb",
    "final": "i",
    "tone": "p",
    "py": "bbip",
    "ipa": "bi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbip.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆹꅜꐣꁙ",
        "han": "褡裢"
      },
      {
        "yi": "ꉌꐣꁙ",
        "han": "大袋鼠"
      },
      {
        "yi": "ꃷꁙ",
        "han": "兜子"
      },
      {
        "yi": "ꃛꆺꁙꁖꅉꀧꏿꐎ",
        "han": "甲状腺蛋白"
      },
      {
        "yi": "ꃛꁙ",
        "han": "声息"
      }
    ]
  },
  {
    "g": "ꁹ",
    "initial": "nb",
    "final": "i",
    "tone": "p",
    "py": "nbip",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbip.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꂔ",
    "initial": "hm",
    "final": "i",
    "tone": "p",
    "py": "hmip",
    "ipa": "m̥i²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmip.mp3",
    "radical": "꒨",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꂔꈴ",
        "han": "腊熟"
      },
      {
        "yi": "ꂔꀣꂶꂷ",
        "han": "蒴果"
      },
      {
        "yi": "ꂷꂔꆏꊧꆜ",
        "han": "瓜熟蒂落"
      },
      {
        "yi": "ꉺꀕꎹꂔ",
        "han": "盒子菜"
      },
      {
        "yi": "ꂔꀋꈴ",
        "han": "夹生"
      }
    ]
  },
  {
    "g": "ꂱ",
    "initial": "m",
    "final": "i",
    "tone": "p",
    "py": "mip",
    "ipa": "mi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mip.mp3",
    "radical": "꒘",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎭꌺꂱꂿꋉ",
        "han": "平地楼台"
      },
      {
        "yi": "ꀑꆊꈂꂱ",
        "han": "颅盖"
      },
      {
        "yi": "ꋍꂱꁰꒌ",
        "han": "合家欢"
      },
      {
        "yi": "ꍫꆾꂱꋌ",
        "han": "春雷霉素"
      },
      {
        "yi": "ꂱꇊꄜꋊ",
        "han": "门罗宣言"
      }
    ]
  },
  {
    "g": "ꃐ",
    "initial": "f",
    "final": "i",
    "tone": "p",
    "py": "fip",
    "ipa": "fi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fip.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆺꄓꃐ",
        "han": "立德粉"
      },
      {
        "yi": "ꃐꎴꄉꌉꃢꌠ",
        "han": "淝水之战"
      },
      {
        "yi": "ꃐꍰꇓꈓ",
        "han": "费城"
      },
      {
        "yi": "ꃐꍰꇓꈐ",
        "han": "肥城"
      },
      {
        "yi": "ꃐꄃꆆꄊꇬ",
        "han": "非迪南大公"
      }
    ]
  },
  {
    "g": "ꃥ",
    "initial": "v",
    "final": "i",
    "tone": "p",
    "py": "vip",
    "ipa": "vi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vip.mp3",
    "radical": "꒙",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃥꀀꑳ",
        "han": "客店"
      },
      {
        "yi": "ꃥꁨꄯꒉ",
        "han": "知单"
      },
      {
        "yi": "ꃥꋠ",
        "han": "宰客"
      },
      {
        "yi": "ꃥꌺ",
        "han": "丹田"
      },
      {
        "yi": "ꀛꐂꄹꃥ",
        "han": "舞客"
      }
    ]
  },
  {
    "g": "ꄃ",
    "initial": "d",
    "final": "i",
    "tone": "p",
    "py": "dip",
    "ipa": "ti²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dip.mp3",
    "radical": "꒳",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃔꑭꌦꄃ",
        "han": "法西斯蒂"
      },
      {
        "yi": "ꄃꀜꁯꍛ",
        "han": "地鳖"
      },
      {
        "yi": "ꄃꐛꋌ",
        "han": "凝脂"
      },
      {
        "yi": "ꌌꄃꄜ",
        "han": "四叠体"
      },
      {
        "yi": "ꄃ ꐛ",
        "han": "冷凝"
      }
    ]
  },
  {
    "g": "ꄝ",
    "initial": "t",
    "final": "i",
    "tone": "p",
    "py": "tip",
    "ipa": "tʰi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tip.mp3",
    "radical": "꒕",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꑸꄝ",
        "han": "洋铁"
      },
      {
        "yi": "ꁌꄝꏛꅉ",
        "han": "老区"
      },
      {
        "yi": "ꇬꎷ、ꄝꀋꏯ",
        "han": "保持"
      },
      {
        "yi": "ꄝꐰꁵ",
        "han": "下放"
      },
      {
        "yi": "ꆺꄝꃚ",
        "han": "喉音"
      }
    ]
  },
  {
    "g": "ꄹ",
    "initial": "dd",
    "final": "i",
    "tone": "p",
    "py": "ddip",
    "ipa": "di²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddip.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄐꌗꄹꏦ",
        "han": "预算制"
      },
      {
        "yi": "ꑱꌋꄹꏦ",
        "han": "家长制"
      },
      {
        "yi": "ꇢꆣꇽꄹꏦ",
        "han": "仲裁制度"
      },
      {
        "yi": "ꃅꇏꄹꄀ",
        "han": "圈占"
      },
      {
        "yi": "ꁻꌐꆽꎍꄹꏦ",
        "han": "目标责任制"
      }
    ]
  },
  {
    "g": "ꅔ",
    "initial": "nd",
    "final": "i",
    "tone": "p",
    "py": "ndip",
    "ipa": "ndi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndip.mp3",
    "radical": "꒧",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꄤꌦꂷꆀꑸꎿꅔ",
        "han": "塔斯马尼亚岛"
      },
      {
        "yi": "ꄸꂁꄸꅔ",
        "han": "藏垢纳污"
      },
      {
        "yi": "ꍏꎭꎿꅔꋇ",
        "han": "中沙群岛"
      },
      {
        "yi": "ꉻꄃꎿꅔ",
        "han": "活地岛"
      },
      {
        "yi": "ꅔꋦꀕꁧ",
        "han": "陆生殖物"
      }
    ]
  },
  {
    "g": "ꅫ",
    "initial": "hn",
    "final": "i",
    "tone": "p",
    "py": "hnip",
    "ipa": "n̥i²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnip.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꅫꐛ、ꅫ",
        "han": "回潮"
      },
      {
        "yi": "ꃅꌗꅫꏻ",
        "han": "空气湿润"
      },
      {
        "yi": "ꊸꍍꅫ",
        "han": "热污染"
      },
      {
        "yi": "ꅫꏻ",
        "han": "潮湿"
      },
      {
        "yi": "ꅫꐨ",
        "han": "湿度"
      }
    ]
  },
  {
    "g": "ꆀ",
    "initial": "n",
    "final": "i",
    "tone": "p",
    "py": "nip",
    "ipa": "ni²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nip.mp3",
    "radical": "꒬",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀑꐊꆀꏢꐛ",
        "han": "氧化磷酸化"
      },
      {
        "yi": "ꃀꌚꆏꆀ",
        "han": "墨索里尼"
      },
      {
        "yi": "ꄐꅍꀊꂥꆀꏢꐥꇐ",
        "han": "高能磷酸物"
      },
      {
        "yi": "ꆀꏢꏣ",
        "han": "磷酸键"
      },
      {
        "yi": "ꌋꐊꆀꋌ",
        "han": "有机磷剂"
      }
    ]
  },
  {
    "g": "ꆚ",
    "initial": "hl",
    "final": "i",
    "tone": "p",
    "py": "hlip",
    "ipa": "ɬi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlip.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꁁꆚꄻꎂꐛ",
        "han": "半波整流"
      },
      {
        "yi": "ꆚꏮ",
        "han": "周波"
      },
      {
        "yi": "ꁧꏖꆚ",
        "han": "相干波"
      },
      {
        "yi": "ꃚꆚꀁꂥꌠ",
        "han": "低声波"
      },
      {
        "yi": "ꃚꐱꆚ、ꃙꐂꃚꆚ",
        "han": "超声波"
      }
    ]
  },
  {
    "g": "ꆺ",
    "initial": "l",
    "final": "i",
    "tone": "p",
    "py": "lip",
    "ipa": "li²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lip.mp3",
    "radical": "꒨",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏤꆺ",
        "han": "加勒"
      },
      {
        "yi": "ꋪꆺꁥꌺ",
        "han": "附睾丸"
      },
      {
        "yi": "ꇱꆺꇂꎿꅔ",
        "han": "格陵兰岛"
      },
      {
        "yi": "ꃆꆺꎹꒊꃀ",
        "han": "穆利什河"
      },
      {
        "yi": "ꐳꆺꁘꀊꅪ",
        "han": "红缨枪"
      }
    ]
  },
  {
    "g": "ꇝ",
    "initial": "g",
    "final": "i",
    "tone": "p",
    "py": "gip",
    "ipa": "ki²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gip.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꄓꇩꊯꊪꆪꇝꂱ",
        "han": "德国十一月革命"
      },
      {
        "yi": "ꉰꄃꇝꂱ",
        "han": "海地革命"
      },
      {
        "yi": "ꇝꉼꉟ",
        "han": "隔河岩"
      },
      {
        "yi": "ꇝꑮꐛꁏ",
        "han": "格式反应"
      },
      {
        "yi": "ꑞꑌꇝꀋꇬ",
        "han": "不顾一切"
      }
    ]
  },
  {
    "g": "ꇻ",
    "initial": "k",
    "final": "i",
    "tone": "p",
    "py": "kip",
    "ipa": "kʰi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kip.mp3",
    "radical": "꒾",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇡ.ꅿꌒꇻ",
        "han": "盖吕萨克"
      },
      {
        "yi": "ꇻꋯ",
        "han": "装订"
      },
      {
        "yi": "ꀯꇙꏃꊉꇻꄈ",
        "han": "布尔什维克党"
      },
      {
        "yi": "ꇻꇁꄃꇅꋧ",
        "han": "克拉地峡"
      },
      {
        "yi": "ꍤꄃꊈꇻ",
        "han": "查德威克"
      }
    ]
  },
  {
    "g": "ꉉ",
    "initial": "hx",
    "final": "i",
    "tone": "p",
    "py": "hxip",
    "ipa": "hi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxip.mp3",
    "radical": "꓄",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉉꅐ",
        "han": "吐露"
      },
      {
        "yi": "ꇗꅉꉉ",
        "han": "论理"
      },
      {
        "yi": "ꀀꆹꅺꌡꉉ",
        "han": "现身说法"
      },
      {
        "yi": "ꑭꋧꃅꉉꀽ",
        "han": "破说"
      },
      {
        "yi": "ꉉꌐꏓꈻꁈ",
        "han": "枚举归纳法"
      }
    ]
  },
  {
    "g": "ꊐ",
    "initial": "z",
    "final": "i",
    "tone": "p",
    "py": "zip",
    "ipa": "tsi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zip.mp3",
    "radical": "꒝",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꏣꊐꇔꊐ",
        "han": "撺弄"
      },
      {
        "yi": "ꀁꅼꊐꌠꅉꃴꒉ",
        "han": "浅层地下水"
      },
      {
        "yi": "ꌤꈉꃆꄔꊐ",
        "han": "厝火积薪"
      },
      {
        "yi": "ꊨꍣꊨꊐ、ꐥꐨꍣ",
        "han": "讲等级"
      },
      {
        "yi": "ꑍꊐꈩꄿ",
        "han": "高低杠"
      }
    ]
  },
  {
    "g": "ꊱ",
    "initial": "c",
    "final": "i",
    "tone": "p",
    "py": "cip",
    "ipa": "tsʰi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cip.mp3",
    "radical": "꒾",
    "strokes": 2,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀹꁨ、ꊱꁨ",
        "han": "有序"
      },
      {
        "yi": "ꈭꊱꉐꒉ",
        "han": "苦雨"
      },
      {
        "yi": "ꌕꈤꍔꊱ",
        "han": "三光政策"
      },
      {
        "yi": "꒧ꒃꎍꐽꍔꊱ",
        "han": "绥靖政策"
      },
      {
        "yi": "ꉬꇮꃅꊱꁨ",
        "han": "全程对号"
      }
    ]
  },
  {
    "g": "ꋓ",
    "initial": "zz",
    "final": "i",
    "tone": "p",
    "py": "zzip",
    "ipa": "dzi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzip.mp3",
    "radical": "꒕",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꋓꃢꀱꐴ",
        "han": "偶次方根"
      },
      {
        "yi": "ꋒꃚꋓꁙꅿ",
        "han": "白色恐怖"
      },
      {
        "yi": "ꐽꋓꍝꁨꃷꁨ",
        "han": "平行矢量"
      },
      {
        "yi": "ꊨꏦꋓꉪꁨ",
        "han": "束身"
      },
      {
        "yi": "ꐈꋓꇟꌋ",
        "han": "刁钻古怪"
      }
    ]
  },
  {
    "g": "ꋰ",
    "initial": "nz",
    "final": "i",
    "tone": "p",
    "py": "nzip",
    "ipa": "ndzi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzip.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꋰꀕꋰꀋꄿ",
        "han": "忍无可忍"
      },
      {
        "yi": "ꋰꊋ",
        "han": "难堪"
      },
      {
        "yi": "ꋰꃅꋰꇬꎷ",
        "han": "逆来顺受"
      },
      {
        "yi": "ꋰꇚꅐ",
        "han": "流星雨"
      },
      {
        "yi": "ꋰꄉ",
        "han": "忍受"
      }
    ]
  },
  {
    "g": "ꌌ",
    "initial": "s",
    "final": "i",
    "tone": "p",
    "py": "sip",
    "ipa": "si²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sip.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃅꌅꂽꉹꉈꌌꌠ",
        "han": "控弦之士"
      },
      {
        "yi": "ꌌꁈ",
        "han": "老板"
      },
      {
        "yi": "ꃑꌌꍑ",
        "han": "发排"
      },
      {
        "yi": "ꇴꃆꌌꃷꃼꌅꈌꊌꇬꌦ",
        "han": "上市公司"
      },
      {
        "yi": "ꎆꌌꁈ",
        "han": "财主"
      }
    ]
  },
  {
    "g": "ꌭ",
    "initial": "ss",
    "final": "i",
    "tone": "p",
    "py": "ssip",
    "ipa": "zi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssip.mp3",
    "radical": "꒕",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꌭꈬ、ꀋꆏꃅ",
        "han": "坚持"
      },
      {
        "yi": "ꇇꌭꑾꌙꌠ",
        "han": "轻武器"
      },
      {
        "yi": "ꄔꐞꇇꌭ",
        "han": "火焰喷射器"
      },
      {
        "yi": "ꇷꄙꊋꌭ",
        "han": "精干"
      },
      {
        "yi": "ꌭꏣ",
        "han": "手面"
      }
    ]
  },
  {
    "g": "ꏣ",
    "initial": "j",
    "final": "i",
    "tone": "p",
    "py": "jip",
    "ipa": "tɕi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jip.mp3",
    "radical": "꒛",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꒆꏣ",
        "han": "卷须"
      },
      {
        "yi": "ꌋꏣꈬꄔ",
        "han": "神经中枢"
      },
      {
        "yi": "ꐂꐳꇨꌦꏣ",
        "han": "微脉"
      },
      {
        "yi": "ꎆꏣꎓꐡ",
        "han": "经济危机"
      },
      {
        "yi": "ꁉꃑꉹꎆꏣ",
        "han": "开发型经济"
      }
    ]
  },
  {
    "g": "ꏿ",
    "initial": "q",
    "final": "i",
    "tone": "p",
    "py": "qip",
    "ipa": "tɕʰi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qip.mp3",
    "radical": "꒨",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꌦꃅꃯꐚꏿ",
        "han": "天马行空"
      },
      {
        "yi": "ꀆꏿꇁꏙ",
        "han": "变蛋"
      },
      {
        "yi": "ꇴꏿꉻꏽ",
        "han": "切末"
      },
      {
        "yi": "ꏿꇩ",
        "han": "秦国"
      },
      {
        "yi": "ꉢꊧꏧꏢꌦꅪꏿꐎ",
        "han": "氨基甲酸血红蛋白"
      }
    ]
  },
  {
    "g": "ꐛ",
    "initial": "jj",
    "final": "i",
    "tone": "p",
    "py": "jjip",
    "ipa": "dʑi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjip.mp3",
    "radical": "꒬",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉡꆹꏝꀪꅇꂷꀉꄂꉉꈧꐛ",
        "han": "我只会讲日本话"
      },
      {
        "yi": "ꀋꃋꐛꐨ",
        "han": "现实状况"
      },
      {
        "yi": "ꈏꐛꊈ",
        "han": "内涵"
      },
      {
        "yi": "ꐛꀮ",
        "han": "雄峰"
      },
      {
        "yi": "ꃅꐛ",
        "han": "驯服"
      }
    ]
  },
  {
    "g": "ꐴ",
    "initial": "nj",
    "final": "i",
    "tone": "p",
    "py": "njip",
    "ipa": "ndʑi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njip.mp3",
    "radical": "꒤",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꎐꐴ",
        "han": "牙根"
      },
      {
        "yi": "ꐴꑐꋦꅉ",
        "han": "根毛区"
      },
      {
        "yi": "ꐴꅼꋦꈬ",
        "han": "根深蒂固"
      },
      {
        "yi": "ꉮꐴ",
        "han": "后患"
      },
      {
        "yi": "ꐴꀉꑌꌠ",
        "han": "复根"
      }
    ]
  },
  {
    "g": "ꑍ",
    "initial": "ny",
    "final": "i",
    "tone": "p",
    "py": "nyip",
    "ipa": "ȵi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyip.mp3",
    "radical": "꒓",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꑍꎆ",
        "han": "闰日"
      },
      {
        "yi": "ꈨꑍꈛꀑꋩ",
        "han": "日暮途穷"
      },
      {
        "yi": "ꁮꑍꃀꀉꌙ",
        "han": "蝇虎"
      },
      {
        "yi": "ꏢꑍꑊꎐ",
        "han": "锐二面角"
      },
      {
        "yi": "ꃆꏂꑍꂿꃅꉾꇁꌠꉬ",
        "han": "明天天气会转好"
      }
    ]
  },
  {
    "g": "ꑠ",
    "initial": "x",
    "final": "i",
    "tone": "p",
    "py": "xip",
    "ipa": "ɕi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xip.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑠꄠ",
        "han": "邢台"
      },
      {
        "yi": "ꎖꉚꇬꋌꃅꄸꑽꑠꆹꉈꏠꌦꄡꑟ",
        "han": "考试作弊是很羞耻的"
      },
      {
        "yi": "ꋌꃀꊿꑠꐥꀋꋻ",
        "han": "前无古人"
      },
      {
        "yi": "ꁬꋲꆰꑠ",
        "han": "奇花异草"
      },
      {
        "yi": "ꑞꇷꑌꑠꃅꑌꉆꑴꄾ",
        "han": "所有的车都可以这样吗"
      }
    ]
  },
  {
    "g": "ꑴ",
    "initial": "y",
    "final": "i",
    "tone": "p",
    "py": "yip",
    "ipa": "ʑi²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yip.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꁮꋚꑣꑴꁱꊖꀌꀠ",
        "han": "采桑画像砖"
      },
      {
        "yi": "ꒌꁨꇊꑴ",
        "han": "荧光粉"
      },
      {
        "yi": "ꑌꐚ、ꑴꀋꅑ、ꎃꐚ",
        "han": "正常"
      },
      {
        "yi": "ꊱꒆꑴꁱ",
        "han": "图谱"
      },
      {
        "yi": "ꆽꑴꏢ",
        "han": "萘乙酸"
      }
    ]
  },
  {
    "g": "ꀄ",
    "initial": "",
    "final": "ie",
    "tone": "t",
    "py": "iet",
    "ipa": "ɛ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_iet.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꁌꏤꀄꊭ",
        "han": "特价"
      },
      {
        "yi": "ꀄꊭꀄꑐꃅꌠ",
        "han": "勤杂人员"
      },
      {
        "yi": "ꌻꌺ、ꀄꊭ",
        "han": "区区"
      },
      {
        "yi": "ꀄꂼꂻꀋꌒ",
        "han": "噩梦"
      },
      {
        "yi": "ꃹꐨꀄꊭ",
        "han": "耗能低"
      }
    ]
  },
  {
    "g": "ꀚ",
    "initial": "b",
    "final": "ie",
    "tone": "t",
    "py": "biet",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_biet.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꁚ",
    "initial": "bb",
    "final": "ie",
    "tone": "t",
    "py": "bbiet",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbiet.mp3",
    "radical": "꒪",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꃦ",
    "initial": "v",
    "final": "ie",
    "tone": "t",
    "py": "viet",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_viet.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꅬ",
    "initial": "hn",
    "final": "ie",
    "tone": "t",
    "py": "hniet",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hniet.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꆻ",
    "initial": "l",
    "final": "ie",
    "tone": "t",
    "py": "liet",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_liet.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꇞ",
    "initial": "g",
    "final": "ie",
    "tone": "t",
    "py": "giet",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_giet.mp3",
    "radical": "꒢",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꉊ",
    "initial": "hx",
    "final": "ie",
    "tone": "t",
    "py": "hxiet",
    "ipa": "hɛ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxiet.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀋꉊꂴꐨꋊ",
        "han": "近代史"
      },
      {
        "yi": "ꉊꇩ",
        "han": "凶暴"
      },
      {
        "yi": "ꃅꉊ ꏣ",
        "han": "肚带"
      },
      {
        "yi": "ꀋ ꉊꊂ",
        "han": "近代"
      },
      {
        "yi": "ꃭꊭꉊ ꏣ",
        "han": "吊袜带"
      }
    ]
  },
  {
    "g": "ꊲ",
    "initial": "c",
    "final": "ie",
    "tone": "t",
    "py": "ciet",
    "ipa": "tsʰɛ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ciet.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉍꈄꊲꇁ",
        "han": "网篮"
      }
    ]
  },
  {
    "g": "ꋔ",
    "initial": "zz",
    "final": "ie",
    "tone": "t",
    "py": "zziet",
    "ipa": "dzɛ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zziet.mp3",
    "radical": "꓄",
    "strokes": 8,
    "remainingStrokes": 6,
    "phrases": [
      {
        "yi": "ꇓꋔ ꆉ",
        "han": "花岗岩"
      },
      {
        "yi": "ꇓꋔꆉ",
        "han": "花岗石"
      },
      {
        "yi": "ꒉꂱꀊꋔ",
        "han": "灰藓"
      },
      {
        "yi": "ꋔꆉ",
        "han": "胡椒"
      },
      {
        "yi": "ꆈꋔꂷ",
        "han": "竹叶椒"
      }
    ]
  },
  {
    "g": "ꏤ",
    "initial": "j",
    "final": "ie",
    "tone": "t",
    "py": "jiet",
    "ipa": "tɕɛ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jiet.mp3",
    "radical": "꒔",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꈫꎖꇩꏤ",
        "han": "超级大国"
      },
      {
        "yi": "ꆍꏤꃅꄷꍏꇩꒉꀑꏭꐛꅀ",
        "han": "你们家乡在中国北部吗"
      },
      {
        "yi": "ꃀꈿꅉꏤꄉꇬ",
        "han": "会议决定"
      },
      {
        "yi": "ꍤꄻꏤꄮ",
        "han": "审限"
      },
      {
        "yi": "ꁌꏤ",
        "han": "价目"
      }
    ]
  },
  {
    "g": "ꐀ",
    "initial": "q",
    "final": "ie",
    "tone": "t",
    "py": "qiet",
    "ipa": "tɕʰɛ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qiet.mp3",
    "radical": "꒾",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꆐꐀ",
        "han": "瘟病"
      },
      {
        "yi": "ꆳꈋꐀꄧ",
        "han": "凉台"
      },
      {
        "yi": "ꉙꐀ",
        "han": "诟病"
      },
      {
        "yi": "ꉜꆐꐀꆐ",
        "han": "暑瘟"
      },
      {
        "yi": "ꐀꄿ",
        "han": "炭疽"
      }
    ]
  },
  {
    "g": "ꐜ",
    "initial": "jj",
    "final": "ie",
    "tone": "t",
    "py": "jjiet",
    "ipa": "dʑɛ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjiet.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌷꐜ",
        "han": "旷课"
      },
      {
        "yi": "ꐜꀐ",
        "han": "认头"
      },
      {
        "yi": "ꊴꃀ ꐜꅪ",
        "han": "梅花鹿"
      },
      {
        "yi": "ꐜꅍ",
        "han": "亏负"
      },
      {
        "yi": "ꐜꐪꄯꒉꁬꌠ",
        "han": "契纸"
      }
    ]
  },
  {
    "g": "ꐵ",
    "initial": "nj",
    "final": "ie",
    "tone": "t",
    "py": "njiet",
    "ipa": "ndʑɛ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njiet.mp3",
    "radical": "꒳",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꋪꐵ ꏿ",
        "han": "奔腾"
      },
      {
        "yi": "ꌷꐵ",
        "han": "逃学"
      },
      {
        "yi": "ꐵꊋ",
        "han": "惯性"
      },
      {
        "yi": "ꐵꀋꄓꑮ",
        "han": "非惯性系"
      },
      {
        "yi": "ꃴꑌꐵ",
        "han": "避孕"
      }
    ]
  },
  {
    "g": "ꑎ",
    "initial": "ny",
    "final": "ie",
    "tone": "t",
    "py": "nyiet",
    "ipa": "ȵɛ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyiet.mp3",
    "radical": "꒟",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꇉꑎ",
        "han": "头花蓼"
      },
      {
        "yi": "ꉛꑎꁯꅍ",
        "han": "沙虫"
      },
      {
        "yi": "ꈨꑎꂿꀋꐰ、ꅺꈨꌠꑓꂿꌠꀋꐰ",
        "han": "百闻不如一见"
      },
      {
        "yi": "ꑎ ꁮ",
        "han": "钓饵"
      },
      {
        "yi": "……ꑎꆹ……ꄈꈜꁧꐥ",
        "han": "宁愿"
      }
    ]
  },
  {
    "g": "ꑡ",
    "initial": "x",
    "final": "ie",
    "tone": "t",
    "py": "xiet",
    "ipa": "ɕɛ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xiet.mp3",
    "radical": "꒳",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑡꃅ",
        "han": "饬令"
      },
      {
        "yi": "ꑡꈨ",
        "han": "哪些"
      },
      {
        "yi": "ꑡꀠꊿ",
        "han": "人质"
      },
      {
        "yi": "ꐊꎴꑡꋌ",
        "han": "秋水仙素"
      }
    ]
  },
  {
    "g": "ꑵ",
    "initial": "y",
    "final": "ie",
    "tone": "t",
    "py": "yiet",
    "ipa": "ʑɛ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yiet.mp3",
    "radical": "꒮",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑵꂢꃚ",
        "han": "声乐"
      },
      {
        "yi": "ꏢꊈꀉꑌꑵꑌ",
        "han": "多元酸"
      },
      {
        "yi": "ꌕꑵꃪꌠꃅ",
        "han": "创三好"
      },
      {
        "yi": "ꁌꇐꈤꌕꑵ",
        "han": "三宝"
      },
      {
        "yi": "ꂽꈅꀒꁨꆹꑵꉙ",
        "han": "义勇军进行曲"
      }
    ]
  },
  {
    "g": "ꀅ",
    "initial": "",
    "final": "ie",
    "tone": "x",
    "py": "iex",
    "ipa": "ɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_iex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀅꌳꁧ",
        "han": "请慢走"
      },
      {
        "yi": "ꀅꌳꑌ",
        "han": "请留步"
      },
      {
        "yi": "ꀅꌳꃅꏂ",
        "han": "徐图"
      },
      {
        "yi": "ꉢꀅꌳꃅꅽꑆꊋꀱꂿ",
        "han": "我会慢慢地报答你的"
      },
      {
        "yi": "ꌉꈿꀅꌳꃅꌉꌠ",
        "han": "低烈度战争"
      }
    ]
  },
  {
    "g": "ꀛ",
    "initial": "b",
    "final": "ie",
    "tone": "x",
    "py": "biex",
    "ipa": "pɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_biex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑌꑲꀛꐂ",
        "han": "交际舞"
      },
      {
        "yi": "ꀛꐂꈩꅉ",
        "han": "舞池"
      },
      {
        "yi": "ꀛꐂꏓꈩ",
        "han": "舞会"
      },
      {
        "yi": "ꀛꐂ",
        "han": "跳舞"
      },
      {
        "yi": "ꐕꁂꀛꐂ",
        "han": "七盘舞"
      }
    ]
  },
  {
    "g": "ꀼ",
    "initial": "p",
    "final": "ie",
    "tone": "x",
    "py": "piex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_piex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꁛ",
    "initial": "bb",
    "final": "ie",
    "tone": "x",
    "py": "bbiex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꁺ",
    "initial": "nb",
    "final": "ie",
    "tone": "x",
    "py": "nbiex",
    "ipa": "mbɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꅥ、ꁺꎭ",
        "han": "发射"
      },
      {
        "yi": "ꏧꍐꁺꀂ",
        "han": "甲种射线"
      }
    ]
  },
  {
    "g": "ꂕ",
    "initial": "hm",
    "final": "ie",
    "tone": "x",
    "py": "hmiex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꂲ",
    "initial": "m",
    "final": "ie",
    "tone": "x",
    "py": "miex",
    "ipa": "mɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_miex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁮꐚꂲꆽ",
        "han": "前敌"
      },
      {
        "yi": "ꏦꃤꂲꆽꑞꑌꐽꊯ",
        "han": "法律面前一律平等"
      },
      {
        "yi": "ꏦꃤꂲꆽꊿꐥꐯꌟ",
        "han": "法律面前人人平等"
      }
    ]
  },
  {
    "g": "ꃧ",
    "initial": "v",
    "final": "ie",
    "tone": "x",
    "py": "viex",
    "ipa": "vɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_viex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐎꏂꃧꃨ",
        "han": "金银花"
      },
      {
        "yi": "ꉐꌟꃧꃨ",
        "han": "舌壮花"
      },
      {
        "yi": "ꉇꃧꃨꇗꇱ",
        "han": "异花授粉"
      },
      {
        "yi": "ꇭꌩꃧꃨ",
        "han": "桂花"
      },
      {
        "yi": "ꇧꊭꃧꃨ",
        "han": "朝阳花"
      }
    ]
  },
  {
    "g": "ꄄ",
    "initial": "d",
    "final": "ie",
    "tone": "x",
    "py": "diex",
    "ipa": "tɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_diex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꄄꁧꋊꃷꁨ",
        "han": "繁分数"
      },
      {
        "yi": "ꄄꃨꀕ",
        "han": "密密麻麻"
      },
      {
        "yi": "ꄄꆈ",
        "han": "乌云"
      },
      {
        "yi": "ꃅꏸꄄꍅꀕ、ꃅꏸꋦꃅꋦ",
        "han": "星罗棋布"
      }
    ]
  },
  {
    "g": "ꄞ",
    "initial": "t",
    "final": "ie",
    "tone": "x",
    "py": "tiex",
    "ipa": "tʰɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "꒧ꃅꄞꅐ",
        "han": "劳动模范"
      },
      {
        "yi": "ꂵꅐ、ꄞꅐ、ꀭꉂ、ꀨꅐ",
        "han": "突出"
      },
      {
        "yi": "ꄞꅐꂓꄀꅪ",
        "han": "红榜"
      },
      {
        "yi": "ꁱꀕꄞꅐꌠ",
        "han": "先进文化"
      },
      {
        "yi": "ꒃꅐꊋꃤꄞꅐꌠ",
        "han": "先进生产力"
      }
    ]
  },
  {
    "g": "ꄺ",
    "initial": "dd",
    "final": "ie",
    "tone": "x",
    "py": "ddiex",
    "ipa": "dɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎊꈬꂶꈾꄺꅉ",
        "han": "小器作"
      },
      {
        "yi": "ꑽꃤꐆꊿꉙꂘꄉꄺꀱ",
        "han": "改造犯罪分子"
      },
      {
        "yi": "ꋍꈴꌕꄺꀱ",
        "han": "一化三改"
      },
      {
        "yi": "ꋚꀱꋚꄺꅉ",
        "han": "粮油加工厂"
      },
      {
        "yi": "ꎊꈬꁌꏤꄺꀱ",
        "han": "物价改革"
      }
    ]
  },
  {
    "g": "ꅕ",
    "initial": "nd",
    "final": "ie",
    "tone": "x",
    "py": "ndiex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꅭ",
    "initial": "hn",
    "final": "ie",
    "tone": "x",
    "py": "hniex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hniex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꆁ",
    "initial": "n",
    "final": "ie",
    "tone": "x",
    "py": "niex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_niex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꆛ",
    "initial": "hl",
    "final": "ie",
    "tone": "x",
    "py": "hliex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hliex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꆼ",
    "initial": "l",
    "final": "ie",
    "tone": "x",
    "py": "liex",
    "ipa": "lɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_liex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꆼꏦꈜꀸ",
        "han": "关山"
      },
      {
        "yi": "ꄂꆼꐞ",
        "han": "伶俜"
      },
      {
        "yi": "ꍍꐔꑴꆼꎍ",
        "han": "自负盈亏"
      },
      {
        "yi": "ꆼꃬ",
        "han": "搂抱"
      },
      {
        "yi": "ꉪꄐꃅꆼꇽ",
        "han": "臆断"
      }
    ]
  },
  {
    "g": "ꇟ",
    "initial": "g",
    "final": "ie",
    "tone": "x",
    "py": "giex",
    "ipa": "kɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_giex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐈꋓꇟꌋ",
        "han": "刁钻古怪"
      },
      {
        "yi": "ꃅꇡꊂꇟꌉꈿ",
        "han": "土地革命战争"
      }
    ]
  },
  {
    "g": "ꇼ",
    "initial": "k",
    "final": "ie",
    "tone": "x",
    "py": "kiex",
    "ipa": "kʰɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇼꄜ",
        "han": "宣判"
      },
      {
        "yi": "ꇼꄻ",
        "han": "裁夺"
      },
      {
        "yi": "ꇼꅓ",
        "han": "处刑"
      },
      {
        "yi": "ꉏꆈꇼꋠ",
        "han": "刀耕火种"
      },
      {
        "yi": "ꀯꇁꇼꄯ",
        "han": "布拉凯特"
      }
    ]
  },
  {
    "g": "ꈗ",
    "initial": "gg",
    "final": "ie",
    "tone": "x",
    "py": "ggiex",
    "ipa": "gɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁭꁘ、ꈗꄧ",
        "han": "零散"
      },
      {
        "yi": "ꂱꑆꈗꆏꎐꂷꈻ",
        "han": "唇亡齿寒"
      }
    ]
  },
  {
    "g": "ꈰ",
    "initial": "mg",
    "final": "ie",
    "tone": "x",
    "py": "mgiex",
    "ipa": "ŋgɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈰꏅ、ꈰꏅ",
        "han": "捏造"
      },
      {
        "yi": "ꈰꄻ",
        "han": "虚造"
      },
      {
        "yi": "ꈰ ꏅ",
        "han": "打谎"
      },
      {
        "yi": "ꈰ ꄜ",
        "han": "浮报"
      },
      {
        "yi": "ꈰꎝ",
        "han": "花帐"
      }
    ]
  },
  {
    "g": "ꉋ",
    "initial": "hx",
    "final": "ie",
    "tone": "x",
    "py": "hxiex",
    "ipa": "hɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉋꇷꀉꄂꄻ",
        "han": "治标"
      },
      {
        "yi": "ꉋꇷꅇꀋꌗ",
        "han": "轻描淡写"
      },
      {
        "yi": "ꉋꇷꅇ",
        "han": "鬼画符"
      }
    ]
  },
  {
    "g": "ꉝ",
    "initial": "ng",
    "final": "ie",
    "tone": "x",
    "py": "ngiex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꉯ",
    "initial": "h",
    "final": "ie",
    "tone": "x",
    "py": "hiex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꊑ",
    "initial": "z",
    "final": "ie",
    "tone": "x",
    "py": "ziex",
    "ipa": "tsɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ziex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊑꇙꄷꄸ",
        "han": "动辄"
      },
      {
        "yi": "ꊑꀠꊿ",
        "han": "相对人"
      },
      {
        "yi": "ꊑꄻꌅꈌ",
        "han": "赔偿的权利"
      },
      {
        "yi": "ꊑꇙ",
        "han": "动不动"
      },
      {
        "yi": "ꊑꏦ、ꉻꇗ",
        "han": "公理"
      }
    ]
  },
  {
    "g": "ꊳ",
    "initial": "c",
    "final": "ie",
    "tone": "x",
    "py": "ciex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ciex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꋕ",
    "initial": "zz",
    "final": "ie",
    "tone": "x",
    "py": "zziex",
    "ipa": "dzɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zziex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋕꑌꀈꈥꋖ",
        "han": "撞了白撞"
      },
      {
        "yi": "ꋖꍀꋕꆿꄓ",
        "han": "狂暴"
      },
      {
        "yi": "ꍜꋦ、ꋕꋦ、ꋭꑘ",
        "han": "义务"
      }
    ]
  },
  {
    "g": "ꋱ",
    "initial": "nz",
    "final": "ie",
    "tone": "x",
    "py": "nziex",
    "ipa": "ndzɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nziex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋱꈌ",
        "han": "纵断面"
      },
      {
        "yi": "ꋱꈌꏭ",
        "han": "纵切面"
      },
      {
        "yi": "ꋱꊈ",
        "han": "杂质"
      }
    ]
  },
  {
    "g": "ꌍ",
    "initial": "s",
    "final": "ie",
    "tone": "x",
    "py": "siex",
    "ipa": "sɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_siex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌍꆽꁏꌌꁈꌅꈌ",
        "han": "寡头政治"
      },
      {
        "yi": "ꉢꌍꑓꐛꌠꑋꅉꂷꃼꄎꀕ",
        "han": "我可以买到一张靠窗座吗"
      },
      {
        "yi": "ꌍꃬ",
        "han": "松鸡"
      },
      {
        "yi": "ꌍꀜꀕ",
        "han": "异端"
      },
      {
        "yi": "ꌍꑓꇊꅍ",
        "han": "纱窗"
      }
    ]
  },
  {
    "g": "ꌮ",
    "initial": "ss",
    "final": "ie",
    "tone": "x",
    "py": "ssiex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꏥ",
    "initial": "j",
    "final": "ie",
    "tone": "x",
    "py": "jiex",
    "ipa": "tɕɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋮꁧꏓꁨꎀꍹꏥꏦ",
        "han": "民主集中制的组织原则"
      },
      {
        "yi": "ꌤꃅꏥꏦ",
        "han": "工作原则"
      },
      {
        "yi": "ꏥꑌ",
        "han": "苗条"
      },
      {
        "yi": "ꋧꃅꏥꏦ",
        "han": "国际公法"
      },
      {
        "yi": "ꐛꐈꏥꏦ",
        "han": "衰变规律"
      }
    ]
  },
  {
    "g": "ꐁ",
    "initial": "q",
    "final": "ie",
    "tone": "x",
    "py": "qiex",
    "ipa": "tɕʰɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꂷꐁꌅ",
        "han": "蓖麻"
      },
      {
        "yi": "ꂷꐁꌅꁮ",
        "han": "蓖麻蚕"
      },
      {
        "yi": "ꍡꅉꐁꅉꃅ",
        "han": "载歌载舞"
      },
      {
        "yi": "ꐁꅐ",
        "han": "打破"
      },
      {
        "yi": "ꀛꅉꐁꅉꃅ",
        "han": "蹦蹦跳跳"
      }
    ]
  },
  {
    "g": "ꐝ",
    "initial": "jj",
    "final": "ie",
    "tone": "x",
    "py": "jjiex",
    "ipa": "dʑɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐝꅐ、ꐮꐞ",
        "han": "脱离"
      },
      {
        "yi": "ꐝ ꇤ",
        "han": "分蘖"
      },
      {
        "yi": "ꐝꄂꁧ",
        "han": "流离"
      },
      {
        "yi": "ꉢꉉꌋꆍꐝꉅꀕꀐ",
        "han": "我解释清楚了吗"
      },
      {
        "yi": "ꐝꈌ",
        "han": "丫杈"
      }
    ]
  },
  {
    "g": "ꐶ",
    "initial": "nj",
    "final": "ie",
    "tone": "x",
    "py": "njiex",
    "ipa": "ndʑɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊖꀌꀠꐶꀜ",
        "han": "砖头"
      },
      {
        "yi": "ꉄꇓꐶꀜ",
        "han": "瓦砾"
      }
    ]
  },
  {
    "g": "ꑏ",
    "initial": "ny",
    "final": "ie",
    "tone": "x",
    "py": "nyiex",
    "ipa": "ȵɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑏꒃ",
        "han": "讨好"
      },
      {
        "yi": "ꑏꎖꅍ",
        "han": "游标卡尺"
      },
      {
        "yi": "ꑏ ꁮꒃ",
        "han": "搭讪"
      },
      {
        "yi": "ꑑꇁꑏꇁ",
        "han": "劣株"
      },
      {
        "yi": "ꇘꎆꑏꎆ",
        "han": "机动资金"
      }
    ]
  },
  {
    "g": "ꑢ",
    "initial": "x",
    "final": "ie",
    "tone": "x",
    "py": "xiex",
    "ipa": "ɕɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑢꌬ",
        "han": "下载"
      },
      {
        "yi": "ꅋꅐꑢꀕ",
        "han": "缝缝连连"
      },
      {
        "yi": "ꉘꁮꑢꆈ",
        "han": "日斑"
      }
    ]
  },
  {
    "g": "ꑶ",
    "initial": "y",
    "final": "ie",
    "tone": "x",
    "py": "yiex",
    "ipa": "ʑɛ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yiex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑶꌩꏓ꒧",
        "han": "秽土"
      },
      {
        "yi": "ꑶꀽ",
        "han": "大烟"
      },
      {
        "yi": "ꂿ꒧ꑶꋦ",
        "han": "农户"
      },
      {
        "yi": "ꑶꑳꒉꄸꃅꌉꈿ",
        "han": "鸦片战争"
      },
      {
        "yi": "ꊿꑱꐤꑳ、ꑶꋦꄀꅉ",
        "han": "户籍"
      }
    ]
  },
  {
    "g": "ꀆ",
    "initial": "",
    "final": "ie",
    "tone": "",
    "py": "ie",
    "ipa": "ɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ie.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀆꂸ",
        "han": "唉曼"
      },
      {
        "yi": "ꀆꏿ",
        "han": "鸭蛋"
      },
      {
        "yi": "ꐥꍂꇨꀆꐒ",
        "han": "永久硬水"
      },
      {
        "yi": "ꀆꌦꈑꇊꌦ",
        "han": "埃斯库罗斯"
      },
      {
        "yi": "ꀆꁵ",
        "han": "板鸭"
      }
    ]
  },
  {
    "g": "ꀜ",
    "initial": "b",
    "final": "ie",
    "tone": "",
    "py": "bie",
    "ipa": "pɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bie.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꂒꈨꊿꈩꀜ",
        "han": "明星娱乐"
      },
      {
        "yi": "ꆏꈩꌒꀜꌒꅊꇈ",
        "han": "祝你过得愉快"
      },
      {
        "yi": "ꊖꌋꐝꀜ",
        "han": "煤渣"
      },
      {
        "yi": "ꑭꀧꀜ",
        "han": "足球"
      },
      {
        "yi": "ꐮꀜꏤ",
        "han": "决裂"
      }
    ]
  },
  {
    "g": "ꀽ",
    "initial": "p",
    "final": "ie",
    "tone": "",
    "py": "pie",
    "ipa": "pʰɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pie.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀑꐳꃅꉉꀽ",
        "han": "便览"
      },
      {
        "yi": "ꉉꀽꅇ",
        "han": "注脚"
      },
      {
        "yi": "ꇴꉻꉉꀽ",
        "han": "演示"
      },
      {
        "yi": "ꌐꁌꉉꀽꅇ",
        "han": "序跋"
      },
      {
        "yi": "ꀽꋌ",
        "han": "金鸡纳霜"
      }
    ]
  },
  {
    "g": "ꁜ",
    "initial": "bb",
    "final": "ie",
    "tone": "",
    "py": "bbie",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbie.mp3",
    "radical": "꒟",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꁻ",
    "initial": "nb",
    "final": "ie",
    "tone": "",
    "py": "nbie",
    "ipa": "mbɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbie.mp3",
    "radical": "꓅",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇌꁻ",
        "han": "斗牛"
      },
      {
        "yi": "ꄡꁻꁨꑭꑟ",
        "han": "反射光线"
      },
      {
        "yi": "ꁨꑭꉬꇮꄡꁻ",
        "han": "光的全反射"
      },
      {
        "yi": "ꑤꌅꈷꇌꇰ、ꁀꁻꀕꇂꁱꇰ",
        "han": "对牛弹琴"
      },
      {
        "yi": "ꈪꁻꐨ",
        "han": "折射率"
      }
    ]
  },
  {
    "g": "ꂖ",
    "initial": "hm",
    "final": "ie",
    "tone": "",
    "py": "hmie",
    "ipa": "m̥ɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmie.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑺꂖ",
        "han": "轻巧"
      },
      {
        "yi": "ꂽꇺꂖꍵ",
        "han": "指挥刀"
      },
      {
        "yi": "ꆏꀊꂖꐤꀕ",
        "han": "你有表姐吗"
      },
      {
        "yi": "ꉢꀊꂖꀋꐥ",
        "han": "我没有表姐"
      },
      {
        "yi": "ꊢꂖ",
        "han": "点火"
      }
    ]
  },
  {
    "g": "ꂳ",
    "initial": "m",
    "final": "ie",
    "tone": "",
    "py": "mie",
    "ipa": "mɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mie.mp3",
    "radical": "꒨",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꂳꎖꅍ",
        "han": "秒表"
      },
      {
        "yi": "ꂳꇢꅉ",
        "han": "秒差距"
      },
      {
        "yi": "ꆏꈭꋦꈛꂳꅊꇈ",
        "han": "祝你一路平安"
      },
      {
        "yi": "ꏺꂳꀕ",
        "han": "壁立"
      },
      {
        "yi": "ꀽꂳ",
        "han": "山青皮"
      }
    ]
  },
  {
    "g": "ꃨ",
    "initial": "v",
    "final": "ie",
    "tone": "",
    "py": "vie",
    "ipa": "vɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vie.mp3",
    "radical": "꒐",
    "strokes": 7,
    "remainingStrokes": 6,
    "phrases": [
      {
        "yi": "ꌩꃨꀞꍗ",
        "han": "水横枝"
      },
      {
        "yi": "ꒉꁉꃨ",
        "han": "芙蕖"
      },
      {
        "yi": "ꃨꎔꊈ",
        "han": "花青素"
      },
      {
        "yi": "ꃅꈯꃨꁍ",
        "han": "空中花园"
      },
      {
        "yi": "ꇧꊭꃧꃨ",
        "han": "朝阳花"
      }
    ]
  },
  {
    "g": "ꄅ",
    "initial": "d",
    "final": "ie",
    "tone": "",
    "py": "die",
    "ipa": "tɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_die.mp3",
    "radical": "꒟",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃅꃴꃄꄅꁉ",
        "han": "开天辟地"
      },
      {
        "yi": "ꀰꏢꃷꄅꏂꇫ",
        "han": "营销策划"
      },
      {
        "yi": "ꆚꐮꄅ",
        "han": "波的叠加"
      },
      {
        "yi": "ꎺꄅꉂꌐ",
        "han": "纪念章"
      },
      {
        "yi": "ꄅꅪꌡꃨꊱꁨ",
        "han": "复穗状花序"
      }
    ]
  },
  {
    "g": "ꄟ",
    "initial": "t",
    "final": "ie",
    "tone": "",
    "py": "tie",
    "ipa": "tʰɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tie.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀀꀨꄟꅍ",
        "han": "褥套"
      },
      {
        "yi": "ꀂꀋ ꉬꆼꄟꀕ",
        "han": "拿糖"
      },
      {
        "yi": "ꈂꀸꐛꄟ",
        "han": "口形"
      },
      {
        "yi": "ꋦꐥꄟꐮꐽ",
        "han": "生态平衡"
      },
      {
        "yi": "ꌗꊈꐛꄟ",
        "han": "气体的状态"
      }
    ]
  },
  {
    "g": "ꄻ",
    "initial": "dd",
    "final": "ie",
    "tone": "",
    "py": "ddie",
    "ipa": "dɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddie.mp3",
    "radical": "꒐",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꉢꄻꇮ",
        "han": "我会修"
      },
      {
        "yi": "ꌧꊿꂘꄻ",
        "han": "培养人才"
      },
      {
        "yi": "ꆄꄻꊿꂘꅇ",
        "han": "医嘱"
      },
      {
        "yi": "ꃄꄻ、ꃄꌬ",
        "han": "实践"
      },
      {
        "yi": "ꐯꃅꎷ ꄻ",
        "han": "金工"
      }
    ]
  },
  {
    "g": "ꅖ",
    "initial": "nd",
    "final": "ie",
    "tone": "",
    "py": "ndie",
    "ipa": "ndɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndie.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꁖꅖꈍꁯꆅ",
        "han": "口蹄疫"
      },
      {
        "yi": "ꋍꑞꋍꑵꃅꉔꇇꅖꌠ",
        "han": "各种能工巧匠"
      },
      {
        "yi": "ꇇꅖꂓꅑꌠ",
        "han": "名手"
      },
      {
        "yi": "ꇇꅖꐨꇖꂟ",
        "han": "乞巧"
      },
      {
        "yi": "ꇇꅖꌠ",
        "han": "匠人"
      }
    ]
  },
  {
    "g": "ꅮ",
    "initial": "hn",
    "final": "ie",
    "tone": "",
    "py": "hnie",
    "ipa": "n̥ɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnie.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏸꑭꑻꄉꑬꅮꄐ、ꄀꇗꇱ",
        "han": "削足适履"
      },
      {
        "yi": "ꌳꃈꅮ",
        "han": "子弟"
      },
      {
        "yi": "ꆳꑆꑬꅮ",
        "han": "革履"
      },
      {
        "yi": "ꒉꈜꑬꅮ",
        "han": "雨鞋"
      },
      {
        "yi": "ꐂꑬ ꅮ",
        "han": "跳鞋"
      }
    ]
  },
  {
    "g": "ꆂ",
    "initial": "n",
    "final": "ie",
    "tone": "",
    "py": "nie",
    "ipa": "nɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nie.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀉꆂꃓꅍ",
        "han": "乳罩"
      },
      {
        "yi": "ꄔꉐꆂꐛꑊꐛꁏ",
        "han": "焰色反应"
      },
      {
        "yi": "ꑝꆂꉌꊭ",
        "han": "星鸟"
      },
      {
        "yi": "ꀉꆂꊉ",
        "han": "乳腺炎"
      },
      {
        "yi": "ꀉꆂꂸꂷ",
        "han": "乳头"
      }
    ]
  },
  {
    "g": "ꆜ",
    "initial": "hl",
    "final": "ie",
    "tone": "",
    "py": "hlie",
    "ipa": "ɬɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlie.mp3",
    "radical": "꒪",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꆜꎭꅿꎬꐚꂱ",
        "han": "胰麦芽糖酶"
      },
      {
        "yi": "ꆜꁏꆜꈩ",
        "han": "翻云覆雨"
      },
      {
        "yi": "ꆪꆐꌦꆜ",
        "han": "倒经"
      },
      {
        "yi": "ꆜꏿꐎꏀꋌ",
        "han": "胰蛋白酶"
      },
      {
        "yi": "ꑮꆜꄃꑴ",
        "han": "处女膜"
      }
    ]
  },
  {
    "g": "ꆽ",
    "initial": "l",
    "final": "ie",
    "tone": "",
    "py": "lie",
    "ipa": "lɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lie.mp3",
    "radical": "꒻",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꂱꈈꂴꆽ",
        "han": "狗腿子"
      },
      {
        "yi": "ꂰꄟꆽ",
        "han": "面果子树"
      },
      {
        "yi": "ꇧꍠꇧꆽ",
        "han": "仓皇"
      },
      {
        "yi": "ꈘꆽ꒧",
        "han": "灵活儿"
      },
      {
        "yi": "ꂴꆽꊐꌠ",
        "han": "第一线"
      }
    ]
  },
  {
    "g": "ꇠ",
    "initial": "g",
    "final": "ie",
    "tone": "",
    "py": "gie",
    "ipa": "kɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gie.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀉꌋꀕꇠ",
        "han": "猜谜"
      },
      {
        "yi": "ꇠꐚ",
        "han": "谜语"
      },
      {
        "yi": "ꊾꇠ",
        "han": "活宝"
      },
      {
        "yi": "ꑖꇠ",
        "han": "判罪"
      },
      {
        "yi": "ꌐꂷꇠ",
        "han": "解码"
      }
    ]
  },
  {
    "g": "ꇽ",
    "initial": "k",
    "final": "ie",
    "tone": "",
    "py": "kie",
    "ipa": "kʰɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kie.mp3",
    "radical": "꒕",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꏥꇽ",
        "han": "离异"
      },
      {
        "yi": "ꀞꇽꊿ",
        "han": "推事"
      },
      {
        "yi": "ꀞꇽ",
        "han": "审判"
      },
      {
        "yi": "ꍤꇽꈽ",
        "han": "陪审"
      },
      {
        "yi": "ꎆꏣꍤꇽꄜ",
        "han": "经济审判庭"
      }
    ]
  },
  {
    "g": "ꈘ",
    "initial": "gg",
    "final": "ie",
    "tone": "",
    "py": "ggie",
    "ipa": "gɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggie.mp3",
    "radical": "꒓",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꅇꈘ",
        "han": "短语"
      },
      {
        "yi": "ꄂꆸꈘ",
        "han": "孤单"
      },
      {
        "yi": "ꃷꁨꒊꐝꈘ",
        "han": "减数分裂"
      },
      {
        "yi": "ꉂꏣꈘ",
        "han": "失恋"
      },
      {
        "yi": "ꃷꈘ",
        "han": "脱销"
      }
    ]
  },
  {
    "g": "ꈱ",
    "initial": "mg",
    "final": "ie",
    "tone": "",
    "py": "mgie",
    "ipa": "ŋgɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgie.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀉꄻꀕꃅꈱ",
        "han": "莫须有"
      },
      {
        "yi": "ꀉꈱꋋꎴ",
        "han": "打抽丰"
      },
      {
        "yi": "ꅉꀕꈏꈱꑽꃤ",
        "han": "惯窃犯"
      },
      {
        "yi": "ꈱꃅꈱꑽ、ꀋꐯꀕꃅꈱ",
        "han": "弄虚作假"
      },
      {
        "yi": "ꈱꅇꉼ",
        "han": "谣传"
      }
    ]
  },
  {
    "g": "ꉌ",
    "initial": "hx",
    "final": "ie",
    "tone": "",
    "py": "hxie",
    "ipa": "hɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxie.mp3",
    "radical": "꒟",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀉꉌꅉꂇ",
        "han": "地羊"
      },
      {
        "yi": "ꀭꉌ",
        "han": "刺猬"
      },
      {
        "yi": "ꉌꆈ",
        "han": "黑家鼠"
      },
      {
        "yi": "ꉌꊫꑌ、ꉌꏣꎴ",
        "han": "耐心"
      },
      {
        "yi": "ꆏꑞꑌꉌꉪꐛꅊꇈ",
        "han": "祝你万事如意"
      }
    ]
  },
  {
    "g": "ꉞ",
    "initial": "ng",
    "final": "ie",
    "tone": "",
    "py": "ngie",
    "ipa": "ŋɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngie.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀧꄂꉞ",
        "han": "鲍狄埃"
      },
      {
        "yi": "ꀍꉞ",
        "han": "点头"
      }
    ]
  },
  {
    "g": "ꉰ",
    "initial": "h",
    "final": "ie",
    "tone": "",
    "py": "hie",
    "ipa": "xɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hie.mp3",
    "radical": "꒔",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀙꉰꄝ",
        "han": "北海亭"
      },
      {
        "yi": "ꅇꄸꌊꌠꉰ",
        "han": "恶语中伤"
      },
      {
        "yi": "ꉰꐊꐥꇐ",
        "han": "氢化物"
      },
      {
        "yi": "ꍏꏝꉸꉰꎿꇬꄉꀉꇨꃅꐯꌉ",
        "han": "中日黄海大战"
      },
      {
        "yi": "ꇽꌊꎭꉰꁧꌠꇉꈍꄮꇽ",
        "han": "开往上海的船什么时候开航"
      }
    ]
  },
  {
    "g": "ꊒ",
    "initial": "z",
    "final": "ie",
    "tone": "",
    "py": "zie",
    "ipa": "tsɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zie.mp3",
    "radical": "꒐",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꊒꃷꁨꅿꃶꐚꃷꁨ",
        "han": "对数的真数"
      },
      {
        "yi": "ꃮꆪꒈꈬꑍꆹꆈꌠꄔꊒꑍ",
        "han": "农历6月24是彝族火把节"
      },
      {
        "yi": "ꀋꊒꃅꇏ",
        "han": "不正之风"
      },
      {
        "yi": "ꆪꈤꇁꆏꊒ",
        "han": "月终火把节"
      },
      {
        "yi": "ꏓꊒꀫꑍꏧꏢꑴꑍꍬꍝ",
        "han": "聚对苯二甲酸乙二醇酯"
      }
    ]
  },
  {
    "g": "ꊴ",
    "initial": "c",
    "final": "ie",
    "tone": "",
    "py": "cie",
    "ipa": "tsʰɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cie.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꊴꃚꃱ",
        "han": "鹿角菜"
      },
      {
        "yi": "ꒉꊴ",
        "han": "晴蜓"
      },
      {
        "yi": "ꃅꊴ",
        "han": "马路"
      },
      {
        "yi": "ꊴꁮꒈꁈ",
        "han": "蜻蜓点水"
      },
      {
        "yi": "ꊴꑵꃅꐙ",
        "han": "成气候"
      }
    ]
  },
  {
    "g": "ꋖ",
    "initial": "zz",
    "final": "ie",
    "tone": "",
    "py": "zzie",
    "ipa": "dzɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzie.mp3",
    "radical": "꓄",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉑꋖꀊꃴ",
        "han": "青虾"
      },
      {
        "yi": "ꇵꆺꋖꂷ",
        "han": "劲椎"
      },
      {
        "yi": "ꁱꂷꉄꋖꌠ",
        "han": "手民"
      },
      {
        "yi": "ꍂꌗꋖꆖ",
        "han": "高压脊"
      },
      {
        "yi": "ꁱꈻꋖꂷ",
        "han": "牙子"
      }
    ]
  },
  {
    "g": "ꋲ",
    "initial": "nz",
    "final": "ie",
    "tone": "",
    "py": "nzie",
    "ipa": "ndzɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzie.mp3",
    "radical": "꒤",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꌟꋲ",
        "han": "生字"
      },
      {
        "yi": "ꀊꏀꇣꋲ",
        "han": "新颖"
      },
      {
        "yi": "ꉌꋲꑌ",
        "han": "戒惧"
      },
      {
        "yi": "ꇣꋲꌠꌗꏢꄝ",
        "han": "典型应用题"
      },
      {
        "yi": "ꉌꋲꈨ",
        "han": "疑团"
      }
    ]
  },
  {
    "g": "ꌎ",
    "initial": "s",
    "final": "ie",
    "tone": "",
    "py": "sie",
    "ipa": "sɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sie.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀆꌎꀒꀘꑸ",
        "han": "埃塞俄比亚"
      },
      {
        "yi": "ꀍꑐꌎꋌ",
        "han": "香泽"
      },
      {
        "yi": "ꊾꌎꅇ",
        "han": "暗射"
      },
      {
        "yi": "ꉄꌎ、ꆹꇏ",
        "han": "侵犯"
      },
      {
        "yi": "ꏹꁍꌎꊿ",
        "han": "吉卜赛人"
      }
    ]
  },
  {
    "g": "ꌯ",
    "initial": "ss",
    "final": "ie",
    "tone": "",
    "py": "ssie",
    "ipa": "zɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssie.mp3",
    "radical": "꒙",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꐍꌯꀕ",
        "han": "雪亮"
      },
      {
        "yi": "ꆈꌯ",
        "han": "玄青"
      }
    ]
  },
  {
    "g": "ꏦ",
    "initial": "j",
    "final": "ie",
    "tone": "",
    "py": "jie",
    "ipa": "tɕɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jie.mp3",
    "radical": "꒖",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꆺꆀꉪꏦ",
        "han": "列宁主义"
      },
      {
        "yi": "ꈛꎼꏦꎫ",
        "han": "步行街"
      },
      {
        "yi": "ꊨꏦꁖꒉꇉ",
        "han": "自流井"
      },
      {
        "yi": "ꌩꈠꏦ",
        "han": "木架"
      },
      {
        "yi": "ꃅꃴꎕꏦ",
        "han": "天文单位"
      }
    ]
  },
  {
    "g": "ꐂ",
    "initial": "q",
    "final": "ie",
    "tone": "",
    "py": "qie",
    "ipa": "tɕʰɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qie.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉙꐂꅉ",
        "han": "舞台"
      },
      {
        "yi": "ꋍꃀꐂꈬ",
        "han": "肺动脉"
      },
      {
        "yi": "ꐂꈄꁨ",
        "han": "跳箱"
      },
      {
        "yi": "ꉙꐂꑮ",
        "han": "歌舞伎"
      },
      {
        "yi": "ꆧꁨꐂꏣ",
        "han": "尺动脉"
      }
    ]
  },
  {
    "g": "ꐞ",
    "initial": "jj",
    "final": "ie",
    "tone": "",
    "py": "jjie",
    "ipa": "dʑɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjie.mp3",
    "radical": "꒦",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊋꊒꏍꁸꐞꁈ",
        "han": "力的正交分解法"
      },
      {
        "yi": "ꁭꅐꃏꍏꏃꊫꌩꐞ",
        "han": "东非十字架"
      },
      {
        "yi": "ꀆꐒꐞꌺꁧꊌꀋꐈꃷꁨ",
        "han": "水的离子积常数"
      },
      {
        "yi": "ꐯꁦꐮꐞ",
        "han": "交相辉映"
      },
      {
        "yi": "ꅉꐞꏃꃅꐳꐨ",
        "han": "第二宇宙速度"
      }
    ]
  },
  {
    "g": "ꐷ",
    "initial": "nj",
    "final": "ie",
    "tone": "",
    "py": "njie",
    "ipa": "ndʑɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njie.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꐻꐷꅍ",
        "han": "镩子"
      },
      {
        "yi": "ꀞꇁꐷ",
        "han": "冒失"
      },
      {
        "yi": "ꃬꐚꏿꐷ",
        "han": "鸡飞蛋打"
      },
      {
        "yi": "ꀑꅥꏾꐷ",
        "han": "横征暴敛"
      },
      {
        "yi": "ꀃꈈꐷ",
        "han": "破门"
      }
    ]
  },
  {
    "g": "ꑐ",
    "initial": "ny",
    "final": "ie",
    "tone": "",
    "py": "nyie",
    "ipa": "ȵɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyie.mp3",
    "radical": "꒑",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꄤꆳꑐ",
        "han": "斑鸠毛"
      },
      {
        "yi": "ꑐꑕ",
        "han": "剪贴"
      },
      {
        "yi": "ꃬꑐꁱꇷ",
        "han": "鸡内金"
      },
      {
        "yi": "ꍅꑐꄐꅍ",
        "han": "活化能"
      },
      {
        "yi": "ꑾꑐꁱꅍ",
        "han": "羊毫"
      }
    ]
  },
  {
    "g": "ꑣ",
    "initial": "x",
    "final": "ie",
    "tone": "",
    "py": "xie",
    "ipa": "ɕɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xie.mp3",
    "radical": "꒳",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏾꑣꁬ",
        "han": "青葙"
      },
      {
        "yi": "ꃶꑣꏸ",
        "han": "武仙"
      },
      {
        "yi": "ꁮꋚꑣꑴꁱꊖꀌꀠ",
        "han": "采桑画像砖"
      },
      {
        "yi": "ꇤꇧꎭ、ꆼꑣ",
        "han": "克服"
      },
      {
        "yi": "ꇑꑣ",
        "han": "篡夺"
      }
    ]
  },
  {
    "g": "ꑷ",
    "initial": "y",
    "final": "ie",
    "tone": "",
    "py": "yie",
    "ipa": "ʑɛ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yie.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑷꇤ",
        "han": "烟斗"
      },
      {
        "yi": "ꌧꃆꁱꇐꑷꂿ、ꁱꀕꑶꂿ",
        "han": "文化宫"
      },
      {
        "yi": "ꍏꑷꊿꋅꒉꌶꅉꀁꑌꌺꇖꅇꂷꁱꂷꁱꇐꑫꆀꉙꎥꃪꅉ",
        "han": "中央民族大学少数民族语言文学系彝语教研室"
      },
      {
        "yi": "ꍤꑷꏤꐪ",
        "han": "澶渊之盟"
      },
      {
        "yi": "ꑷꄐꉻꏑꂽ",
        "han": "远东盟军"
      }
    ]
  },
  {
    "g": "ꀇ",
    "initial": "",
    "final": "ie",
    "tone": "p",
    "py": "iep",
    "ipa": "ɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_iep.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀇꊨꆅꅋ",
        "han": "艾滋病病毒"
      },
      {
        "yi": "ꀇꊨꀙꆅ",
        "han": "艾滋病"
      },
      {
        "yi": "ꀇꊨꆅ",
        "han": "﻿艾滋病"
      },
      {
        "yi": "ꀑꏾꀇꅐ",
        "han": "头疮"
      },
      {
        "yi": "ꀇꐒꌤꃅꆅ",
        "han": "气火伏心"
      }
    ]
  },
  {
    "g": "ꀝ",
    "initial": "b",
    "final": "ie",
    "tone": "p",
    "py": "biep",
    "ipa": "pɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_biep.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꄇꃅꄇꀝ",
        "han": "公然"
      },
      {
        "yi": "ꀝꄇ",
        "han": "扁担"
      },
      {
        "yi": "ꂷꀝ",
        "han": "侍从"
      },
      {
        "yi": "ꏃꄌꀝꁬ",
        "han": "石刁柏"
      },
      {
        "yi": "ꆸꁧꑸꀝꁧ",
        "han": "逼上梁山"
      }
    ]
  },
  {
    "g": "ꀾ",
    "initial": "p",
    "final": "ie",
    "tone": "p",
    "py": "piep",
    "ipa": "pʰɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_piep.mp3",
    "radical": "꒪",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆏꉠꎁꃅꂰꇩꁧꌠꀾꁬꃼꇬꍑꀕ",
        "han": "你能帮我买张到美国的票吗"
      },
      {
        "yi": "ꂰꇩꁧꌠꃏꏸꀾꐤꀕꑴꌦ",
        "han": "到美国的飞机还有票吗"
      },
      {
        "yi": "ꉻꍯꀾꃷꅉꇿꐛ",
        "han": "售票处在哪里"
      },
      {
        "yi": "ꀾꊐꅍ",
        "han": "票箱"
      },
      {
        "yi": "ꄧꀾ",
        "han": "托派"
      }
    ]
  },
  {
    "g": "ꁝ",
    "initial": "bb",
    "final": "ie",
    "tone": "p",
    "py": "bbiep",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbiep.mp3",
    "radical": "꒟",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꁼ",
    "initial": "nb",
    "final": "ie",
    "tone": "p",
    "py": "nbiep",
    "ipa": "mbɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbiep.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꄰꁼ ꏿ",
        "han": "驰突"
      }
    ]
  },
  {
    "g": "ꂗ",
    "initial": "hm",
    "final": "ie",
    "tone": "p",
    "py": "hmiep",
    "ipa": "m̥ɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmiep.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꂗꍵ",
        "han": "军刀"
      }
    ]
  },
  {
    "g": "ꂴ",
    "initial": "m",
    "final": "ie",
    "tone": "p",
    "py": "miep",
    "ipa": "mɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_miep.mp3",
    "radical": "꒘",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉂꂪꂴꇷꑴ",
        "han": "突触前膜"
      },
      {
        "yi": "ꂴꅰꄔ",
        "han": "火种"
      },
      {
        "yi": "ꃆꄔꂴꍀ",
        "han": "火花"
      },
      {
        "yi": "ꉮꂴ",
        "han": "海绵"
      },
      {
        "yi": "ꂴꌷꈧ",
        "han": "预习"
      }
    ]
  },
  {
    "g": "ꃩ",
    "initial": "v",
    "final": "ie",
    "tone": "p",
    "py": "viep",
    "ipa": "vɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_viep.mp3",
    "radical": "꓄",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀊꃩ",
        "han": "秋鼠曲草"
      },
      {
        "yi": "ꐒꃩ",
        "han": "华火绒草"
      }
    ]
  },
  {
    "g": "ꄆ",
    "initial": "d",
    "final": "ie",
    "tone": "p",
    "py": "diep",
    "ipa": "tɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_diep.mp3",
    "radical": "꒼",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꄆꈜꀑꂪꄆꍑ",
        "han": "路端电压"
      },
      {
        "yi": "ꌋꐈꄆꐛꄐꐨ",
        "han": "感应电动势"
      },
      {
        "yi": "ꄆꂴꍀꐮꂪ",
        "han": "电弧焊接"
      },
      {
        "yi": "ꄮꈉꄉꇤꄆꊛꅍ",
        "han": "延时继电器"
      },
      {
        "yi": "ꋣꄆꍅꊋ",
        "han": "相电压"
      }
    ]
  },
  {
    "g": "ꄠ",
    "initial": "t",
    "final": "ie",
    "tone": "p",
    "py": "tiep",
    "ipa": "tʰɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tiep.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꒀꄠꊿ",
        "han": "犹太人"
      },
      {
        "yi": "ꒈꀑꄠꀻꑸꎿꃀꊸꒉꈴ",
        "han": "北太平洋暖流"
      },
      {
        "yi": "ꄠꏹꁱ",
        "han": "太极图"
      },
      {
        "yi": "ꄠꒄꉛ",
        "han": "鲐鱼"
      },
      {
        "yi": "ꂼꄠꎧ",
        "han": "茅台酒"
      }
    ]
  },
  {
    "g": "ꄼ",
    "initial": "dd",
    "final": "ie",
    "tone": "p",
    "py": "ddiep",
    "ipa": "dɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddiep.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꄼ ꀕꄻꃅ",
        "han": "喋喋"
      },
      {
        "yi": "ꋚꀈꄼ",
        "han": "白饭"
      },
      {
        "yi": "ꄼꀕꄻ、ꅇꑌꉐꎴ、ꈌꑌꉐꎳ",
        "han": "唠叨"
      },
      {
        "yi": "ꄼꁱꃅꏸ",
        "han": "虎杖"
      },
      {
        "yi": "ꄼꀕꄼꃅ",
        "han": "喋喋不休"
      }
    ]
  },
  {
    "g": "ꅯ",
    "initial": "hn",
    "final": "ie",
    "tone": "p",
    "py": "hniep",
    "ipa": "n̥ɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hniep.mp3",
    "radical": "꒗",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꅯꇤ",
        "han": "南瓜"
      }
    ]
  },
  {
    "g": "ꆃ",
    "initial": "n",
    "final": "ie",
    "tone": "p",
    "py": "niep",
    "ipa": "nɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_niep.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊆꆃꁬꏾ",
        "han": "王莲叶子"
      },
      {
        "yi": "ꊈꆃꑍꋏ",
        "han": "威廉二世"
      },
      {
        "yi": "ꆃꄆꏃ",
        "han": "零电势"
      },
      {
        "yi": "ꆃꇤꀊꏂ",
        "han": "金瓜"
      },
      {
        "yi": "ꇓꊖꀡꆃ",
        "han": "灰浆"
      }
    ]
  },
  {
    "g": "ꆝ",
    "initial": "hl",
    "final": "ie",
    "tone": "p",
    "py": "hliep",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hliep.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꆾ",
    "initial": "l",
    "final": "ie",
    "tone": "p",
    "py": "liep",
    "ipa": "lɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_liep.mp3",
    "radical": "꒑",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꆾꂸ",
        "han": "赖曼"
      },
      {
        "yi": "ꁦꎴꌡꏬ、ꁦꎴꌡꆾ",
        "han": "绿色塑料"
      },
      {
        "yi": "ꑼꊪꆾ、ꑼꌅꄐꊋ",
        "han": "原子能"
      },
      {
        "yi": "ꆾꀘꑠ",
        "han": "莱比锡"
      },
      {
        "yi": "ꌡꆾ",
        "han": "塑料"
      }
    ]
  },
  {
    "g": "ꇡ",
    "initial": "g",
    "final": "ie",
    "tone": "p",
    "py": "giep",
    "ipa": "kɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_giep.mp3",
    "radical": "꒕",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꆺꏢꇡ",
        "han": "磷酸钙"
      },
      {
        "yi": "ꃅꇡꊂꇟꌉꈿ",
        "han": "土地革命战争"
      },
      {
        "yi": "ꇡꊖꆈꈌꑊ",
        "han": "黑钙土剖面"
      },
      {
        "yi": "ꆀꇡꊖ",
        "han": "栗钙土"
      },
      {
        "yi": "ꇲꇡ",
        "han": "迷惑"
      }
    ]
  },
  {
    "g": "ꇾ",
    "initial": "k",
    "final": "ie",
    "tone": "p",
    "py": "kiep",
    "ipa": "kʰɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kiep.mp3",
    "radical": "꒿",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꇾꀕꇽ",
        "han": "咕嘟"
      }
    ]
  },
  {
    "g": "ꈙ",
    "initial": "gg",
    "final": "ie",
    "tone": "p",
    "py": "ggiep",
    "ipa": "gɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggiep.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌗꈙ",
        "han": "断气"
      },
      {
        "yi": "ꋊꈙ",
        "han": "绝种"
      },
      {
        "yi": "ꈙ ꆼꈘꆽ",
        "han": "断简残编"
      },
      {
        "yi": "ꄤꈙꈎ",
        "han": "太艮年"
      },
      {
        "yi": "ꈌꃴꉐꃴꋩ、ꏅꌗꈙꄉꏽ",
        "han": "声嘶力竭"
      }
    ]
  },
  {
    "g": "ꉍ",
    "initial": "hx",
    "final": "ie",
    "tone": "p",
    "py": "hxiep",
    "ipa": "hɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxiep.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꇮꃅꊿꉍꏑꊈꑼꉼ",
        "han": "工联委员会"
      },
      {
        "yi": "ꉍꈄ",
        "han": "网兜"
      },
      {
        "yi": "ꉍꈄꇬꃹ",
        "han": "落网"
      },
      {
        "yi": "ꃅꆳꈹꉍꈄꊐ",
        "han": "捕风捉影"
      },
      {
        "yi": "ꉍꈄꊲꇁ",
        "han": "网篮"
      }
    ]
  },
  {
    "g": "ꉟ",
    "initial": "ng",
    "final": "ie",
    "tone": "p",
    "py": "ngiep",
    "ipa": "ŋɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngiep.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꇝꉼꉟ",
        "han": "隔河岩"
      },
      {
        "yi": "ꉟꏿꌧꑳ",
        "han": "爱琴文明"
      },
      {
        "yi": "ꉟꏦꇍꌦꊸꒉꈴ",
        "han": "厄加勒斯暖流"
      },
      {
        "yi": "ꉟꇙꇂꆃꉼꇩ",
        "han": "爱尔兰联合国"
      },
      {
        "yi": "ꉟꉻꏤꐪ",
        "han": "爱瑗条约"
      }
    ]
  },
  {
    "g": "ꊓ",
    "initial": "z",
    "final": "ie",
    "tone": "p",
    "py": "ziep",
    "ipa": "tsɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ziep.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉴꑭꊓꈊꃀꃥꆦꑴꁱ",
        "han": "韩熙载夜宴图"
      },
      {
        "yi": "ꊓꆹꉼ",
        "han": "再理会"
      }
    ]
  },
  {
    "g": "ꊵ",
    "initial": "c",
    "final": "ie",
    "tone": "p",
    "py": "ciep",
    "ipa": "tsʰɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ciep.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍍꊵ、ꎆꍍ",
        "han": "赢利"
      },
      {
        "yi": "ꍍꊵ",
        "han": "纯利"
      },
      {
        "yi": "ꊵꑵꃅꀋꐛ",
        "han": "不怎么样"
      },
      {
        "yi": "ꄊꊵꁯꇲ",
        "han": "淡菜"
      },
      {
        "yi": "ꊵꑵꐛ",
        "han": "象样"
      }
    ]
  },
  {
    "g": "ꋗ",
    "initial": "zz",
    "final": "ie",
    "tone": "p",
    "py": "zziep",
    "ipa": "dzɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zziep.mp3",
    "radical": "꒙",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꈌꑌꌓꋗ",
        "han": "多口相声"
      },
      {
        "yi": "ꉑꋗ",
        "han": "大龙虾"
      },
      {
        "yi": "ꋯꉉꌓꋗ",
        "han": "对口相声"
      },
      {
        "yi": "ꁡꋗꋂꉔ",
        "han": "椒盐"
      },
      {
        "yi": "ꉑꋗꌺ",
        "han": "毛虾"
      }
    ]
  },
  {
    "g": "ꋳ",
    "initial": "nz",
    "final": "ie",
    "tone": "p",
    "py": "nziep",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nziep.mp3",
    "radical": "꒤",
    "strokes": 2,
    "remainingStrokes": 1
  },
  {
    "g": "ꌏ",
    "initial": "s",
    "final": "ie",
    "tone": "p",
    "py": "siep",
    "ipa": "sɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_siep.mp3",
    "radical": "꒸",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꌏꎹꇙ",
        "han": "塞舌尔"
      },
      {
        "yi": "ꃀꄯꌏꇁꄯꎿꅔ",
        "han": "蒙特塞拉特岛"
      },
      {
        "yi": "ꑊꃛꑊꌏ",
        "han": "愧色"
      },
      {
        "yi": "ꃷꌏ",
        "han": "兀术"
      },
      {
        "yi": "ꑴꅉꑸꌏ",
        "han": "基色"
      }
    ]
  },
  {
    "g": "ꌰ",
    "initial": "ss",
    "final": "ie",
    "tone": "p",
    "py": "ssiep",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssiep.mp3",
    "radical": "꒙",
    "strokes": 5,
    "remainingStrokes": 4
  },
  {
    "g": "ꏧ",
    "initial": "j",
    "final": "ie",
    "tone": "p",
    "py": "jiep",
    "ipa": "tɕɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jiep.mp3",
    "radical": "꒟",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꂷꇊꏧꎿꇅꋧ",
        "han": "马六甲海狭"
      },
      {
        "yi": "ꃛꐊꉰꏧ",
        "han": "氟化氢钾"
      },
      {
        "yi": "ꈠꏧ",
        "han": "胛骨"
      },
      {
        "yi": "ꑱꉼꉸꑸꏧꊧꇂꐛꑊꉙꁈ",
        "han": "伊红化亚甲基蓝染色法"
      },
      {
        "yi": "ꏧꂶꂷ",
        "han": "芥子"
      }
    ]
  },
  {
    "g": "ꐃ",
    "initial": "q",
    "final": "ie",
    "tone": "p",
    "py": "qiep",
    "ipa": "tɕʰɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qiep.mp3",
    "radical": "꒼",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑦꐃꒉ",
        "han": "硝镪水"
      },
      {
        "yi": "ꑸꐃ",
        "han": "阳泉"
      },
      {
        "yi": "ꈁꐃ",
        "han": "卡钳"
      },
      {
        "yi": "ꐃꊉ",
        "han": "蔷薇"
      },
      {
        "yi": "ꐃꇊꁯꄸ",
        "han": "钱龙"
      }
    ]
  },
  {
    "g": "ꐟ",
    "initial": "jj",
    "final": "ie",
    "tone": "p",
    "py": "jjiep",
    "ipa": "dʑɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjiep.mp3",
    "radical": "꒡",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꏲꉻꐟꊈ",
        "han": "机构臃肿"
      },
      {
        "yi": "ꀂꄁꂫꐟ",
        "han": "燕尾服"
      },
      {
        "yi": "ꒉꁮꀊꐟ",
        "han": "花腰虫"
      },
      {
        "yi": "ꑬꐞꇇꐟ",
        "han": "骈枝"
      },
      {
        "yi": "ꐟꈯꉱ",
        "han": "低二半山"
      }
    ]
  },
  {
    "g": "ꐸ",
    "initial": "nj",
    "final": "ie",
    "tone": "p",
    "py": "njiep",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njiep.mp3",
    "radical": "꒪",
    "strokes": 6,
    "remainingStrokes": 5
  },
  {
    "g": "ꑑ",
    "initial": "ny",
    "final": "ie",
    "tone": "p",
    "py": "nyiep",
    "ipa": "ȵɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyiep.mp3",
    "radical": "꒟",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꎮꑑꏃꏸ",
        "han": "北斗七星"
      },
      {
        "yi": "ꎮꑑꏸ",
        "han": "北斗"
      },
      {
        "yi": "ꀉꑑꁍꎼꏜ",
        "han": "茅草"
      },
      {
        "yi": "ꎮꑑꌺ",
        "han": "凄惨"
      },
      {
        "yi": "ꁮꇥꑑ",
        "han": "蝎子"
      }
    ]
  },
  {
    "g": "ꑤ",
    "initial": "x",
    "final": "ie",
    "tone": "p",
    "py": "xiep",
    "ipa": "ɕɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xiep.mp3",
    "radical": "꒼",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑤꍨ",
        "han": "夏朝"
      },
      {
        "yi": "ꂿꈬꑤꏓꂱꆅꉚꅉ",
        "han": "美姑县人民医院"
      },
      {
        "yi": "ꌞꑤ",
        "han": "外县"
      },
      {
        "yi": "ꊒꑤꇜ",
        "han": "丞相"
      },
      {
        "yi": "ꉴꑤ",
        "han": "大茴香"
      }
    ]
  },
  {
    "g": "ꑸ",
    "initial": "y",
    "final": "ie",
    "tone": "p",
    "py": "yiep",
    "ipa": "ʑɛ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yiep.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑸꆺꎭꄊ",
        "han": "亚历山大"
      },
      {
        "yi": "ꀙꑸꃄꁕ",
        "han": "北洋"
      },
      {
        "yi": "ꒈꀑꄊꑭꑸꎿꉱꁧꏡ",
        "han": "北大西洋海岭"
      },
      {
        "yi": "ꑸꐃ",
        "han": "阳泉"
      },
      {
        "yi": "ꑸꄉ",
        "han": "禁闭"
      }
    ]
  },
  {
    "g": "ꀈ",
    "initial": "",
    "final": "a",
    "tone": "t",
    "py": "at",
    "ipa": "a⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_at.mp3",
    "radical": "꒕",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀈꃛ",
        "han": "干巴"
      },
      {
        "yi": "ꀈꈥꉪꏦ",
        "han": "空想主义"
      },
      {
        "yi": "ꀈꈥꀕ",
        "han": "空荡荡"
      },
      {
        "yi": "ꀈꄬꀻ",
        "han": "阿托平"
      },
      {
        "yi": "ꀈꈥꃅ……ꃹ",
        "han": "空耗"
      }
    ]
  },
  {
    "g": "ꀞ",
    "initial": "b",
    "final": "a",
    "tone": "t",
    "py": "bat",
    "ipa": "pa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bat.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꂤꏂꀞ",
        "han": "沙场"
      },
      {
        "yi": "ꏦꈴꄉꅓꀞ",
        "han": "依法惩办"
      },
      {
        "yi": "ꀞꈉꇬꆹ",
        "han": "出庭"
      },
      {
        "yi": "ꀞꐳ",
        "han": "高效"
      },
      {
        "yi": "ꏡꃏꄉꀞ",
        "han": "分别处罚"
      }
    ]
  },
  {
    "g": "ꀿ",
    "initial": "p",
    "final": "a",
    "tone": "t",
    "py": "pat",
    "ipa": "pʰa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pat.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀿꑳ",
        "han": "胞衣"
      },
      {
        "yi": "ꇣꋲꁧꇐ、ꄂꃅꁧꀿ",
        "han": "独创"
      },
      {
        "yi": "ꀿꑳꉇ ꇷꄀꄖꌠ",
        "han": "外胚层"
      },
      {
        "yi": "ꃅꀿꅉꃀꀮ",
        "han": "拜天地"
      },
      {
        "yi": "ꍯꊪꒊꁮꀿꑗ",
        "han": "黄梅雨"
      }
    ]
  },
  {
    "g": "ꁞ",
    "initial": "bb",
    "final": "a",
    "tone": "t",
    "py": "bbat",
    "ipa": "ba⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbat.mp3",
    "radical": "꒟",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꉌꁮꑓꁞ、ꇿꌜ",
        "han": "兴奋"
      },
      {
        "yi": "ꁮꁞ",
        "han": "开怀"
      },
      {
        "yi": "ꁡꉘꁞꉖ",
        "han": "坑坑洼洼"
      },
      {
        "yi": "ꁮꁞ、ꍄꑐ",
        "han": "活跃"
      }
    ]
  },
  {
    "g": "ꁽ",
    "initial": "nb",
    "final": "a",
    "tone": "t",
    "py": "nbat",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbat.mp3",
    "radical": "꒧",
    "strokes": 5,
    "remainingStrokes": 4
  },
  {
    "g": "ꂘ",
    "initial": "hm",
    "final": "a",
    "tone": "t",
    "py": "hmat",
    "ipa": "m̥a⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmat.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꂘꌷꄐꏤ",
        "han": "教学安排"
      },
      {
        "yi": "ꋋꆹꂘꃀ",
        "han": "他是老师"
      },
      {
        "yi": "ꂘ……ꊐ",
        "han": "灌输"
      },
      {
        "yi": "ꂘꇺꊿ",
        "han": "教导员"
      },
      {
        "yi": "ꂘꑘꎭꄏ",
        "han": "教育扶贫"
      }
    ]
  },
  {
    "g": "ꂵ",
    "initial": "m",
    "final": "a",
    "tone": "t",
    "py": "mat",
    "ipa": "ma⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mat.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉌꂵꇬꑌ",
        "han": "印象"
      },
      {
        "yi": "ꉌꂵꁨꌺ",
        "han": "心房"
      },
      {
        "yi": "ꉌꂵꉪꅉꑟ",
        "han": "如愿以偿"
      },
      {
        "yi": "ꉌꂵꎇꈻꊭ",
        "han": "心舒期"
      },
      {
        "yi": "ꅽꈁꁠꑠꃅꄻꉡꇖꑠꉢꉌꂵꇿꐯꇿ",
        "han": "我很高兴你给我送礼物"
      }
    ]
  },
  {
    "g": "ꃑ",
    "initial": "f",
    "final": "a",
    "tone": "t",
    "py": "fat",
    "ipa": "fa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fat.mp3",
    "radical": "꒑",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꐭꃑꒉꏸ",
        "han": "放大器"
      },
      {
        "yi": "ꄆꒌꃑꏣ",
        "han": "影片"
      },
      {
        "yi": "ꄔꄆꃑꅉ",
        "han": "热电厂"
      },
      {
        "yi": "ꇓꈓꁉꃑ",
        "han": "开放城市"
      },
      {
        "yi": "ꒌꃑꏸ",
        "han": "放映机"
      }
    ]
  },
  {
    "g": "ꃪ",
    "initial": "v",
    "final": "a",
    "tone": "t",
    "py": "vat",
    "ipa": "va⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vat.mp3",
    "radical": "꒨",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃪꐛꅩꑳꀕ",
        "han": "悬崖绝壁"
      },
      {
        "yi": "ꃪꍶꉌꂵ",
        "han": "岩羊心"
      },
      {
        "yi": "ꃪꁬꀊꐎ",
        "han": "叉柱岩菖蒲"
      },
      {
        "yi": "ꍬꃪ",
        "han": "补正"
      },
      {
        "yi": "ꀆꃪ",
        "han": "烤鸭"
      }
    ]
  },
  {
    "g": "ꄇ",
    "initial": "d",
    "final": "a",
    "tone": "t",
    "py": "dat",
    "ipa": "ta⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dat.mp3",
    "radical": "꒤",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑳꇊꊅꄂꄇꒉ",
        "han": "伊洛瓦底江"
      },
      {
        "yi": "ꄇꍩꅥ",
        "han": "打炮"
      },
      {
        "yi": "ꄇꆀ",
        "han": "单宁"
      },
      {
        "yi": "ꏢꇊꏦꄇꒉ",
        "han": "灰化土剖面"
      },
      {
        "yi": "ꄇꆹꇓꌼ",
        "han": "大理石"
      }
    ]
  },
  {
    "g": "ꄡ",
    "initial": "t",
    "final": "a",
    "tone": "t",
    "py": "tat",
    "ipa": "tʰa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tat.mp3",
    "radical": "꒠",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꎖꉚꇬꋌꃅꄸꑽꑠꆹꉈꏠꌦꄡꑟ",
        "han": "考试作弊是很羞耻的"
      },
      {
        "yi": "ꄡꀧꏸ",
        "han": "织女"
      },
      {
        "yi": "ꃅꄡꎖꅍ",
        "han": "圭表"
      },
      {
        "yi": "ꉢꅽꏯꀠꂘꌠꄡꏸꄡꉢꅊꇈ",
        "han": "请原谅我对你的批评"
      },
      {
        "yi": "ꃰꌺ、ꃱꌺꐛꄡ",
        "han": "小雪"
      }
    ]
  },
  {
    "g": "ꄽ",
    "initial": "dd",
    "final": "a",
    "tone": "t",
    "py": "ddat",
    "ipa": "da⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddat.mp3",
    "radical": "꓄",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈐꄽ",
        "han": "刳当（内代理人）"
      },
      {
        "yi": "ꄽꂫꅐꇐ",
        "han": "终产物"
      },
      {
        "yi": "ꒉꂨꊏꄽꀮ",
        "han": "抽水马桶"
      },
      {
        "yi": "ꌅꈌꎀꍹꄽꂫꊐꌠ",
        "han": "基层政权组织"
      },
      {
        "yi": "ꄽꀮ",
        "han": "马桶"
      }
    ]
  },
  {
    "g": "ꅗ",
    "initial": "nd",
    "final": "a",
    "tone": "t",
    "py": "ndat",
    "ipa": "nda⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndat.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꋚꅗ",
        "han": "丰登"
      },
      {
        "yi": "ꌧꅗ",
        "han": "沙梨"
      },
      {
        "yi": "ꂿꅗ",
        "han": "习见"
      },
      {
        "yi": "ꎭꅧꅗ",
        "han": "颠沛"
      },
      {
        "yi": "ꎟꅗꄜꅗ",
        "han": "千锤百炼"
      }
    ]
  },
  {
    "g": "ꅰ",
    "initial": "hn",
    "final": "a",
    "tone": "t",
    "py": "hnat",
    "ipa": "n̥a⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnat.mp3",
    "radical": "꒕",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꈻꅰꐚꐙ",
        "han": "奴化"
      },
      {
        "yi": "ꂴꅰꅍ",
        "han": "火捻"
      },
      {
        "yi": "ꈩꅰ",
        "han": "逗弄"
      },
      {
        "yi": "ꂴꅰꄔ",
        "han": "火种"
      },
      {
        "yi": "ꒊꈧꌠꅰꋠ",
        "han": "卖笑"
      }
    ]
  },
  {
    "g": "ꆞ",
    "initial": "hl",
    "final": "a",
    "tone": "t",
    "py": "hlat",
    "ipa": "ɬa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlat.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꃅꑆꆞꇰꈪ",
        "han": "拉天缝裤"
      },
      {
        "yi": "ꁁꆓꆞ",
        "han": "卫生裤"
      },
      {
        "yi": "ꆞꐣꁙ",
        "han": "裤兜"
      },
      {
        "yi": "ꆞꐛ",
        "han": "连裆裤"
      },
      {
        "yi": "ꅽꆞꈍꑋꃅ",
        "han": "你的裤子多少钱"
      }
    ]
  },
  {
    "g": "ꆿ",
    "initial": "l",
    "final": "a",
    "tone": "t",
    "py": "lat",
    "ipa": "la⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lat.mp3",
    "radical": "꒐",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꆿꏬꇉꇬ",
        "han": "烧心壶"
      },
      {
        "yi": "ꆿꁌ",
        "han": "茶资"
      },
      {
        "yi": "ꄂꏸꆿꑗ",
        "han": "丁基橡胶"
      },
      {
        "yi": "ꑍꇱꆿꒉ",
        "han": "奶茶"
      },
      {
        "yi": "ꆿꃀ",
        "han": "大虫"
      }
    ]
  },
  {
    "g": "ꇢ",
    "initial": "g",
    "final": "a",
    "tone": "t",
    "py": "gat",
    "ipa": "ka⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gat.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꏦꎭꇢꊭꈏꆊꌧ",
        "han": "肋间内肌"
      },
      {
        "yi": "ꇢꎙ",
        "han": "间隙"
      },
      {
        "yi": "ꎴꇢꋎꌬ、ꎴꇢꌪꇺ",
        "han": "遥控"
      },
      {
        "yi": "ꏃꈜꇢꅉ",
        "han": "播幅距离"
      },
      {
        "yi": "ꅲꇢꃷꅍ",
        "han": "筛骨"
      }
    ]
  },
  {
    "g": "ꇿ",
    "initial": "k",
    "final": "a",
    "tone": "t",
    "py": "kat",
    "ipa": "kʰa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kat.mp3",
    "radical": "꒟",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꇿꋌ",
        "han": "验方"
      },
      {
        "yi": "ꀏꐯꇿ",
        "han": "性和谐"
      },
      {
        "yi": "ꆏꇿꇬꌤꃅ",
        "han": "你在哪儿工作"
      },
      {
        "yi": "ꉌꁮꑓꁞ、ꇿꌜ",
        "han": "兴奋"
      },
      {
        "yi": "ꇿꌌꒉ",
        "han": "欢笑"
      }
    ]
  },
  {
    "g": "ꈚ",
    "initial": "gg",
    "final": "a",
    "tone": "t",
    "py": "ggat",
    "ipa": "ga⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggat.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꋠꂊꈚꊸ",
        "han": "丰衣足食"
      },
      {
        "yi": "ꈚꇐꌬꇐ",
        "han": "衣物"
      },
      {
        "yi": "ꋌꈚꇬ",
        "han": "本地"
      },
      {
        "yi": "ꈚꌠꉌꀋꃃ",
        "han": "富贵不能淫"
      },
      {
        "yi": "ꃼꇇꃅꅉꉬꈚ",
        "han": "五口通商"
      }
    ]
  },
  {
    "g": "ꈲ",
    "initial": "mg",
    "final": "a",
    "tone": "t",
    "py": "mgat",
    "ipa": "ŋga⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgat.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈲꐪꀉꄂꏂ",
        "han": "惟利是图"
      },
      {
        "yi": "ꏦꐆꈲꏂ",
        "han": "徇私枉法"
      },
      {
        "yi": "ꈲꐪ",
        "han": "效能"
      },
      {
        "yi": "ꈲꁵꄉꃤ",
        "han": "优良"
      },
      {
        "yi": "ꉌꈲꀉꒉꉪꏦ",
        "han": "大汉族主义"
      }
    ]
  },
  {
    "g": "ꉎ",
    "initial": "hx",
    "final": "a",
    "tone": "t",
    "py": "hxat",
    "ipa": "ha⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxat.mp3",
    "radical": "꒭",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆀꉎ",
        "han": "零上"
      },
      {
        "yi": "ꉎꉐ",
        "han": "格格"
      },
      {
        "yi": "ꐰꄉꉎꄉ",
        "han": "通融"
      },
      {
        "yi": "ꉎꊐꌠ",
        "han": "上级"
      },
      {
        "yi": "ꉬꉎꃰꃅꆦꏫ",
        "han": "拜上帝教"
      }
    ]
  },
  {
    "g": "ꉠ",
    "initial": "ng",
    "final": "a",
    "tone": "t",
    "py": "ngat",
    "ipa": "ŋa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngat.mp3",
    "radical": "꒤",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉠꀁꇬꊿꀉꄉꐥ",
        "han": "我家里有父亲"
      },
      {
        "yi": "ꆏꉠꎁꃅꏝꀪꁧꌠꀾꁬꃼꇬꍑꀕ",
        "han": "你能帮我买张到日本的票吗"
      },
      {
        "yi": "ꉠꉌꃹꐯꉌꃹ",
        "han": "我很喜欢"
      },
      {
        "yi": "ꆏꉠꎁꃅꊉꌟꒉꎹꇬꍑꀕ",
        "han": "你能帮我找一下王先生吗"
      },
      {
        "yi": "ꆏꉠꎁꃅꐕꍯꀾꁬꃼꇬꍑꀕ",
        "han": "你能帮我买张汽车票吗"
      }
    ]
  },
  {
    "g": "ꉱ",
    "initial": "h",
    "final": "a",
    "tone": "t",
    "py": "hat",
    "ipa": "xa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hat.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐴꀖꉱꌦ",
        "han": "根究"
      },
      {
        "yi": "ꒈꂪꄊꑭꑸꎿꉱꁧꏡ",
        "han": "南大西洋海峡"
      },
      {
        "yi": "ꉢꇰꇁꎿꉱꉖꇅꐦ",
        "han": "安哥拉海盆"
      },
      {
        "yi": "ꅉꉱꄀꌠ",
        "han": "基底层"
      },
      {
        "yi": "ꉱꇤꌐ",
        "han": "覆灭"
      }
    ]
  },
  {
    "g": "ꊀ",
    "initial": "w",
    "final": "a",
    "tone": "t",
    "py": "wat",
    "ipa": "ɣa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wat.mp3",
    "radical": "꒤",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐒꅐꊀꅐ",
        "han": "散闷"
      },
      {
        "yi": "ꐒꊀ",
        "han": "悲苦"
      },
      {
        "yi": "ꊠꊀꀪ",
        "han": "星秀草"
      },
      {
        "yi": "ꍮꊪꊀꄅ",
        "han": "套车"
      },
      {
        "yi": "ꆏꑴꌠꐒꊨꊀꅊꇈ",
        "han": "希望你能节哀"
      }
    ]
  },
  {
    "g": "ꊔ",
    "initial": "z",
    "final": "a",
    "tone": "t",
    "py": "zat",
    "ipa": "tsa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zat.mp3",
    "radical": "꒕",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꄔꃚꊔ",
        "han": "臭豆腐"
      },
      {
        "yi": "ꊔꀕꋣ",
        "han": "气势汹汹"
      },
      {
        "yi": "ꊪꊔ",
        "han": "役使"
      },
      {
        "yi": "ꊪꑭꊔꇇ",
        "han": "竖子"
      },
      {
        "yi": "ꄔꃛꊔ",
        "han": "豆腐乳"
      }
    ]
  },
  {
    "g": "ꊶ",
    "initial": "c",
    "final": "a",
    "tone": "t",
    "py": "cat",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cat.mp3",
    "radical": "꒨",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꋘ",
    "initial": "zz",
    "final": "a",
    "tone": "t",
    "py": "zzat",
    "ipa": "dza⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzat.mp3",
    "radical": "꓄",
    "strokes": 7,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꑓꈏꋘ",
        "han": "内斜视"
      },
      {
        "yi": "ꑔꋘ",
        "han": "斜眼"
      },
      {
        "yi": "ꑓꏂꋘꉬ",
        "han": "横眉怒目"
      },
      {
        "yi": "ꑔ ꋘ",
        "han": "斗眼"
      }
    ]
  },
  {
    "g": "ꋴ",
    "initial": "nz",
    "final": "a",
    "tone": "t",
    "py": "nzat",
    "ipa": "ndza⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzat.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꋴꀺꉻꇗ",
        "han": "顺序公理"
      },
      {
        "yi": "ꃮꃶꋴ",
        "han": "灌肠"
      },
      {
        "yi": "ꍯꃅꋴ",
        "han": "疆埸"
      },
      {
        "yi": "ꎿꋴ ꒉꊩ",
        "han": "湖田"
      },
      {
        "yi": "ꋚꃶꋴ",
        "han": "粉肠"
      }
    ]
  },
  {
    "g": "ꌐ",
    "initial": "s",
    "final": "a",
    "tone": "t",
    "py": "sat",
    "ipa": "sa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sat.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌐꁌꅇ",
        "han": "引诱"
      },
      {
        "yi": "ꌐꄉꋍꑵꌷ",
        "han": "专修"
      },
      {
        "yi": "ꌐꑱ",
        "han": "表针"
      },
      {
        "yi": "ꌗꂓꌐꁨꃷꁨ",
        "han": "单位向量"
      },
      {
        "yi": "ꃷꁨꊫꌐ",
        "han": "数据"
      }
    ]
  },
  {
    "g": "ꌱ",
    "initial": "ss",
    "final": "a",
    "tone": "t",
    "py": "ssat",
    "ipa": "za⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssat.mp3",
    "radical": "꒳",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꉢꀊꌱꀋꐥ",
        "han": "我没有表妹"
      },
      {
        "yi": "ꊈꌱꀋꁧ",
        "han": "亲家公"
      },
      {
        "yi": "ꀑꆙꀊꌱ",
        "han": "姑舅"
      },
      {
        "yi": "ꀊꌱ",
        "han": "小姑子"
      },
      {
        "yi": "ꃶ（ꊈ）ꌱꎆ",
        "han": "插定"
      }
    ]
  },
  {
    "g": "ꍆ",
    "initial": "zh",
    "final": "a",
    "tone": "t",
    "py": "zhat",
    "ipa": "tʂa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhat.mp3",
    "radical": "꒩",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꅔꍆ",
        "han": "强占"
      },
      {
        "yi": "ꒉꍆꈌ",
        "han": "闸口"
      },
      {
        "yi": "ꀊꍆꏢꀕ",
        "han": "醡浆草"
      },
      {
        "yi": "ꋋꊭꌡꍆ",
        "han": "同比"
      },
      {
        "yi": "ꍆꐪꎖꅍ",
        "han": "比例尺"
      }
    ]
  },
  {
    "g": "ꍡ",
    "initial": "ch",
    "final": "a",
    "tone": "t",
    "py": "chat",
    "ipa": "tʂʰa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chat.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍡꃆꄐ",
        "han": "战刀"
      },
      {
        "yi": "ꀙꏢꃤꃅꍡ",
        "han": "京腔"
      },
      {
        "yi": "ꍡꑮꈯꌬ",
        "han": "台柱子"
      },
      {
        "yi": "ꉼꆆꍡꂱ",
        "han": "河南坠子"
      },
      {
        "yi": "ꍡꑮ",
        "han": "乱弹"
      }
    ]
  },
  {
    "g": "ꎔ",
    "initial": "nr",
    "final": "a",
    "tone": "t",
    "py": "nrat",
    "ipa": "ndʐa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrat.mp3",
    "radical": "꒨",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꎔꋌꒉ",
        "han": "花露水"
      },
      {
        "yi": "ꃰꃅꑷꂿꇬꅪꎔꑴꁱ",
        "han": "女史箴图"
      },
      {
        "yi": "ꂄꎔ",
        "han": "祥瑞"
      },
      {
        "yi": "ꋽꎔ",
        "han": "华美"
      },
      {
        "yi": "ꎔ、ꋽ、ꆸꒉ、ꂰꍏ、ꂰꇭ",
        "han": "美"
      }
    ]
  },
  {
    "g": "ꎫ",
    "initial": "sh",
    "final": "a",
    "tone": "t",
    "py": "shat",
    "ipa": "ʂa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shat.mp3",
    "radical": "꓀",
    "strokes": 2,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈛꎼꏦꎫ",
        "han": "步行街"
      },
      {
        "yi": "ꏦꎫꀀꇽꊈꑻꉼ",
        "han": "居民委员会"
      }
    ]
  },
  {
    "g": "ꏆ",
    "initial": "r",
    "final": "a",
    "tone": "t",
    "py": "rat",
    "ipa": "ʐa⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rat.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏆꌠꑋ",
        "han": "让座"
      },
      {
        "yi": "ꁌꏆꄉꎆꏏ",
        "han": "打折消费"
      },
      {
        "yi": "ꏲꄸꏆ",
        "han": "让位"
      },
      {
        "yi": "ꏆꇖ",
        "han": "告饶"
      },
      {
        "yi": "ꏆꐯꁳ",
        "han": "承让"
      }
    ]
  },
  {
    "g": "ꀉ",
    "initial": "",
    "final": "a",
    "tone": "x",
    "py": "ax",
    "ipa": "a⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀉꉌꅉꂇ",
        "han": "地羊"
      },
      {
        "yi": "ꀉꇙꀕ",
        "han": "乱真"
      },
      {
        "yi": "ꀉꑌꁁꏯꎐ",
        "han": "多面角"
      },
      {
        "yi": "ꀉꉷꏁꒉ",
        "han": "金沙江"
      },
      {
        "yi": "ꇇꇐꀉꒉꌠ",
        "han": "巨万"
      }
    ]
  },
  {
    "g": "ꀟ",
    "initial": "b",
    "final": "a",
    "tone": "x",
    "py": "bax",
    "ipa": "pa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀟꁮꈶꇓ",
        "han": "泡沫玻璃"
      },
      {
        "yi": "ꀟꑻꀕ",
        "han": "平滑"
      },
      {
        "yi": "ꒈꀑꀟꊪꑮ",
        "han": "北路梆子"
      },
      {
        "yi": "ꀟꁌꐨ",
        "han": "汇率"
      },
      {
        "yi": "ꒉꀟꏜꃨ",
        "han": "芦花"
      }
    ]
  },
  {
    "g": "ꁀ",
    "initial": "p",
    "final": "a",
    "tone": "x",
    "py": "pax",
    "ipa": "pʰa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑲꌩꀖꑘꁀꎼꊐꈴ",
        "han": "垃圾袋装化"
      },
      {
        "yi": "ꂪꌦꁀꁕ",
        "han": "布匹"
      },
      {
        "yi": "ꂪꌦꁀꉾ",
        "han": "粗布"
      },
      {
        "yi": "ꁀꄏꆿ",
        "han": "袋狼"
      },
      {
        "yi": "ꁀꁻ",
        "han": "月琴"
      }
    ]
  },
  {
    "g": "ꁟ",
    "initial": "bb",
    "final": "a",
    "tone": "x",
    "py": "bbax",
    "ipa": "ba⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁟꏪꇙꀕꐱ",
        "han": "扁形动物纲"
      },
      {
        "yi": "ꒇꎿꏠꅍꁟꏪꌠ",
        "han": "扁锉"
      },
      {
        "yi": "ꁟꑻ",
        "han": "光趟"
      },
      {
        "yi": "ꁟꉉꁮꅉ",
        "han": "寓意"
      },
      {
        "yi": "ꁟ ꑻ",
        "han": "光溜"
      }
    ]
  },
  {
    "g": "ꁾ",
    "initial": "nb",
    "final": "a",
    "tone": "x",
    "py": "nbax",
    "ipa": "mba⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏦꈜꁾ ꇓ",
        "han": "街垒"
      },
      {
        "yi": "ꁾꈓꄅꍅꀕ",
        "han": "壁垒森严"
      },
      {
        "yi": "ꁾꈜꌅꅍ",
        "han": "庇护的权利"
      },
      {
        "yi": "ꁾꅉ",
        "han": "掩蔽部"
      },
      {
        "yi": "ꁾꇓꐽ",
        "han": "平毁"
      }
    ]
  },
  {
    "g": "ꂙ",
    "initial": "hm",
    "final": "a",
    "tone": "x",
    "py": "hmax",
    "ipa": "m̥a⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꂙꃨ",
        "han": "索玛花"
      }
    ]
  },
  {
    "g": "ꂶ",
    "initial": "m",
    "final": "a",
    "tone": "x",
    "py": "max",
    "ipa": "ma⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_max.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊏꏂ、ꂶꈯꄡ",
        "han": "芒种"
      },
      {
        "yi": "ꃝꃅꂶꆦ",
        "han": "喜果"
      },
      {
        "yi": "ꂶꂷ、ꊪꇖ、ꏡꏢ",
        "han": "果实"
      },
      {
        "yi": "ꏜꂶꂷ",
        "han": "草果"
      },
      {
        "yi": "ꁬꋌꂶꂷ",
        "han": "药片"
      }
    ]
  },
  {
    "g": "ꃒ",
    "initial": "f",
    "final": "a",
    "tone": "x",
    "py": "fax",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꃫ",
    "initial": "v",
    "final": "a",
    "tone": "x",
    "py": "vax",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꄈ",
    "initial": "d",
    "final": "a",
    "tone": "x",
    "py": "dax",
    "ipa": "ta⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍔꄈ",
        "han": "政党"
      },
      {
        "yi": "ꊏꄈꈐꏭꄉꉜ",
        "han": "留党察看"
      },
      {
        "yi": "ꄈꅿꐥꐨ",
        "han": "党的生活"
      },
      {
        "yi": "ꄈꁥ",
        "han": "党派"
      },
      {
        "yi": "ꄈꐏꂽ",
        "han": "党卫军"
      }
    ]
  },
  {
    "g": "ꄢ",
    "initial": "t",
    "final": "a",
    "tone": "x",
    "py": "tax",
    "ipa": "tʰa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꄢꈍꅥꄇꍩ",
        "han": "反坦克炮"
      }
    ]
  },
  {
    "g": "ꄾ",
    "initial": "dd",
    "final": "a",
    "tone": "x",
    "py": "ddax",
    "ipa": "da⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꄾꌦꍂꃅ",
        "han": "尽量"
      },
      {
        "yi": "ꄾꄿ",
        "han": "主干"
      },
      {
        "yi": "ꄾꄮꇬ",
        "han": "青春期"
      },
      {
        "yi": "ꄾꄜꈩꏦ",
        "han": "单杠"
      },
      {
        "yi": "ꑞꇷꑌꑠꃅꑌꉆꑴꄾ",
        "han": "所有的车都可以这样吗"
      }
    ]
  },
  {
    "g": "ꅘ",
    "initial": "nd",
    "final": "a",
    "tone": "x",
    "py": "ndax",
    "ipa": "nda⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇻꂷꅘꇉ",
        "han": "键槽"
      },
      {
        "yi": "ꏾꃏꅘꁧ",
        "han": "大羽羊齿"
      },
      {
        "yi": "ꒈꋌꅘꇉ",
        "han": "浴盆"
      },
      {
        "yi": "ꎸꅍꅘꇉ",
        "han": "槽钢"
      },
      {
        "yi": "ꅘꇉꄉꈤ",
        "han": "槽床"
      }
    ]
  },
  {
    "g": "ꅱ",
    "initial": "hn",
    "final": "a",
    "tone": "x",
    "py": "hnax",
    "ipa": "n̥a⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈌꋦꅱꋦꂂ",
        "han": "平头正脸"
      },
      {
        "yi": "ꅱꁱ",
        "han": "酒渣鼻"
      },
      {
        "yi": "ꅱꈯꃅꉉ",
        "han": "正告"
      },
      {
        "yi": "ꅱꄜ",
        "han": "单数"
      },
      {
        "yi": "ꅱꇉ",
        "han": "鼓膜"
      }
    ]
  },
  {
    "g": "ꆄ",
    "initial": "n",
    "final": "a",
    "tone": "x",
    "py": "nax",
    "ipa": "na⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊗꑗꆄꄻ",
        "han": "泥疗"
      },
      {
        "yi": "ꆄꄵꆄꏮ",
        "han": "防疫"
      },
      {
        "yi": "ꌦꊈꆄꇓ",
        "han": "血癌"
      },
      {
        "yi": "ꌊꁌꆄꄻ",
        "han": "救死扶伤"
      },
      {
        "yi": "ꍹꋁꆄꁮ",
        "han": "霉菌"
      }
    ]
  },
  {
    "g": "ꆟ",
    "initial": "hl",
    "final": "a",
    "tone": "x",
    "py": "hlax",
    "ipa": "ɬa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌺꃰꆟꀯ",
        "han": "男子不育"
      },
      {
        "yi": "ꆎꂿꋍꉙꃅꀋꂿꋍꉙꃅ、ꑓꂿꏧꑸꈢꆈꆟꋠ",
        "han": "阳奉阴违"
      },
      {
        "yi": "ꒌꁮꆟꁮ",
        "han": "落魄"
      },
      {
        "yi": "ꆟꇷ",
        "han": "惊扰"
      },
      {
        "yi": "ꈬꋏꆟꄏ",
        "han": "苟全"
      }
    ]
  },
  {
    "g": "ꇀ",
    "initial": "l",
    "final": "a",
    "tone": "x",
    "py": "lax",
    "ipa": "la⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌫꎆ、ꒈꎆꇀꎆ",
        "han": "流动资金"
      },
      {
        "yi": "ꇀꄟ",
        "han": "来势"
      },
      {
        "yi": "ꇀꃼꏭꏮꒉ",
        "han": "往右拐"
      },
      {
        "yi": "ꉢꆍꐋꀨꋋꈨꇬꈧꇀꑟꉂ",
        "han": "我希望你们这些朋友来玩"
      },
      {
        "yi": "ꇀꑳꁁꏯ",
        "han": "右面"
      }
    ]
  },
  {
    "g": "ꇣ",
    "initial": "g",
    "final": "a",
    "tone": "x",
    "py": "gax",
    "ipa": "ka⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇣꋲꇤꑞ",
        "han": "光怪陆离"
      },
      {
        "yi": "ꇣꋲꁧꇐ、ꄂꃅꁧꀿ",
        "han": "独创"
      },
      {
        "yi": "ꋧꃅꇣꄧꀉꒉꃅꌉꑍꃢꀕꌠ",
        "han": "第二次世界大战"
      },
      {
        "yi": "ꇣꋲꅉ",
        "han": "特区"
      },
      {
        "yi": "ꇣꆈ",
        "han": "粗粮"
      }
    ]
  },
  {
    "g": "ꈀ",
    "initial": "k",
    "final": "a",
    "tone": "x",
    "py": "kax",
    "ipa": "kʰa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈀꐥ",
        "han": "一切"
      },
      {
        "yi": "ꂴꈀꏮꐙ",
        "han": "如故"
      },
      {
        "yi": "ꄈꈀꉬꃅꍏꑷꅇꃅ",
        "han": "全党服从中央"
      },
      {
        "yi": "ꈀꋏꈜ",
        "han": "交通壕"
      },
      {
        "yi": "ꆍꂾꈀꎭꀕꀐ",
        "han": "感谢你们"
      }
    ]
  },
  {
    "g": "ꈛ",
    "initial": "gg",
    "final": "a",
    "tone": "x",
    "py": "ggax",
    "ipa": "ga⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈳꅉ、ꈛꏦ",
        "han": "路线"
      },
      {
        "yi": "ꃅꋮꈛꏲꈉꅺꇰ",
        "han": "报关"
      },
      {
        "yi": "ꈛꆹ",
        "han": "老路"
      },
      {
        "yi": "ꈊꃀꈛꌋ",
        "han": "查夜"
      },
      {
        "yi": "ꈛꈈ",
        "han": "路口"
      }
    ]
  },
  {
    "g": "ꈳ",
    "initial": "mg",
    "final": "a",
    "tone": "x",
    "py": "mgax",
    "ipa": "ŋga⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈳꎆꅐꂋ",
        "han": "通胀"
      },
      {
        "yi": "ꇇꄧꈳꎆ",
        "han": "行佣"
      },
      {
        "yi": "ꈳꉻ",
        "han": "通式"
      },
      {
        "yi": "ꈏꒉꈳꅉ",
        "han": "内流区域"
      },
      {
        "yi": "ꁌꐪꈳꏦ",
        "han": "价值规律"
      }
    ]
  },
  {
    "g": "ꉏ",
    "initial": "hx",
    "final": "a",
    "tone": "x",
    "py": "hxax",
    "ipa": "ha⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈌꈬꉏꈈ",
        "han": "嘴稳"
      },
      {
        "yi": "ꉏꆈꇼꋠ",
        "han": "刀耕火种"
      },
      {
        "yi": "ꅇꇐꉏꑳꁈ",
        "han": "修辞学"
      },
      {
        "yi": "ꆳꆈꉏꆈ",
        "han": "暴风聚雨"
      },
      {
        "yi": "ꈌꍚꉏꑐꈩ",
        "han": "卖乖"
      }
    ]
  },
  {
    "g": "ꉡ",
    "initial": "ng",
    "final": "a",
    "tone": "x",
    "py": "ngax",
    "ipa": "ŋa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌕꏧꉡ",
        "han": "三甲胺"
      },
      {
        "yi": "ꉡꆹꄓꇩꅇꂷꉉꇮꀋꐛ",
        "han": "我不会讲德语"
      },
      {
        "yi": "ꑣꉡ",
        "han": "酰胺"
      },
      {
        "yi": "ꏧꉡ",
        "han": "甲胺"
      },
      {
        "yi": "ꏓꑣꉡꌤꑟ",
        "han": "聚酰胺纤维"
      }
    ]
  },
  {
    "g": "ꉲ",
    "initial": "h",
    "final": "a",
    "tone": "x",
    "py": "hax",
    "ipa": "xa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊪꅪꉲꌦ",
        "han": "紫檀木"
      },
      {
        "yi": "ꄮꉲꌩ",
        "han": "油松"
      },
      {
        "yi": "ꉲꌩ",
        "han": "樊篱"
      },
      {
        "yi": "ꌿꉲꌩ",
        "han": "扁柏"
      }
    ]
  },
  {
    "g": "ꊁ",
    "initial": "w",
    "final": "a",
    "tone": "x",
    "py": "wax",
    "ipa": "ɣa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊁꏡꌠ",
        "han": "后根"
      },
      {
        "yi": "ꊁꅐ",
        "han": "后进"
      },
      {
        "yi": "ꊁꋒꒆꇐ",
        "han": "孑遗生物"
      },
      {
        "yi": "ꂴꉛꊁꇱ",
        "han": "借位"
      },
      {
        "yi": "ꊁꊰ",
        "han": "落伍"
      }
    ]
  },
  {
    "g": "ꊕ",
    "initial": "z",
    "final": "a",
    "tone": "x",
    "py": "zax",
    "ipa": "tsa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊕꃅꏸ",
        "han": "土星"
      }
    ]
  },
  {
    "g": "ꊷ",
    "initial": "c",
    "final": "a",
    "tone": "x",
    "py": "cax",
    "ipa": "tsʰa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀧꊷꁈꄲ",
        "han": "球扇形"
      },
      {
        "yi": "ꊷꁈꈭ",
        "han": "扇环"
      },
      {
        "yi": "ꊷꈻ",
        "han": "冷暖"
      },
      {
        "yi": "ꊷꁈꃷꅍ",
        "han": "扇骨子"
      },
      {
        "yi": "ꅐꊷ ꁈ",
        "han": "羽扇"
      }
    ]
  },
  {
    "g": "ꋙ",
    "initial": "zz",
    "final": "a",
    "tone": "x",
    "py": "zzax",
    "ipa": "dza⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꆍꋙꋠꅉꋂꄮꆿꂷꑞꀕꐥ",
        "han": "你们餐厅有什么菜"
      },
      {
        "yi": "ꋙꃨꁏ",
        "han": "回茬"
      },
      {
        "yi": "ꋙꊰ",
        "han": "下饭"
      },
      {
        "yi": "ꋙꊪꋚꐥꅉ",
        "han": "米粮川"
      },
      {
        "yi": "ꋙꎴꏠꐕ",
        "han": "康拜因"
      }
    ]
  },
  {
    "g": "ꋵ",
    "initial": "nz",
    "final": "a",
    "tone": "x",
    "py": "nzax",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꌑ",
    "initial": "s",
    "final": "a",
    "tone": "x",
    "py": "sax",
    "ipa": "sa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌑꇌꃨꁯ",
        "han": "棉桃"
      },
      {
        "yi": "ꌑꇌꑞ ꋯ",
        "han": "棉线"
      },
      {
        "yi": "ꌑꇌꋩꏠꐕ",
        "han": "轧花机"
      },
      {
        "yi": "ꅐꀦꌑꇌ",
        "han": "原棉"
      },
      {
        "yi": "ꌑꇌꑮ",
        "han": "锦葵科"
      }
    ]
  },
  {
    "g": "ꌲ",
    "initial": "ss",
    "final": "a",
    "tone": "x",
    "py": "ssax",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꍇ",
    "initial": "zh",
    "final": "a",
    "tone": "x",
    "py": "zhax",
    "ipa": "tʂa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍇꃅ",
        "han": "分地"
      }
    ]
  },
  {
    "g": "ꍢ",
    "initial": "ch",
    "final": "a",
    "tone": "x",
    "py": "chax",
    "ipa": "tʂʰa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇗꅉꍢꇨ",
        "han": "拘礼"
      },
      {
        "yi": "ꍢꅉꎴ",
        "han": "悬殊"
      },
      {
        "yi": "ꍢꅉ、ꇢꄸ",
        "han": "差距"
      },
      {
        "yi": "ꍢꌦꀋꍣꌦ",
        "han": "细别"
      },
      {
        "yi": "ꍢꇖ",
        "han": "评审"
      }
    ]
  },
  {
    "g": "ꍼ",
    "initial": "rr",
    "final": "a",
    "tone": "x",
    "py": "rrax",
    "ipa": "dʐa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rrax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꄔꊏꍼꈘꀕ",
        "han": "火龙"
      }
    ]
  },
  {
    "g": "ꎕ",
    "initial": "nr",
    "final": "a",
    "tone": "x",
    "py": "nrax",
    "ipa": "ndʐa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎕꂓꄜ",
        "han": "报考"
      },
      {
        "yi": "ꎕꏦꐛꑊꌡꉚꀻ",
        "han": "标准比色卡"
      },
      {
        "yi": "ꎕꏦꎃꏍꊧ",
        "han": "标准正交集"
      },
      {
        "yi": "ꎕꏦꐛꄟ",
        "han": "标准状况"
      },
      {
        "yi": "ꎕꏦꃅꌗꉻꊂꍑꊋꋍꂷ",
        "han": "一标准大气压"
      }
    ]
  },
  {
    "g": "ꎬ",
    "initial": "sh",
    "final": "a",
    "tone": "x",
    "py": "shax",
    "ipa": "ʂa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎬꁱꏪꀉꒉꌠ",
        "han": "大饼"
      },
      {
        "yi": "ꎬꁱ",
        "han": "花卷"
      },
      {
        "yi": "ꌩꂷꎬꐚ",
        "han": "果脯"
      },
      {
        "yi": "ꎬꐚꎮꄤ",
        "han": "糖果"
      },
      {
        "yi": "ꇉꎬꆖ",
        "han": "大巢菜"
      }
    ]
  },
  {
    "g": "ꏇ",
    "initial": "r",
    "final": "a",
    "tone": "x",
    "py": "rax",
    "ipa": "ʐa⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rax.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏇꑐ",
        "han": "闹哄"
      },
      {
        "yi": "ꏇꑮ",
        "han": "趣剧"
      },
      {
        "yi": "ꏟꇤꏇꇤ",
        "han": "纷争"
      }
    ]
  },
  {
    "g": "ꀊ",
    "initial": "",
    "final": "a",
    "tone": "",
    "py": "a",
    "ipa": "a³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_a.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎿꀊꀋꅼꅉ",
        "han": "浅海"
      },
      {
        "yi": "ꀊꏂꄜꄬ",
        "han": "黄体酮"
      },
      {
        "yi": "ꄯꒉꄟꀊ",
        "han": "书皮"
      },
      {
        "yi": "ꂪꇙꀊꑙ",
        "han": "卷尾猴"
      },
      {
        "yi": "ꀊꆨꇜꎖꏦ",
        "han": "科举"
      }
    ]
  },
  {
    "g": "ꀠ",
    "initial": "b",
    "final": "a",
    "tone": "",
    "py": "ba",
    "ipa": "pa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ba.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌠꇂꀠꑸ",
        "han": "苏腊巴亚"
      },
      {
        "yi": "ꅇꀠꄯꒉ",
        "han": "便条"
      },
      {
        "yi": "ꇇꆴꀠ",
        "han": "副手"
      },
      {
        "yi": "ꊖꀌꀠ",
        "han": "缸砖"
      },
      {
        "yi": "ꄝꏿꐧꀠꌠ",
        "han": "中提琴"
      }
    ]
  },
  {
    "g": "ꁁ",
    "initial": "p",
    "final": "a",
    "tone": "",
    "py": "pa",
    "ipa": "pʰa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pa.mp3",
    "radical": "꒤",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌦꄽꁁ",
        "han": "月经带"
      },
      {
        "yi": "ꑶꌩꁁ",
        "han": "拖把"
      },
      {
        "yi": "ꀉꁁꐤꊋ",
        "han": "绝无仅有"
      },
      {
        "yi": "ꋍꁁꏯꋑꀋꋒ",
        "han": "全方位"
      },
      {
        "yi": "ꊿꑞꀉꁁꌠ",
        "han": "外族"
      }
    ]
  },
  {
    "g": "ꁠ",
    "initial": "bb",
    "final": "a",
    "tone": "",
    "py": "bba",
    "ipa": "ba³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bba.mp3",
    "radical": "꓀",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆽꁠꆊꌧ",
        "han": "三角肌"
      },
      {
        "yi": "ꆼꁠꐮꃝ",
        "han": "摩肩击毂"
      },
      {
        "yi": "ꉾꎏꉾꁠ",
        "han": "良性循环"
      },
      {
        "yi": "ꁠꄉꌸ",
        "han": "诖误"
      },
      {
        "yi": "ꎽꏮꁠꐤ",
        "han": "过山龙"
      }
    ]
  },
  {
    "g": "ꁿ",
    "initial": "nb",
    "final": "a",
    "tone": "",
    "py": "nba",
    "ipa": "mba³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nba.mp3",
    "radical": "꒼",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎷꁿꅅꃅ",
        "han": "铣刀"
      },
      {
        "yi": "ꎷꁿ",
        "han": "铣工"
      },
      {
        "yi": "ꆲꁿ",
        "han": "兜风"
      },
      {
        "yi": "ꀋꇙꄆꁿꅍ",
        "han": "静电屏蔽"
      },
      {
        "yi": "ꋍꍈꑌꀋꂁꀋꁿ",
        "han": "毫不隐瞒"
      }
    ]
  },
  {
    "g": "ꂚ",
    "initial": "hm",
    "final": "a",
    "tone": "",
    "py": "hma",
    "ipa": "m̥a³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hma.mp3",
    "radical": "꒙",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꎯꂚ",
        "han": "映山红"
      }
    ]
  },
  {
    "g": "ꂷ",
    "initial": "m",
    "final": "a",
    "tone": "",
    "py": "ma",
    "ipa": "ma³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ma.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꋒꂷ",
        "han": "雹子"
      },
      {
        "yi": "ꂷꇬ",
        "han": "个位"
      },
      {
        "yi": "ꂷꐁꌅ",
        "han": "蓖麻"
      },
      {
        "yi": "ꎺꊡꁱꂷꁱ",
        "han": "题字"
      },
      {
        "yi": "ꉬꑟꉙꃚꌐ、ꉬꑟꉙꃚꁱꂷ",
        "han": "五线谱"
      }
    ]
  },
  {
    "g": "ꃓ",
    "initial": "f",
    "final": "a",
    "tone": "",
    "py": "fa",
    "ipa": "fa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fa.mp3",
    "radical": "꒙",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄡꊁꃓ",
        "han": "缓期"
      },
      {
        "yi": "ꃓꍯꉛ",
        "han": "翻车鱼"
      },
      {
        "yi": "ꀉꆂꃓꅍ",
        "han": "乳罩"
      },
      {
        "yi": "ꐮꂰꀋꃓ",
        "han": "隔阂"
      },
      {
        "yi": "ꁁꆺꃓ",
        "han": "半立方"
      }
    ]
  },
  {
    "g": "ꃬ",
    "initial": "v",
    "final": "a",
    "tone": "",
    "py": "va",
    "ipa": "va³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_va.mp3",
    "radical": "꒤",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꃬꄹꀧ",
        "han": "寿光鸡"
      },
      {
        "yi": "ꊸꃶꃬꉆꆭꄉꌠ",
        "han": "炒鸡杂"
      },
      {
        "yi": "ꃬꑇ",
        "han": "蜒蚰"
      },
      {
        "yi": "ꃬꑐꁱꇷ",
        "han": "鸡内金"
      },
      {
        "yi": "ꃬꑆꁬ",
        "han": "蚰蜒草"
      }
    ]
  },
  {
    "g": "ꄉ",
    "initial": "d",
    "final": "a",
    "tone": "",
    "py": "da",
    "ipa": "ta³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_da.mp3",
    "radical": "꓀",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꋚꒉꀨꄉ",
        "han": "以粮为纲"
      },
      {
        "yi": "ꀊꆨꎴꄉꀋ ꃋꍃ",
        "han": "借古讽今"
      },
      {
        "yi": "ꄟꄉꊐ",
        "han": "包装"
      },
      {
        "yi": "ꁦꎆꅐꏏꄉꌬ",
        "han": "增产节约"
      },
      {
        "yi": "ꎷꒉꆣꄉꌠ",
        "han": "镀铬纲"
      }
    ]
  },
  {
    "g": "ꄣ",
    "initial": "t",
    "final": "a",
    "tone": "",
    "py": "ta",
    "ipa": "tʰa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ta.mp3",
    "radical": "꓆",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꇹꄣ",
        "han": "安排"
      },
      {
        "yi": "ꅐꄣ",
        "han": "残翅"
      },
      {
        "yi": "ꌦꄣꋇ",
        "han": "斯坦族"
      },
      {
        "yi": "ꁮꑳꄣꂷ",
        "han": "茧"
      },
      {
        "yi": "ꄣꇰ",
        "han": "探戈"
      }
    ]
  },
  {
    "g": "ꄿ",
    "initial": "dd",
    "final": "a",
    "tone": "",
    "py": "dda",
    "ipa": "da³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dda.mp3",
    "radical": "꓄",
    "strokes": 6,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꀧꄿꌡꉻ",
        "han": "球棍模型"
      },
      {
        "yi": "ꍔꊧꄿꐨꐯꏑꈳꏦ",
        "han": "基因的自由组合规律"
      },
      {
        "yi": "ꈯꄿꆺ",
        "han": "葬身"
      },
      {
        "yi": "ꊈꈯꌩꄿ",
        "han": "木质茎"
      },
      {
        "yi": "ꌩꄿ",
        "han": "木质部"
      }
    ]
  },
  {
    "g": "ꅙ",
    "initial": "nd",
    "final": "a",
    "tone": "",
    "py": "nda",
    "ipa": "nda³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nda.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꅙꑮꋦꁧ",
        "han": "蕨类植物"
      },
      {
        "yi": "ꃆꑭꃹꅙꑭꅐ",
        "han": "穷原竟委"
      },
      {
        "yi": "ꇗꂷꅙꁧ",
        "han": "种子蕨"
      },
      {
        "yi": "ꋌꅙ",
        "han": "惊异"
      },
      {
        "yi": "ꅙꁧꇇꏪ",
        "han": "卷柏"
      }
    ]
  },
  {
    "g": "ꅲ",
    "initial": "hn",
    "final": "a",
    "tone": "",
    "py": "hna",
    "ipa": "n̥a³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hna.mp3",
    "radical": "꒕",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꐏꅲꊿ",
        "han": "监护人"
      },
      {
        "yi": "ꈌꊰꀋ ꅲꁥ",
        "han": "死硬派"
      },
      {
        "yi": "ꊨꅲ",
        "han": "责问"
      },
      {
        "yi": "ꅥꄉꅲ",
        "han": "打问"
      },
      {
        "yi": "ꌞꆹꀋꅲ",
        "han": "独断独行"
      }
    ]
  },
  {
    "g": "ꆅ",
    "initial": "n",
    "final": "a",
    "tone": "",
    "py": "na",
    "ipa": "na³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_na.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꅋꅝꄉꉟꊪꆅꊌꆏ,ꇭꀧꒉꄚꉮꇁ（ꅋꅝꄉꉟꊪꆅꊌꆏ,ꊾꆅꊾꈻꇁ）",
        "han": "吸毒导致艾滋病，有害身心健康"
      },
      {
        "yi": "ꎐꁮꆅ",
        "han": "虫牙痛"
      },
      {
        "yi": "ꆅꏂꀊꐎ",
        "han": "副伤寒"
      },
      {
        "yi": "ꊿꆅ",
        "han": "病号"
      },
      {
        "yi": "ꆅꉚꆄꄻꏲꂠꀯ",
        "han": "卫生部"
      }
    ]
  },
  {
    "g": "ꆠ",
    "initial": "hl",
    "final": "a",
    "tone": "",
    "py": "hla",
    "ipa": "ɬa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hla.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꀀꆠꀂꂿꈯ",
        "han": "杯弓蛇影"
      },
      {
        "yi": "ꇢꆠꌎ",
        "han": "打圆场"
      },
      {
        "yi": "ꇷꌾꐬꆠꃅꇏ",
        "han": "恐怖主义"
      },
      {
        "yi": "ꐕꆠ",
        "han": "桉树"
      },
      {
        "yi": "ꀊꆠꄵ",
        "han": "防伪"
      }
    ]
  },
  {
    "g": "ꇁ",
    "initial": "l",
    "final": "a",
    "tone": "",
    "py": "la",
    "ipa": "la³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_la.mp3",
    "radical": "꒓",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꐯꇳꇁꀦ",
        "han": "传染源"
      },
      {
        "yi": "ꉇꇁꅇ",
        "han": "外来词"
      },
      {
        "yi": "ꃅꇁꄉ",
        "han": "套包"
      },
      {
        "yi": "ꇐꂸꇁ",
        "han": "鲁迈拉"
      },
      {
        "yi": "ꂷꇁꊉꎾꃝ",
        "han": "马拉维湖"
      }
    ]
  },
  {
    "g": "ꇤ",
    "initial": "g",
    "final": "a",
    "tone": "",
    "py": "ga",
    "ipa": "ka³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ga.mp3",
    "radical": "꒡",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꇤꄸꈁꆷ",
        "han": "锅台"
      },
      {
        "yi": "ꇇꇤꀧ",
        "han": "手炉"
      },
      {
        "yi": "ꃪꌧꇤ",
        "han": "橄榄"
      },
      {
        "yi": "ꉸꉷꇤꄓꈁꁏ",
        "han": "黄花岗起义"
      },
      {
        "yi": "ꉢꌧꇤꀋꋠ",
        "han": "我不吃李子"
      }
    ]
  },
  {
    "g": "ꈁ",
    "initial": "k",
    "final": "a",
    "tone": "",
    "py": "ka",
    "ipa": "kʰa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ka.mp3",
    "radical": "꓀",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꈁꏾ",
        "han": "放达"
      },
      {
        "yi": "ꀑꑊꀋꈁ",
        "han": "不要脸"
      },
      {
        "yi": "ꈁꇁꉳꆹꂤꏂꅔꃀ",
        "han": "卡拉哈里沙漠"
      },
      {
        "yi": "ꈁꇌꐋ",
        "han": "康乐球"
      },
      {
        "yi": "ꌦꈁꄃꆆꊉꑸ",
        "han": "斯堪的纳维亚"
      }
    ]
  },
  {
    "g": "ꈜ",
    "initial": "gg",
    "final": "a",
    "tone": "",
    "py": "gga",
    "ipa": "ga³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gga.mp3",
    "radical": "꒚",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉪꈜ",
        "han": "思路"
      },
      {
        "yi": "ꃅꆹꈜꌥ",
        "han": "老马识途"
      },
      {
        "yi": "ꒉꈜ",
        "han": "水道"
      },
      {
        "yi": "ꒈꋌꃢꈜ",
        "han": "浴衣"
      },
      {
        "yi": "ꊸꊋꌷꇐꏤꈜꋍꏢꏡꌠ",
        "han": "热力学第一定律"
      }
    ]
  },
  {
    "g": "ꈴ",
    "initial": "mg",
    "final": "a",
    "tone": "",
    "py": "mga",
    "ipa": "ŋga³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mga.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌗꈴꅉ",
        "han": "呼吸系统"
      },
      {
        "yi": "ꑟꀋꈴꄆꆗꏸ",
        "han": "无线电发射机"
      },
      {
        "yi": "ꈴꀋꄿꀐ",
        "han": "海涵"
      },
      {
        "yi": "ꅔꇬꈴ",
        "han": "起旱"
      },
      {
        "yi": "ꍂꈴꈌ",
        "han": "尿道口"
      }
    ]
  },
  {
    "g": "ꉐ",
    "initial": "hx",
    "final": "a",
    "tone": "",
    "py": "hxa",
    "ipa": "ha³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxa.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎼꉐ",
        "han": "野鸡"
      },
      {
        "yi": "ꉐꅋ",
        "han": "凉山乌头"
      },
      {
        "yi": "ꉐꆂꌋꏡ",
        "han": "舌下神经"
      },
      {
        "yi": "ꉐꌦꄲ",
        "han": "阵雨"
      },
      {
        "yi": "ꉐꁭꋓꃅꃨ",
        "han": "百花齐放"
      }
    ]
  },
  {
    "g": "ꉢ",
    "initial": "ng",
    "final": "a",
    "tone": "",
    "py": "nga",
    "ipa": "ŋa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nga.mp3",
    "radical": "꒖",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉢꈁꃏꀋꅝ",
        "han": "我不喝咖啡"
      },
      {
        "yi": "ꉢꉐꀖꀋꋠ",
        "han": "我不吃青菜"
      },
      {
        "yi": "ꉢꄐꎖꋋꏢꆏꈌꁦꀕ",
        "han": "你能批准我的计划吗"
      },
      {
        "yi": "ꉢꉐꀖꋠ",
        "han": "我吃青菜"
      },
      {
        "yi": "ꉢꋂꁆꑍꃤꈁ",
        "han": "我要后天的"
      }
    ]
  },
  {
    "g": "ꉳ",
    "initial": "h",
    "final": "a",
    "tone": "",
    "py": "ha",
    "ipa": "xa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ha.mp3",
    "radical": "꒪",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꉳꂰꇨ",
        "han": "哈密瓜"
      },
      {
        "yi": "ꂸꉳꄓꎿꅔ",
        "han": "曼哈顿岛"
      },
      {
        "yi": "ꉳꌦꃀꀌꀠ",
        "han": "蛤土蟆"
      },
      {
        "yi": "ꉳꅿꋇ",
        "han": "哈尼族"
      },
      {
        "yi": "ꉶꇤꉳꀸ",
        "han": "穿堂门"
      }
    ]
  },
  {
    "g": "ꊂ",
    "initial": "w",
    "final": "a",
    "tone": "",
    "py": "wa",
    "ipa": "ɣa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wa.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊮꌺꊂꋍꇫꅉꃷꁨꊏ",
        "han": "保留一位小数"
      },
      {
        "yi": "ꊂꐎ",
        "han": "熟地"
      },
      {
        "yi": "ꂷꊂꎭꏣ",
        "han": "绷带"
      },
      {
        "yi": "ꇩꏤꃅꊂ",
        "han": "疆域"
      },
      {
        "yi": "ꎕꏦꃅꌗꉻꊂꍑꊋꋍꂷ",
        "han": "一标准大气压"
      }
    ]
  },
  {
    "g": "ꊖ",
    "initial": "z",
    "final": "a",
    "tone": "",
    "py": "za",
    "ipa": "tsa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_za.mp3",
    "radical": "꒲",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌕꏓꊖ",
        "han": "三合土"
      },
      {
        "yi": "ꄔꊸꊖꁋ",
        "han": "火墙"
      },
      {
        "yi": "ꊖꀌꀠꇬꈣꌠ",
        "han": "空心砖"
      },
      {
        "yi": "ꅐꀦꊖꌋ",
        "han": "元煤"
      },
      {
        "yi": "ꅉꀕꈻꊖꃴꐻ",
        "han": "永冻土底冰"
      }
    ]
  },
  {
    "g": "ꊸ",
    "initial": "c",
    "final": "a",
    "tone": "",
    "py": "ca",
    "ipa": "tsʰa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ca.mp3",
    "radical": "꒨",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꑬꊸ",
        "han": "烈日"
      },
      {
        "yi": "ꊸꌌꄟ",
        "han": "热敷"
      },
      {
        "yi": "ꃛꊸꊝ",
        "han": "应急"
      },
      {
        "yi": "ꊸꁈ",
        "han": "风扇"
      },
      {
        "yi": "ꄆꊸꀑꊝ",
        "han": "热电偶"
      }
    ]
  },
  {
    "g": "ꋚ",
    "initial": "zz",
    "final": "a",
    "tone": "",
    "py": "zza",
    "ipa": "dza³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zza.mp3",
    "radical": "꒼",
    "strokes": 6,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꊸꑳꇬꋚꀱ",
        "han": "倒仓"
      },
      {
        "yi": "ꂟꋚ",
        "han": "斋饭"
      },
      {
        "yi": "ꋚꀉꑌꃅꊭ",
        "han": "广积粮"
      },
      {
        "yi": "ꎆꆳꋚꌉ",
        "han": "暴殄天物"
      },
      {
        "yi": "ꌩꋚꇓꂷꎧ",
        "han": "果子酒"
      }
    ]
  },
  {
    "g": "ꋶ",
    "initial": "nz",
    "final": "a",
    "tone": "",
    "py": "nza",
    "ipa": "ndza³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nza.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꂷꋶꑴ ꁱ",
        "han": "水墨画"
      },
      {
        "yi": "ꇓꋶꄆꊧ",
        "han": "石墨电极"
      },
      {
        "yi": "ꂷꋶꒉꊐ ꅍ",
        "han": "墨盒"
      },
      {
        "yi": "ꐯꈧꐮꋶ",
        "han": "调情"
      },
      {
        "yi": "ꂷꋶꅞ",
        "han": "泼墨"
      }
    ]
  },
  {
    "g": "ꌒ",
    "initial": "s",
    "final": "a",
    "tone": "",
    "py": "sa",
    "ipa": "sa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sa.mp3",
    "radical": "꒑",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꑍꇁꉖꌒꆲꏂꂱꇬꀕ",
        "han": "良成吉日万事顺心"
      },
      {
        "yi": "ꌶꌺꅥꌒꀻ",
        "han": "戒尺"
      },
      {
        "yi": "ꉌꌒꊐ",
        "han": "劝慰"
      },
      {
        "yi": "ꌧꌒꌧꈿꁱꇐ",
        "han": "世俗小说"
      },
      {
        "yi": "ꌒꃅꑬ ꆏ",
        "han": "静养"
      }
    ]
  },
  {
    "g": "ꌳ",
    "initial": "ss",
    "final": "a",
    "tone": "",
    "py": "ssa",
    "ipa": "za³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssa.mp3",
    "radical": "꒪",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꌳꈄꃅꇏ",
        "han": "英气"
      },
      {
        "yi": "ꌳꋉ",
        "han": "坐月子"
      },
      {
        "yi": "ꏓꂱꌳꈄꀋꃀ",
        "han": "人民英雄"
      },
      {
        "yi": "ꌳꋦꑬꆏꄮ",
        "han": "产假"
      },
      {
        "yi": "ꌳꃈꅮ",
        "han": "子弟"
      }
    ]
  },
  {
    "g": "ꍈ",
    "initial": "zh",
    "final": "a",
    "tone": "",
    "py": "zha",
    "ipa": "tʂa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zha.mp3",
    "radical": "꒙",
    "strokes": 7,
    "remainingStrokes": 6,
    "phrases": [
      {
        "yi": "ꍈꀨꇍꆍꇱ",
        "han": "张伯伦内阁"
      },
      {
        "yi": "ꊨꋌꍈꋌ",
        "han": "强酸"
      },
      {
        "yi": "ꄔꍈꁠꐤ",
        "han": "吹管"
      },
      {
        "yi": "ꑗꉘꍈ",
        "han": "动刑"
      },
      {
        "yi": "ꊈꑼꍈ",
        "han": "委员长"
      }
    ]
  },
  {
    "g": "ꍣ",
    "initial": "ch",
    "final": "a",
    "tone": "",
    "py": "cha",
    "ipa": "tʂʰa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cha.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆆꍣꈁꁏ",
        "han": "南昌起义"
      },
      {
        "yi": "ꇭꍣꍗꑴꏾꑑ ꄨ",
        "han": "共产主义青年团"
      },
      {
        "yi": "ꈯꄔꌧꍣꅍ",
        "han": "中心论点"
      },
      {
        "yi": "ꑭꍣꁧꇬꈝꃀꋋꏢꈴꌠꉬꀕ",
        "han": "到西昌走这条路吗"
      },
      {
        "yi": "ꍏꇩꇭꍣꄈ",
        "han": "中国共产党"
      }
    ]
  },
  {
    "g": "ꍽ",
    "initial": "rr",
    "final": "a",
    "tone": "",
    "py": "rra",
    "ipa": "dʐa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rra.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꍽꏿ",
        "han": "雀斑"
      },
      {
        "yi": "ꃭꍽ",
        "han": "柴鸡"
      },
      {
        "yi": "ꈌꍽꎸ",
        "han": "山麻雀肉"
      },
      {
        "yi": "ꉘꁮꍽꏿ",
        "han": "耀斑"
      },
      {
        "yi": "ꈌꍽ",
        "han": "老家贼"
      }
    ]
  },
  {
    "g": "ꎖ",
    "initial": "nr",
    "final": "a",
    "tone": "",
    "py": "nra",
    "ipa": "ndʐa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nra.mp3",
    "radical": "꒩",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꎖꏦꎖꅍ",
        "han": "标准件"
      },
      {
        "yi": "ꃄꇙꎖꅍ",
        "han": "候风地动仪"
      },
      {
        "yi": "ꇑꀠꎖꅍ",
        "han": "鲁班尺"
      },
      {
        "yi": "ꋉꃆꎖꅍ",
        "han": "营造尺"
      },
      {
        "yi": "ꍤꎖ、ꍤꌗ",
        "han": "审计"
      }
    ]
  },
  {
    "g": "ꎭ",
    "initial": "sh",
    "final": "a",
    "tone": "",
    "py": "sha",
    "ipa": "ʂa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sha.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌢ ꎭ",
        "han": "清贫"
      },
      {
        "yi": "ꆀꎭꁧꇬꈍꃅꁧ",
        "han": "到凉山怎么走"
      },
      {
        "yi": "ꊿꂿꈛꎭ",
        "han": "路祭"
      },
      {
        "yi": "ꉪꆫꃬꎭꈓꐊ",
        "han": "我们有游览的福气"
      },
      {
        "yi": "ꂿꎭꃢꈜꇔ",
        "han": "除丧"
      }
    ]
  },
  {
    "g": "ꏈ",
    "initial": "r",
    "final": "a",
    "tone": "",
    "py": "ra",
    "ipa": "ʐa³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ra.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꊨꏈꏽ",
        "han": "破口大骂"
      },
      {
        "yi": "ꊨꏈ、ꒌꒃꆠꊨ",
        "han": "声讨"
      },
      {
        "yi": "ꀻꏈ",
        "han": "平壤"
      },
      {
        "yi": "ꇗꀋꐥꑇꏈ",
        "han": "无理取闹"
      },
      {
        "yi": "ꏞꏈ",
        "han": "闹腾"
      }
    ]
  },
  {
    "g": "ꀋ",
    "initial": "",
    "final": "a",
    "tone": "p",
    "py": "ap",
    "ipa": "a²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ap.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌦꅐꐴ ꑷꀋꑴ",
        "han": "浴血"
      },
      {
        "yi": "ꒆꀋꐥ",
        "han": "无机"
      },
      {
        "yi": "ꀑꀋꊰ",
        "han": "强项"
      },
      {
        "yi": "ꌤꋋꐘꋌꇫꃅꑲꀋꌧ",
        "han": "这件事他不会做"
      },
      {
        "yi": "ꀋꑮꌦ",
        "han": "没有结婚"
      }
    ]
  },
  {
    "g": "ꀡ",
    "initial": "b",
    "final": "a",
    "tone": "p",
    "py": "bap",
    "ipa": "pa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bap.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꀡꊫꂽ",
        "han": "八字军"
      },
      {
        "yi": "ꀡꊆ",
        "han": "霸王"
      },
      {
        "yi": "ꊋꐛꀡꃱ",
        "han": "可操左券"
      },
      {
        "yi": "ꀡꂎ",
        "han": "耍赖"
      },
      {
        "yi": "ꀡꍞꂱꄃ",
        "han": "半殖民地"
      }
    ]
  },
  {
    "g": "ꁂ",
    "initial": "p",
    "final": "a",
    "tone": "p",
    "py": "pap",
    "ipa": "pʰa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pap.mp3",
    "radical": "꒤",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꁂꅲꐝꀋꉅ",
        "han": "偏听则暗"
      },
      {
        "yi": "ꁂꇁꂷꆹꀨ",
        "han": "帕拉马里博"
      },
      {
        "yi": "ꁂꀻ",
        "han": "庞培"
      },
      {
        "yi": "ꁂꆀꑭꆺ",
        "han": "盘尼西林"
      },
      {
        "yi": "ꃔꇂꁂ",
        "han": "法兰盘"
      }
    ]
  },
  {
    "g": "ꁡ",
    "initial": "bb",
    "final": "a",
    "tone": "p",
    "py": "bbap",
    "ipa": "ba²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbap.mp3",
    "radical": "꒳",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃅꋮꁡꇤ",
        "han": "边寨"
      },
      {
        "yi": "ꁡꉖꀕꇅꐦ",
        "han": "低洼盆地"
      },
      {
        "yi": "ꁡꉐꈋꈌ",
        "han": "巨蟒巢"
      },
      {
        "yi": "ꁡꉖ",
        "han": "坑子"
      },
      {
        "yi": "ꁡꉐꐈꐛꇓ",
        "han": "恐龙化石"
      }
    ]
  },
  {
    "g": "ꂀ",
    "initial": "nb",
    "final": "a",
    "tone": "p",
    "py": "nbap",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbap.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꂛ",
    "initial": "hm",
    "final": "a",
    "tone": "p",
    "py": "hmap",
    "ipa": "m̥a²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmap.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑭꃀꂛꊨꀉꒉꂶꌠ",
        "han": "大舅子"
      },
      {
        "yi": "ꑮꃀꂛꊨ",
        "han": "内弟"
      }
    ]
  },
  {
    "g": "ꂸ",
    "initial": "m",
    "final": "a",
    "tone": "p",
    "py": "map",
    "ipa": "ma²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_map.mp3",
    "radical": "꒳",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꂸꉸꋊ",
        "han": "麻黄碱"
      },
      {
        "yi": "ꀆꂸ",
        "han": "唉曼"
      },
      {
        "yi": "ꂸꏧ",
        "han": "麻将"
      },
      {
        "yi": "ꂸꑦ",
        "han": "芒硝"
      },
      {
        "yi": "ꏓꇙꂸꄃꇩ",
        "han": "日耳曼帝国"
      }
    ]
  },
  {
    "g": "ꃔ",
    "initial": "f",
    "final": "a",
    "tone": "p",
    "py": "fap",
    "ipa": "fa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fap.mp3",
    "radical": "꒙",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꃔꏿꃨꏾꆅ",
        "han": "番茄叶病"
      },
      {
        "yi": "ꃔꇂꊈ",
        "han": "珐琅质"
      },
      {
        "yi": "ꃔꇩꆹꉣꇮꃅꊿꄓꈁꁏ",
        "han": "法国里昂工人起义"
      },
      {
        "yi": "ꉑꃔꅪꆈ",
        "han": "褐虾"
      },
      {
        "yi": "ꃔꑟ",
        "han": "法线"
      }
    ]
  },
  {
    "g": "ꃭ",
    "initial": "v",
    "final": "a",
    "tone": "p",
    "py": "vap",
    "ipa": "va²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vap.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃥꃭꂽ",
        "han": "仪仗队"
      },
      {
        "yi": "ꃭꊭ",
        "han": "袜子"
      },
      {
        "yi": "ꉢꃭꊭꃼ",
        "han": "我要买袜子"
      },
      {
        "yi": "ꃭꍽ",
        "han": "柴鸡"
      },
      {
        "yi": "ꂽꀴꃭꌒ",
        "han": "仪仗"
      }
    ]
  },
  {
    "g": "ꄊ",
    "initial": "d",
    "final": "a",
    "tone": "p",
    "py": "dap",
    "ipa": "ta²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dap.mp3",
    "radical": "꓀",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꄊꑭ",
        "han": "大西"
      },
      {
        "yi": "ꄊꁉꋠꐥꌠ",
        "han": "赌棍"
      },
      {
        "yi": "ꄊꇵꍬ",
        "han": "胆固醇"
      },
      {
        "yi": "ꄊꃶ",
        "han": "大武"
      },
      {
        "yi": "ꄊꄏꑸꐥꀹꀊꏀ",
        "han": "大东亚新秩序"
      }
    ]
  },
  {
    "g": "ꄤ",
    "initial": "t",
    "final": "a",
    "tone": "p",
    "py": "tap",
    "ipa": "tʰa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tap.mp3",
    "radical": "꒟",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄡꄤ",
        "han": "堂屋"
      },
      {
        "yi": "ꃀꆹꄤꆀꑸ",
        "han": "毛里塔尼亚"
      },
      {
        "yi": "ꉼꄤ",
        "han": "后唐"
      },
      {
        "yi": "ꇑꑸꉸꄤ",
        "han": "二氧化碳"
      },
      {
        "yi": "ꊸꀙꄤꃣꈌ",
        "han": "沧白堂事件"
      }
    ]
  },
  {
    "g": "ꅀ",
    "initial": "dd",
    "final": "a",
    "tone": "p",
    "py": "ddap",
    "ipa": "da²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddap.mp3",
    "radical": "꓄",
    "strokes": 6,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꆏꆈꌠꅀ",
        "han": "你是彝族吗"
      },
      {
        "yi": "ꃷꋪꑠꐥꇮꅀ",
        "han": "岂有此理"
      },
      {
        "yi": "ꈁꅀꀋꈁ",
        "han": "取舍"
      },
      {
        "yi": "ꄚꇬꂿꃅꑠꃅꐙꇬꎷꅀ",
        "han": "这里天气总这样吗"
      },
      {
        "yi": "ꎼꅀ",
        "han": "莫非"
      }
    ]
  },
  {
    "g": "ꅚ",
    "initial": "nd",
    "final": "a",
    "tone": "p",
    "py": "ndap",
    "ipa": "nda²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndap.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꅚꍃꁧ",
        "han": "泸山"
      }
    ]
  },
  {
    "g": "ꅳ",
    "initial": "hn",
    "final": "a",
    "tone": "p",
    "py": "hnap",
    "ipa": "n̥a²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnap.mp3",
    "radical": "꓃",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꅳꁖ",
        "han": "鼻涕"
      },
      {
        "yi": "ꅳꃺ",
        "han": "灌耳心"
      },
      {
        "yi": "ꂼꌝꅳꍩ",
        "han": "毛瑟枪"
      },
      {
        "yi": "ꅳꍩꐳꂷ",
        "han": "刺刀"
      },
      {
        "yi": "ꅳꀧꋍꄉꊪꇖꈐ",
        "han": "掩耳盗铃"
      }
    ]
  },
  {
    "g": "ꆆ",
    "initial": "n",
    "final": "a",
    "tone": "p",
    "py": "nap",
    "ipa": "na²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nap.mp3",
    "radical": "꒗",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉼꆆꍡꂱ",
        "han": "河南坠子"
      },
      {
        "yi": "ꎭꆆ",
        "han": "山奈"
      },
      {
        "yi": "ꌋꏢꉰꆆ",
        "han": "碳酸氢钠"
      },
      {
        "yi": "ꆆꍣ",
        "han": "南昌"
      },
      {
        "yi": "ꆆꑟꎷꈜ",
        "han": "兰新线"
      }
    ]
  },
  {
    "g": "ꆡ",
    "initial": "hl",
    "final": "a",
    "tone": "p",
    "py": "hlap",
    "ipa": "ɬa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlap.mp3",
    "radical": "꒜",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꎭꆡꁠ",
        "han": "蒸饼"
      },
      {
        "yi": "ꋌꆽꆡꁠ",
        "han": "油香"
      },
      {
        "yi": "ꑋꈌꆡꁠ",
        "han": "春饼"
      },
      {
        "yi": "ꆡꁠ",
        "han": "粑粑"
      }
    ]
  },
  {
    "g": "ꇂ",
    "initial": "l",
    "final": "a",
    "tone": "p",
    "py": "lap",
    "ipa": "la²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lap.mp3",
    "radical": "꒗",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀨꄹꇂꃝ",
        "han": "中性"
      },
      {
        "yi": "ꅥꅍꇂꃴꈌꊰ",
        "han": "屈打成招"
      },
      {
        "yi": "ꑟꇂ",
        "han": "兴南"
      },
      {
        "yi": "ꇂꇎꉹꑘ",
        "han": "垄断行业"
      },
      {
        "yi": "ꇂꋌꁱꅍ、ꐛꎿꀱꅍ",
        "han": "蜡笔"
      }
    ]
  },
  {
    "g": "ꇥ",
    "initial": "g",
    "final": "a",
    "tone": "p",
    "py": "gap",
    "ipa": "ka²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gap.mp3",
    "radical": "꒨",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍔꇥꎷꈜ",
        "han": "浙赣铁路"
      },
      {
        "yi": "ꄓꇥꉗꀑꅔꃀ",
        "han": "德干高原"
      },
      {
        "yi": "ꃪꇥꉧ",
        "han": "单斜层"
      },
      {
        "yi": "ꑊꁌꇥꄆ",
        "han": "狼狈"
      },
      {
        "yi": "ꎴꇥꏫ",
        "han": "鸭嘴兽"
      }
    ]
  },
  {
    "g": "ꈂ",
    "initial": "k",
    "final": "a",
    "tone": "p",
    "py": "kap",
    "ipa": "kʰa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kap.mp3",
    "radical": "꒗",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꈂꀸꐛꄟ",
        "han": "口形"
      },
      {
        "yi": "ꏶꈻꈂꀸ",
        "han": "虹吸式口器"
      },
      {
        "yi": "ꅅꃅꈂꀸ",
        "han": "刀锋"
      },
      {
        "yi": "ꈂꀸꀁꐯꑽꏃ",
        "han": "细口瓶"
      },
      {
        "yi": "ꈂꎐꈂꏍ",
        "han": "参错"
      }
    ]
  },
  {
    "g": "ꈝ",
    "initial": "gg",
    "final": "a",
    "tone": "p",
    "py": "ggap",
    "ipa": "ga²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggap.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍯꄖꁧꇬꈝꃀꋋꏢꈴꌠꉫꀕ",
        "han": "到成都走这条路吗"
      },
      {
        "yi": "ꇤꇉꁧꇬꈝꃀꋋꏢꈴꌠꉫꀕ",
        "han": "到甘洛走这条路吗"
      },
      {
        "yi": "ꀙꏢꁧꇬꈝꃀꋋꏢꈴꌠꉫꀕ",
        "han": "到北京走这条路吗"
      },
      {
        "yi": "ꈝꐮ",
        "han": "粗浅"
      },
      {
        "yi": "ꐛꈝꐮꅉ",
        "han": "易化区"
      }
    ]
  },
  {
    "g": "ꈵ",
    "initial": "mg",
    "final": "a",
    "tone": "p",
    "py": "mgap",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgap.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꉑ",
    "initial": "hx",
    "final": "a",
    "tone": "p",
    "py": "hxap",
    "ipa": "ha²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxap.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꋊꉑꊖ",
        "han": "碱石灰"
      },
      {
        "yi": "ꉑꊖꊈ",
        "han": "石灰质"
      },
      {
        "yi": "ꉑꋗꌺ",
        "han": "毛虾"
      },
      {
        "yi": "ꉑꃔꅪꆈ",
        "han": "褐虾"
      },
      {
        "yi": "ꉑꊖꑍ",
        "han": "石灰乳"
      }
    ]
  },
  {
    "g": "ꉣ",
    "initial": "ng",
    "final": "a",
    "tone": "p",
    "py": "ngap",
    "ipa": "ŋa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngap.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉣꑳꌦꄣ",
        "han": "爱因斯坦"
      },
      {
        "yi": "ꊠꃅꉣꎭ",
        "han": "曾母暗沙"
      },
      {
        "yi": "ꉣꆀꌦ",
        "han": "昂尼斯"
      },
      {
        "yi": "ꉣꑊꉜꐨꐮꐊꑴ",
        "han": "我俩的看法一致"
      },
      {
        "yi": "ꃔꇩꆹꉣꇮꃅꊿꄓꈁꁏ",
        "han": "法国里昂工人起义"
      }
    ]
  },
  {
    "g": "ꉴ",
    "initial": "h",
    "final": "a",
    "tone": "p",
    "py": "hap",
    "ipa": "xa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hap.mp3",
    "radical": "꒪",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄊꂷꉴꉛ",
        "han": "大麻哈鱼"
      },
      {
        "yi": "ꉴꍰꐦꃀ",
        "han": "汉城平原"
      },
      {
        "yi": "ꉴꑤ",
        "han": "大茴香"
      },
      {
        "yi": "ꉴꈆꃶꂷꁧ",
        "han": "汉科乌马山"
      },
      {
        "yi": "ꄊꉴꂱꇩ",
        "han": "大韩民国"
      }
    ]
  },
  {
    "g": "ꊃ",
    "initial": "w",
    "final": "a",
    "tone": "p",
    "py": "wap",
    "ipa": "ɣa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wap.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃅꏦꊃꏦ",
        "han": "马帮"
      },
      {
        "yi": "ꃅꊃꏠ",
        "han": "马镫"
      },
      {
        "yi": "ꂷꄏꊃꏦ",
        "han": "马兜铃"
      },
      {
        "yi": "ꇇꊭꊃꆈ",
        "han": "肘关节"
      }
    ]
  },
  {
    "g": "ꊗ",
    "initial": "z",
    "final": "a",
    "tone": "p",
    "py": "zap",
    "ipa": "tsa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zap.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꏾꊗꎷꈜ",
        "han": "青藏铁路"
      },
      {
        "yi": "ꏾꊗꉗꀑꅔꃀ",
        "han": "青藏高原"
      },
      {
        "yi": "ꊗꁋꄀꄯꒉ",
        "han": "壁报"
      },
      {
        "yi": "ꊗꊭꏾꇇꏍ",
        "han": "盘腿"
      },
      {
        "yi": "ꊗꑗꐎ",
        "han": "观音土"
      }
    ]
  },
  {
    "g": "ꊹ",
    "initial": "c",
    "final": "a",
    "tone": "p",
    "py": "cap",
    "ipa": "tsʰa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cap.mp3",
    "radical": "꒜",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊹꄔ",
        "han": "罗汉豆"
      },
      {
        "yi": "ꅇꊹ",
        "han": "释义"
      },
      {
        "yi": "ꊹꄍꅿꁮ",
        "han": "芽豆"
      },
      {
        "yi": "ꃪꆭꊹꄔ",
        "han": "铁蚕豆"
      }
    ]
  },
  {
    "g": "ꋛ",
    "initial": "zz",
    "final": "a",
    "tone": "p",
    "py": "zzap",
    "ipa": "dza²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzap.mp3",
    "radical": "꒼",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꋛꂔ",
        "han": "烟火食"
      },
      {
        "yi": "ꋛꁋ",
        "han": "喷饭"
      }
    ]
  },
  {
    "g": "ꋷ",
    "initial": "nz",
    "final": "a",
    "tone": "p",
    "py": "nzap",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzap.mp3",
    "radical": "꒓",
    "strokes": 6,
    "remainingStrokes": 5
  },
  {
    "g": "ꌓ",
    "initial": "s",
    "final": "a",
    "tone": "p",
    "py": "sap",
    "ipa": "sa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sap.mp3",
    "radical": "꒝",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꌓꅇ",
        "han": "婉辞"
      },
      {
        "yi": "ꌓꐎꑵꉙ",
        "han": "散套"
      },
      {
        "yi": "ꌓꐂꇓꌬ",
        "han": "跳伞塔"
      },
      {
        "yi": "ꌓꂽ",
        "han": "伞兵"
      },
      {
        "yi": "ꈌꑌꌓꋗ",
        "han": "多口相声"
      }
    ]
  },
  {
    "g": "ꌴ",
    "initial": "ss",
    "final": "a",
    "tone": "p",
    "py": "ssap",
    "ipa": "za²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssap.mp3",
    "radical": "꒪",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌴꁮꌺꂿ꒧ꃅꌠ",
        "han": "农夫"
      },
      {
        "yi": "ꌴꁮꌺ",
        "han": "男人"
      }
    ]
  },
  {
    "g": "ꍉ",
    "initial": "zh",
    "final": "a",
    "tone": "p",
    "py": "zhap",
    "ipa": "tʂa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhap.mp3",
    "radical": "꒞",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍉꄓꎾꃝ",
        "han": "乍得湖"
      },
      {
        "yi": "ꁱꀕꍉ",
        "han": "文化站"
      },
      {
        "yi": "ꏾꆃꍉ",
        "han": "青年站"
      },
      {
        "yi": "ꍉꇩꊋꇨꏃꁯꌠ",
        "han": "战国七雄"
      },
      {
        "yi": "ꍉꄊ",
        "han": "手榴弹"
      }
    ]
  },
  {
    "g": "ꍤ",
    "initial": "ch",
    "final": "a",
    "tone": "p",
    "py": "chap",
    "ipa": "tʂʰa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chap.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꍤꄻꀱ",
        "han": "再审"
      },
      {
        "yi": "ꍤꏦꄇꒉꀕꐧꒈꂪ",
        "han": "长江中下游"
      },
      {
        "yi": "ꍤꌋꆫꏮ",
        "han": "巡警"
      },
      {
        "yi": "ꌥꉩꍤꎖ",
        "han": "侦查实验"
      },
      {
        "yi": "ꇤꍤ",
        "han": "赶场"
      }
    ]
  },
  {
    "g": "ꎗ",
    "initial": "nr",
    "final": "a",
    "tone": "p",
    "py": "nrap",
    "ipa": "ndʐa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrap.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꎔꎗꃅꌧꑳꉾꃪꌠꃅ",
        "han": "养成文明习惯"
      },
      {
        "yi": "ꎔꎗꃅꌷ",
        "han": "好好的学"
      }
    ]
  },
  {
    "g": "ꎮ",
    "initial": "sh",
    "final": "a",
    "tone": "p",
    "py": "shap",
    "ipa": "ʂa²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shap.mp3",
    "radical": "꒑",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꎮꑑꏸꋉ",
        "han": "大熊"
      },
      {
        "yi": "ꎮꑑ",
        "han": "大熊座"
      },
      {
        "yi": "ꍛꈈꎮꀙ",
        "han": "栉孔扇贝"
      },
      {
        "yi": "ꂽꇜꎮꑪ",
        "han": "上校"
      },
      {
        "yi": "ꄠꎮꇅꏮ",
        "han": "太上老君"
      }
    ]
  },
  {
    "g": "ꏉ",
    "initial": "r",
    "final": "a",
    "tone": "p",
    "py": "rap",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rap.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1
  },
  {
    "g": "ꂹ",
    "initial": "m",
    "final": "uo",
    "tone": "t",
    "py": "muot",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_muot.mp3",
    "radical": "꒤",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꄥ",
    "initial": "t",
    "final": "uo",
    "tone": "t",
    "py": "tuot",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tuot.mp3",
    "radical": "꒰",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꇃ",
    "initial": "l",
    "final": "uo",
    "tone": "t",
    "py": "luot",
    "ipa": "lɔ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_luot.mp3",
    "radical": "꒝",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉈꑴꉻꏂ、ꈠꁏꇃꇩꍈ",
        "han": "打击报复"
      },
      {
        "yi": "ꐧꋦꄸꃅꌠꇃꇩꍈ",
        "han": "打黑"
      },
      {
        "yi": "ꁧꐔꇃꎭ",
        "han": "刺三甲"
      },
      {
        "yi": "ꀊꆠꌠꅓ、ꀉꆠꃷꄻꌠꇃꇩꍈ",
        "han": "打假"
      },
      {
        "yi": "ꇃꇩꍈ",
        "han": "重拳出击"
      }
    ]
  },
  {
    "g": "ꇦ",
    "initial": "g",
    "final": "uo",
    "tone": "t",
    "py": "guot",
    "ipa": "kɔ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_guot.mp3",
    "radical": "꓀",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꇦꏦ",
        "han": "栋梁"
      }
    ]
  },
  {
    "g": "ꈞ",
    "initial": "gg",
    "final": "uo",
    "tone": "t",
    "py": "gguot",
    "ipa": "gɔ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gguot.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈞꆈꏂꌠꌋꆀꉂꐪ",
        "han": "阴谋与爱情"
      },
      {
        "yi": "ꈞꆈꄉꏂ",
        "han": "阴谋诡计"
      },
      {
        "yi": "ꈞꆈꃼꇇꃅ",
        "han": "贩私"
      },
      {
        "yi": "ꈞꆈꃷꈌ",
        "han": "隐性营销"
      },
      {
        "yi": "ꃀꆀꉿꈞꆈꏂꌠ",
        "han": "慕尼黑阴谋"
      }
    ]
  },
  {
    "g": "ꉒ",
    "initial": "hx",
    "final": "uo",
    "tone": "t",
    "py": "hxuot",
    "ipa": "hɔ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxuot.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈊꉒ",
        "han": "暮霭"
      },
      {
        "yi": "ꉒꋒꎷꏲ",
        "han": "暮鼓晨钟"
      },
      {
        "yi": "ꊨꏦꈴꒉꉒꇅꐦ",
        "han": "自流水盆地"
      },
      {
        "yi": "ꌉꈿꃅꉒꃴ",
        "han": "战云"
      },
      {
        "yi": "ꁦꀑꉒꏂ",
        "han": "山岚"
      }
    ]
  },
  {
    "g": "ꉤ",
    "initial": "ng",
    "final": "uo",
    "tone": "t",
    "py": "nguot",
    "ipa": "ŋɔ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nguot.mp3",
    "radical": "꒼",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉤꅉ",
        "han": "弯子"
      },
      {
        "yi": "ꉤ ꌺ",
        "han": "斗拱"
      },
      {
        "yi": "ꇐꉤꑴꁱ",
        "han": "御龙图"
      },
      {
        "yi": "ꎭꌠꄖꇨꌠꉤ",
        "han": "吊民伐罪"
      }
    ]
  },
  {
    "g": "ꉵ",
    "initial": "h",
    "final": "uo",
    "tone": "t",
    "py": "huot",
    "ipa": "xɔ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_huot.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉵꉸ",
        "han": "林檎"
      }
    ]
  },
  {
    "g": "ꍥ",
    "initial": "ch",
    "final": "uo",
    "tone": "t",
    "py": "chuot",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chuot.mp3",
    "radical": "꒓",
    "strokes": 5,
    "remainingStrokes": 4
  },
  {
    "g": "ꏨ",
    "initial": "j",
    "final": "uo",
    "tone": "t",
    "py": "juot",
    "ipa": "tɕɔ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_juot.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꏨꆾꀋꄹ",
        "han": "吹灰之力"
      }
    ]
  },
  {
    "g": "ꐄ",
    "initial": "q",
    "final": "uo",
    "tone": "t",
    "py": "quot",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_quot.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꑹ",
    "initial": "y",
    "final": "uo",
    "tone": "t",
    "py": "yuot",
    "ipa": "ʑɔ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yuot.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꑹꎃ",
        "han": "人份"
      },
      {
        "yi": "ꇍꑍꑹꌠ",
        "han": "老几"
      },
      {
        "yi": "ꑹꈭ",
        "han": "人次"
      }
    ]
  },
  {
    "g": "ꀌ",
    "initial": "",
    "final": "uo",
    "tone": "x",
    "py": "uox",
    "ipa": "ɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_uox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀌꀠꎭꉻꀋꀮ",
        "han": "尖脐"
      },
      {
        "yi": "ꀌꀠꁻꀻ",
        "han": "吉他"
      },
      {
        "yi": "ꀌꀠꆈꈾ",
        "han": "蛤蟆"
      },
      {
        "yi": "ꀌꀠꏾꑌ",
        "han": "青蛙"
      },
      {
        "yi": "ꉳꌦꃀꀌꀠ",
        "han": "蛤土蟆"
      }
    ]
  },
  {
    "g": "ꀢ",
    "initial": "b",
    "final": "uo",
    "tone": "x",
    "py": "buox",
    "ipa": "pɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_buox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌬꑭꀢꑟ",
        "han": "光谱线"
      },
      {
        "yi": "ꀢꈌ",
        "han": "断口"
      }
    ]
  },
  {
    "g": "ꁃ",
    "initial": "p",
    "final": "uo",
    "tone": "x",
    "py": "puox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_puox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꁢ",
    "initial": "bb",
    "final": "uo",
    "tone": "x",
    "py": "bbuox",
    "ipa": "bɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌋꏣꁢꊧ",
        "han": "神经细胞"
      },
      {
        "yi": "ꁢ ꊧ",
        "han": "根源"
      },
      {
        "yi": "ꅇꁢꊧ",
        "han": "论据"
      },
      {
        "yi": "ꉪꃆꁢꊧ、ꑞꅉ",
        "han": "宗旨"
      },
      {
        "yi": "ꏦꃤꁢꊧꉻꄑ",
        "han": "宪章运动"
      }
    ]
  },
  {
    "g": "ꂜ",
    "initial": "hm",
    "final": "uo",
    "tone": "x",
    "py": "hmuox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꂺ",
    "initial": "m",
    "final": "uo",
    "tone": "x",
    "py": "muox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_muox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꄋ",
    "initial": "d",
    "final": "uo",
    "tone": "x",
    "py": "duox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_duox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꄦ",
    "initial": "t",
    "final": "uo",
    "tone": "x",
    "py": "tuox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꅁ",
    "initial": "dd",
    "final": "uo",
    "tone": "x",
    "py": "dduox",
    "ipa": "dɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dduox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꆿꆪꅁ ꈬꑍ",
        "han": "重阳"
      }
    ]
  },
  {
    "g": "ꅴ",
    "initial": "hn",
    "final": "uo",
    "tone": "x",
    "py": "hnuox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꆇ",
    "initial": "n",
    "final": "uo",
    "tone": "x",
    "py": "nuox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꆢ",
    "initial": "hl",
    "final": "uo",
    "tone": "x",
    "py": "hluox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hluox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꇄ",
    "initial": "l",
    "final": "uo",
    "tone": "x",
    "py": "luox",
    "ipa": "lɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_luox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋍꃅꐙꅊꇄ",
        "han": "阿门"
      },
      {
        "yi": "ꇄꌠꇬ",
        "han": "一向"
      },
      {
        "yi": "ꐋꀋꌡꇄꌠ",
        "han": "时会"
      }
    ]
  },
  {
    "g": "ꇧ",
    "initial": "g",
    "final": "uo",
    "tone": "x",
    "py": "guox",
    "ipa": "kɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_guox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꅇꀋꎹꇧꎭ",
        "han": "免于起诉"
      },
      {
        "yi": "ꇧꍠꇧꆽ",
        "han": "仓皇"
      },
      {
        "yi": "ꇧꊪ",
        "han": "瓜子"
      },
      {
        "yi": "ꇧꊭꃧꃨ",
        "han": "朝阳花"
      },
      {
        "yi": "ꐵ、ꋒꇧꎭ",
        "han": "避免"
      }
    ]
  },
  {
    "g": "ꈃ",
    "initial": "k",
    "final": "uo",
    "tone": "x",
    "py": "kuox",
    "ipa": "kʰɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈃꀱꋦ",
        "han": "英姿"
      },
      {
        "yi": "ꈄꌠꈃꅉꀋꊌ",
        "han": "英雄无用武之地"
      },
      {
        "yi": "ꈄꇴꈃꉻ",
        "han": "豪气"
      },
      {
        "yi": "ꈃꃅ",
        "han": "奋勇"
      }
    ]
  },
  {
    "g": "ꈟ",
    "initial": "gg",
    "final": "uo",
    "tone": "x",
    "py": "gguox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gguox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꈶ",
    "initial": "mg",
    "final": "uo",
    "tone": "x",
    "py": "mguox",
    "ipa": "ŋgɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mguox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎷꑟꈶꇓ",
        "han": "夹丝玻璃"
      },
      {
        "yi": "ꂢꐂꈶꐂ",
        "han": "乐舞"
      },
      {
        "yi": "ꁨꑭꈶꇓ",
        "han": "光学玻璃"
      },
      {
        "yi": "ꀟꁮꈶꇓ",
        "han": "泡沫玻璃"
      },
      {
        "yi": "ꈶꇓꑍꄀ",
        "han": "夹层玻璃"
      }
    ]
  },
  {
    "g": "ꉓ",
    "initial": "hx",
    "final": "uo",
    "tone": "x",
    "py": "hxuox",
    "ipa": "hɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉓ ꏻ",
        "han": "润滑"
      },
      {
        "yi": "ꉓꀍꅩꍅ",
        "han": "五彩缤纷"
      },
      {
        "yi": "ꉕꇅꉓꇅꄷ",
        "han": "偶发"
      },
      {
        "yi": "ꉓꀍꅩꍅꅍ",
        "han": "活气"
      },
      {
        "yi": "ꉓꁱꅩꐂ",
        "han": "花里胡哨"
      }
    ]
  },
  {
    "g": "ꉥ",
    "initial": "ng",
    "final": "uo",
    "tone": "x",
    "py": "nguox",
    "ipa": "ŋɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nguox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉥ ꑣ",
        "han": "端正"
      }
    ]
  },
  {
    "g": "ꉶ",
    "initial": "h",
    "final": "uo",
    "tone": "x",
    "py": "huox",
    "ipa": "xɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_huox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉶꇤꉳꀸ",
        "han": "穿堂门"
      },
      {
        "yi": "ꉶꌜꂶꂷ",
        "han": "花生米"
      },
      {
        "yi": "ꉶꇤ",
        "han": "里巷"
      },
      {
        "yi": "ꉶꌜꋌ",
        "han": "花生油"
      },
      {
        "yi": "ꉶꁱ",
        "han": "号角"
      }
    ]
  },
  {
    "g": "ꊄ",
    "initial": "w",
    "final": "uo",
    "tone": "x",
    "py": "wuox",
    "ipa": "ɣɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊄꌜ",
        "han": "莴笋"
      }
    ]
  },
  {
    "g": "ꊘ",
    "initial": "z",
    "final": "uo",
    "tone": "x",
    "py": "zuox",
    "ipa": "tsɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉉꁵ、ꊘꎭ、ꄐꁵ、ꉉꇬꁳ、ꌋꇬꁳ",
        "han": "推荐"
      },
      {
        "yi": "ꊘꎭ",
        "han": "举荐"
      },
      {
        "yi": "ꊘꌬ",
        "han": "凭用"
      },
      {
        "yi": "ꊘꃅ",
        "han": "招标"
      },
      {
        "yi": "ꊘꎭꄯꒉ",
        "han": "推荐信"
      }
    ]
  },
  {
    "g": "ꊺ",
    "initial": "c",
    "final": "uo",
    "tone": "x",
    "py": "cuox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꋸ",
    "initial": "nz",
    "final": "uo",
    "tone": "x",
    "py": "nzuox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꌔ",
    "initial": "s",
    "final": "uo",
    "tone": "x",
    "py": "suox",
    "ipa": "sɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_suox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌔꎐꑊꈻꈓ",
        "han": "三棱镜"
      },
      {
        "yi": "ꎿꋮꌔꎐꂤꏂꐦ",
        "han": "三角洲"
      },
      {
        "yi": "ꌔꎐꐊꐈꇐ",
        "han": "三角函数"
      },
      {
        "yi": "ꌔꎐꄲ",
        "han": "三角形"
      },
      {
        "yi": "ꌔꎐꀻ",
        "han": "三角板"
      }
    ]
  },
  {
    "g": "ꍊ",
    "initial": "zh",
    "final": "uo",
    "tone": "x",
    "py": "zhuox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꍦ",
    "initial": "ch",
    "final": "uo",
    "tone": "x",
    "py": "chuox",
    "ipa": "tʂʰɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍦꑻ",
        "han": "搜括"
      }
    ]
  },
  {
    "g": "ꍾ",
    "initial": "rr",
    "final": "uo",
    "tone": "x",
    "py": "rruox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rruox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꎯ",
    "initial": "sh",
    "final": "uo",
    "tone": "x",
    "py": "shuox",
    "ipa": "ʂɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎯꀆꁧ",
        "han": "双鸭山"
      },
      {
        "yi": "ꎯꂚ",
        "han": "映山红"
      }
    ]
  },
  {
    "g": "ꏊ",
    "initial": "r",
    "final": "uo",
    "tone": "x",
    "py": "ruox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ruox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꏩ",
    "initial": "j",
    "final": "uo",
    "tone": "x",
    "py": "juox",
    "ipa": "tɕɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_juox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊇꅉꃅꏩꁏ",
        "han": "根本好转"
      },
      {
        "yi": "ꂥꏩꏪ",
        "han": "菌落"
      },
      {
        "yi": "ꇇꁮꏩꃚ",
        "han": "掌声"
      },
      {
        "yi": "ꏩꀕ",
        "han": "丛生"
      },
      {
        "yi": "ꏩꁏꉾꇁ",
        "han": "中兴"
      }
    ]
  },
  {
    "g": "ꐅ",
    "initial": "q",
    "final": "uo",
    "tone": "x",
    "py": "quox",
    "ipa": "tɕʰɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_quox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐅꀘ",
        "han": "拆毁"
      },
      {
        "yi": "ꑽꃤꐅꅉ、ꑽꃤꃄꅉ",
        "han": "犯罪现场"
      }
    ]
  },
  {
    "g": "ꐠ",
    "initial": "jj",
    "final": "uo",
    "tone": "x",
    "py": "jjuox",
    "ipa": "dʑɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎭꇖꐠꏒ",
        "han": "哀鸿遍野"
      },
      {
        "yi": "ꎓꀦꐠꊧ、ꊋꋠ",
        "han": "危机"
      },
      {
        "yi": "ꐠꁈ",
        "han": "溃逃"
      }
    ]
  },
  {
    "g": "ꐹ",
    "initial": "nj",
    "final": "uo",
    "tone": "x",
    "py": "njuox",
    "ipa": "ndʑɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀋꃅꐹꅉ",
        "han": "当前位置"
      },
      {
        "yi": "ꐹꒃ",
        "han": "走读"
      }
    ]
  },
  {
    "g": "ꑒ",
    "initial": "ny",
    "final": "uo",
    "tone": "x",
    "py": "nyuox",
    "ipa": "ȵɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑒꑓ",
        "han": "芽眼"
      }
    ]
  },
  {
    "g": "ꑥ",
    "initial": "x",
    "final": "uo",
    "tone": "x",
    "py": "xuox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꑺ",
    "initial": "y",
    "final": "uo",
    "tone": "x",
    "py": "yuox",
    "ipa": "ʑɔ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yuox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑺꂖ",
        "han": "轻巧"
      },
      {
        "yi": "ꑺꀽ",
        "han": "精巧"
      },
      {
        "yi": "ꑺꀽꅍ",
        "han": "精致"
      },
      {
        "yi": "ꑺꂖ、ꋼꄧ",
        "han": "灵活"
      }
    ]
  },
  {
    "g": "ꀍ",
    "initial": "",
    "final": "uo",
    "tone": "",
    "py": "uo",
    "ipa": "ɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_uo.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꊿꀍꑐ",
        "han": "毛发"
      },
      {
        "yi": "ꀍꑐꉙꋌ",
        "han": "发蜡"
      },
      {
        "yi": "ꀍꑐꍀꋌ",
        "han": "头油"
      },
      {
        "yi": "ꀍꑐꌎꋌ",
        "han": "香泽"
      },
      {
        "yi": "ꁮꌺꀍꆫ",
        "han": "小咬"
      }
    ]
  },
  {
    "g": "ꀣ",
    "initial": "b",
    "final": "uo",
    "tone": "",
    "py": "buo",
    "ipa": "pɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_buo.mp3",
    "radical": "꒜",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑣꏓꄊꍗꑮꌋꀣ",
        "han": "乡人大主席候选人"
      },
      {
        "yi": "ꌧꀣ",
        "han": "补花"
      },
      {
        "yi": "ꀣꉛꁯꇲ",
        "han": "石决明"
      },
      {
        "yi": "ꀣꈜ",
        "han": "节理"
      },
      {
        "yi": "ꉰꌜꀣ",
        "han": "海森堡"
      }
    ]
  },
  {
    "g": "ꁄ",
    "initial": "p",
    "final": "uo",
    "tone": "",
    "py": "puo",
    "ipa": "pʰɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_puo.mp3",
    "radical": "꒟",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꄆꁄꌺ",
        "han": "电珠"
      },
      {
        "yi": "ꄒꁄ",
        "han": "电灯泡"
      },
      {
        "yi": "ꋍꑍꋍꁄ",
        "han": "一天"
      }
    ]
  },
  {
    "g": "ꁣ",
    "initial": "bb",
    "final": "uo",
    "tone": "",
    "py": "bbuo",
    "ipa": "bɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbuo.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꁣꈴ",
        "han": "精辟"
      },
      {
        "yi": "ꁣꀋꐥ",
        "han": "顺当"
      },
      {
        "yi": "ꐓꁣꆫ",
        "han": "黄鹂"
      },
      {
        "yi": "ꁣꇅꀕ",
        "han": "堂皇"
      },
      {
        "yi": "ꁣꅲ",
        "han": "照应"
      }
    ]
  },
  {
    "g": "ꂝ",
    "initial": "hm",
    "final": "uo",
    "tone": "",
    "py": "hmuo",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmuo.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꂻ",
    "initial": "m",
    "final": "uo",
    "tone": "",
    "py": "muo",
    "ipa": "mɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_muo.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꋬꂻꈨꅪ",
        "han": "平平安安"
      },
      {
        "yi": "ꀀꌒꂻꌒ",
        "han": "酣梦"
      },
      {
        "yi": "ꇩꏤꐛꅹꂻꇬꁮ",
        "han": "殉国"
      },
      {
        "yi": "ꊿꇬꋬꂻꆿꍯꂷꌵ",
        "han": "人寿年丰"
      },
      {
        "yi": "ꋬꂻꏲꂠꏢꍤꏦꃤ",
        "han": "治安警察条例"
      }
    ]
  },
  {
    "g": "ꄌ",
    "initial": "d",
    "final": "uo",
    "tone": "",
    "py": "duo",
    "ipa": "tɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_duo.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎭꄌꆃ ꁬ",
        "han": "山道年"
      },
      {
        "yi": "ꄌꄳ",
        "han": "刁难"
      },
      {
        "yi": "ꄌꃶꋩꑍ",
        "han": "端节"
      },
      {
        "yi": "ꄌꃆ",
        "han": "端木"
      },
      {
        "yi": "ꇰꄖꇤꄌ",
        "han": "鸡拉木兰"
      }
    ]
  },
  {
    "g": "ꄧ",
    "initial": "t",
    "final": "uo",
    "tone": "",
    "py": "tuo",
    "ipa": "tʰɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tuo.mp3",
    "radical": "꒖",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄨꀕꄧ",
        "han": "涔涔"
      },
      {
        "yi": "ꊒꆽꀕ、ꄧ",
        "han": "尖锐"
      },
      {
        "yi": "ꎺꇊꐝꄧꀕ",
        "han": "记忆犹新"
      },
      {
        "yi": "ꆿꑗꀂꏾꄧꊰꁠꐤ",
        "han": "胶头滴管"
      },
      {
        "yi": "ꇉꄻꄹꄧ",
        "han": "船台"
      }
    ]
  },
  {
    "g": "ꅂ",
    "initial": "dd",
    "final": "uo",
    "tone": "",
    "py": "dduo",
    "ipa": "dɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dduo.mp3",
    "radical": "꓄",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꃅꅂꇂꈪ",
        "han": "娥眉月"
      },
      {
        "yi": "ꅂꀨ",
        "han": "新月"
      },
      {
        "yi": "ꃅꆪꅂꋍꑍ",
        "han": "正旦"
      },
      {
        "yi": "ꅂꊐꄹꊐ",
        "han": "梯级"
      },
      {
        "yi": "ꏀꈜꅂꊐ",
        "han": "盘梯"
      }
    ]
  },
  {
    "g": "ꅵ",
    "initial": "hn",
    "final": "uo",
    "tone": "",
    "py": "hnuo",
    "ipa": "n̥ɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnuo.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈢꅵꃹꑭ",
        "han": "残照"
      },
      {
        "yi": "ꈢꅵꃹ",
        "han": "落日"
      },
      {
        "yi": "ꈢꅵ",
        "han": "背地里"
      },
      {
        "yi": "ꈢꅵ ꄉꊾꏂ",
        "han": "暗箭伤人"
      }
    ]
  },
  {
    "g": "ꆈ",
    "initial": "n",
    "final": "uo",
    "tone": "",
    "py": "nuo",
    "ipa": "nɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nuo.mp3",
    "radical": "꒔",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꆲꆈꃱꆉ",
        "han": "暴风雪"
      },
      {
        "yi": "ꆈꄉꏂ",
        "han": "阴谋"
      },
      {
        "yi": "ꏸꀕꆈ",
        "han": "寸金草"
      },
      {
        "yi": "ꑲꆈ",
        "han": "斗烟丝"
      },
      {
        "yi": "ꀌꀠꆈꈾ",
        "han": "蛤蟆"
      }
    ]
  },
  {
    "g": "ꆣ",
    "initial": "hl",
    "final": "uo",
    "tone": "",
    "py": "hluo",
    "ipa": "ɬɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hluo.mp3",
    "radical": "꒟",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꐈ ꇐꐱ ꆣ",
        "han": "化学镀"
      },
      {
        "yi": "ꃢꌅꈚꆣ",
        "han": "盛服"
      },
      {
        "yi": "ꇢꆣꁧꃤꃅꎀꍹ",
        "han": "中介服务组织"
      },
      {
        "yi": "ꒉꁭꅐꑸꐯꇯꌄꆣꈭꊂ",
        "han": "大东亚共荣圈"
      },
      {
        "yi": "ꆣꈧ",
        "han": "摇荡"
      }
    ]
  },
  {
    "g": "ꇅ",
    "initial": "l",
    "final": "uo",
    "tone": "",
    "py": "luo",
    "ipa": "lɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_luo.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊼꇅꊷꅉꏾꑱꌩꏪꂿꃋꃅꌗ",
        "han": "亚热带针叶林气候"
      },
      {
        "yi": "ꏓꇍꈠꇅ",
        "han": "慢性"
      },
      {
        "yi": "ꋋꇅꃅꁰ ꈘ",
        "han": "当机立断"
      },
      {
        "yi": "ꋍꇅꋍꇅꃅꊛꄉꅥ",
        "han": "点发"
      },
      {
        "yi": "ꌩꏪꇅꅶ",
        "han": "深山老林"
      }
    ]
  },
  {
    "g": "ꇨ",
    "initial": "g",
    "final": "uo",
    "tone": "",
    "py": "guo",
    "ipa": "kɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_guo.mp3",
    "radical": "꓀",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊋꇨꇱ",
        "han": "加强"
      },
      {
        "yi": "ꇨꌠ",
        "han": "群雄"
      },
      {
        "yi": "ꊾꇨꎺꁱ",
        "han": "巨人传"
      },
      {
        "yi": "ꀋꀧꀋꄒꇨ",
        "han": "过愈"
      },
      {
        "yi": "ꇨꊝ",
        "han": "碰硬"
      }
    ]
  },
  {
    "g": "ꈄ",
    "initial": "k",
    "final": "uo",
    "tone": "",
    "py": "kuo",
    "ipa": "kʰɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kuo.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꄻꈄꏍꇬꊐ",
        "han": "投递网络"
      },
      {
        "yi": "ꈄꃅꀒꁨꆹ",
        "han": "勇往直前"
      },
      {
        "yi": "ꍏꇩꆈꌠꈄꏍ",
        "han": "中国彝族网"
      },
      {
        "yi": "ꀧꈬꈄꁨ",
        "han": "保险箱"
      },
      {
        "yi": "ꈄꏍꃅꈩ",
        "han": "上网"
      }
    ]
  },
  {
    "g": "ꈠ",
    "initial": "gg",
    "final": "uo",
    "tone": "",
    "py": "gguo",
    "ipa": "gɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gguo.mp3",
    "radical": "꒦",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉗꈠ",
        "han": "贪婪"
      },
      {
        "yi": "ꎭꏿꅦꈠ",
        "han": "受罪"
      },
      {
        "yi": "ꎆꈠꇇꈴꌠ",
        "han": "过路财神"
      },
      {
        "yi": "ꇔꇷꎷꈠꑍ",
        "han": "匠人吃冷食"
      },
      {
        "yi": "ꂾꈠ",
        "han": "僵尸"
      }
    ]
  },
  {
    "g": "ꈷ",
    "initial": "mg",
    "final": "uo",
    "tone": "",
    "py": "mguo",
    "ipa": "ŋgɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mguo.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꂢꈷꁱꇐ",
        "han": "乐曲"
      },
      {
        "yi": "ꈷꇓꏦꅍ",
        "han": "镜框"
      },
      {
        "yi": "ꂢꈷꌠ",
        "han": "文场"
      },
      {
        "yi": "ꑸꌏꊞꑊꈷꇓ",
        "han": "滤色镜"
      },
      {
        "yi": "ꑊꈷꄻ",
        "han": "二花脸"
      }
    ]
  },
  {
    "g": "ꉔ",
    "initial": "hx",
    "final": "uo",
    "tone": "",
    "py": "hxuo",
    "ipa": "hɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxuo.mp3",
    "radical": "꒟",
    "strokes": 1,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇿꄉꇳ ꉔ",
        "han": "欢呼"
      },
      {
        "yi": "ꊿꌳꉔꌠ",
        "han": "能人"
      },
      {
        "yi": "ꀀꅉꇬꊿꋍꂷꀀꌠꋍꉔꎆꃀꈍꑋꑟ",
        "han": "单人间每晚多少钱"
      },
      {
        "yi": "ꊿꂂꊿꄸꉔ",
        "han": "良莠不齐"
      },
      {
        "yi": "ꐮꉔꄉꋩꍷ",
        "han": "混纺"
      }
    ]
  },
  {
    "g": "ꉦ",
    "initial": "ng",
    "final": "uo",
    "tone": "",
    "py": "nguo",
    "ipa": "ŋɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nguo.mp3",
    "radical": "꓃",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉦꃀꊁꊭꌠ",
        "han": "后胸"
      },
      {
        "yi": "ꉦꐞ",
        "han": "胸口"
      },
      {
        "yi": "ꈠꉦ",
        "han": "锁骨"
      },
      {
        "yi": "ꀍꉦꇷ",
        "han": "头胸甲"
      },
      {
        "yi": "ꆏꄚꇬ ꈍꉗꏢꆫꈩꏢꉦ",
        "han": "你准备在此旅游多长时间"
      }
    ]
  },
  {
    "g": "ꉷ",
    "initial": "h",
    "final": "uo",
    "tone": "",
    "py": "huo",
    "ipa": "xɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_huo.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌙꉷꄇꒉ",
        "han": "松花江"
      },
      {
        "yi": "ꇗꆃꉷꄯ",
        "han": "二连浩特"
      },
      {
        "yi": "ꏢꉷꁬ",
        "han": "金花菜"
      },
      {
        "yi": "ꉸꉷꇤꄓꈁꁏ",
        "han": "黄花岗起义"
      },
      {
        "yi": "ꉸꉷꉛ",
        "han": "黄花鱼"
      }
    ]
  },
  {
    "g": "ꊅ",
    "initial": "w",
    "final": "uo",
    "tone": "",
    "py": "wuo",
    "ipa": "ɣɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wuo.mp3",
    "radical": "꒟",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄊꑸꊅꏵꄆꃑꅉ",
        "han": "大亚旺核电站"
      },
      {
        "yi": "ꏝꆍꊅ",
        "han": "日内瓦"
      },
      {
        "yi": "꒧ꆀꊅꎿꅔ",
        "han": "留尼汪岛"
      },
      {
        "yi": "ꑳꇊꊅꄂꄇꒉ",
        "han": "伊洛瓦底江"
      },
      {
        "yi": "ꊅꇙꁂꆾꌚ",
        "han": "瓦尔帕来索"
      }
    ]
  },
  {
    "g": "ꊙ",
    "initial": "z",
    "final": "uo",
    "tone": "",
    "py": "zuo",
    "ipa": "tsɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zuo.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃅꊙ",
        "han": "投标"
      },
      {
        "yi": "ꎭꃑꊙ",
        "han": "发射极"
      },
      {
        "yi": "ꀂꄁꂃꊙ",
        "han": "布拉吉"
      },
      {
        "yi": "ꃼꇇꊙꌫꎆꊙ",
        "han": "招商引资"
      },
      {
        "yi": "ꑂꊙ",
        "han": "排挤"
      }
    ]
  },
  {
    "g": "ꊻ",
    "initial": "c",
    "final": "uo",
    "tone": "",
    "py": "cuo",
    "ipa": "tsʰɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cuo.mp3",
    "radical": "꒔",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꊻꂷꃷꁨ",
        "han": "人口基数"
      },
      {
        "yi": "ꌢꎭꑴꌦꌠꊻꂷ",
        "han": "生育贫困人口"
      },
      {
        "yi": "ꊻꂷꌤꐨ",
        "han": "人口密度"
      },
      {
        "yi": "ꊻꂷꐽꏡꊌꎆ",
        "han": "人均"
      },
      {
        "yi": "ꊻꂷꊇꁧ",
        "han": "人口素质"
      }
    ]
  },
  {
    "g": "ꋹ",
    "initial": "nz",
    "final": "uo",
    "tone": "",
    "py": "nzuo",
    "ipa": "ndzɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzuo.mp3",
    "radical": "꒡",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꉐꐙꇁꂾꋹꆹꎵ",
        "han": "未雨绸缪"
      },
      {
        "yi": "ꋍꇬꀋꊰꋹ",
        "han": "一五一十"
      },
      {
        "yi": "ꋹꒉꊯꈌ",
        "han": "瓦头"
      },
      {
        "yi": "ꋹꄽꁠꐤ",
        "han": "雨水管"
      },
      {
        "yi": "ꋹꒉꁠꐤ",
        "han": "水落管"
      }
    ]
  },
  {
    "g": "ꌕ",
    "initial": "s",
    "final": "uo",
    "tone": "",
    "py": "suo",
    "ipa": "sɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_suo.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꋯꆌꀧꑊꌕꎏꄲ",
        "han": "等边球面三角形"
      },
      {
        "yi": "ꌕꏮꇉꍯ",
        "han": "三轮车"
      },
      {
        "yi": "ꈌꃅꆿꌕꄮ",
        "han": "狗马虎三合"
      },
      {
        "yi": "ꌕꃅꌷ",
        "han": "攻读"
      },
      {
        "yi": "ꌕꈑꄆꅐꀦꌕꎏꄲꊛꁈ",
        "han": "三相电源的三角形接法"
      }
    ]
  },
  {
    "g": "ꍋ",
    "initial": "zh",
    "final": "uo",
    "tone": "",
    "py": "zhuo",
    "ipa": "tʂɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhuo.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꁰꍋꁥ",
        "han": "训练班"
      },
      {
        "yi": "ꄊꍋ",
        "han": "大专"
      },
      {
        "yi": "ꁱꋒꍋꋒ",
        "han": "训练有素"
      },
      {
        "yi": "ꃅꍋ",
        "han": "笼头"
      },
      {
        "yi": "ꁰꍋ",
        "han": "锻炼"
      }
    ]
  },
  {
    "g": "ꍧ",
    "initial": "ch",
    "final": "uo",
    "tone": "",
    "py": "chuo",
    "ipa": "tʂʰɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chuo.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꍧꏃ",
        "han": "超市"
      },
      {
        "yi": "ꑿꍧꇐ",
        "han": "永川龙"
      },
      {
        "yi": "ꍧꌅ",
        "han": "超子"
      },
      {
        "yi": "ꄓꍧꃀꃚꋊꄮ",
        "han": "德川幕府时期"
      },
      {
        "yi": "ꏓꍧ",
        "han": "仁川"
      }
    ]
  },
  {
    "g": "ꍿ",
    "initial": "rr",
    "final": "uo",
    "tone": "",
    "py": "rruo",
    "ipa": "dʐɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rruo.mp3",
    "radical": "꒑",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꏄꍿꄻꄻ",
        "han": "落草"
      },
      {
        "yi": "ꃅꋩꏄꍿ",
        "han": "马贼"
      },
      {
        "yi": "ꒈꍿ",
        "han": "海盗"
      },
      {
        "yi": "ꒈ ꍿꃪꍿ",
        "han": "江洋大盗"
      },
      {
        "yi": "ꍿꉮꌸ",
        "han": "匪患"
      }
    ]
  },
  {
    "g": "ꎰ",
    "initial": "sh",
    "final": "uo",
    "tone": "",
    "py": "shuo",
    "ipa": "ʂɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shuo.mp3",
    "radical": "꓄",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꇤꋒꇤꇁꎰ",
        "han": "粗疏"
      },
      {
        "yi": "ꃅꑴꎰ",
        "han": "杠板归"
      },
      {
        "yi": "ꐱꑴꎰꀊꏀꏢ",
        "han": "黄茅埂"
      },
      {
        "yi": "ꎰꑝꒉꁬ",
        "han": "双星藻"
      },
      {
        "yi": "ꄗꀕꇁꎰ",
        "han": "粗实"
      }
    ]
  },
  {
    "g": "ꏋ",
    "initial": "r",
    "final": "uo",
    "tone": "",
    "py": "ruo",
    "ipa": "ʐɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ruo.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏋꀘꂷꏒꆈꐔ",
        "han": "小扁草、扁竹参"
      },
      {
        "yi": "ꐝ ꏋꐨ",
        "han": "景深"
      },
      {
        "yi": "ꐝꏋ",
        "han": "澄莹"
      },
      {
        "yi": "ꀠꑳꐔꏋ",
        "han": "金刚钻寄生"
      }
    ]
  },
  {
    "g": "ꏪ",
    "initial": "j",
    "final": "uo",
    "tone": "",
    "py": "juo",
    "ipa": "tɕɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_juo.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉛꁟꏪ",
        "han": "比目鱼"
      },
      {
        "yi": "ꁬꏪꐛ",
        "han": "草荒"
      },
      {
        "yi": "ꏪꐴ",
        "han": "板状根"
      },
      {
        "yi": "ꊷꆣꃅꄷꌼꋲꌩꏪ",
        "han": "温带混交林"
      },
      {
        "yi": "ꁱꂷꍑꇓꏪ",
        "han": "石印"
      }
    ]
  },
  {
    "g": "ꐆ",
    "initial": "q",
    "final": "uo",
    "tone": "",
    "py": "quo",
    "ipa": "tɕʰɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_quo.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꎆꏣꑽꃤꐆ",
        "han": "经济犯罪"
      },
      {
        "yi": "ꅥꐷꇑꐆꊿ",
        "han": "打砸抢分子"
      },
      {
        "yi": "ꐆꄉꃷ",
        "han": "拆卖"
      },
      {
        "yi": "ꇖꏓꑴꐆ",
        "han": "四氯化醛"
      },
      {
        "yi": "ꇔꐆꌅꈌ",
        "han": "撤销权"
      }
    ]
  },
  {
    "g": "ꐡ",
    "initial": "jj",
    "final": "uo",
    "tone": "",
    "py": "jjuo",
    "ipa": "dʑɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjuo.mp3",
    "radical": "꒟",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꉌꐡꈝꐮ",
        "han": "善感"
      },
      {
        "yi": "ꀛꐡꆿꐛ、ꃀꐛꆿꐛ",
        "han": "土崩瓦解"
      },
      {
        "yi": "ꐡꈔ",
        "han": "溃散"
      },
      {
        "yi": "ꉬꇮꎒꐡꏦ",
        "han": "完全解理"
      },
      {
        "yi": "ꉌꇗꑓꐡ",
        "han": "动情"
      }
    ]
  },
  {
    "g": "ꐺ",
    "initial": "nj",
    "final": "uo",
    "tone": "",
    "py": "njuo",
    "ipa": "ndʑɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njuo.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃷꐺ",
        "han": "兜售"
      },
      {
        "yi": "ꐳꆌꐈꎂꃅꇙꐺ",
        "han": "匀变速直线运动"
      },
      {
        "yi": "ꃰꐺꃅꄂ",
        "han": "浮云"
      },
      {
        "yi": "ꀋꃅꋋꄮꆎꆹꑞꃅꐺ",
        "han": "这个时候你在干什么"
      },
      {
        "yi": "ꊗꑗꈩꐺ",
        "han": "陶吧"
      }
    ]
  },
  {
    "g": "ꑓ",
    "initial": "ny",
    "final": "uo",
    "tone": "",
    "py": "nyuo",
    "ipa": "ȵɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyuo.mp3",
    "radical": "꒪",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑓꁴ",
        "han": "泪水"
      },
      {
        "yi": "ꆍꏤꃅꄷꊿꎇꃀꍅꑓꎸꑞꀕꋠ",
        "han": "你们家乡吃哪些牲畜的肉"
      },
      {
        "yi": "ꑓꂭꌃꎹ",
        "han": "盲目求纯"
      },
      {
        "yi": "ꉌꆰꑓꈦ",
        "han": "焦躁"
      },
      {
        "yi": "ꄩꈴꈻꑓ",
        "han": "天车"
      }
    ]
  },
  {
    "g": "ꑦ",
    "initial": "x",
    "final": "uo",
    "tone": "",
    "py": "xuo",
    "ipa": "ɕɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xuo.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄊꑦ",
        "han": "大校"
      },
      {
        "yi": "ꉢꑦꊉꂓ",
        "han": "我叫小王"
      },
      {
        "yi": "ꋋꆹꉠꐋꀨꑦꂰ",
        "han": "他是我的朋友小明"
      },
      {
        "yi": "ꄓꑦꀻꌧꇗ",
        "han": "邓小平论"
      },
      {
        "yi": "ꈁꏮꊠꑦꏹ",
        "han": "抗菌增效剂"
      }
    ]
  },
  {
    "g": "ꑻ",
    "initial": "y",
    "final": "uo",
    "tone": "",
    "py": "yuo",
    "ipa": "ʑɔ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yuo.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑻꇭ",
        "han": "腰果"
      },
      {
        "yi": "ꌕꑻꋍꁨꀀꌠꎆꃀꈍꑋꑟ",
        "han": "三人间的一共付多少钱"
      },
      {
        "yi": "ꐭꁱꇐ、ꌎꅇꑻꅇꄯꒉ",
        "han": "小品文"
      },
      {
        "yi": "ꉢꀉꑳꌕꑻꐥ",
        "han": "我有三个孩子"
      },
      {
        "yi": "ꒈꋌꒈꑻ",
        "han": "盥洗"
      }
    ]
  },
  {
    "g": "ꀎ",
    "initial": "",
    "final": "uo",
    "tone": "p",
    "py": "uop",
    "ipa": "ɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_uop.mp3",
    "radical": "꒪",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀎꈯ、ꏮꈎ",
        "han": "转机"
      },
      {
        "yi": "ꉢꀎꇓꃼ",
        "han": "我要买帽子"
      },
      {
        "yi": "ꎃꐚꀎꇓ",
        "han": "便帽"
      },
      {
        "yi": "ꀎꋏꋩꈽ",
        "han": "守孝"
      },
      {
        "yi": "ꇛꌺꀎꇓ",
        "han": "纱帽"
      }
    ]
  },
  {
    "g": "ꀤ",
    "initial": "b",
    "final": "uo",
    "tone": "p",
    "py": "buop",
    "ipa": "pɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_buop.mp3",
    "radical": "꓄",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꈭꋏꇇꀤ",
        "han": "援手"
      },
      {
        "yi": "ꀤꇓꌡꁖꅉ",
        "han": "轮状腺"
      },
      {
        "yi": "ꌞꇩꏤꇇꀤ",
        "han": "援外"
      },
      {
        "yi": "ꇇꀤ",
        "han": "周济"
      },
      {
        "yi": "ꇇꀤꌠ",
        "han": "股肱"
      }
    ]
  },
  {
    "g": "ꁅ",
    "initial": "p",
    "final": "uo",
    "tone": "p",
    "py": "puop",
    "ipa": "pʰɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_puop.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꁅꎭꃖꆅ",
        "han": "破伤风"
      },
      {
        "yi": "ꉮꁅꇓ",
        "han": "海泡石"
      },
      {
        "yi": "ꁅꊪꊴ",
        "han": "狍子"
      },
      {
        "yi": "ꁅꆹꐯꀋꐊ",
        "han": "泡利不相容"
      }
    ]
  },
  {
    "g": "ꁤ",
    "initial": "bb",
    "final": "uo",
    "tone": "p",
    "py": "bbuop",
    "ipa": "bɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbuop.mp3",
    "radical": "꒩",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꏁꇅꁤꇅꁏ",
        "han": "金碧辉煌"
      },
      {
        "yi": "ꁤꍌꆈꃚ",
        "han": "连鬓胡子"
      },
      {
        "yi": "ꊫꂫꁤꇅꀕ",
        "han": "前途光明"
      },
      {
        "yi": "ꀑꑊꁤꇅꀕ",
        "han": "荣耀"
      },
      {
        "yi": "ꁤꇅ",
        "han": "光亮"
      }
    ]
  },
  {
    "g": "ꂞ",
    "initial": "hm",
    "final": "uo",
    "tone": "p",
    "py": "hmuop",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmuop.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꂼ",
    "initial": "m",
    "final": "uo",
    "tone": "p",
    "py": "muop",
    "ipa": "mɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_muop.mp3",
    "radical": "꒩",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꀄꂼꌒ",
        "han": "春梦"
      },
      {
        "yi": "ꀄꂼꂻ",
        "han": "做梦"
      },
      {
        "yi": "ꈍꃅꉉꑲꆀꍑꌠꉢꋌꀋꌧꀐꂼ",
        "han": "我不知道怎样说才好"
      },
      {
        "yi": "ꀄꂼꂼ",
        "han": "梦寐"
      },
      {
        "yi": "ꀄꂼꂻꌒꈁ",
        "han": "南柯一梦"
      }
    ]
  },
  {
    "g": "ꄨ",
    "initial": "t",
    "final": "uo",
    "tone": "p",
    "py": "tuop",
    "ipa": "tʰɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tuop.mp3",
    "radical": "꒑",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꇗꄬꄨ",
        "han": "儿童团"
      },
      {
        "yi": "ꀘꄨ",
        "han": "兵团"
      },
      {
        "yi": "ꂷꄨꆺ",
        "han": "曼陀铃"
      },
      {
        "yi": "ꅲꇫꄨꄐ",
        "han": "顾问团队"
      },
      {
        "yi": "ꄨꇨꇛꌺ",
        "han": "潼关吏"
      }
    ]
  },
  {
    "g": "ꅃ",
    "initial": "dd",
    "final": "uo",
    "tone": "p",
    "py": "dduop",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dduop.mp3",
    "radical": "꓄",
    "strokes": 4,
    "remainingStrokes": 2
  },
  {
    "g": "ꆉ",
    "initial": "n",
    "final": "uo",
    "tone": "p",
    "py": "nuop",
    "ipa": "nɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nuop.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍀꆉ",
        "han": "金钱豹"
      },
      {
        "yi": "ꆉꇐ",
        "han": "瑙鲁"
      },
      {
        "yi": "ꋀꆉ",
        "han": "黑人"
      },
      {
        "yi": "ꇇꆉ",
        "han": "凶杀"
      },
      {
        "yi": "ꍑꆉ",
        "han": "寒露"
      }
    ]
  },
  {
    "g": "ꆤ",
    "initial": "hl",
    "final": "uo",
    "tone": "p",
    "py": "hluop",
    "ipa": "ɬɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hluop.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꂵꆤꃑꈭꌠ",
        "han": "日场"
      },
      {
        "yi": "ꂵꆤꀄꂼ",
        "han": "白日做梦"
      },
      {
        "yi": "ꂵꆤꈐ",
        "han": "前半响"
      },
      {
        "yi": "ꂵꆤ",
        "han": "晌午"
      },
      {
        "yi": "ꂵꆤꉈ",
        "han": "下半天"
      }
    ]
  },
  {
    "g": "ꇆ",
    "initial": "l",
    "final": "uo",
    "tone": "p",
    "py": "luop",
    "ipa": "lɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_luop.mp3",
    "radical": "꒤",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆏꊉꇆꌤꉙꉉꇮꀕ",
        "han": "你会说俄语吗"
      },
      {
        "yi": "ꆏꊼꇆꉡꇇꀨꄎꀕ",
        "han": "你能帮我一下吗"
      },
      {
        "yi": "ꇻꇆꑩꌦ",
        "han": "克劳修斯"
      },
      {
        "yi": "ꉡꆹꇬꂾꃢꌠꊉꇆꌤꇁꌠ",
        "han": "这是我第一次来俄罗斯"
      },
      {
        "yi": "ꀑꇆꀠꊿꍒ",
        "han": "欧罗巴人种"
      }
    ]
  },
  {
    "g": "ꇩ",
    "initial": "g",
    "final": "uo",
    "tone": "p",
    "py": "guop",
    "ipa": "kɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_guop.mp3",
    "radical": "꒨",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꇩꏤꌅꈌꇑ",
        "han": "窃国"
      },
      {
        "yi": "ꁠꇩ",
        "han": "藩属"
      },
      {
        "yi": "ꅉꀕꍆꌤꏲꇩ",
        "han": "常住理事国"
      },
      {
        "yi": "ꋋꆹꂰꇩꊿ",
        "han": "他是美国人"
      },
      {
        "yi": "ꇩꏤꌤꃅꊿꉫꎴꃅꄉꊿꀸꊾꊏ",
        "han": "冒充国家工作人员招摇撞骗"
      }
    ]
  },
  {
    "g": "ꈅ",
    "initial": "k",
    "final": "uo",
    "tone": "p",
    "py": "kuop",
    "ipa": "kʰɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kuop.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈅꏹ",
        "han": "会计"
      },
      {
        "yi": "ꈅꏪ",
        "han": "栲胶"
      },
      {
        "yi": "ꈅꋍꏸꉪꏦ",
        "han": "考茨基主义"
      },
      {
        "yi": "ꈅꏹꏂ",
        "han": "会计师"
      },
      {
        "yi": "ꂽꈅꀒꁨꆹꑵꉙ",
        "han": "义勇军进行曲"
      }
    ]
  },
  {
    "g": "ꈡ",
    "initial": "gg",
    "final": "uo",
    "tone": "p",
    "py": "gguop",
    "ipa": "gɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gguop.mp3",
    "radical": "꒪",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꇇꈡ",
        "han": "耙子"
      },
      {
        "yi": "ꂷꇇꈡ",
        "han": "筢子"
      }
    ]
  },
  {
    "g": "ꈸ",
    "initial": "mg",
    "final": "uo",
    "tone": "p",
    "py": "mguop",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mguop.mp3",
    "radical": "꒪",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꉕ",
    "initial": "hx",
    "final": "uo",
    "tone": "p",
    "py": "hxuop",
    "ipa": "hɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxuop.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉕꇅꉓꇅꄷ",
        "han": "偶发"
      }
    ]
  },
  {
    "g": "ꉸ",
    "initial": "h",
    "final": "uo",
    "tone": "p",
    "py": "huop",
    "ipa": "xɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_huop.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꂸꉸꋊ",
        "han": "麻黄碱"
      },
      {
        "yi": "ꉇꋦꉸꊿ",
        "han": "华侨"
      },
      {
        "yi": "ꉸꆆ",
        "han": "淮南"
      },
      {
        "yi": "ꉸꉷꇤꄓꈁꁏ",
        "han": "黄花岗起义"
      },
      {
        "yi": "ꃗꉸꉌꊭꑴꁱ",
        "han": "凤纹"
      }
    ]
  },
  {
    "g": "ꊆ",
    "initial": "w",
    "final": "uo",
    "tone": "p",
    "py": "wuop",
    "ipa": "ɣɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wuop.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꊆꂷꏦꄺꀱ",
        "han": "王莽改制"
      },
      {
        "yi": "ꍏꂰꊆꌕꏤꐪ",
        "han": "中美望厦条约"
      },
      {
        "yi": "ꊆꌖꁧ",
        "han": "万岁山"
      },
      {
        "yi": "ꊆꆃꁬꏾ",
        "han": "王莲叶子"
      },
      {
        "yi": "ꇰꊆ",
        "han": "庚烷"
      }
    ]
  },
  {
    "g": "ꊚ",
    "initial": "z",
    "final": "uo",
    "tone": "p",
    "py": "zuop",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zuop.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꊼ",
    "initial": "c",
    "final": "uo",
    "tone": "p",
    "py": "cuop",
    "ipa": "tsʰɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cuop.mp3",
    "radical": "꒽",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꆏꊼꇅꇁꉚꄉ",
        "han": "请等一下"
      },
      {
        "yi": "ꊼꇅꄉ",
        "han": "权时"
      },
      {
        "yi": "ꈐꊼꆅ",
        "han": "枯草热"
      },
      {
        "yi": "ꊼꇅꃅ、ꄚꐰ",
        "han": "一下"
      },
      {
        "yi": "ꊼꇅꊸ",
        "han": "低热"
      }
    ]
  },
  {
    "g": "ꌖ",
    "initial": "s",
    "final": "uo",
    "tone": "p",
    "py": "suop",
    "ipa": "sɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_suop.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌖꍨ",
        "han": "隋朝"
      },
      {
        "yi": "ꊆꌖꁧ",
        "han": "万岁山"
      },
      {
        "yi": "ꀙꌖ",
        "han": "比索"
      },
      {
        "yi": "ꌖꑸꃰꃅ",
        "han": "隋杨帝"
      },
      {
        "yi": "ꇊꃀꌸꌖꃚ",
        "han": "罗蒙诺索夫"
      }
    ]
  },
  {
    "g": "ꍌ",
    "initial": "zh",
    "final": "uo",
    "tone": "p",
    "py": "zhuop",
    "ipa": "tʂɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhuop.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏹꍌꉁꈾ",
        "han": "棘爪"
      },
      {
        "yi": "ꑦꍌꁰꄟ",
        "han": "小篆"
      },
      {
        "yi": "ꇊꍌꌩ",
        "han": "龙爪槐"
      },
      {
        "yi": "ꍌꍏꋒ",
        "han": "赵州桥"
      },
      {
        "yi": "ꇩꉰꅐꊫꌐ；ꃛꍌ",
        "han": "护照"
      }
    ]
  },
  {
    "g": "ꍨ",
    "initial": "ch",
    "final": "uo",
    "tone": "p",
    "py": "chuop",
    "ipa": "tʂʰɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chuop.mp3",
    "radical": "꓀",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄟꍨꃄꅉꄹꏦ",
        "han": "天朝田亩制度"
      },
      {
        "yi": "ꉸꍨꈁꁏ",
        "han": "黄巢起义"
      },
      {
        "yi": "ꀙꍨ",
        "han": "北朝"
      },
      {
        "yi": "ꌖꍨ",
        "han": "隋朝"
      },
      {
        "yi": "ꄤꍨ",
        "han": "唐朝"
      }
    ]
  },
  {
    "g": "ꎱ",
    "initial": "sh",
    "final": "uo",
    "tone": "p",
    "py": "shuop",
    "ipa": "ʂɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shuop.mp3",
    "radical": "꒙",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꎱꆀꅥꁈ",
        "han": "少林拳"
      },
      {
        "yi": "ꏸꆍꑸꀘꎱ",
        "han": "几内亚比绍"
      },
      {
        "yi": "ꎱꊉ",
        "han": "少尉"
      },
      {
        "yi": "ꂷꎱꇙꎿꅔꋇ",
        "han": "马绍尔群岛"
      },
      {
        "yi": "ꎱꑣꄐ",
        "han": "少先队"
      }
    ]
  },
  {
    "g": "ꏌ",
    "initial": "r",
    "final": "uo",
    "tone": "p",
    "py": "ruop",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ruop.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꏫ",
    "initial": "j",
    "final": "uo",
    "tone": "p",
    "py": "juop",
    "ipa": "tɕɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_juop.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏫꄀ",
        "han": "吊卷"
      },
      {
        "yi": "ꎴꇥꏫ",
        "han": "鸭嘴兽"
      },
      {
        "yi": "ꃛꏫꄯꒉ",
        "han": "释典"
      },
      {
        "yi": "ꏸꄖꏫ",
        "han": "基督教"
      },
      {
        "yi": "ꌋꑆꌠ、ꏫꑇꊿ",
        "han": "教徒"
      }
    ]
  },
  {
    "g": "ꐇ",
    "initial": "q",
    "final": "uo",
    "tone": "p",
    "py": "quop",
    "ipa": "tɕʰɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_quop.mp3",
    "radical": "꒤",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄊꐇꃅꏸ",
        "han": "大犬座"
      },
      {
        "yi": "ꎔꐇ",
        "han": "玷污"
      },
      {
        "yi": "ꎹꐇꍞ",
        "han": "圣乔治"
      },
      {
        "yi": "ꐇꍞꄒ",
        "han": "乔治敦"
      },
      {
        "yi": "ꉮꐇ",
        "han": "海鞘"
      }
    ]
  },
  {
    "g": "ꐢ",
    "initial": "jj",
    "final": "uo",
    "tone": "p",
    "py": "jjuop",
    "ipa": "dʑɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjuop.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑵꐢ",
        "han": "破落户"
      },
      {
        "yi": "ꎒꐢ",
        "han": "破败"
      }
    ]
  },
  {
    "g": "ꑔ",
    "initial": "ny",
    "final": "uo",
    "tone": "p",
    "py": "nyuop",
    "ipa": "ȵɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyuop.mp3",
    "radical": "꒡",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꑔꋘ",
        "han": "斜眼"
      },
      {
        "yi": "ꑍꇤꁋꇐꀉꆈ、ꑔꇤꁱꆰ",
        "han": "牛皮癣"
      },
      {
        "yi": "ꑔꉖ",
        "han": "瞎奶"
      },
      {
        "yi": "ꑔ ꋘ",
        "han": "斗眼"
      }
    ]
  },
  {
    "g": "ꑼ",
    "initial": "y",
    "final": "uo",
    "tone": "p",
    "py": "yuop",
    "ipa": "ʑɔ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yuop.mp3",
    "radical": "꒝",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑳꄆꑼ",
        "han": "伊甸园"
      },
      {
        "yi": "ꍏꑷꍔꃔꊈꑼꉼ",
        "han": "中政委"
      },
      {
        "yi": "ꏓꂱꊈꑼꉼ",
        "han": "人民委员会"
      },
      {
        "yi": "ꇂꑼꌜꉛ",
        "han": "蓝圆参"
      },
      {
        "yi": "ꏦꍤꑼ",
        "han": "检察院"
      }
    ]
  },
  {
    "g": "ꀏ",
    "initial": "",
    "final": "o",
    "tone": "t",
    "py": "ot",
    "ipa": "o⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ot.mp3",
    "radical": "꒪",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀏꈴꄉꈻꎷ、ꐮꈴ",
        "han": "串通"
      },
      {
        "yi": "ꀏꈩꎭ",
        "han": "性骚扰"
      },
      {
        "yi": "ꀏꃷꌠ",
        "han": "妓女"
      },
      {
        "yi": "ꀅꌳꃅꀏꐛꇁ、ꐼꄮꃅꀞꄻ",
        "han": "软着陆"
      },
      {
        "yi": "ꀏꈜ、ꁭꄲ",
        "han": "阴部"
      }
    ]
  },
  {
    "g": "ꀥ",
    "initial": "b",
    "final": "o",
    "tone": "t",
    "py": "bot",
    "ipa": "po⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bot.mp3",
    "radical": "꒰",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꇤꅷꀥ",
        "han": "奔命"
      },
      {
        "yi": "ꈜꀥꌠꀆꐒꎭ",
        "han": "落井下石"
      },
      {
        "yi": "ꉈꑴꀥ",
        "han": "抗辩"
      },
      {
        "yi": "ꊪꀥꋓ",
        "han": "接力塞"
      },
      {
        "yi": "ꈌꀥꐋ",
        "han": "辩友"
      }
    ]
  },
  {
    "g": "ꁆ",
    "initial": "p",
    "final": "o",
    "tone": "t",
    "py": "pot",
    "ipa": "pʰo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pot.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꁮꐚꁆꏯꀉꒉꃅꁉꃑ",
        "han": "西部大开发"
      },
      {
        "yi": "ꁆ꓆ꆳꌸ",
        "han": "梢基黄"
      },
      {
        "yi": "ꇗꐥꁆꏮ、ꇗꐥꊋꃤ",
        "han": "理直气壮"
      },
      {
        "yi": "ꉢꊸꁆꑍꆍꏤꈩꇁꂿ",
        "han": "我后天去你家玩"
      },
      {
        "yi": "ꏸꑭꊁꁆꌠ",
        "han": "后脚"
      }
    ]
  },
  {
    "g": "ꁥ",
    "initial": "bb",
    "final": "o",
    "tone": "t",
    "py": "bbot",
    "ipa": "bo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbot.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑴꑼꉎꁥꌠ",
        "han": "上议院"
      },
      {
        "yi": "ꏄ ꈩꁥ",
        "han": "股匪"
      },
      {
        "yi": "ꑷꄅꌷꁥꌠ",
        "han": "雅典学派"
      },
      {
        "yi": "ꌦꀋꑴꁥ",
        "han": "敢死队"
      },
      {
        "yi": "ꍐꄐꉬꁥꌠ",
        "han": "第五纵队"
      }
    ]
  },
  {
    "g": "ꂁ",
    "initial": "nb",
    "final": "o",
    "tone": "t",
    "py": "nbot",
    "ipa": "mbo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbot.mp3",
    "radical": "꒞",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈏꂁ",
        "han": "卧底"
      },
      {
        "yi": "ꂁꋠ",
        "han": "贪污"
      },
      {
        "yi": "ꐪꌐꂁ",
        "han": "藏踪"
      },
      {
        "yi": "ꈌꂁ",
        "han": "隐秘"
      },
      {
        "yi": "ꆆꌦꈆꄯꂁ",
        "han": "南斯科特站"
      }
    ]
  },
  {
    "g": "ꂟ",
    "initial": "hm",
    "final": "o",
    "tone": "t",
    "py": "hmot",
    "ipa": "m̥o⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmot.mp3",
    "radical": "꒬",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꊈꂟ",
        "han": "韭菜"
      },
      {
        "yi": "ꇁꂟ",
        "han": "牛蝇"
      },
      {
        "yi": "ꋚꂟ",
        "han": "叫花子"
      },
      {
        "yi": "ꏆꇖꏆꂟ、ꈌꊰ",
        "han": "讨饶"
      },
      {
        "yi": "ꑾꃅꇁꂟ",
        "han": "马蝇"
      }
    ]
  },
  {
    "g": "ꂽ",
    "initial": "m",
    "final": "o",
    "tone": "t",
    "py": "mot",
    "ipa": "mo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mot.mp3",
    "radical": "꒬",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꂽꈻ",
        "han": "退兵"
      },
      {
        "yi": "ꃱ ꌬꂽ",
        "han": "步哨"
      },
      {
        "yi": "ꎳꆹꈴꂽ",
        "han": "远征军"
      },
      {
        "yi": "ꂽꍆꅉ",
        "han": "营地"
      },
      {
        "yi": "ꏦꆀꎁꂽ",
        "han": "宪兵"
      }
    ]
  },
  {
    "g": "ꃮ",
    "initial": "v",
    "final": "o",
    "tone": "t",
    "py": "vot",
    "ipa": "vo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vot.mp3",
    "radical": "꒤",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꃮꉆ",
        "han": "猪肚"
      },
      {
        "yi": "ꃮꌅꑍꈬ",
        "han": "樱花"
      },
      {
        "yi": "ꃮꎸꃱꋯꏬꄉꌠ",
        "han": "猪肉烧萝卜"
      },
      {
        "yi": "ꃮꃀꋙꈌ",
        "han": "蒲公英"
      },
      {
        "yi": "ꃮꉌꂵꆭ",
        "han": "炒猪心片"
      }
    ]
  },
  {
    "g": "ꄍ",
    "initial": "d",
    "final": "o",
    "tone": "t",
    "py": "dot",
    "ipa": "to⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dot.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꃀꀕꃆꄍꌉꅍ",
        "han": "干粉灭火器"
      },
      {
        "yi": "ꁯꎝꄍꊌꀋꄐꌠ",
        "han": "呆账"
      },
      {
        "yi": "ꊹꄍꅿꁮ",
        "han": "芽豆"
      },
      {
        "yi": "ꎝꄍꊌꀋꄐꌠ",
        "han": "呆帐"
      },
      {
        "yi": "ꀡꄍ",
        "han": "滴答"
      }
    ]
  },
  {
    "g": "ꄩ",
    "initial": "t",
    "final": "o",
    "tone": "t",
    "py": "tot",
    "ipa": "tʰo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tot.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꄩꅐꆹꐳ",
        "han": "平步青云"
      },
      {
        "yi": "ꄩꀖ",
        "han": "高超"
      },
      {
        "yi": "ꋍꄩꏃꌋ",
        "han": "顶头上司"
      },
      {
        "yi": "ꃼꋊꅔꅐ、ꄞꅐꄩꅞ",
        "han": "脱颖而出"
      },
      {
        "yi": "ꀏꊰꄩꅐ",
        "han": "沉浮"
      }
    ]
  },
  {
    "g": "ꅄ",
    "initial": "dd",
    "final": "o",
    "tone": "t",
    "py": "ddot",
    "ipa": "do⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddot.mp3",
    "radical": "꒓",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꅄꌺ",
        "han": "气根"
      },
      {
        "yi": "ꐴꅄꌺ",
        "han": "不定根"
      },
      {
        "yi": "ꃬꅄ",
        "han": "赛北紫堇"
      },
      {
        "yi": "ꅄꑭꅄꇇ",
        "han": "末节"
      },
      {
        "yi": "ꃬꑭꅄ",
        "han": "鸡距"
      }
    ]
  },
  {
    "g": "ꅛ",
    "initial": "nd",
    "final": "o",
    "tone": "t",
    "py": "ndot",
    "ipa": "ndo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndot.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉈꅛꀋꇬ",
        "han": "不厌"
      }
    ]
  },
  {
    "g": "ꅶ",
    "initial": "hn",
    "final": "o",
    "tone": "t",
    "py": "hnot",
    "ipa": "n̥o⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnot.mp3",
    "radical": "꒗",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꅶꉜꍯꉜ",
        "han": "东张西望"
      },
      {
        "yi": "ꁥꏓꉪꇐꅶꇨꌠ",
        "han": "帮派思想严重的人"
      },
      {
        "yi": "ꃹꅶꃅꄺꀱ",
        "han": "深化改革"
      },
      {
        "yi": "ꋠꒉꅝꅶ",
        "han": "大吃大喝"
      },
      {
        "yi": "ꉜꒉꄉꅶ、ꉜꒉ",
        "han": "崇拜"
      }
    ]
  },
  {
    "g": "ꆊ",
    "initial": "n",
    "final": "o",
    "tone": "t",
    "py": "not",
    "ipa": "no⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_not.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀑꆊꐧꈋꌠ",
        "han": "中脑"
      },
      {
        "yi": "ꋊꊈꃅꆊ",
        "han": "碱性土壤"
      },
      {
        "yi": "ꀑꆊꀉꒉꈋꌠꈫꁁ",
        "han": "大脑半球"
      },
      {
        "yi": "ꇱꄓꆊꌧ",
        "han": "脊肌"
      },
      {
        "yi": "ꆧꆊꁏ",
        "han": "返青"
      }
    ]
  },
  {
    "g": "ꇇ",
    "initial": "l",
    "final": "o",
    "tone": "t",
    "py": "lot",
    "ipa": "lo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lot.mp3",
    "radical": "꒡",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꇇꋒꊂꀳ",
        "han": "背着手"
      },
      {
        "yi": "ꀎꋏꇇꊂ",
        "han": "手泽"
      },
      {
        "yi": "ꎮꑑꇇꑭ",
        "han": "魁星"
      },
      {
        "yi": "ꃼꇇꃅꇉ",
        "han": "商船"
      },
      {
        "yi": "ꇇꌒꍅꅪꊐꅍ",
        "han": "打印台"
      }
    ]
  },
  {
    "g": "ꇪ",
    "initial": "g",
    "final": "o",
    "tone": "t",
    "py": "got",
    "ipa": "ko⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_got.mp3",
    "radical": "꒶",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꀠꆺꇪꎹ",
        "han": "巴黎公社"
      },
      {
        "yi": "ꌼꇪꏿ",
        "han": "繁冗"
      },
      {
        "yi": "ꂱꇪꌠꊝ",
        "han": "厄运"
      },
      {
        "yi": "ꃔꇍꇪ",
        "han": "法轮功"
      },
      {
        "yi": "ꃀꐚꇪꐚ",
        "han": "寿终正寝"
      }
    ]
  },
  {
    "g": "ꈆ",
    "initial": "k",
    "final": "o",
    "tone": "t",
    "py": "kot",
    "ipa": "kʰo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kot.mp3",
    "radical": "꒕",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꋋꆹꈆꑪꌧꃀ",
        "han": "他是个科学家"
      },
      {
        "yi": "ꋌꐛꈆꑪ",
        "han": "自然科学"
      },
      {
        "yi": "ꎢꈆ",
        "han": "大蓟"
      },
      {
        "yi": "ꈆꑪꇮꇐꌕꑵꌫꎆ",
        "han": "科技三项费用"
      },
      {
        "yi": "ꎹꃛꇁꑭꌦꈆ",
        "han": "圣弗郎西斯科"
      }
    ]
  },
  {
    "g": "ꈢ",
    "initial": "gg",
    "final": "o",
    "tone": "t",
    "py": "ggot",
    "ipa": "go⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggot.mp3",
    "radical": "꒔",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꈢꅵꃹ",
        "han": "落日"
      },
      {
        "yi": "ꁮꐚꈢꆈꊾꏂꌠ",
        "han": "敌特"
      },
      {
        "yi": "ꀋꎴꈢ",
        "han": "隐射"
      },
      {
        "yi": "ꑸꇬꈢ",
        "han": "坐禁闭"
      },
      {
        "yi": "ꈢꃑꏶꂷ",
        "han": "录放磁头"
      }
    ]
  },
  {
    "g": "ꈹ",
    "initial": "mg",
    "final": "o",
    "tone": "t",
    "py": "mgot",
    "ipa": "ŋgo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgot.mp3",
    "radical": "꒪",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃼꇇꈹꁥ",
        "han": "客帮"
      },
      {
        "yi": "ꉛꈹꅉ",
        "han": "渔场"
      },
      {
        "yi": "ꍤꈹ",
        "han": "追查"
      },
      {
        "yi": "ꑓꂡꇬꎸꈹ",
        "han": "吹毛求疵"
      },
      {
        "yi": "ꒈꊏꄉꉛꈹ",
        "han": "竭泽而渔"
      }
    ]
  },
  {
    "g": "ꉖ",
    "initial": "hx",
    "final": "o",
    "tone": "t",
    "py": "hxot",
    "ipa": "ho⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxot.mp3",
    "radical": "꒠",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꎿꉱꉖꇅꐦ",
        "han": "洋盆"
      },
      {
        "yi": "ꑍꉖ",
        "han": "日夜"
      },
      {
        "yi": "ꉖꂿꈴꑓꑳ",
        "han": "凹透镜"
      },
      {
        "yi": "ꂷꇭꋩꈩꉖ",
        "han": "元宵节"
      },
      {
        "yi": "ꆼꁠꁡꉖ",
        "han": "肩窝"
      }
    ]
  },
  {
    "g": "ꉧ",
    "initial": "ng",
    "final": "o",
    "tone": "t",
    "py": "ngot",
    "ipa": "ŋo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngot.mp3",
    "radical": "꒟",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꆌꉧꑟ",
        "han": "等弧"
      },
      {
        "yi": "ꃪꇥꉧ",
        "han": "单斜层"
      },
      {
        "yi": "ꉧꈭ",
        "han": "圆弧"
      },
      {
        "yi": "ꇂꉧꌠ",
        "han": "拱券"
      },
      {
        "yi": "ꇓꉧꋒ",
        "han": "联拱石桥"
      }
    ]
  },
  {
    "g": "ꉹ",
    "initial": "h",
    "final": "o",
    "tone": "t",
    "py": "hot",
    "ipa": "xo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hot.mp3",
    "radical": "꒰",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉹꁌꑳꇤ",
        "han": "民房"
      },
      {
        "yi": "ꃀꈿꐦꀞ、ꉹꁌꈩꅉ",
        "han": "广场"
      },
      {
        "yi": "ꉹꁌꋍꏅ",
        "han": "民众"
      },
      {
        "yi": "ꇙꀕꌋꃅꑍꉹꌠ",
        "han": "二类保护动物"
      },
      {
        "yi": "ꉹꁌꋽꇐ",
        "han": "民间艺术"
      }
    ]
  },
  {
    "g": "ꊛ",
    "initial": "z",
    "final": "o",
    "tone": "t",
    "py": "zot",
    "ipa": "tso⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zot.mp3",
    "radical": "꒫",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꇂꈪꊛꅍ",
        "han": "拐脖儿"
      },
      {
        "yi": "ꊛꒊꃷꁨꎆ",
        "han": "递减数列"
      },
      {
        "yi": "ꊛꁧ",
        "han": "连乘"
      },
      {
        "yi": "ꊛꎑꎀꍹꇷꑴ",
        "han": "结缔组织膜"
      },
      {
        "yi": "ꊛꇺ",
        "han": "挂钩"
      }
    ]
  },
  {
    "g": "ꊽ",
    "initial": "c",
    "final": "o",
    "tone": "t",
    "py": "cot",
    "ipa": "tsʰo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cot.mp3",
    "radical": "꒤",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆏꌥꇬꊽꉌꇿ",
        "han": "很高兴认识你"
      },
      {
        "yi": "ꊽꉌꃹ",
        "han": "乖巧"
      },
      {
        "yi": "ꊽꎸꌦꈌꆭ",
        "han": "猪肉片炒黄瓜"
      },
      {
        "yi": "ꊽꀜ",
        "han": "麻脚症"
      },
      {
        "yi": "ꊽꉌꋲꀕ",
        "han": "可疑"
      }
    ]
  },
  {
    "g": "ꌗ",
    "initial": "s",
    "final": "o",
    "tone": "t",
    "py": "sot",
    "ipa": "so⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sot.mp3",
    "radical": "꒚",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌗꄻꅍ",
        "han": "汽机"
      },
      {
        "yi": "ꃅꌗꊸ",
        "han": "气温高"
      },
      {
        "yi": "ꀁꑌꐥꌗ",
        "han": "稀有气体"
      },
      {
        "yi": "ꌗꋌꑽꏃ",
        "han": "洗气瓶"
      },
      {
        "yi": "ꃅꌗꈺꅍ",
        "han": "低气压区"
      }
    ]
  },
  {
    "g": "ꌵ",
    "initial": "ss",
    "final": "o",
    "tone": "t",
    "py": "ssot",
    "ipa": "zo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssot.mp3",
    "radical": "꒕",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃅꌵꄉꃨꉜ",
        "han": "下马看花"
      },
      {
        "yi": "ꎊꈬꌵ",
        "han": "卸货"
      },
      {
        "yi": "ꌵꋚ",
        "han": "宴席"
      },
      {
        "yi": "ꏓꌵꁁꈴꑟ",
        "han": "焦点半径"
      },
      {
        "yi": "ꆿꍮꂷꌵ",
        "han": "五谷丰登"
      }
    ]
  },
  {
    "g": "ꍍ",
    "initial": "zh",
    "final": "o",
    "tone": "t",
    "py": "zhot",
    "ipa": "tʂo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhot.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃼꍍꃷꍍ",
        "han": "空头"
      },
      {
        "yi": "ꐭꍍꃷꄟ",
        "han": "顺价销售"
      },
      {
        "yi": "ꍍꋌꆀꋌ",
        "han": "受洗"
      },
      {
        "yi": "ꍍꅫꎵ",
        "han": "排污"
      },
      {
        "yi": "ꍍꏢꐭꏢ",
        "han": "治污禁排"
      }
    ]
  },
  {
    "g": "ꍩ",
    "initial": "ch",
    "final": "o",
    "tone": "t",
    "py": "chot",
    "ipa": "tʂʰo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chot.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꄇꍩ",
        "han": "榴弹炮"
      },
      {
        "yi": "ꍩꅪꏓꉻ",
        "han": "红枪会"
      },
      {
        "yi": "ꍩꇓꈳꏦ",
        "han": "弹道"
      },
      {
        "yi": "ꁐꍩꂷ",
        "han": "榴霰弹"
      },
      {
        "yi": "ꄔꉈꅥ ꍩ",
        "han": "火箭筒"
      }
    ]
  },
  {
    "g": "ꎀ",
    "initial": "rr",
    "final": "o",
    "tone": "t",
    "py": "rrot",
    "ipa": "dʐo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rrot.mp3",
    "radical": "꒑",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꋧꃅꃼꇇꎀꍹꇬꃹ",
        "han": "入世"
      },
      {
        "yi": "ꁦꎴꎀꍹ",
        "han": "卫生组织"
      },
      {
        "yi": "ꌅꈌꎀꍹ",
        "han": "政权组织"
      },
      {
        "yi": "ꊛꎑꎀꍹ",
        "han": "结缔组织"
      },
      {
        "yi": "ꀧꌋꎀꍹ",
        "han": "保护组织"
      }
    ]
  },
  {
    "g": "ꎲ",
    "initial": "sh",
    "final": "o",
    "tone": "t",
    "py": "shot",
    "ipa": "ʂo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shot.mp3",
    "radical": "꒟",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎲꁨꄏꁦ",
        "han": "有自尊心"
      },
      {
        "yi": "ꎲꃆꁊ",
        "han": "播黄"
      },
      {
        "yi": "ꎲꄏꉈꏠ",
        "han": "奇耻大辱"
      },
      {
        "yi": "ꎲꁘ",
        "han": "屈辱"
      },
      {
        "yi": "ꎲꋊ",
        "han": "雪耻"
      }
    ]
  },
  {
    "g": "ꏍ",
    "initial": "r",
    "final": "o",
    "tone": "t",
    "py": "rot",
    "ipa": "ʐo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rot.mp3",
    "radical": "꒼",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈁꉐꏍ",
        "han": "冷战"
      },
      {
        "yi": "ꈄꏍꈴꄉꌶꌺꇇꀨ",
        "han": "网上助学"
      },
      {
        "yi": "ꈄꏍꑽꃤꐆ",
        "han": "网络犯罪"
      },
      {
        "yi": "ꐯꏍꅉ",
        "han": "焦点"
      },
      {
        "yi": "ꏍꈿꏿ",
        "han": "硬仗"
      }
    ]
  },
  {
    "g": "ꏬ",
    "initial": "j",
    "final": "o",
    "tone": "t",
    "py": "jot",
    "ipa": "tɕo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jot.mp3",
    "radical": "꒳",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꒉꏬꁠꐤ",
        "han": "汆子"
      },
      {
        "yi": "ꆿꏬꇉꇬ",
        "han": "烧心壶"
      },
      {
        "yi": "ꏬꂷ",
        "han": "酒糟"
      },
      {
        "yi": "ꇌꎸꃱꋯꇯꏬꌠ",
        "han": "萝卜烧牛肉"
      },
      {
        "yi": "ꎧꏬꅉ",
        "han": "糟糠"
      }
    ]
  },
  {
    "g": "ꐈ",
    "initial": "q",
    "final": "o",
    "tone": "t",
    "py": "qot",
    "ipa": "tɕʰo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qot.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꊨꏦꌋꐈꐛꐨ",
        "han": "自感现象"
      },
      {
        "yi": "ꇇꌭꄆꄙꐈꅍ",
        "han": "转柄变阻器"
      },
      {
        "yi": "ꀋꐈꀋꋓ",
        "han": "淳朴"
      },
      {
        "yi": "ꐈꁈꏂ",
        "han": "斗法"
      },
      {
        "yi": "ꌋꐊꃏꌅꀉꒉꐈꏓꐥꇐ",
        "han": "有机高分子化合物"
      }
    ]
  },
  {
    "g": "ꐣ",
    "initial": "jj",
    "final": "o",
    "tone": "t",
    "py": "jjot",
    "ipa": "dʑo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjot.mp3",
    "radical": "꒕",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꆭꑆꐣꁙꌺ",
        "han": "皮夹子"
      },
      {
        "yi": "ꐣꁙꀵꏣ",
        "han": "书包带"
      },
      {
        "yi": "ꆹꅜꐣꁙ",
        "han": "褡裢"
      },
      {
        "yi": "ꐣꁙ",
        "han": "口袋"
      },
      {
        "yi": "ꆞꐣꁙ",
        "han": "裤兜"
      }
    ]
  },
  {
    "g": "ꐻ",
    "initial": "nj",
    "final": "o",
    "tone": "t",
    "py": "njot",
    "ipa": "ndʑo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njot.mp3",
    "radical": "꒿",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꐻꄂꈐ",
        "han": "冰斗"
      },
      {
        "yi": "ꇓꐻꋤ",
        "han": "钟乳石"
      },
      {
        "yi": "ꅔꊂꐻꎵꅉ",
        "han": "大陆冰源"
      },
      {
        "yi": "ꐻꄉ",
        "han": "冷冻"
      },
      {
        "yi": "ꐻꅋ",
        "han": "冰毒"
      }
    ]
  },
  {
    "g": "ꑕ",
    "initial": "ny",
    "final": "o",
    "tone": "t",
    "py": "nyot",
    "ipa": "ȵo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyot.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊖꑕꇔꇷ",
        "han": "泥工"
      },
      {
        "yi": "ꁱꄜꑕ",
        "han": "伏案"
      },
      {
        "yi": "ꈚꐔꑕ",
        "han": "守财奴"
      },
      {
        "yi": "ꑕꏿꐎ",
        "han": "粘蛋白"
      },
      {
        "yi": "ꅋꑕ",
        "han": "挖补"
      }
    ]
  },
  {
    "g": "ꑧ",
    "initial": "x",
    "final": "o",
    "tone": "t",
    "py": "xot",
    "ipa": "ɕo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xot.mp3",
    "radical": "꒳",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꁭꑧꇇ",
        "han": "蟋蟀"
      },
      {
        "yi": "ꁮꑧꇇ",
        "han": "促织"
      },
      {
        "yi": "ꑧꇇꀕ",
        "han": "玎玲"
      },
      {
        "yi": "ꁮꑧꇇꏜ",
        "han": "蟋蟀草"
      },
      {
        "yi": "ꑧꑤꂱꄃ",
        "han": "胸腺嘧啶"
      }
    ]
  },
  {
    "g": "ꑽ",
    "initial": "y",
    "final": "o",
    "tone": "t",
    "py": "yot",
    "ipa": "ʑo⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yot.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃅꎁꀋꃅꑽꃤ",
        "han": "渎职罪"
      },
      {
        "yi": "ꊿꑽꌉꌠꀋꑽ",
        "han": "格杀勿论"
      },
      {
        "yi": "ꀒꀞꊂꈪꊐ、ꑽꌠꂴꆹꉃꌠꊁꇁ",
        "han": "惩前毖后"
      },
      {
        "yi": "ꃅꑽꊿ",
        "han": "行为人"
      },
      {
        "yi": "ꑆꊋꑽꃤ",
        "han": "功罪"
      }
    ]
  },
  {
    "g": "ꀐ",
    "initial": "",
    "final": "o",
    "tone": "x",
    "py": "ox",
    "ipa": "o⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌤꋋꐘꆏꃅꑽꀐ",
        "han": "这件事你做错了"
      },
      {
        "yi": "ꆏꋙꋟꀕꀐ",
        "han": "你吃饭了吗"
      },
      {
        "yi": "ꃌꒆꐯꇯ60ꈎꀐꌠ",
        "han": "夫妻年满60周岁"
      },
      {
        "yi": "ꀋꃅꆹꄮꈉ1ꂷꉬꀐ",
        "han": "现在是1点钟"
      },
      {
        "yi": "ꌠꉬꀐꇬ",
        "han": "但凡"
      }
    ]
  },
  {
    "g": "ꀦ",
    "initial": "b",
    "final": "o",
    "tone": "x",
    "py": "box",
    "ipa": "po⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_box.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁮꏂꋍꏢꅥꊰꏢꀦ",
        "han": "惩一警百"
      },
      {
        "yi": "ꏥꏦꁧꀦꇖꏢꌠꌭꈬ",
        "han": "坚持四项基本原则"
      },
      {
        "yi": "ꁨꑭꇁꀦ",
        "han": "光源"
      },
      {
        "yi": "ꐚꒉꅐꀦ",
        "han": "蜜源"
      },
      {
        "yi": "ꈜꀦ",
        "han": "干线"
      }
    ]
  },
  {
    "g": "ꁇ",
    "initial": "p",
    "final": "o",
    "tone": "x",
    "py": "pox",
    "ipa": "pʰo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍔꁇ、ꍔꂵ",
        "han": "开展"
      },
      {
        "yi": "ꐏꁇꅉ",
        "han": "看守所"
      },
      {
        "yi": "ꆙꁇ",
        "han": "优容"
      },
      {
        "yi": "ꐏꁇꌤ꒧",
        "han": "防务"
      },
      {
        "yi": "ꏓꄉꐏꁇ",
        "han": "联防"
      }
    ]
  },
  {
    "g": "ꁦ",
    "initial": "bb",
    "final": "o",
    "tone": "x",
    "py": "bbox",
    "ipa": "bo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁦꏢꄹꄜ",
        "han": "圆锥台"
      },
      {
        "yi": "ꃅꁦꄹꏦ",
        "han": "封建制度"
      },
      {
        "yi": "ꁦꀑꐻꏪ",
        "han": "山岳冰川"
      },
      {
        "yi": "ꁦꀑꉒꏂ",
        "han": "山岚"
      },
      {
        "yi": "ꁦꎆꁧꆷꄀ",
        "han": "繁文缛节"
      }
    ]
  },
  {
    "g": "ꂂ",
    "initial": "nb",
    "final": "o",
    "tone": "x",
    "py": "nbox",
    "ipa": "mbo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈌꌬꂂ",
        "han": "辩才"
      },
      {
        "yi": "ꊿꂂꒉꐚꅿ",
        "han": "大慈大悲"
      },
      {
        "yi": "ꐛꂂ",
        "han": "敦实"
      },
      {
        "yi": "ꌷꂂꌠꈁꁠ",
        "han": "奖学金"
      },
      {
        "yi": "ꊿꂂꉬꉗꃅ",
        "han": "伪善"
      }
    ]
  },
  {
    "g": "ꂠ",
    "initial": "hm",
    "final": "o",
    "tone": "x",
    "py": "hmox",
    "ipa": "m̥o⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꄻꂠꀱ",
        "han": "更正"
      },
      {
        "yi": "ꏃꂠ、ꏲꌋ、ꌟꒉ",
        "han": "领导"
      },
      {
        "yi": "ꏲꐚꂠꐚ",
        "han": "修明"
      },
      {
        "yi": "ꋬꂻꏲꂠ",
        "han": "治安管理"
      },
      {
        "yi": "ꐮꏲꐯꂠ",
        "han": "统属"
      }
    ]
  },
  {
    "g": "ꂾ",
    "initial": "m",
    "final": "o",
    "tone": "x",
    "py": "mox",
    "ipa": "mo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꆳꂾꆎꅉ",
        "han": "船埠"
      },
      {
        "yi": "ꌗꆳꂾꌺ",
        "han": "汽艇"
      },
      {
        "yi": "ꋍꂾꊿꀋ ꐥꌠꌡ",
        "han": "旁若无人"
      },
      {
        "yi": "ꄙꂾꁱꏪ",
        "han": "糕点"
      },
      {
        "yi": "ꂾꅉ",
        "han": "视野"
      }
    ]
  },
  {
    "g": "ꃕ",
    "initial": "f",
    "final": "o",
    "tone": "x",
    "py": "fox",
    "ipa": "fo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁍꃕ",
        "han": "迷瞪"
      }
    ]
  },
  {
    "g": "ꃯ",
    "initial": "v",
    "final": "o",
    "tone": "x",
    "py": "vox",
    "ipa": "vo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌦꉹꐮꐊꌠꋒꃯꉜ",
        "han": "血型配合实验"
      },
      {
        "yi": "ꋒꃯꉜꑳ",
        "han": "实验室"
      },
      {
        "yi": "ꉻꃯ、ꉺꈻ",
        "han": "抽象"
      },
      {
        "yi": "ꃱꇌꃯꇌ",
        "han": "模棱"
      },
      {
        "yi": "ꃰꇌꃯꇌ",
        "han": "踌伫"
      }
    ]
  },
  {
    "g": "ꄎ",
    "initial": "d",
    "final": "o",
    "tone": "x",
    "py": "dox",
    "ipa": "to⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊐꄎ",
        "han": "载重"
      },
      {
        "yi": "ꉜꆏꈌꈻꄎ",
        "han": "过目成诵"
      },
      {
        "yi": "ꈭꄐꈜꄎ",
        "han": "导航"
      },
      {
        "yi": "ꌊꐯꄎ",
        "han": "逆对应"
      },
      {
        "yi": "ꄮꈉꏤꈉꇬꉪꇫꑟꄎꌠꉬ",
        "han": "我们能在约定的时间内到达"
      }
    ]
  },
  {
    "g": "ꄪ",
    "initial": "t",
    "final": "o",
    "tone": "x",
    "py": "tox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꅅ",
    "initial": "dd",
    "final": "o",
    "tone": "x",
    "py": "ddox",
    "ipa": "do⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎆꌉꅅꃅ",
        "han": "屠刀"
      },
      {
        "yi": "ꅲꂿꅅꀋꐊ",
        "han": "荒诞"
      },
      {
        "yi": "ꉉꂿꅅꀋꊌ",
        "han": "不赞一词"
      },
      {
        "yi": "ꎼꅇꃏꅅ",
        "han": "邪说"
      },
      {
        "yi": "ꃶꅇꂿꅅ",
        "han": "胡话"
      }
    ]
  },
  {
    "g": "ꅜ",
    "initial": "nd",
    "final": "o",
    "tone": "x",
    "py": "ndox",
    "ipa": "ndo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꒆꃅꅜ",
        "han": "坠地"
      },
      {
        "yi": "ꒃꅜ",
        "han": "拿获"
      },
      {
        "yi": "ꊪꅜ ꄯꒉ",
        "han": "收文"
      },
      {
        "yi": "ꆎꐂꉠꃀꅜ",
        "han": "前赴后继"
      },
      {
        "yi": "ꊌꅜ",
        "han": "获取"
      }
    ]
  },
  {
    "g": "ꅷ",
    "initial": "hn",
    "final": "o",
    "tone": "x",
    "py": "hnox",
    "ipa": "n̥o⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁮꅷ",
        "han": "延伸"
      },
      {
        "yi": "ꅷꆹ",
        "han": "入手"
      },
      {
        "yi": "ꏈꅷꂿꃅꑟ",
        "han": "翻天"
      },
      {
        "yi": "ꐥꅷꇁ",
        "han": "历来"
      },
      {
        "yi": "ꃅꒊꃅꇁꊿꅷ",
        "han": "形势逼人"
      }
    ]
  },
  {
    "g": "ꆋ",
    "initial": "n",
    "final": "o",
    "tone": "x",
    "py": "nox",
    "ipa": "no⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁏꌠꍅꆋ",
        "han": "镇反"
      },
      {
        "yi": "ꍅꆋ ꒧ ꒃ",
        "han": "平靖"
      },
      {
        "yi": "ꊾꍅꊿꆋ",
        "han": "暴政"
      },
      {
        "yi": "ꍅꆋ、ꆼꍅ",
        "han": "镇压"
      },
      {
        "yi": "ꆼꍅꆽꆋ",
        "han": "剥削压迫"
      }
    ]
  },
  {
    "g": "ꆥ",
    "initial": "hl",
    "final": "o",
    "tone": "x",
    "py": "hlox",
    "ipa": "ɬo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊪꑭꆥꏦ",
        "han": "轮作制度"
      },
      {
        "yi": "ꍯꆥ",
        "han": "秧苗"
      },
      {
        "yi": "ꌿꆧꎭꆥ",
        "han": "麦苗"
      },
      {
        "yi": "ꐥꇐꆥꁱ",
        "han": "拟物"
      },
      {
        "yi": "ꃅ、ꅉ、ꇩ、ꏣ、ꃀꅿꆥꅉ。",
        "han": "天、地、国、亲、师牌位。"
      }
    ]
  },
  {
    "g": "ꇈ",
    "initial": "l",
    "final": "o",
    "tone": "x",
    "py": "lox",
    "ipa": "lo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇈꈬ꒧ꁨ",
        "han": "田野工作"
      },
      {
        "yi": "ꉠꎁꃅꂘꃀꏭꉌꌒꅊꇈ",
        "han": "请帮我向老师问好"
      },
      {
        "yi": "ꇈꈬ、ꍯꃅꅔꃅ、ꁍꑗꅔꊂ",
        "han": "田野"
      },
      {
        "yi": "ꉪꉂꏣꃅꃴꃅꅉꌟꃅꀋꑍꀋꈤꅊꇈ",
        "han": "希望我们的友谊天长地久"
      },
      {
        "yi": "ꇈꈬꇉꃪꁧ",
        "han": "回归自然"
      }
    ]
  },
  {
    "g": "ꇫ",
    "initial": "g",
    "final": "o",
    "tone": "x",
    "py": "gox",
    "ipa": "ko⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇫꅉnꇬꃷꁨ",
        "han": "第n位数"
      },
      {
        "yi": "ꋌꀋꅔꉇꏤꈉꇬꇫꑟꀋꇁ",
        "han": "她昨天失约了"
      },
      {
        "yi": "ꇫꁧꒃ",
        "han": "乘虚"
      },
      {
        "yi": "ꇫꇬꃢꌠ",
        "han": "首次时间"
      },
      {
        "yi": "ꇫꇬꆪꌠ",
        "han": "元月"
      }
    ]
  },
  {
    "g": "ꈇ",
    "initial": "k",
    "final": "o",
    "tone": "x",
    "py": "kox",
    "ipa": "kʰo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇩꉈꃼꈇꐨ",
        "han": "外需"
      },
      {
        "yi": "ꀂꄁꆹꈇ",
        "han": "领口"
      },
      {
        "yi": "ꄖꑟꄗꃅꈇꃅꐙꌠ",
        "han": "经度地带性"
      },
      {
        "yi": "ꆹꈇ",
        "han": "领子"
      },
      {
        "yi": "ꈇꈁ",
        "han": "牢靠"
      }
    ]
  },
  {
    "g": "ꈣ",
    "initial": "gg",
    "final": "o",
    "tone": "x",
    "py": "ggox",
    "ipa": "go⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎝꈣꃑꄻ",
        "han": "债务发行"
      },
      {
        "yi": "ꎝꈣꀱꇷꍆꃅ",
        "han": "债转股"
      },
      {
        "yi": "ꂓꈣꋦ、ꂒꇬꌠꀉꄂ",
        "han": "徒有虚名"
      },
      {
        "yi": "ꉐꀖꇬꈣ",
        "han": "空心菜"
      },
      {
        "yi": "ꎝꈣꊌꐨꍆꁧ",
        "han": "债务依存度"
      }
    ]
  },
  {
    "g": "ꈺ",
    "initial": "mg",
    "final": "o",
    "tone": "x",
    "py": "mgox",
    "ipa": "ŋgo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃅꈺꊋ",
        "han": "地心引力"
      },
      {
        "yi": "ꈺꍠꀕ",
        "han": "冷森森"
      },
      {
        "yi": "ꒈꀑꈺꅉꏭ",
        "han": "北寒带"
      },
      {
        "yi": "ꈺꁱꌧꍣꐮꋲ",
        "han": "夹叙夹议"
      },
      {
        "yi": "ꈺꌬꍔꆗꏡꁈ",
        "han": "引申法"
      }
    ]
  },
  {
    "g": "ꉗ",
    "initial": "hx",
    "final": "o",
    "tone": "x",
    "py": "hxox",
    "ipa": "ho⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇑ，ꍔꄰꋍꑷꌠꅿꁍꁌ、ꀿꃀꉙꅉꅪꉗꌒ。",
        "han": "禄，者氏家族宗亲考妣灵位。"
      },
      {
        "yi": "ꀊꉗꀋꐛꃅꊋꐛ",
        "han": "计日程功"
      },
      {
        "yi": "ꅿꉗꌒꏢ",
        "han": "芳香酸"
      },
      {
        "yi": "ꎸꉗ",
        "han": "链子"
      },
      {
        "yi": "ꈯꄔꉗꀑꅔꃀ",
        "han": "中央高原"
      }
    ]
  },
  {
    "g": "ꉨ",
    "initial": "ng",
    "final": "o",
    "tone": "x",
    "py": "ngox",
    "ipa": "ŋo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉨꊝ",
        "han": "丰韵"
      },
      {
        "yi": "ꂸꉪꇐꉨ",
        "han": "悬想"
      },
      {
        "yi": "ꀒꉜꊂꉨ",
        "han": "瞻前顾后"
      },
      {
        "yi": "ꇬꉨꇁ",
        "han": "起意"
      },
      {
        "yi": "ꂓꉨꐋꎹ",
        "han": "附庸风雅"
      }
    ]
  },
  {
    "g": "ꉺ",
    "initial": "h",
    "final": "o",
    "tone": "x",
    "py": "hox",
    "ipa": "xo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏃꃅꉺꎆ",
        "han": "空间点阵"
      },
      {
        "yi": "ꉺꄜꄯꒉ",
        "han": "公报"
      },
      {
        "yi": "ꉺꀂꃅꏸ",
        "han": "火星"
      },
      {
        "yi": "ꋌꊐꉺꀕ",
        "han": "油箱"
      },
      {
        "yi": "ꏦꄹꄜꉺ",
        "han": "法制宣传"
      }
    ]
  },
  {
    "g": "ꊇ",
    "initial": "w",
    "final": "o",
    "tone": "x",
    "py": "wox",
    "ipa": "ɣo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈭꇍꊇꁧ",
        "han": "环境质量"
      },
      {
        "yi": "ꊇꁧꀨꄉ",
        "han": "质量第一"
      },
      {
        "yi": "ꏶꈻꐛꐨꅿꄆꊇꅉ",
        "han": "磁现象的电本质"
      },
      {
        "yi": "ꉻꍆꊇꁧ",
        "han": "式量"
      },
      {
        "yi": "ꐋꀋꌡꊇꅉ",
        "han": "特性"
      }
    ]
  },
  {
    "g": "ꊜ",
    "initial": "z",
    "final": "o",
    "tone": "x",
    "py": "zox",
    "ipa": "tso⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌤꃅꊜꁈ",
        "han": "工作对策"
      },
      {
        "yi": "ꊜꋽꄮꉜ",
        "han": "见机"
      },
      {
        "yi": "ꊜꋽꄮꒃ",
        "han": "抓住机遇"
      },
      {
        "yi": "ꅇꂷꊜꋽꃅꑠꇬꉢꋌꎷꌊꇬꄀꀋꄐꂾ",
        "han": "我写不出一句合适的句子来"
      },
      {
        "yi": "ꊜꋽꄮ",
        "han": "得时"
      }
    ]
  },
  {
    "g": "ꊾ",
    "initial": "c",
    "final": "o",
    "tone": "x",
    "py": "cox",
    "ipa": "tsʰo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈄꏍꈴꄉꊾꒃ",
        "han": "网上通缉"
      },
      {
        "yi": "ꊾꇠ",
        "han": "活宝"
      },
      {
        "yi": "ꈱꊾꋉ",
        "han": "诬栽"
      },
      {
        "yi": "ꊾꊏꁬꋌ",
        "han": "狗皮膏药"
      },
      {
        "yi": "ꊾꃶ",
        "han": "疯子"
      }
    ]
  },
  {
    "g": "ꋜ",
    "initial": "zz",
    "final": "o",
    "tone": "x",
    "py": "zzox",
    "ipa": "dzo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃴꂷꋜ",
        "han": "遗嘱"
      },
      {
        "yi": "ꇫꅲꃴꂷꋜꄯꒉ",
        "han": "绝命书"
      }
    ]
  },
  {
    "g": "ꋺ",
    "initial": "nz",
    "final": "o",
    "tone": "x",
    "py": "nzox",
    "ipa": "ndzo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌸꋺꊋꏀꄓ",
        "han": "多难兴邦"
      },
      {
        "yi": "ꆏꀉꑳꀨꎹꋺꀕ",
        "han": "你带过小孩吗"
      },
      {
        "yi": "ꃅꋺꊿ",
        "han": "过来人"
      },
      {
        "yi": "ꆏꋙꊪꒉꏽꋺꀕ",
        "han": "你种过庄稼吗"
      },
      {
        "yi": "ꋍꃚꌸꋺꋍꆹꌧ",
        "han": "吃一堑长一智"
      }
    ]
  },
  {
    "g": "ꌘ",
    "initial": "s",
    "final": "o",
    "tone": "x",
    "py": "sox",
    "ipa": "so⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃅꆳꌘꇬ",
        "han": "流脑"
      },
      {
        "yi": "ꃶꌘ",
        "han": "干燥"
      },
      {
        "yi": "ꃄꃶꃅꌘ",
        "han": "天气干燥"
      }
    ]
  },
  {
    "g": "ꌶ",
    "initial": "ss",
    "final": "o",
    "tone": "x",
    "py": "ssox",
    "ipa": "zo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈄꏍꌶꅉ",
        "han": "网校"
      },
      {
        "yi": "ꆏꎔꃅꌶꄻꅊꇈ",
        "han": "希望你好好学习"
      },
      {
        "yi": "ꌶꅉꀀꑳ",
        "han": "校舍"
      },
      {
        "yi": "ꊏꌶ",
        "han": "受骗"
      },
      {
        "yi": "ꇢꎙꐭꌶꅉ",
        "han": "业余小学"
      }
    ]
  },
  {
    "g": "ꍎ",
    "initial": "zh",
    "final": "o",
    "tone": "x",
    "py": "zhox",
    "ipa": "tʂo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃅꍐꃅꍎ",
        "han": "天罗地网"
      },
      {
        "yi": "ꊥꍎ",
        "han": "教唆"
      },
      {
        "yi": "ꐯꍎꌌ",
        "han": "纠集"
      },
      {
        "yi": "ꊥꍎꑽꊿ",
        "han": "教唆犯"
      }
    ]
  },
  {
    "g": "ꍪ",
    "initial": "ch",
    "final": "o",
    "tone": "x",
    "py": "chox",
    "ipa": "tʂʰo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁧꍪꍩꇓ",
        "han": "导弹"
      },
      {
        "yi": "ꁧꉚꄉꁧꍪ、ꊋꀸꈴꄉꂘ",
        "han": "因势利导"
      },
      {
        "yi": "ꎸꍪ",
        "han": "早饭"
      },
      {
        "yi": "ꍪꋚ",
        "han": "早点"
      },
      {
        "yi": "ꑭꀋꅑꃅꈜꍪ",
        "han": "不胫而走"
      }
    ]
  },
  {
    "g": "ꎁ",
    "initial": "rr",
    "final": "o",
    "tone": "x",
    "py": "rrox",
    "ipa": "dʐo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rrox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꂱꑱꊌꎁꂱꑱꊌ",
        "han": "各得其所"
      },
      {
        "yi": "ꏓꂱꎁꃅꏦꌬ",
        "han": "执政为民"
      },
      {
        "yi": "ꄏꎁꌗꂓ",
        "han": "辅助单位"
      },
      {
        "yi": "ꆏꉠꎁꃅꑱꇩꄯꒉꋐꃼꌋꇁꇬꍑꀕ",
        "han": "你能帮我买本英语书吗"
      },
      {
        "yi": "ꐥꀹ、ꀒꂥꐥ、ꈭꎁ",
        "han": "程序"
      }
    ]
  },
  {
    "g": "ꎘ",
    "initial": "nr",
    "final": "o",
    "tone": "x",
    "py": "nrox",
    "ipa": "ndʐo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꂓꎘ",
        "han": "别号"
      },
      {
        "yi": "ꌍꀜꂓꎘ",
        "han": "诨名"
      },
      {
        "yi": "ꂓꌋꆀꂓꎘ",
        "han": "名号"
      },
      {
        "yi": "ꂽꂓꎘ",
        "han": "番号"
      },
      {
        "yi": "ꀉꑳꂓꎘ",
        "han": "奶名"
      }
    ]
  },
  {
    "g": "ꎳ",
    "initial": "sh",
    "final": "o",
    "tone": "x",
    "py": "shox",
    "ipa": "ʂo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎳꎆꃷꁨ",
        "han": "线胀系数"
      },
      {
        "yi": "ꎳꋚ",
        "han": "原粮"
      },
      {
        "yi": "ꏦꐆꐨꌩꎳ",
        "han": "扫非"
      },
      {
        "yi": "ꏦꈜꌩꎳꌠ",
        "han": "清道夫"
      },
      {
        "yi": "ꇗꏸꎳꎆ",
        "han": "税费"
      }
    ]
  },
  {
    "g": "ꏎ",
    "initial": "r",
    "final": "o",
    "tone": "x",
    "py": "rox",
    "ipa": "ʐo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏎꏸ",
        "han": "节省"
      },
      {
        "yi": "ꌬꐨꏎꏸ",
        "han": "节流"
      },
      {
        "yi": "ꏎꊭ",
        "han": "节余"
      },
      {
        "yi": "ꏎꉘꅍ",
        "han": "冷脸子"
      },
      {
        "yi": "ꅐꇐꏎꏸꌠ",
        "han": "资源节约型"
      }
    ]
  },
  {
    "g": "ꏭ",
    "initial": "j",
    "final": "o",
    "tone": "x",
    "py": "jox",
    "ipa": "tɕo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꆍꏤꃅꄷꏝꀪꁮꐚꏭꐛꅀ",
        "han": "你们家乡在日本西部吗"
      },
      {
        "yi": "ꌤꃅꀋꂿꑘꌠꏭꆦ",
        "han": "工作着重点转移"
      },
      {
        "yi": "ꁮꐚꏭꏮꐺꎺꁱ",
        "han": "西行漫记"
      },
      {
        "yi": "ꊫꏭ",
        "han": "前途"
      },
      {
        "yi": "ꆍꏤꃅꄷꍏꇩꒉꀑꏭꐛꅀ",
        "han": "你们家乡在中国北部吗"
      }
    ]
  },
  {
    "g": "ꐉ",
    "initial": "q",
    "final": "o",
    "tone": "x",
    "py": "qox",
    "ipa": "tɕʰo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃝꐉ",
        "han": "和亲"
      },
      {
        "yi": "ꊨꃅꇩꏓꐉ",
        "han": "国联"
      },
      {
        "yi": "ꄏꐉ",
        "han": "助攻"
      },
      {
        "yi": "ꐉꆌꉻꋉ",
        "han": "方程组"
      },
      {
        "yi": "ꐮꂿꐯꐉ",
        "han": "会盟"
      }
    ]
  },
  {
    "g": "ꐤ",
    "initial": "jj",
    "final": "o",
    "tone": "x",
    "py": "jjox",
    "ipa": "dʑo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꆏꀿꃶꃺꃶꐤꀕ",
        "han": "你有堂兄吗"
      },
      {
        "yi": "ꀋꆏꃅꏝꀪꑟꌠꃏꏸꐤꀕ",
        "han": "有直达日本的飞机吗"
      },
      {
        "yi": "ꅧꂷꑍꊧꁠꐤ",
        "han": "晶体二极管"
      },
      {
        "yi": "ꀋꆏꃅꀙꏢꑟꌠꃏꏸꐤꀕ",
        "han": "有直达北京的飞机吗"
      },
      {
        "yi": "ꎐꇬꐤ",
        "han": "齿腔"
      }
    ]
  },
  {
    "g": "ꐼ",
    "initial": "nj",
    "final": "o",
    "tone": "x",
    "py": "njox",
    "ipa": "ndʑo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋊꐽ、ꐼꄻ",
        "han": "调节"
      },
      {
        "yi": "ꐼꄮꒆꎆ",
        "han": "稳中有升"
      },
      {
        "yi": "ꐼꐞ",
        "han": "匀生分枝"
      },
      {
        "yi": "ꐼꄮ",
        "han": "调协"
      },
      {
        "yi": "ꒉꎍꐼꄮ",
        "han": "平水期"
      }
    ]
  },
  {
    "g": "ꑖ",
    "initial": "ny",
    "final": "o",
    "tone": "x",
    "py": "nyox",
    "ipa": "ȵo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑖꈈꀕ",
        "han": "柔顺"
      },
      {
        "yi": "ꃆꀋꃶꑖꀋꋩ",
        "han": "清平"
      },
      {
        "yi": "ꃆꃹꑖꆽ",
        "han": "闹事"
      },
      {
        "yi": "ꏂꑖ",
        "han": "淘金"
      },
      {
        "yi": "ꑖꉬ",
        "han": "道义"
      }
    ]
  },
  {
    "g": "ꑨ",
    "initial": "x",
    "final": "o",
    "tone": "x",
    "py": "xox",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꑾ",
    "initial": "y",
    "final": "o",
    "tone": "x",
    "py": "yox",
    "ipa": "ʑo⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yox.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑾꃅꀕꃀ",
        "han": "草驴"
      },
      {
        "yi": "ꑾꈻꎭꄀꍑ",
        "han": "叠印"
      },
      {
        "yi": "ꑾꌙ",
        "han": "轻快"
      },
      {
        "yi": "ꑾꌙꎷꊈ",
        "han": "轻金属"
      },
      {
        "yi": "ꑾꃅꒃꁬ",
        "han": "捕蝇草"
      }
    ]
  },
  {
    "g": "ꀑ",
    "initial": "",
    "final": "o",
    "tone": "",
    "py": "o",
    "ipa": "o³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_o.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀑꂪ",
        "han": "端绪"
      },
      {
        "yi": "ꀑꃆꌾ",
        "han": "毛骨悚然"
      },
      {
        "yi": "ꀑꄸꑊꄸ",
        "han": "丑八怪"
      },
      {
        "yi": "ꀑꅶꌫꄻ",
        "han": "开动脑筋"
      },
      {
        "yi": "ꀑꐳꄻꄉꌠ",
        "han": "粗制品"
      }
    ]
  },
  {
    "g": "ꀧ",
    "initial": "b",
    "final": "o",
    "tone": "",
    "py": "bo",
    "ipa": "po³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bo.mp3",
    "radical": "꒨",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꋌꇷꅳꀧꄂ",
        "han": "震惊失色"
      },
      {
        "yi": "ꒉꆭꀧ",
        "han": "水球"
      },
      {
        "yi": "ꆹꀧ、ꏢꊨ",
        "han": "孕穗"
      },
      {
        "yi": "ꌕꈎꅇꆹꀧ",
        "han": "老调重弹"
      },
      {
        "yi": "ꏶꀧ",
        "han": "棒球"
      }
    ]
  },
  {
    "g": "ꁈ",
    "initial": "p",
    "final": "o",
    "tone": "",
    "py": "po",
    "ipa": "pʰo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_po.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꒉꀺꌗꏓꁈ",
        "han": "排水集气法"
      },
      {
        "yi": "ꑍꎞꋍꃅ,ꑍꎞꌕꃅꏱꁈ",
        "han": "退二进一，退二进三政策"
      },
      {
        "yi": "ꋍꀋꁈꐋ",
        "han": "忘年交"
      },
      {
        "yi": "ꂫꇽꁈ",
        "han": "去违法"
      },
      {
        "yi": "ꀡꁈꑮꋇ",
        "han": "半坡氏族"
      }
    ]
  },
  {
    "g": "ꁧ",
    "initial": "bb",
    "final": "o",
    "tone": "",
    "py": "bbo",
    "ipa": "bo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbo.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꊉꌠꊈꄔꁧ",
        "han": "维苏维火山"
      },
      {
        "yi": "ꁮꈴꋦꁧ",
        "han": "虫媒植物"
      },
      {
        "yi": "ꌟꒉꈌꀋꁧꌧ",
        "han": "没有领导的批准"
      },
      {
        "yi": "ꉪꆭꀧꅥꁧꇬꍑꀕ",
        "han": "我们去打篮球好吗"
      },
      {
        "yi": "ꇔꊰꍆꁧ",
        "han": "利率"
      }
    ]
  },
  {
    "g": "ꂃ",
    "initial": "nb",
    "final": "o",
    "tone": "",
    "py": "nbo",
    "ipa": "mbo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbo.mp3",
    "radical": "꒳",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꂸꂷꎓꀋꇮꆺꀕꂃ",
        "han": "明珠暗投"
      },
      {
        "yi": "ꒈꂃꒊꆱ",
        "han": "泡漩"
      },
      {
        "yi": "ꂃꆗ",
        "han": "翻腾"
      },
      {
        "yi": "ꎿꁏꒉꂃ",
        "han": "倒海翻江"
      },
      {
        "yi": "ꎿꁏꒈꂃ",
        "han": "翻江倒海"
      }
    ]
  },
  {
    "g": "ꂡ",
    "initial": "hm",
    "final": "o",
    "tone": "",
    "py": "hmo",
    "ipa": "m̥o³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmo.mp3",
    "radical": "꒭",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꏲꈽꂡꈽ",
        "han": "参政议政"
      },
      {
        "yi": "ꄅꄀꃶꀋꐚꑊꂡꄿꌡꑅꇷ",
        "han": "假复层纤毛柱装上皮"
      },
      {
        "yi": "ꃆꄔꍂꂡꍂ",
        "han": "火烧眉毛"
      },
      {
        "yi": "ꏾꂱꄔꂡꁠꐤ",
        "han": "氢氧吹管"
      },
      {
        "yi": "ꌩꂡꌙ",
        "han": "油樟"
      }
    ]
  },
  {
    "g": "ꂿ",
    "initial": "m",
    "final": "o",
    "tone": "",
    "py": "mo",
    "ipa": "mo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mo.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊂꊪꂿꊪ",
        "han": "岩黄连、岩胡"
      },
      {
        "yi": "ꄇꂿꀊꅪ",
        "han": "朱门"
      },
      {
        "yi": "ꃅꀑꃅꑊꎖꊿꉉꇬꂿꃅꊸ",
        "han": "天气预报说天晴"
      },
      {
        "yi": "ꂿꃅꊪ",
        "han": "参天"
      },
      {
        "yi": "ꒉꂿꎭꀕꈨ,ꒉꈫꈜꀸꀋꌧ",
        "han": "知其然不知其所以然"
      }
    ]
  },
  {
    "g": "ꃖ",
    "initial": "f",
    "final": "o",
    "tone": "",
    "py": "fo",
    "ipa": "fo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fo.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꄠꃖꂷꉐ",
        "han": "台风雨"
      },
      {
        "yi": "ꍫꃖꐂ",
        "han": "冲锋枪"
      },
      {
        "yi": "ꑸꃖꌩ",
        "han": "三角枫"
      },
      {
        "yi": "ꑭꃖꃅꆳꁏꇙ",
        "han": "西风漂流"
      },
      {
        "yi": "ꈌꃖꅍ",
        "han": "口罩"
      }
    ]
  },
  {
    "g": "ꃰ",
    "initial": "v",
    "final": "o",
    "tone": "",
    "py": "vo",
    "ipa": "vo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vo.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃰꃅꁏ",
        "han": "宫女"
      },
      {
        "yi": "ꃰꐛꇇꇐꄖ",
        "han": "瑞雪兆丰年"
      },
      {
        "yi": "ꃰꏢꆿꏾ",
        "han": "雪地茶"
      },
      {
        "yi": "ꌋꅪꃰꃅ",
        "han": "女皇"
      },
      {
        "yi": "ꆳꃰ",
        "han": "樱桃"
      }
    ]
  },
  {
    "g": "ꄏ",
    "initial": "d",
    "final": "o",
    "tone": "",
    "py": "do",
    "ipa": "to³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_do.mp3",
    "radical": "꒗",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꄏꍔꏫ",
        "han": "东正教"
      },
      {
        "yi": "ꄏꂱ",
        "han": "辐酶"
      },
      {
        "yi": "ꁯꈐꄏꃗꃅꆳꁎꅉ",
        "han": "极地东风带"
      },
      {
        "yi": "ꇨꄏꂢꇐ",
        "han": "广东音乐"
      },
      {
        "yi": "ꄏꏾꐪ",
        "han": "托叶痕"
      }
    ]
  },
  {
    "g": "ꄫ",
    "initial": "t",
    "final": "o",
    "tone": "",
    "py": "to",
    "ipa": "tʰo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_to.mp3",
    "radical": "꒗",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄫꑌꇑꇐ",
        "han": "重矿物"
      },
      {
        "yi": "ꎸꄫ",
        "han": "大菜"
      },
      {
        "yi": "ꉼꌦꄫꄆꋒ",
        "han": "惠斯通电桥"
      },
      {
        "yi": "ꂿꄫꑌꂽ",
        "han": "摩托化部队"
      },
      {
        "yi": "ꀠꀘꄫ",
        "han": "巴比妥"
      }
    ]
  },
  {
    "g": "ꅆ",
    "initial": "dd",
    "final": "o",
    "tone": "",
    "py": "ddo",
    "ipa": "do³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddo.mp3",
    "radical": "꒡",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꑍꈌꅑꅆꃅꌺ",
        "han": "双面刀片"
      }
    ]
  },
  {
    "g": "ꅝ",
    "initial": "nd",
    "final": "o",
    "tone": "",
    "py": "ndo",
    "ipa": "ndo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndo.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆙꅝ",
        "han": "遗失"
      },
      {
        "yi": "ꎧꅝꎸꋠꀿ",
        "han": "酒囊饭袋"
      },
      {
        "yi": "ꆘꅝ",
        "han": "失落"
      },
      {
        "yi": "ꆏꈁꃏꅝꏽꀕ",
        "han": "你想喝咖啡吗"
      },
      {
        "yi": "ꄚꇬꆿꅝꍔꐤꀕ",
        "han": "这里有茶壶卖吗"
      }
    ]
  },
  {
    "g": "ꆌ",
    "initial": "n",
    "final": "o",
    "tone": "",
    "py": "no",
    "ipa": "no³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_no.mp3",
    "radical": "꒗",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꐊꆌꉻꑵꁸ",
        "han": "方程的分类"
      },
      {
        "yi": "ꐧꆌꊐꇖꋮꄲ",
        "han": "等腰梯形"
      },
      {
        "yi": "ꋯꆌꈭꄿ",
        "han": "等边圆柱"
      },
      {
        "yi": "ꐱꐂꐊꆌꉾꀁꂥꊐꌠ",
        "han": "初等超越方程式"
      },
      {
        "yi": "ꐳꆌꊨꒊꇙꐺ",
        "han": "匀减速运动"
      }
    ]
  },
  {
    "g": "ꆦ",
    "initial": "hl",
    "final": "o",
    "tone": "",
    "py": "hlo",
    "ipa": "ɬo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlo.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꒆꑍꆦ",
        "han": "暖寿"
      },
      {
        "yi": "ꂷꆦꋧꏓꁈ",
        "han": "换元积分法"
      },
      {
        "yi": "ꌶꅉꆦ",
        "han": "转学"
      },
      {
        "yi": "ꄹꆴꁈꆦ",
        "han": "改弦更张"
      },
      {
        "yi": "ꎂꑟꐈꆦ",
        "han": "线性变换"
      }
    ]
  },
  {
    "g": "ꇉ",
    "initial": "l",
    "final": "o",
    "tone": "",
    "py": "lo",
    "ipa": "lo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lo.mp3",
    "radical": "꒔",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꈋꇉ",
        "han": "垫脚"
      },
      {
        "yi": "ꇉꈻꇉ",
        "han": "拖船"
      },
      {
        "yi": "ꉘꇉꊂꁠꐭꌶꅉ、ꉘꇉꐭꌶꅉ",
        "han": "希望小学"
      },
      {
        "yi": "ꏮꇉꏮꄿ",
        "han": "天轴"
      },
      {
        "yi": "ꐻꀺꇉ",
        "han": "破冰船"
      }
    ]
  },
  {
    "g": "ꇬ",
    "initial": "g",
    "final": "o",
    "tone": "",
    "py": "go",
    "ipa": "ko³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_go.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉌꂵꇬꀋ ꃹ",
        "han": "满不在乎"
      },
      {
        "yi": "ꀁꇬꃆꂮ",
        "han": "家长里短"
      },
      {
        "yi": "ꆼꎍꐨꑞꅉꐥꌠꇬꌦ",
        "han": "有限责任公司"
      },
      {
        "yi": "ꇍꇬꁬꋌ",
        "han": "乐果"
      },
      {
        "yi": "ꇬꂾꁧꀿꌠ",
        "han": "首倡"
      }
    ]
  },
  {
    "g": "ꈈ",
    "initial": "k",
    "final": "o",
    "tone": "",
    "py": "ko",
    "ipa": "kʰo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ko.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꈈꂱꎿꃝ",
        "han": "昆明湖"
      },
      {
        "yi": "ꈈꏃ",
        "han": "科室"
      },
      {
        "yi": "ꀃꈈꁿꅍ",
        "han": "门帘"
      },
      {
        "yi": "ꀁꈈꒉꏣ",
        "han": "胃腺"
      },
      {
        "yi": "ꌕꈈꀕ",
        "han": "清静"
      }
    ]
  },
  {
    "g": "ꈤ",
    "initial": "gg",
    "final": "o",
    "tone": "",
    "py": "ggo",
    "ipa": "go³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggo.mp3",
    "radical": "꒑",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꈩꅍꁌꇐꈤꌠ",
        "han": "珍玩"
      },
      {
        "yi": "ꉬꇮꇇꈤꃅꄜꃑ",
        "han": "全程直播"
      },
      {
        "yi": "ꃅꆪꅂꈤꄹꉖ",
        "han": "元夜"
      },
      {
        "yi": "ꑾꌋꈤꃏꍏ",
        "han": "西南非洲"
      },
      {
        "yi": "ꃛꂸꑍꈤ",
        "han": "葫蔓藤"
      }
    ]
  },
  {
    "g": "ꈻ",
    "initial": "mg",
    "final": "o",
    "tone": "",
    "py": "mgo",
    "ipa": "ŋgo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgo.mp3",
    "radical": "꒪",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈻꐥꇙꀕ",
        "han": "冷血动物"
      },
      {
        "yi": "ꆳꈍꈻ",
        "han": "收风"
      },
      {
        "yi": "ꉜꆏꈌꈻꄎ",
        "han": "过目成诵"
      },
      {
        "yi": "ꈻꃀ、ꋅꈯꃹ",
        "han": "大寒"
      },
      {
        "yi": "ꅉꀕꈻꊖꃴꐻ",
        "han": "永冻土底冰"
      }
    ]
  },
  {
    "g": "ꉘ",
    "initial": "hx",
    "final": "o",
    "tone": "",
    "py": "hxo",
    "ipa": "ho³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxo.mp3",
    "radical": "꒔",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꅇꐚꀊꉘꅲ",
        "han": "真话问小孩"
      },
      {
        "yi": "ꅥꄁꈌꏢ、ꑓꉘꈌꏢ",
        "han": "刑讯逼供"
      },
      {
        "yi": "ꉘꃀꍡ ꑮꈌꎞ",
        "han": "定场诗"
      },
      {
        "yi": "ꉾꃪꃅꉘ、ꎔꉘ",
        "han": "优生"
      },
      {
        "yi": "ꉘꁮꊋꄆꍹ",
        "han": "太阳能电池"
      }
    ]
  },
  {
    "g": "ꉩ",
    "initial": "ng",
    "final": "o",
    "tone": "",
    "py": "ngo",
    "ipa": "ŋo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngo.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉩꇕꉩ",
        "han": "撒泼"
      },
      {
        "yi": "ꑸꉩꅔꊂ",
        "han": "亚欧大陆"
      },
      {
        "yi": "ꉂꉩ",
        "han": "充气灯泡"
      },
      {
        "yi": "ꉘꉩꉌꇨ",
        "han": "凶狠"
      },
      {
        "yi": "ꅇꉩꇰꄯꒉ",
        "han": "性状"
      }
    ]
  },
  {
    "g": "ꉻ",
    "initial": "h",
    "final": "o",
    "tone": "",
    "py": "ho",
    "ipa": "xo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ho.mp3",
    "radical": "꒨",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꈭꊭꇙꀕꉻ",
        "han": "环节动物门"
      },
      {
        "yi": "ꉻꉨꑴꀋꉪ",
        "han": "铁面无私"
      },
      {
        "yi": "ꑱꉻꀕ",
        "han": "醉意"
      },
      {
        "yi": "ꀑꐛꉻꀋꉬ",
        "han": "非欧几何"
      },
      {
        "yi": "ꏓꇱꃷꁨꉻꏦ",
        "han": "组合数公式"
      }
    ]
  },
  {
    "g": "ꊈ",
    "initial": "w",
    "final": "o",
    "tone": "",
    "py": "wo",
    "ipa": "ɣo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wo.mp3",
    "radical": "꒸",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꄷꊈꑌ",
        "han": "恶性"
      },
      {
        "yi": "ꁥꊋꃅꈩ、ꁥꊈꃅꈩ",
        "han": "派别活动"
      },
      {
        "yi": "ꐧꊭꊈꌋꏣ",
        "han": "脊神经"
      },
      {
        "yi": "ꉌꊈ",
        "han": "性气"
      },
      {
        "yi": "ꇱꆺꊈꍞꄮꈉ",
        "han": "格林威治时间"
      }
    ]
  },
  {
    "g": "ꊝ",
    "initial": "z",
    "final": "o",
    "tone": "",
    "py": "zo",
    "ipa": "tso³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zo.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꂱꇪꌠꊝ",
        "han": "厄运"
      },
      {
        "yi": "ꈁꁠꊝ",
        "han": "中奖"
      },
      {
        "yi": "ꊝꊈꑼꉼ",
        "han": "总委员会"
      },
      {
        "yi": "ꊒꆽꀕꃅꐮꊝ",
        "han": "针锋相对"
      },
      {
        "yi": "ꑍꊝ、ꐯꄎ",
        "han": "对应"
      }
    ]
  },
  {
    "g": "ꊿ",
    "initial": "c",
    "final": "o",
    "tone": "",
    "py": "co",
    "ipa": "tsʰo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_co.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊿꂷꊂꌸꌠ",
        "han": "伤号"
      },
      {
        "yi": "ꇰꌒꈍꊿ",
        "han": "哥萨克人"
      },
      {
        "yi": "ꀋꍹꊿꂿ",
        "han": "木乃伊"
      },
      {
        "yi": "ꊿꌡꑙ",
        "han": "猿猴"
      },
      {
        "yi": "ꊿꌥ",
        "han": "认生"
      }
    ]
  },
  {
    "g": "ꋝ",
    "initial": "zz",
    "final": "o",
    "tone": "",
    "py": "zzo",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzo.mp3",
    "radical": "꒕",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꌙ",
    "initial": "s",
    "final": "o",
    "tone": "",
    "py": "so",
    "ipa": "so³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_so.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꑾꌙꃅꉙꐂ",
        "han": "轻歌曼舞"
      },
      {
        "yi": "ꑾꌙ꒧",
        "han": "轻活"
      },
      {
        "yi": "ꑾꌙꂶꑐ",
        "han": "轻佻"
      },
      {
        "yi": "ꑾꌙ",
        "han": "轻快"
      },
      {
        "yi": "ꀾꍳꌙ",
        "han": "派力司"
      }
    ]
  },
  {
    "g": "ꌷ",
    "initial": "ss",
    "final": "o",
    "tone": "",
    "py": "sso",
    "ipa": "zo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sso.mp3",
    "radical": "꒨",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌷꂘꐧꀠꊐꌠ",
        "han": "中等教育"
      },
      {
        "yi": "ꐩꋊꌷꇐ",
        "han": "史学"
      },
      {
        "yi": "ꌷꊱ",
        "han": "课文"
      },
      {
        "yi": "ꒃꌷꎥ",
        "han": "产学研"
      },
      {
        "yi": "ꂈꈿꌉꏦꌷ",
        "han": "打靶势"
      }
    ]
  },
  {
    "g": "ꍏ",
    "initial": "zh",
    "final": "o",
    "tone": "",
    "py": "zho",
    "ipa": "tʂo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zho.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꍏꄳꎿꅔꄩꌉꈿꌠ",
        "han": "中途岛战役"
      },
      {
        "yi": "ꆍꄚꍏꇩꋂꄮꐤꀕ",
        "han": "你们有中国菜吗"
      },
      {
        "yi": "ꍏꑷꏲꎆꏂꑘ",
        "han": "中央企业"
      },
      {
        "yi": "ꂷꍏꄩꉻꌅꃤ",
        "han": "满州贵族"
      },
      {
        "yi": "ꑸꍏꑴꄗꆀꑭꑸ",
        "han": "亚洲印度尼西亚"
      }
    ]
  },
  {
    "g": "ꍫ",
    "initial": "ch",
    "final": "o",
    "tone": "",
    "py": "cho",
    "ipa": "tʂʰo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cho.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍫꎵꎿꅔ",
        "han": "冲绳岛"
      },
      {
        "yi": "ꍫꇉꀮꌺ",
        "han": "娇小玲珑"
      },
      {
        "yi": "ꑟꍫꏤꐪ",
        "han": "辛丑条约"
      },
      {
        "yi": "ꍫꍪꀮꃀꏃꉐꑋꊏꐚ",
        "han": "早晚两餐七百二十顿"
      },
      {
        "yi": "ꍫꐊꊋꒉꊥꃀꉬꁯ",
        "han": "春秋五霸"
      }
    ]
  },
  {
    "g": "ꎂ",
    "initial": "rr",
    "final": "o",
    "tone": "",
    "py": "rro",
    "ipa": "dʐo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rro.mp3",
    "radical": "꒧",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎂꈴꌌꉪꐪꈜ",
        "han": "第一信号系统"
      },
      {
        "yi": "ꈛꎂꌊꄻ",
        "han": "直接选举"
      },
      {
        "yi": "ꌊꎂꎆꉻ",
        "han": "逆矩阵"
      },
      {
        "yi": "ꈥꇬꎂꑟ",
        "han": "空间直线"
      },
      {
        "yi": "ꄹꎂ",
        "han": "埂子"
      }
    ]
  },
  {
    "g": "ꎙ",
    "initial": "nr",
    "final": "o",
    "tone": "",
    "py": "nro",
    "ipa": "ndʐo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nro.mp3",
    "radical": "꒜",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇢꎙ",
        "han": "间隙"
      },
      {
        "yi": "ꇢꎙꐭꌶꅉ",
        "han": "业余小学"
      },
      {
        "yi": "ꃚꐓꎙꅇ",
        "han": "语气助词"
      },
      {
        "yi": "ꇢꎙꐧꌷꂫꊐꌠ",
        "han": "业余初中"
      },
      {
        "yi": "ꑽꀋꇬ、ꋍꍈꑌꎙꀋꋻ",
        "han": "百无一失"
      }
    ]
  },
  {
    "g": "ꎴ",
    "initial": "sh",
    "final": "o",
    "tone": "",
    "py": "sho",
    "ipa": "ʂo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sho.mp3",
    "radical": "꒡",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꌩꄩꎴꌺ",
        "han": "树獭"
      },
      {
        "yi": "ꄤꎴꉸꉼꃷ",
        "han": "碳水化合物"
      },
      {
        "yi": "ꐥꂫꀋꎴ",
        "han": "风中之烛"
      },
      {
        "yi": "ꌧꃀꎆꀋꎴꃅꆅꉚ",
        "han": "专家义诊"
      },
      {
        "yi": "ꎴꇁꉂꌐ",
        "han": "千里鹅毛"
      }
    ]
  },
  {
    "g": "ꏏ",
    "initial": "r",
    "final": "o",
    "tone": "",
    "py": "ro",
    "ipa": "ʐo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ro.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꁦꎆꅐꏏꄉꌬ",
        "han": "增产节约"
      },
      {
        "yi": "ꁌꏆꄉꎆꏏ",
        "han": "打折消费"
      },
      {
        "yi": "ꋠꏏꈚꏸ",
        "han": "节衣缩食"
      },
      {
        "yi": "ꇀꀺꌬꏏ",
        "han": "开源节流"
      },
      {
        "yi": "ꏏꊨ",
        "han": "节减"
      }
    ]
  },
  {
    "g": "ꏮ",
    "initial": "j",
    "final": "o",
    "tone": "",
    "py": "jo",
    "ipa": "tɕo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jo.mp3",
    "radical": "꒳",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꏮꅍ",
        "han": "滚筒"
      },
      {
        "yi": "ꈴꀸꇗꏸꏮꌐꁌꐨ",
        "han": "海关完税价值"
      },
      {
        "yi": "ꈨꏮꆏꐛꐈ",
        "han": "物换星移"
      },
      {
        "yi": "ꆲꁌꏮ",
        "han": "完税"
      },
      {
        "yi": "ꋓꐊꏮꏸ",
        "han": "同步卫星"
      }
    ]
  },
  {
    "g": "ꐊ",
    "initial": "q",
    "final": "o",
    "tone": "",
    "py": "qo",
    "ipa": "tɕʰo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qo.mp3",
    "radical": "꒩",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꋒꐊꁷꏦ",
        "han": "带余除法"
      },
      {
        "yi": "nꂷꐊꆌꉻ",
        "han": "n元方程"
      },
      {
        "yi": "ꁮꐚꂆꐊ",
        "han": "敌焰"
      },
      {
        "yi": "ꐮꉔ、ꒉꃹ、ꐊ、ꊬꃹ",
        "han": "渗透"
      },
      {
        "yi": "ꊨꍡꈿꌠ、ꐊꈽ",
        "han": "客串"
      }
    ]
  },
  {
    "g": "ꐥ",
    "initial": "jj",
    "final": "o",
    "tone": "",
    "py": "jjo",
    "ipa": "dʑo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjo.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꅉꃀꐥꇐ",
        "han": "基物"
      },
      {
        "yi": "ꉆꐥꃅ",
        "han": "赶忙"
      },
      {
        "yi": "ꑞꐥꑞꉉ",
        "han": "知无不言"
      },
      {
        "yi": "ꉢꀉꁧꌺꀋꐥ",
        "han": "我没有表弟"
      },
      {
        "yi": "ꀋꃋꐥꃷꁨꍤꄻꍄꑐ",
        "han": "盘活存量"
      }
    ]
  },
  {
    "g": "ꐽ",
    "initial": "nj",
    "final": "o",
    "tone": "",
    "py": "njo",
    "ipa": "ndʑo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njo.mp3",
    "radical": "꒿",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꊒꏍꐽꁸꑟ",
        "han": "垂直平分线"
      },
      {
        "yi": "ꒉꐽꎖꅍ",
        "han": "水准仪"
      },
      {
        "yi": "ꇨꐽꄆꐥꊂ",
        "han": "匀强电场"
      },
      {
        "yi": "ꐽꎖꅍ",
        "han": "平板仪"
      },
      {
        "yi": "ꊌꁧꐽ",
        "han": "平产"
      }
    ]
  },
  {
    "g": "ꑗ",
    "initial": "ny",
    "final": "o",
    "tone": "",
    "py": "nyo",
    "ipa": "ȵo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyo.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꁍꑗ",
        "han": "农田"
      },
      {
        "yi": "ꑗꏷꎬꐚ",
        "han": "皮糖"
      },
      {
        "yi": "ꊗꑗꈩꐺ",
        "han": "陶吧"
      },
      {
        "yi": "ꑗꅪꁯꄸ",
        "han": "紫胶虫"
      },
      {
        "yi": "ꁧꃀꑗꐛꄻ",
        "han": "分母有理化"
      }
    ]
  },
  {
    "g": "ꑩ",
    "initial": "x",
    "final": "o",
    "tone": "",
    "py": "xo",
    "ipa": "ɕo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xo.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍧꑩꁬ",
        "han": "川芎"
      },
      {
        "yi": "ꑍꁆꋊꑩ、ꊒꏢꄿ",
        "han": "对称轴"
      },
      {
        "yi": "ꃅꑩꁬ",
        "han": "苜蓿"
      },
      {
        "yi": "ꇻꇆꑩꌦ",
        "han": "克劳修斯"
      },
      {
        "yi": "ꑩꇑ",
        "han": "匈奴"
      }
    ]
  },
  {
    "g": "ꑿ",
    "initial": "y",
    "final": "o",
    "tone": "",
    "py": "yo",
    "ipa": "ʑo³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yo.mp3",
    "radical": "꒝",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꁭꑿ",
        "han": "盘羊"
      },
      {
        "yi": "ꑿꏸ",
        "han": "毛羊胆"
      },
      {
        "yi": "ꑿꀑꃚ",
        "han": "毛羊角"
      },
      {
        "yi": "ꑿꆺꎿꃝ",
        "han": "泸沽湖"
      },
      {
        "yi": "ꑌꑿꀻꎆ",
        "han": "六畜兴旺"
      }
    ]
  },
  {
    "g": "ꀒ",
    "initial": "",
    "final": "o",
    "tone": "p",
    "py": "op",
    "ipa": "o²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_op.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀒ ꈤ",
        "han": "脑瓜子"
      },
      {
        "yi": "ꌋꏣꀒꁵ",
        "han": "神经末梢"
      },
      {
        "yi": "ꀒꁵꒆꐳ",
        "han": "顶端优势"
      },
      {
        "yi": "ꆿꀒꆔ",
        "han": "芽茶"
      },
      {
        "yi": "ꀒꇩꑍꆪꇝꂱ",
        "han": "俄国二月革命"
      }
    ]
  },
  {
    "g": "ꀨ",
    "initial": "b",
    "final": "o",
    "tone": "p",
    "py": "bop",
    "ipa": "po²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bop.mp3",
    "radical": "꓄",
    "strokes": 6,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꏾꀨꄜ",
        "han": "原叶体"
      },
      {
        "yi": "ꀀꀨꀀꏦ",
        "han": "寝具"
      },
      {
        "yi": "ꇫꇬꀨꄀꇷꑴ",
        "han": "原始界膜"
      },
      {
        "yi": "ꏦꃤꏂꀨ",
        "han": "法典"
      },
      {
        "yi": "ꎹꀨꈁ",
        "han": "目录卡"
      }
    ]
  },
  {
    "g": "ꁉ",
    "initial": "p",
    "final": "o",
    "tone": "p",
    "py": "pop",
    "ipa": "pʰo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pop.mp3",
    "radical": "꒟",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꁮꐚꁆꏯꀉꒉꃅꁉꃑ",
        "han": "西部大开发"
      },
      {
        "yi": "ꁉꍰꃹ",
        "han": "异物"
      },
      {
        "yi": "ꎆꃀꄊꁉ",
        "han": "赌钱"
      },
      {
        "yi": "ꁉꌙꌬꁱꇓ",
        "han": "泊松亮斑"
      },
      {
        "yi": "ꁉꄓꉸ",
        "han": "彭德怀"
      }
    ]
  },
  {
    "g": "ꁨ",
    "initial": "bb",
    "final": "o",
    "tone": "p",
    "py": "bbop",
    "ipa": "bo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbop.mp3",
    "radical": "꒷",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꁨꑭꎂꃅꁊꈴ",
        "han": "光的直线传播"
      },
      {
        "yi": "ꀊꃛꏤꄓꇊꌃꃷꁨ",
        "han": "阿伏加德罗常数"
      },
      {
        "yi": "ꇫꅉꃷꁨꇖ",
        "han": "四位数"
      },
      {
        "yi": "ꁨꑭꋧꌺꉉꇐ",
        "han": "光的微粒说"
      },
      {
        "yi": "ꁨꍒꄟ",
        "han": "放射形"
      }
    ]
  },
  {
    "g": "ꂄ",
    "initial": "nb",
    "final": "o",
    "tone": "p",
    "py": "nbop",
    "ipa": "mbo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbop.mp3",
    "radical": "꒳",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊉꂄ",
        "han": "毡条"
      },
      {
        "yi": "ꂄꃅꅇ",
        "han": "忠言"
      },
      {
        "yi": "ꅇꂄꄜꅼ、ꂘꅇꑖꈈꀕ",
        "han": "语重心长"
      },
      {
        "yi": "ꍔꂄꁦꄜ",
        "han": "优良单株"
      },
      {
        "yi": "ꋠꅍꅝꒉꋋꈨꂄꐯꂄ",
        "han": "这些饭菜很好吃"
      }
    ]
  },
  {
    "g": "ꂢ",
    "initial": "hm",
    "final": "o",
    "tone": "p",
    "py": "hmop",
    "ipa": "m̥o²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmop.mp3",
    "radical": "꒚",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꋯꂢ",
        "han": "过门儿"
      },
      {
        "yi": "ꇩꏤꂢꇐ",
        "han": "国乐"
      },
      {
        "yi": "ꐯꋑꂢ",
        "han": "奏鸣曲"
      },
      {
        "yi": "ꁀꁻꂢꌠ",
        "han": "琴师"
      },
      {
        "yi": "ꏲꆲꂢꆴ",
        "han": "鼎革"
      }
    ]
  },
  {
    "g": "ꃀ",
    "initial": "m",
    "final": "o",
    "tone": "p",
    "py": "mop",
    "ipa": "mo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mop.mp3",
    "radical": "꒜",
    "strokes": 1,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁠꐤꈌꁮꑍꃀ",
        "han": "管巢蛛"
      },
      {
        "yi": "ꀭꐞꃀꐞꃨ",
        "han": "单性花"
      },
      {
        "yi": "ꇮꇐꅉꃀ",
        "han": "功底"
      },
      {
        "yi": "ꎆꃀꄹꏦ",
        "han": "币制"
      },
      {
        "yi": "ꋍꃀꌦꏮꌗꆦ",
        "han": "肺循环"
      }
    ]
  },
  {
    "g": "ꃗ",
    "initial": "f",
    "final": "o",
    "tone": "p",
    "py": "fop",
    "ipa": "fo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fop.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꃗꏃꑴꁱ",
        "han": "浮士画"
      },
      {
        "yi": "ꉼꃗ",
        "han": "活佛"
      },
      {
        "yi": "ꃗꇰ",
        "han": "痴迷"
      },
      {
        "yi": "ꑭꃗꎧ",
        "han": "西凤酒"
      },
      {
        "yi": "ꃗꉸꌩꁧ",
        "han": "凤凰树"
      }
    ]
  },
  {
    "g": "ꃱ",
    "initial": "v",
    "final": "o",
    "tone": "p",
    "py": "vop",
    "ipa": "vo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vop.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃱꐯꃱꇓ",
        "han": "小水晶"
      },
      {
        "yi": "ꆲꆈꃱꆉ",
        "han": "暴风雪"
      },
      {
        "yi": "ꊋꏓꋍꃱꃅ、ꋍꃱꃅꎀꍹ",
        "han": "统一战线"
      },
      {
        "yi": "ꋌꃱ",
        "han": "次儿菜"
      },
      {
        "yi": "ꃱꏢ",
        "han": "泡菜"
      }
    ]
  },
  {
    "g": "ꄐ",
    "initial": "d",
    "final": "o",
    "tone": "p",
    "py": "dop",
    "ipa": "to²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dop.mp3",
    "radical": "꒔",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꂿꑘꃄꁕꄐꎖ",
        "han": "农业区划"
      },
      {
        "yi": "ꄐꁵꌐꁵ",
        "han": "指令"
      },
      {
        "yi": "ꀆꐒꐞꂿꄐ",
        "han": "脱水作用"
      },
      {
        "yi": "ꉌꊈꃪꃅꄐ",
        "han": "精神万能"
      },
      {
        "yi": "ꂴꄐꏤ",
        "han": "张本"
      }
    ]
  },
  {
    "g": "ꄬ",
    "initial": "t",
    "final": "o",
    "tone": "p",
    "py": "top",
    "ipa": "tʰo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_top.mp3",
    "radical": "꒰",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꄬꀐꄷꇖ",
        "han": "请降"
      },
      {
        "yi": "ꉼꄬꉛ",
        "han": "河豚"
      },
      {
        "yi": "ꀘꇍꄬꆺꑸ",
        "han": "比勒陀利亚"
      },
      {
        "yi": "ꎭꄬ",
        "han": "汕头"
      },
      {
        "yi": "ꄬꃀꉼ",
        "han": "同盟会"
      }
    ]
  },
  {
    "g": "ꅇ",
    "initial": "dd",
    "final": "o",
    "tone": "p",
    "py": "ddop",
    "ipa": "do²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddop.mp3",
    "radical": "꒕",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꅇꂷꋋꇬꆈꌠꉙꈍꃅꉉ",
        "han": "这句话彝语怎么说"
      },
      {
        "yi": "ꄆꅇꈴ",
        "han": "通话"
      },
      {
        "yi": "ꇗꊒꅇꌃ",
        "han": "义正词严"
      },
      {
        "yi": "ꍝꅇꄯꒉ",
        "han": "辞书"
      },
      {
        "yi": "ꏁꁈꅇꀱ",
        "han": "对策"
      }
    ]
  },
  {
    "g": "ꅞ",
    "initial": "nd",
    "final": "o",
    "tone": "p",
    "py": "ndop",
    "ipa": "ndo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndop.mp3",
    "radical": "꒖",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꀏꅞꀋꉆ",
        "han": "吃得开"
      },
      {
        "yi": "ꉮꅞ",
        "han": "遇难"
      },
      {
        "yi": "ꎷꈜꅞꏦ",
        "han": "钢轨"
      },
      {
        "yi": "ꊿꅞꃅꂟ",
        "han": "马仰人翻"
      },
      {
        "yi": "ꎞꅔꇬꅞ",
        "han": "起岸"
      }
    ]
  },
  {
    "g": "ꅸ",
    "initial": "hn",
    "final": "o",
    "tone": "p",
    "py": "hnop",
    "ipa": "n̥o²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnop.mp3",
    "radical": "꒗",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꈹꅸꌉ",
        "han": "追击"
      },
      {
        "yi": "ꉼꃀꅸꊿ",
        "han": "驼员"
      },
      {
        "yi": "ꍀꅸꏿ",
        "han": "横行"
      },
      {
        "yi": "ꂮꅸꇁ",
        "han": "由来"
      },
      {
        "yi": "ꋍꈓꅑꅸ ꇁꌠ",
        "han": "年来"
      }
    ]
  },
  {
    "g": "ꆍ",
    "initial": "n",
    "final": "o",
    "tone": "p",
    "py": "nop",
    "ipa": "no²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nop.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꒀꉴꆍꌦꀧ",
        "han": "约翰内斯堡"
      },
      {
        "yi": "ꆍꏤꃅꄷꍏꇩꁮꅐꐛꅀ",
        "han": "你们家乡在中国东部吗"
      },
      {
        "yi": "ꆍꏤꃅꄷꍏꇩꒉꂪꏭꐛꅀ",
        "han": "你们家乡在中国南部吗"
      },
      {
        "yi": "ꆍꇬꅜ",
        "han": "昏迷"
      },
      {
        "yi": "ꆍꏤꃅꄷꍏꇩꁮꐚꏭꐛꅀ",
        "han": "你们家乡在中国西部吗"
      }
    ]
  },
  {
    "g": "ꆧ",
    "initial": "hl",
    "final": "o",
    "tone": "p",
    "py": "hlop",
    "ipa": "ɬo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlop.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꒉꉱꆧꁨꈜ",
        "han": "水中捞月"
      },
      {
        "yi": "ꌩꆧꍭ",
        "han": "间伐"
      },
      {
        "yi": "ꆧꊏ",
        "han": "定苗"
      },
      {
        "yi": "ꆧꁨ",
        "han": "月宫"
      },
      {
        "yi": "ꆧꃅ",
        "han": "留种地"
      }
    ]
  },
  {
    "g": "ꇊ",
    "initial": "l",
    "final": "o",
    "tone": "p",
    "py": "lop",
    "ipa": "lo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lop.mp3",
    "radical": "꒧",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌗꇗꇊꏹ",
        "han": "数理逻辑"
      },
      {
        "yi": "ꀋ ꇊ ꑍꁸꊌ",
        "han": "近似商"
      },
      {
        "yi": "ꀱꇊꐯꊨꁈ",
        "han": "辗转相减法"
      },
      {
        "yi": "ꄏꇊꆺꌠꇳꃚ",
        "han": "多洛雷斯呼声"
      },
      {
        "yi": "ꂷꈈꀧꇊꏮꈴꎺꁱ",
        "han": "马可波罗行迹"
      }
    ]
  },
  {
    "g": "ꇭ",
    "initial": "g",
    "final": "o",
    "tone": "p",
    "py": "gop",
    "ipa": "ko²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gop.mp3",
    "radical": "꓆",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏁꁈꇭꁈ",
        "han": "谋略"
      },
      {
        "yi": "ꇭꂱꉸꏾꋌ",
        "han": "过氧化氢"
      },
      {
        "yi": "ꇭꆺꌕꇡꑭ",
        "han": "过磷酸钙"
      },
      {
        "yi": "ꃅꇭ",
        "han": "（木果）骏马"
      },
      {
        "yi": "ꍏꇭꑌꄷꑤꊇꉹꁌꌤꃅꏳꁱꐘ",
        "han": "中共会理县委群众工作局文件"
      }
    ]
  },
  {
    "g": "ꈉ",
    "initial": "k",
    "final": "o",
    "tone": "p",
    "py": "kop",
    "ipa": "kʰo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kop.mp3",
    "radical": "꒓",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꄡꈉꀋꎪ",
        "han": "按期"
      },
      {
        "yi": "ꌋꁦꄮꊂꈉꇇꈯ",
        "han": "夜光表"
      },
      {
        "yi": "ꒆꇐꄮꈉ",
        "han": "生物钟"
      },
      {
        "yi": "ꈉꐨ꒧ꃅ",
        "han": "必要劳动"
      },
      {
        "yi": "ꀥꎖꄮꈉ",
        "han": "跑表"
      }
    ]
  },
  {
    "g": "ꈥ",
    "initial": "gg",
    "final": "o",
    "tone": "p",
    "py": "ggop",
    "ipa": "go²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggop.mp3",
    "radical": "꒖",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉺꉻꀈꈥꌗꍅꎖꅍ",
        "han": "空盒气压计"
      },
      {
        "yi": "ꍝꈐꍝꁨꃷꁨꈥꇬ",
        "han": "实向量空间"
      },
      {
        "yi": "ꀈꈥꉪ",
        "han": "破灭"
      },
      {
        "yi": "ꀈꈥꃅꇫꐥ",
        "han": "闲居"
      },
      {
        "yi": "ꇖꎏꈥ",
        "han": "方格法"
      }
    ]
  },
  {
    "g": "ꈼ",
    "initial": "mg",
    "final": "o",
    "tone": "p",
    "py": "mgop",
    "ipa": "ŋgo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgop.mp3",
    "radical": "꒰",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊖꈼ",
        "han": "盐霜"
      },
      {
        "yi": "ꈼꍣꉉꀽ",
        "han": "评注"
      },
      {
        "yi": "ꈌꈼ",
        "han": "许愿"
      },
      {
        "yi": "ꀑꈼꑬꍣ",
        "han": "评头论足"
      },
      {
        "yi": "ꈜꈼ",
        "han": "寒冷"
      }
    ]
  },
  {
    "g": "ꉙ",
    "initial": "hx",
    "final": "o",
    "tone": "p",
    "py": "hxop",
    "ipa": "ho²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxop.mp3",
    "radical": "꒿",
    "strokes": 2,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇇꌋꉙꃨ",
        "han": "凤仙花"
      },
      {
        "yi": "ꅇꂷꋋꇬꉌꈲꉙꈍꃅꉉ",
        "han": "这句话汉语怎么说"
      },
      {
        "yi": "ꅇꂷꋋꇬꆈꌠꉙꈍꃅꉉ",
        "han": "这句话彝语怎么说"
      },
      {
        "yi": "ꀱꉈꑴꁦꄮꉙꇐ",
        "han": "归去来兮辞"
      },
      {
        "yi": "ꃱꉙꀋꃀ",
        "han": "大雪"
      }
    ]
  },
  {
    "g": "ꉪ",
    "initial": "ng",
    "final": "o",
    "tone": "p",
    "py": "ngop",
    "ipa": "ŋo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngop.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈏꊭꉪ",
        "han": "杂念"
      },
      {
        "yi": "ꉪꅼꍯꋒ",
        "han": "冷眼"
      },
      {
        "yi": "ꂿꃄꉌꉪ",
        "han": "天机"
      },
      {
        "yi": "ꉌꂵꉪꌠ",
        "han": "心意"
      },
      {
        "yi": "ꐯꀋꌡꉪꏦ",
        "han": "相对主义"
      }
    ]
  },
  {
    "g": "ꉼ",
    "initial": "h",
    "final": "o",
    "tone": "p",
    "py": "hop",
    "ipa": "xo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hop.mp3",
    "radical": "꒼",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꐛꉼꀊꏀ",
        "han": "新形象"
      },
      {
        "yi": "ꄨꉼꒈꌅ",
        "han": "淘河"
      },
      {
        "yi": "ꇢꆣꉼꏤ",
        "han": "居居间合同"
      },
      {
        "yi": "ꈱꅇꉼ",
        "han": "谣传"
      },
      {
        "yi": "ꐕꇗꉼꄬ",
        "han": "莽撞"
      }
    ]
  },
  {
    "g": "ꊉ",
    "initial": "w",
    "final": "o",
    "tone": "p",
    "py": "wop",
    "ipa": "ɣo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wop.mp3",
    "radical": "꒼",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐆꊉꆅ",
        "han": "阴茎肿痛"
      },
      {
        "yi": "ꊉꃶꇓꋇ",
        "han": "维吾尔族"
      },
      {
        "yi": "ꍏꊉ",
        "han": "中尉"
      },
      {
        "yi": "ꎸꑸꊉꂰꏓꈜꄆꈜ",
        "han": "深亚微米集成电路"
      },
      {
        "yi": "ꊉꍓ",
        "han": "魏征"
      }
    ]
  },
  {
    "g": "ꊞ",
    "initial": "z",
    "final": "o",
    "tone": "p",
    "py": "zop",
    "ipa": "tso²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zop.mp3",
    "radical": "꒪",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑠꒀꀻꊞꎹ",
        "han": "信用合作社"
      },
      {
        "yi": "ꑸꌏꊞꑊꈷꇓ",
        "han": "滤色镜"
      },
      {
        "yi": "ꉼꊞꎹ",
        "han": "合作社"
      },
      {
        "yi": "ꊞꇻ",
        "han": "抖动"
      },
      {
        "yi": "ꊞꊵ",
        "han": "总裁"
      }
    ]
  },
  {
    "g": "ꋀ",
    "initial": "c",
    "final": "o",
    "tone": "p",
    "py": "cop",
    "ipa": "tsʰo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cop.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆆꃆꋀ",
        "han": "纳木错"
      },
      {
        "yi": "ꋀꆉꍔ",
        "han": "黑种"
      },
      {
        "yi": "ꋀꐎ",
        "han": "白种"
      },
      {
        "yi": "ꋀꐎꆅ",
        "han": "白化病"
      },
      {
        "yi": "ꋀꆉ",
        "han": "黑人"
      }
    ]
  },
  {
    "g": "ꋞ",
    "initial": "zz",
    "final": "o",
    "tone": "p",
    "py": "zzop",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzop.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꋻ",
    "initial": "nz",
    "final": "o",
    "tone": "p",
    "py": "nzop",
    "ipa": "ndzo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzop.mp3",
    "radical": "꒕",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉢꋙꊪꒉꏽꀋꋻ",
        "han": "我没有种过庄稼"
      },
      {
        "yi": "ꃼꃀꑠꐥꀋꋻ",
        "han": "前所未有"
      },
      {
        "yi": "ꁱꀕꋻꅑ",
        "han": "文化传统"
      },
      {
        "yi": "ꋻꅑꃅꇏ",
        "han": "习气"
      },
      {
        "yi": "ꁍꁈꋻꇐ",
        "han": "旧物"
      }
    ]
  },
  {
    "g": "ꌚ",
    "initial": "s",
    "final": "o",
    "tone": "p",
    "py": "sop",
    "ipa": "so²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sop.mp3",
    "radical": "꒚",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꌚꁰ ꏦ",
        "han": "仿宋"
      },
      {
        "yi": "ꌚꀕꏠꌠ",
        "han": "次等"
      },
      {
        "yi": "ꀙꌚ",
        "han": "北宋"
      },
      {
        "yi": "ꌚꇨꊝ",
        "han": "宋高宗"
      },
      {
        "yi": "ꌚꒀꃨ",
        "han": "芍药花"
      }
    ]
  },
  {
    "g": "ꌸ",
    "initial": "ss",
    "final": "o",
    "tone": "p",
    "py": "ssop",
    "ipa": "zo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssop.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇗꃹꏿ、ꇱꒉꌸꃏ",
        "han": "受精卵"
      },
      {
        "yi": "ꇿꌐꇿꌸ",
        "han": "百步穿杨"
      },
      {
        "yi": "ꌸꁮꌠ",
        "han": "伤俘"
      },
      {
        "yi": "ꌸꑭꅐꏦꌤ",
        "han": "光栅"
      },
      {
        "yi": "ꉌꌸ",
        "han": "中意"
      }
    ]
  },
  {
    "g": "ꍐ",
    "initial": "zh",
    "final": "o",
    "tone": "p",
    "py": "zhop",
    "ipa": "tʂo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhop.mp3",
    "radical": "꒼",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃅꍐꃅꍎ",
        "han": "天罗地网"
      },
      {
        "yi": "ꈭꇍꍐ",
        "han": "拱抱"
      },
      {
        "yi": "ꏧꍐꋧꌺ",
        "han": "甲种粒子"
      },
      {
        "yi": "ꏧꍐꁺꀂ",
        "han": "甲种射线"
      },
      {
        "yi": "ꇩꍐꁬ",
        "han": "贯众"
      }
    ]
  },
  {
    "g": "ꍬ",
    "initial": "ch",
    "final": "o",
    "tone": "p",
    "py": "chop",
    "ipa": "tʂʰo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chop.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈎꇨꍬꅼ",
        "han": "矫枉过正"
      },
      {
        "yi": "ꍬꊒ",
        "han": "矫正"
      },
      {
        "yi": "ꂱꑱꈜꂱꑱꍬ",
        "han": "分道扬镳"
      },
      {
        "yi": "ꏓꑴꑭꍬꍕꏧꐆ",
        "han": "聚乙烯醇缩甲醛"
      },
      {
        "yi": "ꍬꈴ",
        "han": "因循"
      }
    ]
  },
  {
    "g": "ꎃ",
    "initial": "rr",
    "final": "o",
    "tone": "p",
    "py": "rrop",
    "ipa": "dʐo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rrop.mp3",
    "radical": "꒜",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꎃꊐꌦ",
        "han": "代血浆"
      },
      {
        "yi": "ꎃꇗꇱ",
        "han": "正交"
      },
      {
        "yi": "ꎃβꈤꐈ",
        "han": "正β衰变"
      },
      {
        "yi": "ꑌꐚ、ꑴꀋꅑ、ꎃꐚ",
        "han": "正常"
      },
      {
        "yi": "ꎃꏍꐈꆦ",
        "han": "正交变换"
      }
    ]
  },
  {
    "g": "ꎚ",
    "initial": "nr",
    "final": "o",
    "tone": "p",
    "py": "nrop",
    "ipa": "ndʐo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrop.mp3",
    "radical": "꒜",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꂓꎚ",
        "han": "别称"
      }
    ]
  },
  {
    "g": "ꎵ",
    "initial": "sh",
    "final": "o",
    "tone": "p",
    "py": "shop",
    "ipa": "ʂo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shop.mp3",
    "radical": "꓂",
    "strokes": 2,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꒉꈴꈜꎵꃪ",
        "han": "疏通流通渠道"
      },
      {
        "yi": "ꎵꇓ",
        "han": "铸石"
      },
      {
        "yi": "ꎵꂷꄯꒉꍑ",
        "han": "活字印刷"
      },
      {
        "yi": "ꅔꊂꐻꎵꅉ",
        "han": "大陆冰源"
      },
      {
        "yi": "ꎵꂢꇐꈷꇐ",
        "han": "韶乐"
      }
    ]
  },
  {
    "g": "ꏐ",
    "initial": "r",
    "final": "o",
    "tone": "p",
    "py": "rop",
    "ipa": "ʐo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rop.mp3",
    "radical": "꒼",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊫꊻꏐ",
        "han": "紫草茸"
      },
      {
        "yi": "ꆀꏐ꒧",
        "han": "呢绒业"
      },
      {
        "yi": "ꏐꉹꌩ",
        "han": "溶花树"
      },
      {
        "yi": "ꏐꃛꎿꇅꋧ",
        "han": "柔佛海峡"
      },
      {
        "yi": "ꃛꏐꌩ",
        "han": "木芙蓉"
      }
    ]
  },
  {
    "g": "ꏯ",
    "initial": "j",
    "final": "o",
    "tone": "p",
    "py": "jop",
    "ipa": "tɕo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jop.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꁮꐛꀊꏯ",
        "han": "西洋"
      },
      {
        "yi": "ꀉꑌꁁꏯꎐ",
        "han": "多面角"
      },
      {
        "yi": "ꀑꍏꁭꅐꁆꏯ",
        "han": "东欧"
      },
      {
        "yi": "ꅽꏯꈴꀋꄿꄷꌠꉌꑇꅊꇈ",
        "han": "请接受我的道歉"
      },
      {
        "yi": "ꑍꁁꏯꐯꇯꌗ",
        "han": "里外里"
      }
    ]
  },
  {
    "g": "ꐋ",
    "initial": "q",
    "final": "o",
    "tone": "p",
    "py": "qop",
    "ipa": "tɕʰo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qop.mp3",
    "radical": "꒨",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌉꈿꐋ",
        "han": "战友"
      },
      {
        "yi": "ꀜꐋ",
        "han": "扁鹊"
      },
      {
        "yi": "ꐋꐞꄂꃅꐥ",
        "han": "离群索居"
      },
      {
        "yi": "ꐋꁏꐚꐙ",
        "han": "犹大"
      },
      {
        "yi": "ꐋꀋꌡꅍꀋꐥ",
        "han": "平常"
      }
    ]
  },
  {
    "g": "ꐦ",
    "initial": "jj",
    "final": "o",
    "tone": "p",
    "py": "jjop",
    "ipa": "dʑo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjop.mp3",
    "radical": "꒟",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "꒧ꐛꉖꇅꐦ",
        "han": "沉积盆地"
      },
      {
        "yi": "ꁮꐚꀎꄊꆹꎿꉱꉒꇅꐦ",
        "han": "西澳大利亚海盆"
      },
      {
        "yi": "ꀧꄓꐦꃀ",
        "han": "波德平原"
      },
      {
        "yi": "ꒈꀑꄠꀻꑸꎿꉱꉖꇅꐦ",
        "han": "北太平洋海盆"
      },
      {
        "yi": "ꒉ꒧ꐦꃀ",
        "han": "冲积平原"
      }
    ]
  },
  {
    "g": "ꐾ",
    "initial": "nj",
    "final": "o",
    "tone": "p",
    "py": "njop",
    "ipa": "ndʑo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njop.mp3",
    "radical": "꒟",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐾꑳꀕ",
        "han": "平缓"
      },
      {
        "yi": "ꐾꉈ",
        "han": "平衍"
      },
      {
        "yi": "ꋽꏯꃅꐾ",
        "han": "婉谢"
      },
      {
        "yi": "ꐾꉈꀕ",
        "han": "平展"
      },
      {
        "yi": "ꄂꐎꐾꑳꀕ",
        "han": "云海"
      }
    ]
  },
  {
    "g": "ꑘ",
    "initial": "ny",
    "final": "o",
    "tone": "p",
    "py": "nyop",
    "ipa": "ȵo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyop.mp3",
    "radical": "꒧",
    "strokes": 1,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏦꊒꌠꑘꃅꊌꐨ",
        "han": "合法的劳动收入"
      },
      {
        "yi": "ꎎꑘꃅ",
        "han": "走穴"
      },
      {
        "yi": "ꀉꉘꃅꏱꄻ、ꀉꉘꃅꑘꒃ",
        "han": "长治久安"
      },
      {
        "yi": "ꇩꐂꎆꏂꑘ",
        "han": "跨国企业"
      },
      {
        "yi": "ꑘꁨꌠꌋꆀꎆꀨꁨꌠ",
        "han": "劳资"
      }
    ]
  },
  {
    "g": "ꑪ",
    "initial": "x",
    "final": "o",
    "tone": "p",
    "py": "xop",
    "ipa": "ɕo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xop.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꈆꑪꃅꏸ",
        "han": "科学卫星"
      },
      {
        "yi": "ꈆꑪꊪꏽ",
        "han": "科学种田"
      },
      {
        "yi": "ꈆꑪꈢꇓꀖ",
        "han": "科学攻关"
      },
      {
        "yi": "ꈆꑪꌧꑳꉾꃪꌠꑇ",
        "han": "崇尚科学文明"
      },
      {
        "yi": "ꈆꑪꇮꇐꂽꇨꄖ",
        "han": "科技强军"
      }
    ]
  },
  {
    "g": "ꒀ",
    "initial": "y",
    "final": "o",
    "tone": "p",
    "py": "yop",
    "ipa": "ʑo²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yop.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꒀꋌꉰꐊ",
        "han": "油脂氢化"
      },
      {
        "yi": "ꌕꀑꐊꑍꃬꒀ",
        "han": "三氧化二氮"
      },
      {
        "yi": "ꇰꒀ",
        "han": "魔芋"
      },
      {
        "yi": "ꑤꒀꇩ",
        "han": "协约国"
      },
      {
        "yi": "ꒀꅥꀜ",
        "han": "油饼"
      }
    ]
  },
  {
    "g": "ꇮ",
    "initial": "g",
    "final": "e",
    "tone": "t",
    "py": "get",
    "ipa": "kɯ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_get.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇮ꒧ꈴ",
        "han": "工业化"
      },
      {
        "yi": "ꈍꃅꇮꀋꐚ",
        "han": "六神无主"
      },
      {
        "yi": "ꇮ꒧ꌗꍑ",
        "han": "工业气压"
      },
      {
        "yi": "ꂿ꒧ꇮꃅꊿ",
        "han": "农业工人"
      },
      {
        "yi": "ꂿꑘꇮꇐ",
        "han": "农业技术"
      }
    ]
  },
  {
    "g": "ꈊ",
    "initial": "k",
    "final": "e",
    "tone": "t",
    "py": "ket",
    "ipa": "kʰɯ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ket.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈊꅿꌒ",
        "han": "夜来香"
      },
      {
        "yi": "ꈊꄮ",
        "han": "夜里"
      },
      {
        "yi": "ꈊꈩ",
        "han": "晚会"
      },
      {
        "yi": "ꃅꈊꇁꂯ",
        "han": "垂暮"
      },
      {
        "yi": "ꈊꄜꄯꒉ",
        "han": "晚报"
      }
    ]
  },
  {
    "g": "ꈦ",
    "initial": "gg",
    "final": "e",
    "tone": "t",
    "py": "gget",
    "ipa": "gɯ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gget.mp3",
    "radical": "꒔",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꉌꆰꑓꈦ",
        "han": "焦躁"
      }
    ]
  },
  {
    "g": "ꍑ",
    "initial": "zh",
    "final": "e",
    "tone": "t",
    "py": "zhet",
    "ipa": "tʂɯ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhet.mp3",
    "radical": "꒕",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌤꋋꐘꄻꆏꁳꃅꏭꇬꍑꀕ",
        "han": "这件事让你去做可以吗"
      },
      {
        "yi": "ꑭꍑ",
        "han": "缠足"
      },
      {
        "yi": "ꈏꄆꍑ",
        "han": "内电压"
      },
      {
        "yi": "ꒌꍑꏣ",
        "han": "胶卷"
      },
      {
        "yi": "ꅉꆺꍑꄅ",
        "han": "地幔"
      }
    ]
  },
  {
    "g": "ꍭ",
    "initial": "ch",
    "final": "e",
    "tone": "t",
    "py": "chet",
    "ipa": "tʂʰɯ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chet.mp3",
    "radical": "꓃",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꍭꎆ",
        "han": "抽头"
      },
      {
        "yi": "ꃚꍭꌺ",
        "han": "音素"
      },
      {
        "yi": "ꆧꍭ",
        "han": "间苗"
      },
      {
        "yi": "ꎆꍭ",
        "han": "打头"
      },
      {
        "yi": "ꇬꇉꍭꋚꀋꑌ、ꅇꀨꀋꐊ",
        "han": "言之无物"
      }
    ]
  },
  {
    "g": "ꎄ",
    "initial": "rr",
    "final": "e",
    "tone": "t",
    "py": "rret",
    "ipa": "dʐɯ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rret.mp3",
    "radical": "꒕",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃏ、ꎄ",
        "han": "分"
      },
      {
        "yi": "ꇓꎄꌌꉘ",
        "han": "砾培"
      },
      {
        "yi": "ꎄꋉ",
        "han": "星子"
      },
      {
        "yi": "ꌩꎄ",
        "han": "引柴"
      },
      {
        "yi": "ꃚꌼ、ꅳꀧꎄꃚ",
        "han": "噪音"
      }
    ]
  },
  {
    "g": "ꎛ",
    "initial": "nr",
    "final": "e",
    "tone": "t",
    "py": "nret",
    "ipa": "ndʐɯ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nret.mp3",
    "radical": "꒕",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "꒧ꎛ",
        "han": "劳伤"
      }
    ]
  },
  {
    "g": "ꎶ",
    "initial": "sh",
    "final": "e",
    "tone": "t",
    "py": "shet",
    "ipa": "ʂɯ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shet.mp3",
    "radical": "꒖",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꍔꄅ、ꁬꎶ",
        "han": "繁殖"
      },
      {
        "yi": "ꉘꉚꁬꎶ",
        "han": "养殖"
      },
      {
        "yi": "ꁬꎶꐨ",
        "han": "繁殖率"
      },
      {
        "yi": "ꐴꁬꐴꎶ",
        "han": "根的发展"
      },
      {
        "yi": "ꐞꁬꎶ",
        "han": "分裂生殖"
      }
    ]
  },
  {
    "g": "ꀓ",
    "initial": "",
    "final": "e",
    "tone": "x",
    "py": "ex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꀩ",
    "initial": "b",
    "final": "e",
    "tone": "x",
    "py": "bex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꁩ",
    "initial": "bb",
    "final": "e",
    "tone": "x",
    "py": "bbex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꃁ",
    "initial": "m",
    "final": "e",
    "tone": "x",
    "py": "mex",
    "ipa": "mɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃁꍣꄯꒉ",
        "han": "书评"
      }
    ]
  },
  {
    "g": "ꃲ",
    "initial": "v",
    "final": "e",
    "tone": "x",
    "py": "vex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꄑ",
    "initial": "d",
    "final": "e",
    "tone": "x",
    "py": "dex",
    "ipa": "tɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꄖꄑꈴ",
        "han": "总动员"
      },
      {
        "yi": "ꋦꁧꉘꄑ",
        "han": "植物蒸腾"
      },
      {
        "yi": "ꏖꄑꁈ",
        "han": "激将法"
      },
      {
        "yi": "ꀮꄑꈁꁠ",
        "han": "褒奖"
      },
      {
        "yi": "ꑭꄑ",
        "han": "启程"
      }
    ]
  },
  {
    "g": "ꄭ",
    "initial": "t",
    "final": "e",
    "tone": "x",
    "py": "tex",
    "ipa": "tʰɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꒆꄭ",
        "han": "束缚"
      },
      {
        "yi": "ꄯꇌꄭꇌ",
        "han": "跌跌撞撞"
      },
      {
        "yi": "ꃝꄭꊋꃤ",
        "han": "摩擦力"
      },
      {
        "yi": "ꊸꄭꋌ",
        "han": "凉药"
      },
      {
        "yi": "ꂓꌗꊿꄭ",
        "han": "名缰利锁"
      }
    ]
  },
  {
    "g": "ꅈ",
    "initial": "dd",
    "final": "e",
    "tone": "x",
    "py": "ddex",
    "ipa": "dɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꆀꃆꌷꅈ",
        "han": "彝学学院"
      },
      {
        "yi": "ꂃꅈꏿ",
        "han": "奔泻"
      },
      {
        "yi": "ꅈꑮꏮꏸ",
        "han": "类地行星"
      },
      {
        "yi": "ꌧꍧꌜꍰꄖꏃꑾꌋꈤꊿꋅꒉꌶꅉꆀꃆꌷꅈ",
        "han": "四川省成都市西南民族大学彝学学院"
      },
      {
        "yi": "ꐤꅉꃛꅈꑟ",
        "han": "激化"
      }
    ]
  },
  {
    "g": "ꅟ",
    "initial": "nd",
    "final": "e",
    "tone": "x",
    "py": "ndex",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꅹ",
    "initial": "hn",
    "final": "e",
    "tone": "x",
    "py": "hnex",
    "ipa": "n̥ɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐛꅹ",
        "han": "由于"
      },
      {
        "yi": "ꐛꅹꄉ",
        "han": "起见"
      },
      {
        "yi": "ꑠꅹ",
        "han": "因而"
      },
      {
        "yi": "ꅽꑊꏦꅹꉬ",
        "han": "屈驾"
      },
      {
        "yi": "ꀋꐈꐥꇐꀉꄂꐛꅹꉪꏦ",
        "han": "机械唯物主义"
      }
    ]
  },
  {
    "g": "ꆎ",
    "initial": "n",
    "final": "e",
    "tone": "x",
    "py": "nex",
    "ipa": "nɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇉꋋꇷꇉꆎꅉꋋꂷꇬꈍꉗꏢꆏ",
        "han": "这船在此停多久"
      },
      {
        "yi": "ꆎꂿꇬꉌꂵꇿꐯꇿ",
        "han": "见到你很高兴"
      },
      {
        "yi": "ꆎꂿꋍꉙꃅꀋꂿꋍꉙꃅ、ꑓꂿꏧꑸꈢꆈꆟꋠ",
        "han": "阳奉阴违"
      },
      {
        "yi": "ꆎꄮꈩꀜ",
        "han": "假日旅游"
      },
      {
        "yi": "ꆎꄮꎆꏣ",
        "han": "假日经济"
      }
    ]
  },
  {
    "g": "ꆨ",
    "initial": "hl",
    "final": "e",
    "tone": "x",
    "py": "hlex",
    "ipa": "ɬɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀋ ꃋꀊꆨ",
        "han": "今昔"
      },
      {
        "yi": "ꀊꆨꈩꅍ",
        "han": "古玩"
      },
      {
        "yi": "ꀊꆨꏂꀨ",
        "han": "古代典籍"
      },
      {
        "yi": "ꀊꆨꌧꇐꁰꁱ",
        "han": "古代文化"
      },
      {
        "yi": "ꀊꆨꃀ",
        "han": "太古"
      }
    ]
  },
  {
    "g": "ꇋ",
    "initial": "l",
    "final": "e",
    "tone": "x",
    "py": "lex",
    "ipa": "lɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꂽꌌꇷꇋ",
        "han": "兵谏"
      },
      {
        "yi": "ꈌꇷꉐꅲ、ꇷꇋꄉꉉ",
        "han": "逼供"
      },
      {
        "yi": "ꌑꇋꑟꋯ",
        "han": "棉纱"
      },
      {
        "yi": "ꏦꏲ、ꏢꇋ",
        "han": "管制"
      },
      {
        "yi": "ꍞꊟꏢꇋ",
        "han": "监察制约"
      }
    ]
  },
  {
    "g": "ꇯ",
    "initial": "g",
    "final": "e",
    "tone": "x",
    "py": "gex",
    "ipa": "kɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐯꇯꐱꀨ",
        "han": "共同纲领"
      },
      {
        "yi": "ꀨꇯ ꄯꒉ",
        "han": "海报"
      },
      {
        "yi": "ꁱꐯꇯꐮꊝꄉ",
        "han": "拼写"
      },
      {
        "yi": "ꃸꆽꐯꇯ",
        "han": "搅局"
      },
      {
        "yi": "ꄻꐯꇯ",
        "han": "合拢"
      }
    ]
  },
  {
    "g": "ꈋ",
    "initial": "k",
    "final": "e",
    "tone": "x",
    "py": "kex",
    "ipa": "kʰɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉪꇐꈋꍣ",
        "han": "思想评论"
      },
      {
        "yi": "ꃆꃀꁱꇐꈋꍣ",
        "han": "文学议论"
      },
      {
        "yi": "ꑬꆏꂷꈋꍣꅇ",
        "han": "每周评论"
      },
      {
        "yi": "ꃅꈋꂿꆏꃄꏦꉂ",
        "han": "即景生情"
      },
      {
        "yi": "ꃄꎆꈋꍣ",
        "han": "评薪"
      }
    ]
  },
  {
    "g": "ꈧ",
    "initial": "gg",
    "final": "e",
    "tone": "x",
    "py": "ggex",
    "ipa": "gɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁮꆗ、ꎹꄓꈧꌺ",
        "han": "朝阳、朝阳"
      },
      {
        "yi": "ꉈꈧꀨꄂ",
        "han": "摇椅"
      },
      {
        "yi": "ꈧꑳꋦꁧ",
        "han": "阳性植物"
      },
      {
        "yi": "ꈧꀋꁨ",
        "han": "无常"
      },
      {
        "yi": "ꎸꄑꈯꒃꈧ",
        "han": "早操"
      }
    ]
  },
  {
    "g": "ꈽ",
    "initial": "mg",
    "final": "e",
    "tone": "x",
    "py": "mgex",
    "ipa": "ŋgɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉌꎭꃅꋩꈽ",
        "han": "悲悼"
      },
      {
        "yi": "ꐋꁏꐚꈽ、ꄃꀥꀋꉬ",
        "han": "异己"
      },
      {
        "yi": "ꉈꈽꀠ",
        "han": "对立面"
      },
      {
        "yi": "ꋓꈽ",
        "han": "打擂台"
      },
      {
        "yi": "ꈏꇓꐯꉈꈽ",
        "han": "内争"
      }
    ]
  },
  {
    "g": "ꉚ",
    "initial": "hx",
    "final": "e",
    "tone": "x",
    "py": "hxex",
    "ipa": "hɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍤꉚ",
        "han": "检视"
      },
      {
        "yi": "ꆅꉚꆅꉁ",
        "han": "诊疗"
      },
      {
        "yi": "ꌡꉚꑮ",
        "han": "参照系"
      },
      {
        "yi": "ꄯꒉꋋꋐꉢꇬꉚꀋꏾꀐ",
        "han": "我已看厌了这本书"
      },
      {
        "yi": "ꀀꑴꑳꀂꉚꒉ",
        "han": "夜郎自大"
      }
    ]
  },
  {
    "g": "ꉫ",
    "initial": "ng",
    "final": "e",
    "tone": "x",
    "py": "ngex",
    "ipa": "ŋɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎭꉰꁧꇬꈝꃀꋋꏢꈴꌠꉫꀕ",
        "han": "到上海走这条路吗"
      },
      {
        "yi": "ꈁꁠꀋꋌꉫꍈ",
        "han": "菲仪"
      },
      {
        "yi": "ꏚꊿꉫꉬꉏ",
        "han": "对保"
      },
      {
        "yi": "ꀒꉭꊂꉫ",
        "han": "迟疑"
      },
      {
        "yi": "ꀒꉭꊂꉫ、ꃱꇌꃯꇌ",
        "han": "犹豫不决"
      }
    ]
  },
  {
    "g": "ꉽ",
    "initial": "h",
    "final": "e",
    "tone": "x",
    "py": "hex",
    "ipa": "xɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉽꐯꀉꒉꌠꋍꂷꈍꑋꃅ",
        "han": "大锅一个多少钱"
      },
      {
        "yi": "ꂿꃅꉽꑌꉬ",
        "han": "天气真好"
      },
      {
        "yi": "ꇇꅑꉽꐯ",
        "han": "炒勺"
      },
      {
        "yi": "ꉽꐯꀋꃀꇷꋚꋠ",
        "han": "吃大公饭"
      },
      {
        "yi": "ꁨꆹꉽꐯ",
        "han": "腰锅"
      }
    ]
  },
  {
    "g": "ꊊ",
    "initial": "w",
    "final": "e",
    "tone": "x",
    "py": "wex",
    "ipa": "ɣɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꄻꊊ",
        "han": "制备"
      },
      {
        "yi": "ꎆꊌꋚꊊ",
        "han": "财源广进"
      },
      {
        "yi": "ꄺꀱꆏꈜꊊ",
        "han": "回头是岸"
      },
      {
        "yi": "ꊊꇨ",
        "han": "万难"
      },
      {
        "yi": "ꊌꀋꉆ、ꋌꎷꋌꀊꊊ",
        "han": "求之不得"
      }
    ]
  },
  {
    "g": "ꊟ",
    "initial": "z",
    "final": "e",
    "tone": "x",
    "py": "zex",
    "ipa": "tsɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌋꀾꍞꊟ",
        "han": "监票"
      },
      {
        "yi": "ꍞꊟ ꅿꌧꉼ",
        "han": "监事会"
      },
      {
        "yi": "ꊥꊟ",
        "han": "策励"
      },
      {
        "yi": "ꍞꊟꃄꌬ",
        "han": "监督执行"
      },
      {
        "yi": "ꍤꊟꇜ",
        "han": "巡抚"
      }
    ]
  },
  {
    "g": "ꋁ",
    "initial": "c",
    "final": "e",
    "tone": "x",
    "py": "cex",
    "ipa": "tsʰɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋁꍈ",
        "han": "盐花"
      },
      {
        "yi": "ꍹꋁꋌ",
        "han": "腐蚀剂"
      },
      {
        "yi": "ꍹꋁꆄꁮ",
        "han": "霉菌"
      }
    ]
  },
  {
    "g": "ꋟ",
    "initial": "zz",
    "final": "e",
    "tone": "x",
    "py": "zzex",
    "ipa": "dzɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋟꅉꐡ",
        "han": "散伙"
      },
      {
        "yi": "ꆍꋙꋟꀕ",
        "han": "你们吃饭吗"
      },
      {
        "yi": "ꆏꍣꋚꋟꀕ",
        "han": "你吃米饭吗"
      },
      {
        "yi": "ꆏꑸꑽꋟꀕ",
        "han": "你吃土豆吗"
      },
      {
        "yi": "ꆏꌧꅪꋟꀕ",
        "han": "你吃苹果吗"
      }
    ]
  },
  {
    "g": "ꋼ",
    "initial": "nz",
    "final": "e",
    "tone": "x",
    "py": "nzex",
    "ipa": "ndzɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋼꄻ",
        "han": "精妙"
      },
      {
        "yi": "ꑺꂖ、ꋼꄧ",
        "han": "灵活"
      }
    ]
  },
  {
    "g": "ꌛ",
    "initial": "s",
    "final": "e",
    "tone": "x",
    "py": "sex",
    "ipa": "sɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌛꂷ",
        "han": "省份"
      },
      {
        "yi": "ꁮꌛꁮꅉ",
        "han": "罗曼司"
      },
      {
        "yi": "ꂿꑘꌛꍣ",
        "han": "农业生产"
      },
      {
        "yi": "ꁮꌛꉪꏦ",
        "han": "浪漫主义"
      },
      {
        "yi": "ꉪꁮꈾꌛ",
        "han": "浪漫"
      }
    ]
  },
  {
    "g": "ꌹ",
    "initial": "ss",
    "final": "e",
    "tone": "x",
    "py": "ssex",
    "ipa": "zɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌹꌺ",
        "han": "幼体"
      }
    ]
  },
  {
    "g": "ꍒ",
    "initial": "zh",
    "final": "e",
    "tone": "x",
    "py": "zhex",
    "ipa": "tʂɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍒꈌ",
        "han": "切口"
      },
      {
        "yi": "ꀑꇆꀠꊿꍒ",
        "han": "欧罗巴人种"
      },
      {
        "yi": "ꁴꏿꁨꍒꌀ",
        "han": "卵子放射冠"
      },
      {
        "yi": "ꏂꍒ",
        "han": "金瓯"
      },
      {
        "yi": "ꍒꇰ",
        "han": "虚报"
      }
    ]
  },
  {
    "g": "ꍮ",
    "initial": "ch",
    "final": "e",
    "tone": "x",
    "py": "chex",
    "ipa": "tʂʰɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉂꇐꉂꍮ",
        "han": "牢骚"
      },
      {
        "yi": "ꍮꊪꐪ",
        "han": "车辙"
      },
      {
        "yi": "ꁁꑳꍮꊪ",
        "han": "棚车"
      },
      {
        "yi": "ꍮꊪꌬꊪꄳ",
        "han": "车照"
      },
      {
        "yi": "ꍮꏜ",
        "han": "谷草"
      }
    ]
  },
  {
    "g": "ꎅ",
    "initial": "rr",
    "final": "e",
    "tone": "x",
    "py": "rrex",
    "ipa": "dʐɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rrex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈭꐛꎅꄻ",
        "han": "环排列"
      },
      {
        "yi": "ꆹꎅ",
        "han": "引领"
      },
      {
        "yi": "ꎅꄻꃷꁨ",
        "han": "排列数"
      },
      {
        "yi": "ꎅꊈꎍꐽ",
        "han": "币值稳定"
      },
      {
        "yi": "ꋓꎅꄻ",
        "han": "偶排列"
      }
    ]
  },
  {
    "g": "ꎜ",
    "initial": "nr",
    "final": "e",
    "tone": "x",
    "py": "nrex",
    "ipa": "ndʐɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀑꇬꉜꁨ，ꅋꂿꑭꎜ",
        "han": "珍爱生命，远离毒品"
      },
      {
        "yi": "ꁧꎜꎿꊈ",
        "han": "移山倒海"
      }
    ]
  },
  {
    "g": "ꎷ",
    "initial": "sh",
    "final": "e",
    "tone": "x",
    "py": "shex",
    "ipa": "ʂɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎷꃶ",
        "han": "金属探伤"
      },
      {
        "yi": "ꄃꍏꉰꌟꃅꃴꇉꀕꇬꎷꌠꌩꏪ",
        "han": "地中海式常绿树林"
      },
      {
        "yi": "ꃸꅉꎷꀋꊌ",
        "han": "穷途潦倒"
      },
      {
        "yi": "ꎷꈜꈄ",
        "han": "铁路网"
      },
      {
        "yi": "ꆹꑟꇔꀋꉆ、ꇔꅉꎷꀋꊌ",
        "han": "责无旁贷"
      }
    ]
  },
  {
    "g": "ꏑ",
    "initial": "r",
    "final": "e",
    "tone": "x",
    "py": "rex",
    "ipa": "ʐɯ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rex.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊭꏑ",
        "han": "聚积"
      },
      {
        "yi": "ꉻꏑꀀꆹꏂ",
        "han": "结党营私"
      },
      {
        "yi": "ꋯꏑꅉ",
        "han": "参议会"
      },
      {
        "yi": "ꉻꏑꍔꃚ",
        "han": "联合政府"
      },
      {
        "yi": "ꉢꐯꏑꃀꈿꅉꇬꇁꀋꄐꀐ",
        "han": "我不能前来参加聚会了"
      }
    ]
  },
  {
    "g": "ꀔ",
    "initial": "",
    "final": "e",
    "tone": "",
    "py": "e",
    "ipa": "ɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_e.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀔꉛꏸ",
        "han": "鳄鱼胆"
      },
      {
        "yi": "ꀔꆺꎾꃝ",
        "han": "鄂陵湖"
      },
      {
        "yi": "ꁦꎆꀔꇱ",
        "han": "扩充"
      },
      {
        "yi": "ꀔꇐꄯ",
        "han": "额鲁特"
      },
      {
        "yi": "ꀔꇌꍫꋇ",
        "han": "鄂伦春族"
      }
    ]
  },
  {
    "g": "ꀪ",
    "initial": "b",
    "final": "e",
    "tone": "",
    "py": "be",
    "ipa": "pɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_be.mp3",
    "radical": "꒷",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꅇꂷꋋꇬꏝꀪꉙꈍꃅꉉ",
        "han": "这句话日语怎么说"
      },
      {
        "yi": "ꆏꏝꀪꋂꄮꄻꇮꀕ",
        "han": "你会做日本菜吗"
      },
      {
        "yi": "ꏝꀪꃢꈜ",
        "han": "和服"
      },
      {
        "yi": "ꀋꆏꃅꏝꀪꑟꌠꃏꏸꐤꀕ",
        "han": "有直达日本的飞机吗"
      },
      {
        "yi": "ꀪꑿꊪ",
        "han": "鸡脚手、五龙皮"
      }
    ]
  },
  {
    "g": "ꁪ",
    "initial": "bb",
    "final": "e",
    "tone": "",
    "py": "bbe",
    "ipa": "bɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbe.mp3",
    "radical": "꒙",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀊꁪ",
        "han": "哎呀"
      }
    ]
  },
  {
    "g": "ꃂ",
    "initial": "m",
    "final": "e",
    "tone": "",
    "py": "me",
    "ipa": "mɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_me.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉼꃂ",
        "han": "红梅"
      },
      {
        "yi": "ꑭꃂꌅ",
        "han": "西门子"
      }
    ]
  },
  {
    "g": "ꄒ",
    "initial": "d",
    "final": "e",
    "tone": "",
    "py": "de",
    "ipa": "tɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_de.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꂰꄒꑩ",
        "han": "土丁香"
      },
      {
        "yi": "ꄒꁄ",
        "han": "电灯泡"
      },
      {
        "yi": "ꇽꁌꄒꉸꊆꏫ",
        "han": "开普敦好望角"
      },
      {
        "yi": "ꇌꄒ",
        "han": "伦敦"
      },
      {
        "yi": "ꄆꄒꏂꍅꀕ",
        "han": "火树银花"
      }
    ]
  },
  {
    "g": "ꄮ",
    "initial": "t",
    "final": "e",
    "tone": "",
    "py": "te",
    "ipa": "tʰɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_te.mp3",
    "radical": "꒑",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꄮꐽ",
        "han": "和平"
      },
      {
        "yi": "ꉉꐮꄮ",
        "han": "说合"
      },
      {
        "yi": "ꀠꆺꄮꐽꃀꈿ",
        "han": "巴黎和会"
      },
      {
        "yi": "ꈈꂱꇁꌠꈍꄮꄚꑟꇁ",
        "han": "昆明来的车何时到"
      },
      {
        "yi": "ꃅꑬ ꈁꄮꈉꎖꅍ",
        "han": "马蹄表"
      }
    ]
  },
  {
    "g": "ꅉ",
    "initial": "dd",
    "final": "e",
    "tone": "",
    "py": "dde",
    "ipa": "dɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dde.mp3",
    "radical": "꒟",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇇꈌꋈꅉ",
        "han": "抬肩"
      },
      {
        "yi": "ꆄꅉ",
        "han": "痛处"
      },
      {
        "yi": "ꇓꌋꀀꅉ",
        "han": "煤层"
      },
      {
        "yi": "ꑭꉼꒊꃀꈀꈴꅉ",
        "han": "西河流域"
      },
      {
        "yi": "ꅉꀕꈏꈱꑽꃤ",
        "han": "惯窃犯"
      }
    ]
  },
  {
    "g": "ꅠ",
    "initial": "nd",
    "final": "e",
    "tone": "",
    "py": "nde",
    "ipa": "ndɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nde.mp3",
    "radical": "꒬",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꍹꐛ、ꍹꈔ、ꄷꅠ",
        "han": "腐败"
      },
      {
        "yi": "ꃄꅠꇷꌃ",
        "han": "不毛之地"
      },
      {
        "yi": "ꌢꎭꃅꅠ",
        "han": "穷乡僻壤"
      },
      {
        "yi": "ꃅꋮꃄꅠ",
        "han": "僻陋"
      },
      {
        "yi": "ꃅꇏꀋꉾꀋꃪ、ꃅꇏꄷꅠ",
        "han": "歪风邪气"
      }
    ]
  },
  {
    "g": "ꅺ",
    "initial": "hn",
    "final": "e",
    "tone": "",
    "py": "hne",
    "ipa": "n̥ɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hne.mp3",
    "radical": "꒟",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꅑꒃꅺꒃ",
        "han": "赔礼道歉"
      },
      {
        "yi": "ꅺꈨ",
        "han": "风传"
      },
      {
        "yi": "ꏮꐳꐨꅺꌡ",
        "han": "转速比"
      },
      {
        "yi": "ꅺꌡꉚ",
        "han": "例举"
      },
      {
        "yi": "ꆅꅺꌡ",
        "han": "病例"
      }
    ]
  },
  {
    "g": "ꆏ",
    "initial": "n",
    "final": "e",
    "tone": "",
    "py": "ne",
    "ipa": "nɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ne.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꄔꈩꆏꄔꐗ",
        "han": "玩火自焚"
      },
      {
        "yi": "ꋍꈨꆏꃅꋍꈨꆏꀋꃅ",
        "han": "有所为有所不为"
      },
      {
        "yi": "ꆏꉠꎁꃅꉻꍯꀾꁬꃼꇬꍑꀕ",
        "han": "你能帮我买张火车票吗"
      },
      {
        "yi": "ꀃꑍꑬꆏꌕꑍꉬ",
        "han": "今天是星期三"
      },
      {
        "yi": "ꉢꈌꀋꁧꑲꆏ",
        "han": "没有我的准许"
      }
    ]
  },
  {
    "g": "ꆩ",
    "initial": "hl",
    "final": "e",
    "tone": "",
    "py": "hle",
    "ipa": "ɬɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hle.mp3",
    "radical": "꒨",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀊꆩꃀ",
        "han": "中古"
      }
    ]
  },
  {
    "g": "ꇌ",
    "initial": "l",
    "final": "e",
    "tone": "",
    "py": "le",
    "ipa": "lɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_le.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇌꎸꎸꈠꋂꁍꌠ",
        "han": "凉拌牛肉"
      },
      {
        "yi": "ꇌꎴꄇꒉ",
        "han": "泠水江"
      },
      {
        "yi": "ꂿꇌ",
        "han": "犁牛"
      },
      {
        "yi": "ꃰꇌꋍꃅꏮ",
        "han": "环行"
      },
      {
        "yi": "ꊿꄻꌑꇌ",
        "han": "人造棉"
      }
    ]
  },
  {
    "g": "ꇰ",
    "initial": "g",
    "final": "e",
    "tone": "",
    "py": "ge",
    "ipa": "kɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ge.mp3",
    "radical": "꒔",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꇰꇍꀯ",
        "han": "哥伦布"
      },
      {
        "yi": "ꇰꒉꃅꒉ",
        "han": "傻乐"
      },
      {
        "yi": "ꃶꎴꇰꎴ",
        "han": "装疯卖傻"
      },
      {
        "yi": "ꌞ꒧ꀉꇰꌠ",
        "han": "大业"
      },
      {
        "yi": "ꐮꇰ",
        "han": "交换"
      }
    ]
  },
  {
    "g": "ꈌ",
    "initial": "k",
    "final": "e",
    "tone": "",
    "py": "ke",
    "ipa": "kʰɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ke.mp3",
    "radical": "꓆",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꃣꈌꂥꀋꀘꌦꌠ",
        "han": "疑案"
      },
      {
        "yi": "ꃏꈌ",
        "han": "外阴"
      },
      {
        "yi": "ꈌꊪꊿ",
        "han": "人证"
      },
      {
        "yi": "ꈌꐳꈌꌧ",
        "han": "快书"
      },
      {
        "yi": "ꈌꑕꄯꒉ",
        "han": "拍纸簿"
      }
    ]
  },
  {
    "g": "ꈨ",
    "initial": "gg",
    "final": "e",
    "tone": "",
    "py": "gge",
    "ipa": "gɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gge.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꌬꈨꌕꏠꌠ",
        "han": "三级消费者"
      },
      {
        "yi": "ꆏꋬꂻꈨꅪꅊꇈ",
        "han": "祝你吉祥如意"
      },
      {
        "yi": "ꂿꑌꈨꅼꇨ",
        "han": "耳濡目染"
      },
      {
        "yi": "ꈨꆨꏮꈜ",
        "han": "黄道带"
      },
      {
        "yi": "ꎇꃀꍅꑓꋋꈨꇢꊭꑞꄉꀉꑌꃅꐥ",
        "han": "这些牲畜之中哪些最多"
      }
    ]
  },
  {
    "g": "ꈾ",
    "initial": "mg",
    "final": "e",
    "tone": "",
    "py": "mge",
    "ipa": "ŋgɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mge.mp3",
    "radical": "꒟",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꅇꈴꉁꈾ",
        "han": "通信设备"
      },
      {
        "yi": "ꉪꈾ",
        "han": "思量"
      },
      {
        "yi": "ꈾꋤꆹꒉ",
        "han": "沸泉"
      },
      {
        "yi": "ꂿꊐꈾꁮ",
        "han": "灵柩"
      },
      {
        "yi": "ꀠꈾ",
        "han": "痒疹"
      }
    ]
  },
  {
    "g": "ꉛ",
    "initial": "hx",
    "final": "e",
    "tone": "",
    "py": "hxe",
    "ipa": "hɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxe.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꊷꅉꉛ",
        "han": "热带鱼"
      },
      {
        "yi": "ꑸꊪꀔꉛ",
        "han": "扬子鳄"
      },
      {
        "yi": "ꋍꃀꉛ",
        "han": "肺鱼"
      },
      {
        "yi": "ꑀꉛ",
        "han": "娃娃鱼"
      },
      {
        "yi": "ꉛꑎꁯꄸ",
        "han": "星虫"
      }
    ]
  },
  {
    "g": "ꉬ",
    "initial": "ng",
    "final": "e",
    "tone": "",
    "py": "nge",
    "ipa": "ŋɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nge.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃌꒆꐯꇯꂿꑘꊿꀋꉬꀐꇬꉜꌊꂿꑘꀀꊿꃅꄉꌠ",
        "han": "本人及配偶均为农业户口或界定为农村居民户口的"
      },
      {
        "yi": "ꀋꃅꎼꈎꆹ2005ꈎꉬ",
        "han": "今年是2005年"
      },
      {
        "yi": "ꉬꇮꎅꄻ",
        "han": "全排列"
      },
      {
        "yi": "ꈆꀨꉬꇓꈓ",
        "han": "科伯思城"
      },
      {
        "yi": "ꃥꈿꑳꋋꂷꀀꌒꂷꉬ",
        "han": "这旅馆好住"
      }
    ]
  },
  {
    "g": "ꉾ",
    "initial": "h",
    "final": "e",
    "tone": "",
    "py": "he",
    "ipa": "xɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_he.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆏꉾꀞ",
        "han": "你好吗"
      },
      {
        "yi": "ꉾꐯꉾꅉ",
        "han": "首善之区"
      },
      {
        "yi": "ꉾꐯꉾꌠ",
        "han": "质量很好"
      },
      {
        "yi": "ꆞꋋꈬꐛꄟꉾꈫꉬ",
        "han": "这条裤子样式很好"
      },
      {
        "yi": "ꆏꉾ",
        "han": "你好"
      }
    ]
  },
  {
    "g": "ꊋ",
    "initial": "w",
    "final": "e",
    "tone": "",
    "py": "we",
    "ipa": "ɣɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_we.mp3",
    "radical": "꒓",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꊋꏓꋍꏢꃅ",
        "han": "齐心协力"
      },
      {
        "yi": "ꀉꁁꐤꊋ",
        "han": "绝无仅有"
      },
      {
        "yi": "ꊋꇴꏂ",
        "han": "钻营"
      },
      {
        "yi": "ꐞꊋ",
        "han": "分力"
      },
      {
        "yi": "ꀉꆈꉘꉩꊋꃤ",
        "han": "黑恶势力"
      }
    ]
  },
  {
    "g": "ꊠ",
    "initial": "z",
    "final": "e",
    "tone": "",
    "py": "ze",
    "ipa": "tsɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ze.mp3",
    "radical": "꒓",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꌙꇐꊠ",
        "han": "盘山豆"
      },
      {
        "yi": "ꊠꃅꉣꎭ",
        "han": "曾母暗沙"
      },
      {
        "yi": "ꈁꏮꊠꑦꏹ",
        "han": "抗菌增效剂"
      },
      {
        "yi": "ꊠꃆꒄꉛ",
        "han": "遮目鱼"
      },
      {
        "yi": "ꊠꊀꀪ",
        "han": "星秀草"
      }
    ]
  },
  {
    "g": "ꋂ",
    "initial": "c",
    "final": "e",
    "tone": "",
    "py": "ce",
    "ipa": "tsʰɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ce.mp3",
    "radical": "꒨",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꏤ ꑌꋂ",
        "han": "碱式盐"
      },
      {
        "yi": "ꊼꇅꌣꈚꋂ",
        "han": "小康村"
      },
      {
        "yi": "ꋂꄮꆿꂷꃷꅉꋋꂷꇬꋂꄮꆿꂷꁌꏤꈍꃅꐙ",
        "han": "这个蔬菜市场价格怎么样"
      },
      {
        "yi": "ꉢꈀꃼꌠꋂꄮꋋꈨꐯꇯꎆꃀꈍꑋꑟ",
        "han": "我买的这些菜多少钱"
      },
      {
        "yi": "ꆍꄚꏝꀪꋂꄮꐤꀕ",
        "han": "你们有日本菜吗"
      }
    ]
  },
  {
    "g": "ꋠ",
    "initial": "zz",
    "final": "e",
    "tone": "",
    "py": "zze",
    "ipa": "dzɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zze.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉢꇌꎸꋠ",
        "han": "我吃牛肉"
      },
      {
        "yi": "ꋠꀐ",
        "han": "吃了"
      },
      {
        "yi": "ꊋꋠꇀꏦ",
        "han": "畏难"
      },
      {
        "yi": "ꀋꋠꌦ",
        "han": "还没吃"
      },
      {
        "yi": "ꉽꐯꀋꃀꇷꋚꋠ",
        "han": "吃大公饭"
      }
    ]
  },
  {
    "g": "ꋽ",
    "initial": "nz",
    "final": "e",
    "tone": "",
    "py": "nze",
    "ipa": "ndzɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nze.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꋽꇱ",
        "han": "烘衬"
      },
      {
        "yi": "ꐮꋽꄀ",
        "han": "映带"
      },
      {
        "yi": "ꊜꋽꒃ",
        "han": "乘隙"
      },
      {
        "yi": "ꋽꈭꀕ",
        "han": "俊俏"
      },
      {
        "yi": "ꄻꂠꋽ",
        "han": "润饰"
      }
    ]
  },
  {
    "g": "ꌜ",
    "initial": "s",
    "final": "e",
    "tone": "",
    "py": "se",
    "ipa": "sɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_se.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃛꌜꑙ",
        "han": "猢狲"
      },
      {
        "yi": "ꌜꀘꂽꌬꏡꁈ",
        "han": "孙膑兵法"
      },
      {
        "yi": "ꇨꌜ",
        "han": "高僧"
      },
      {
        "yi": "ꌧꊿꀉꇨꌜ",
        "han": "人才大省"
      },
      {
        "yi": "ꌧꍧꌜꍰꄖꏃꑾꌋꈤꊿꋅꒉꌶꅉꆀꃆꌷꅈ",
        "han": "四川省成都市西南民族大学彝学学院"
      }
    ]
  },
  {
    "g": "ꌺ",
    "initial": "ss",
    "final": "e",
    "tone": "",
    "py": "sse",
    "ipa": "zɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sse.mp3",
    "radical": "꒔",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀆꐒꐞꌺꁧꊌꀋꐈꃷꁨ",
        "han": "水的离子积常数"
      },
      {
        "yi": "ꇗꀋꇱꌺꀿ",
        "han": "孤雌生殖"
      },
      {
        "yi": "ꌴꁮꌺ",
        "han": "男人"
      },
      {
        "yi": "ꂘꅐꌶꌺ",
        "han": "桃李"
      },
      {
        "yi": "ꇮꌺꏃ",
        "han": "带徒弟"
      }
    ]
  },
  {
    "g": "ꍓ",
    "initial": "zh",
    "final": "e",
    "tone": "",
    "py": "zhe",
    "ipa": "tʂɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhe.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꇑ,ꍓꄰꊿꑫꅿꀎꋏꀉꁌ、ꀊꂵꂷꅍꄀꅉ。",
        "han": "禄，者氏家族宗亲考妣灵位。"
      },
      {
        "yi": "ꇰꍓꏽ",
        "han": "愚妄"
      },
      {
        "yi": "ꍂꍓ",
        "han": "宫刑"
      },
      {
        "yi": "ꍓꄉꋐꌠ",
        "han": "坊本"
      },
      {
        "yi": "ꎽꏮꍓꃯ",
        "han": "胶靴"
      }
    ]
  },
  {
    "g": "ꍯ",
    "initial": "ch",
    "final": "e",
    "tone": "",
    "py": "che",
    "ipa": "tʂʰɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_che.mp3",
    "radical": "꓃",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉻꍯꑌꌠꅓꁧꎬꅉꇿꐛ",
        "han": "乘客在哪里可以托运行李"
      },
      {
        "yi": "ꍯꆧꆅ",
        "han": "苗稻瘟"
      },
      {
        "yi": "ꊿꑌꍯ",
        "han": "客车"
      },
      {
        "yi": "ꐕꍯ",
        "han": "汽车"
      },
      {
        "yi": "ꎷꈜꀋꐥꄆꍯ",
        "han": "无轨电车"
      }
    ]
  },
  {
    "g": "ꎆ",
    "initial": "rr",
    "final": "e",
    "tone": "",
    "py": "rre",
    "ipa": "dʐɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rre.mp3",
    "radical": "꒠",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉌꒊꎆꏣ",
        "han": "信用经济"
      },
      {
        "yi": "ꎞꐈꎂꎆꉻ",
        "han": "退化矩阵"
      },
      {
        "yi": "ꋌꎆꃀꀋꐥꄷꊿꋌꀋꑇ",
        "han": "我不相信他没有钱"
      },
      {
        "yi": "ꁦꎆꀔꇱ",
        "han": "扩充"
      },
      {
        "yi": "ꊛꒊꃷꁨꎆ",
        "han": "递减数列"
      }
    ]
  },
  {
    "g": "ꎝ",
    "initial": "nr",
    "final": "e",
    "tone": "",
    "py": "nre",
    "ipa": "ndʐɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nre.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎝꊫꄲ",
        "han": "债券"
      },
      {
        "yi": "ꁨꇐꎝꃆꐛꉻ",
        "han": "资产负责结构"
      },
      {
        "yi": "ꈏꎝ",
        "han": "内债"
      },
      {
        "yi": "ꉇꎝ",
        "han": "外债"
      },
      {
        "yi": "ꎝꏆꄹꏦ",
        "han": "租让制"
      }
    ]
  },
  {
    "g": "ꎸ",
    "initial": "sh",
    "final": "e",
    "tone": "",
    "py": "she",
    "ipa": "ʂɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_she.mp3",
    "radical": "꒓",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꉏꎸ",
        "han": "张口"
      },
      {
        "yi": "ꎸꑮꍅꑐꐨꊱꁨ",
        "han": "金属活动性顺序"
      },
      {
        "yi": "ꎸꑟꍬ",
        "han": "走钢丝"
      },
      {
        "yi": "ꁌꆺꑳꎸꄃ",
        "han": "普洛耶什蒂"
      },
      {
        "yi": "ꎸꑟꈻꅍ",
        "han": "拉模"
      }
    ]
  },
  {
    "g": "ꏒ",
    "initial": "r",
    "final": "e",
    "tone": "",
    "py": "re",
    "ipa": "ʐɯ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_re.mp3",
    "radical": "꒪",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꁗꏒ",
        "han": "分散"
      },
      {
        "yi": "ꁷꏒ、ꁸꁊ",
        "han": "分布"
      },
      {
        "yi": "ꌕꀥꃘꈜꃰ、ꁗꏒ",
        "han": "离散"
      },
      {
        "yi": "ꇕꏒ",
        "han": "沉吟"
      },
      {
        "yi": "ꄚꏒꀕ",
        "han": "铿锵有力"
      }
    ]
  },
  {
    "g": "ꀫ",
    "initial": "b",
    "final": "e",
    "tone": "p",
    "py": "bep",
    "ipa": "pɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bep.mp3",
    "radical": "꓄",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀫꀊꎷꈜ",
        "han": "贝阿铁路"
      },
      {
        "yi": "ꏧꏸꀫꀘꉢ",
        "han": "甲基苯丙胺"
      },
      {
        "yi": "ꀨꀫ",
        "han": "溴苯"
      },
      {
        "yi": "ꑸꄂꌦꑸꀫꀠ",
        "han": "亚的斯亚贝巴"
      },
      {
        "yi": "ꏳꀫꑴꑭꌡꆾ",
        "han": "聚苯乙烯塑料"
      }
    ]
  },
  {
    "g": "ꁫ",
    "initial": "bb",
    "final": "e",
    "tone": "p",
    "py": "bbep",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbep.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꃳ",
    "initial": "v",
    "final": "e",
    "tone": "p",
    "py": "vep",
    "ipa": "vɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vep.mp3",
    "radical": "꒱",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꑵꃳꁬ",
        "han": "鸢尾"
      }
    ]
  },
  {
    "g": "ꄓ",
    "initial": "d",
    "final": "e",
    "tone": "p",
    "py": "dep",
    "ipa": "tɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dep.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃨꁌꄓ",
        "han": "扬花"
      },
      {
        "yi": "ꄓꑦꀻꌧꇗ",
        "han": "邓小平论"
      },
      {
        "yi": "ꊿꌗꄓꂂ",
        "han": "人气急升"
      },
      {
        "yi": "ꆾꇻꑟꄓꁲꃚ",
        "han": "来客星顿枪声"
      },
      {
        "yi": "ꀋꆏꃅꄓꇩꑟꌠꃏꏸꐤꀕ",
        "han": "有直达德国的飞机吗"
      }
    ]
  },
  {
    "g": "ꄯ",
    "initial": "t",
    "final": "e",
    "tone": "p",
    "py": "tep",
    "ipa": "tʰɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tep.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐳꄜꄯ ꒉ",
        "han": "快报"
      },
      {
        "yi": "ꎖꅍꄯꒉ",
        "han": "试纸"
      },
      {
        "yi": "ꐩꋊꃰꊿꁱꄯꒉ",
        "han": "纪传体"
      },
      {
        "yi": "ꃁꍣꄯꒉ",
        "han": "书评"
      },
      {
        "yi": "ꂱꆀꍬꀧꄯ ꒉ",
        "han": "军令状"
      }
    ]
  },
  {
    "g": "ꅊ",
    "initial": "dd",
    "final": "e",
    "tone": "p",
    "py": "ddep",
    "ipa": "dɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddep.mp3",
    "radical": "꒬",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꅽꎭꈓꂄꅊꇈ",
        "han": "祝你好运"
      },
      {
        "yi": "ꆏꐥꌒꄻꌒꅊꇈ",
        "han": "祝你幸福美满"
      },
      {
        "yi": "ꅊꁧꒉ",
        "han": "告便"
      },
      {
        "yi": "ꉠꎁꃅꂘꃀꏭꉌꌒꅊꇈ",
        "han": "请帮我向老师问好"
      },
      {
        "yi": "ꆏꄚꇬꈩꇬꈩꌒꅊꇈ",
        "han": "我希望你在这里玩得开心"
      }
    ]
  },
  {
    "g": "ꅡ",
    "initial": "nd",
    "final": "e",
    "tone": "p",
    "py": "ndep",
    "ipa": "ndɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndep.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꅡꈭꌟꒉ",
        "han": "贤达"
      },
      {
        "yi": "ꅡꊪꀕ",
        "han": "雄伟"
      },
      {
        "yi": "ꅡꅓꐨ",
        "han": "吨位"
      },
      {
        "yi": "ꅡꈭꐛꊋ",
        "han": "大器晚成"
      },
      {
        "yi": "ꅡꈭ",
        "han": "德古"
      }
    ]
  },
  {
    "g": "ꅻ",
    "initial": "hn",
    "final": "e",
    "tone": "p",
    "py": "hnep",
    "ipa": "n̥ɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnep.mp3",
    "radical": "꒟",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꅻꌺ",
        "han": "耳垂"
      },
      {
        "yi": "ꅻꄖꌺ",
        "han": "耳屏"
      },
      {
        "yi": "ꇉꁧꅻꃏ",
        "han": "耳聋"
      },
      {
        "yi": "ꅻꃰ",
        "han": "耳坠子"
      },
      {
        "yi": "ꅻꃀ",
        "han": "耳轮"
      }
    ]
  },
  {
    "g": "ꆐ",
    "initial": "n",
    "final": "e",
    "tone": "p",
    "py": "nep",
    "ipa": "nɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nep.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈎꒉꆐꐕ",
        "han": "寿斑"
      },
      {
        "yi": "ꑓꇷꆐꑌ",
        "han": "月家劳"
      },
      {
        "yi": "ꏧꉿꆐ",
        "han": "结合能"
      },
      {
        "yi": "ꑕꋌꆐ",
        "han": "妞此勒"
      },
      {
        "yi": "ꆄꄟ、ꌂꆅ、ꆐꑌ、ꆄꃼꑌ",
        "han": "炎症"
      }
    ]
  },
  {
    "g": "ꆪ",
    "initial": "hl",
    "final": "e",
    "tone": "p",
    "py": "hlep",
    "ipa": "ɬɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlep.mp3",
    "radical": "꒨",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꃅꈎꃅꆪꌗꏦ",
        "han": "夏历"
      },
      {
        "yi": "ꈎꏅꆪꆙ",
        "han": "年节"
      },
      {
        "yi": "ꌤꃅꈎꆪ",
        "han": "工龄"
      },
      {
        "yi": "ꆪꈌꏸ",
        "han": "白洋"
      },
      {
        "yi": "ꈎꆪꏤꈉ",
        "han": "年限"
      }
    ]
  },
  {
    "g": "ꇍ",
    "initial": "l",
    "final": "e",
    "tone": "p",
    "py": "lep",
    "ipa": "lɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lep.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇰꇍꀯ",
        "han": "哥伦布"
      },
      {
        "yi": "ꄆꐞꇍꄳ",
        "han": "电解槽"
      },
      {
        "yi": "ꇍꒃ",
        "han": "论语"
      },
      {
        "yi": "ꉇꈭꇍꌋꏣꊭ",
        "han": "外周神经节"
      },
      {
        "yi": "ꊝꇍ",
        "han": "左轮"
      }
    ]
  },
  {
    "g": "ꇱ",
    "initial": "g",
    "final": "e",
    "tone": "p",
    "py": "gep",
    "ipa": "kɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gep.mp3",
    "radical": "꒗",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꋓꇱꅇ",
        "han": "联合词"
      },
      {
        "yi": "ꈴꐨꀥꇱꇷꑴ",
        "han": "增透膜"
      },
      {
        "yi": "ꁧꐈꇱꊨꐛ",
        "han": "积化和差"
      },
      {
        "yi": "ꄅꇱ",
        "han": "复合"
      },
      {
        "yi": "ꊋꃷꇱ",
        "han": "淫威"
      }
    ]
  },
  {
    "g": "ꈍ",
    "initial": "k",
    "final": "e",
    "tone": "p",
    "py": "kep",
    "ipa": "kʰɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kep.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꏦꈜꈍ ꎞ",
        "han": "街头诗"
      },
      {
        "yi": "ꀋꄚꈍ",
        "han": "懒洋洋"
      },
      {
        "yi": "ꎭꉮꁧꇬꈍꃅꁧ",
        "han": "到上海怎么走"
      },
      {
        "yi": "ꀊꆨꈍꎞ",
        "han": "古诗"
      },
      {
        "yi": "ꆳꈍꈻ",
        "han": "收风"
      }
    ]
  },
  {
    "g": "ꈩ",
    "initial": "gg",
    "final": "e",
    "tone": "p",
    "py": "ggep",
    "ipa": "gɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggep.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꀊꉘꈩꅉ",
        "han": "少年宫"
      },
      {
        "yi": "ꏓꄻꈩ",
        "han": "会演"
      },
      {
        "yi": "ꀥꈩ",
        "han": "助跑"
      },
      {
        "yi": "ꈩꄐꈩꏤ",
        "han": "前台"
      },
      {
        "yi": "ꈩꐺ",
        "han": "串游"
      }
    ]
  },
  {
    "g": "ꈿ",
    "initial": "mg",
    "final": "e",
    "tone": "p",
    "py": "mgep",
    "ipa": "ŋgɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgep.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃥꈿꑳꇬꃀꈿꅉꐛꀕ",
        "han": "旅馆里有会议室吗"
      },
      {
        "yi": "ꑖꉬꃅꌉꈿ",
        "han": "义战"
      },
      {
        "yi": "ꈿꆈ",
        "han": "苦荞"
      },
      {
        "yi": "ꂅꈿꏿꄉꃼ",
        "han": "抢购"
      },
      {
        "yi": "ꎿꇬꌉꈿ",
        "han": "海战"
      }
    ]
  },
  {
    "g": "ꉜ",
    "initial": "hx",
    "final": "e",
    "tone": "p",
    "py": "hxep",
    "ipa": "hɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hxep.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉜꈧ",
        "han": "赏玩"
      },
      {
        "yi": "ꊏꄈꈐꏭꄉꉜ",
        "han": "留党察看"
      },
      {
        "yi": "ꉜꎼꇁꇬ",
        "han": "基于"
      },
      {
        "yi": "ꉜꇐꋦꁧ",
        "han": "观赏植物"
      },
      {
        "yi": "ꒈꃚꉜꄉꇉꇳ",
        "han": "逆水行舟"
      }
    ]
  },
  {
    "g": "ꉭ",
    "initial": "ng",
    "final": "e",
    "tone": "p",
    "py": "ngep",
    "ipa": "ŋɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ngep.mp3",
    "radical": "꒩",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꂾꆏꉿꉭ",
        "han": "触目惊心"
      },
      {
        "yi": "ꉭꇌꉫꇌ",
        "han": "打晃儿"
      },
      {
        "yi": "ꅥꉭꌉꏦ",
        "han": "技击"
      },
      {
        "yi": "ꉭꄂꄲ",
        "han": "风疹块"
      },
      {
        "yi": "ꀒꉭꊂꉫ",
        "han": "迟疑"
      }
    ]
  },
  {
    "g": "ꉿ",
    "initial": "h",
    "final": "e",
    "tone": "p",
    "py": "hep",
    "ipa": "xɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hep.mp3",
    "radical": "꒩",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꂷꉿ",
        "han": "马赫"
      },
      {
        "yi": "ꉿꍩꂷ",
        "han": "核弹头"
      },
      {
        "yi": "ꏧꉿꆐ",
        "han": "结合能"
      },
      {
        "yi": "ꉿꂱꌡ",
        "han": "合霉素"
      },
      {
        "yi": "ꉼꉿꋇ",
        "han": "回纥"
      }
    ]
  },
  {
    "g": "ꊌ",
    "initial": "w",
    "final": "e",
    "tone": "p",
    "py": "wep",
    "ipa": "ɣɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_wep.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇩꏤꊌꎆ",
        "han": "国民收入"
      },
      {
        "yi": "ꑍꃢꋒꊌ",
        "han": "二次剩余"
      },
      {
        "yi": "ꉻꐥꎥꊌ",
        "han": "公共解"
      },
      {
        "yi": "ꃅꅍꌵꈭꐨꃅꅍꊌ",
        "han": "下岗再就业"
      },
      {
        "yi": "ꈍꃅꂿꉀꀋꊌ",
        "han": "不知所措"
      }
    ]
  },
  {
    "g": "ꊡ",
    "initial": "z",
    "final": "e",
    "tone": "p",
    "py": "zep",
    "ipa": "tsɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zep.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊋꊡꁥ",
        "han": "拉拉队"
      },
      {
        "yi": "ꆽꊡꊋ",
        "han": "爆发力"
      },
      {
        "yi": "ꊡꇊꊡ",
        "han": "丁宁"
      },
      {
        "yi": "ꉌꊈꊋꊡ",
        "han": "精神鼓励"
      },
      {
        "yi": "ꊋꊡꈁꁠꁵ",
        "han": "奖励"
      }
    ]
  },
  {
    "g": "ꋃ",
    "initial": "c",
    "final": "e",
    "tone": "p",
    "py": "cep",
    "ipa": "tsʰɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cep.mp3",
    "radical": "꒳",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꋃꒉꊫ",
        "han": "伤风咳嗽"
      },
      {
        "yi": "ꆲꅐꋃꐛ",
        "han": "陈腐"
      },
      {
        "yi": "ꀊꑙꋃꒉ",
        "han": "百日咳"
      },
      {
        "yi": "ꋃꒉꐎ",
        "han": "一般感冒"
      },
      {
        "yi": "ꑳꋃ",
        "han": "英寸"
      }
    ]
  },
  {
    "g": "ꋡ",
    "initial": "zz",
    "final": "e",
    "tone": "p",
    "py": "zzep",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzep.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꌝ",
    "initial": "s",
    "final": "e",
    "tone": "p",
    "py": "sep",
    "ipa": "sɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sep.mp3",
    "radical": "꒛",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꇑꌝꃛ",
        "han": "卢瑟福"
      },
      {
        "yi": "ꏿꎭꁠꐤꌝꁯ",
        "han": "输卵管伞"
      },
      {
        "yi": "ꂼꌝꅳꍩ",
        "han": "毛瑟枪"
      },
      {
        "yi": "ꌝꆫꁯ",
        "han": "阳伞"
      },
      {
        "yi": "ꌝꋌꀈꃀ",
        "han": "散兵线"
      }
    ]
  },
  {
    "g": "ꌻ",
    "initial": "ss",
    "final": "e",
    "tone": "p",
    "py": "ssep",
    "ipa": "zɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssep.mp3",
    "radical": "꒨",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌻꌺ、ꀄꊭ",
        "han": "区区"
      },
      {
        "yi": "ꌻꉘ",
        "han": "双生"
      },
      {
        "yi": "ꀊꉘꌻꆗ",
        "han": "童子"
      },
      {
        "yi": "ꌻꌺ",
        "han": "微粒"
      },
      {
        "yi": "ꌻꉘꋒ",
        "han": "双胞胎"
      }
    ]
  },
  {
    "g": "ꍔ",
    "initial": "zh",
    "final": "e",
    "tone": "p",
    "py": "zhep",
    "ipa": "tʂɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhep.mp3",
    "radical": "꒤",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꍔꌺ",
        "han": "缸子"
      },
      {
        "yi": "ꍔꆗ",
        "han": "推广"
      },
      {
        "yi": "ꍔꅐꍔꊧꌺ",
        "han": "遗传因子"
      },
      {
        "yi": "ꍔꀊꐯ",
        "han": "扩张"
      },
      {
        "yi": "ꍔꍞꌧꑲ",
        "han": "政治文明"
      }
    ]
  },
  {
    "g": "ꍰ",
    "initial": "ch",
    "final": "e",
    "tone": "p",
    "py": "chep",
    "ipa": "tʂʰɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chep.mp3",
    "radical": "꓃",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌋꄉꍰꆗ",
        "han": "抽样调查"
      },
      {
        "yi": "ꇽꍰꇓꈓ",
        "han": "开城"
      },
      {
        "yi": "ꀉꑳꋪꍰ",
        "han": "小儿走子"
      },
      {
        "yi": "ꍰꄤꐊ",
        "han": "陈潭秋"
      },
      {
        "yi": "ꑐꁙꑐꍰ",
        "han": "毛烘烘"
      }
    ]
  },
  {
    "g": "ꎇ",
    "initial": "rr",
    "final": "e",
    "tone": "p",
    "py": "rrep",
    "ipa": "dʐɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rrep.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍕꎇꐊꃷꁨ",
        "han": "弹性系数"
      },
      {
        "yi": "ꆧꁨꎇꆧꁨꀋꂿ",
        "han": "黑灯瞎火"
      },
      {
        "yi": "ꒆꎇꅉ",
        "han": "伸长区"
      },
      {
        "yi": "ꍕꎇꇨꐨꐊꃷꁨ",
        "han": "倔强原数"
      },
      {
        "yi": "ꑃꑟꍕꎇꇨꐨꐊꃷꁨ",
        "han": "弹簧的倔强系数"
      }
    ]
  },
  {
    "g": "ꎞ",
    "initial": "nr",
    "final": "e",
    "tone": "p",
    "py": "nrep",
    "ipa": "ndʐɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrep.mp3",
    "radical": "꒬",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊂꈘꈍꎞ",
        "han": "风花雪月"
      },
      {
        "yi": "ꇫꅉꀋꎞꊨꏦ",
        "han": "不退位减法"
      },
      {
        "yi": "ꒉꄩ ꎞꎭ",
        "han": "航运"
      },
      {
        "yi": "ꇬꊎꎞꎭ",
        "han": "起运"
      },
      {
        "yi": "ꇴꐈꉻꐈ、ꎞꐈ",
        "han": "退化"
      }
    ]
  },
  {
    "g": "ꎹ",
    "initial": "sh",
    "final": "e",
    "tone": "p",
    "py": "shep",
    "ipa": "ʂɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shep.mp3",
    "radical": "꒓",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꎹꉼꍗꑴꐋꀋꌡꏦꃤꏭꁏꌠ",
        "han": "反对社会主义非常法"
      },
      {
        "yi": "ꇉꌐꄀꑱꃀꎹ",
        "han": "刻舟求剑"
      },
      {
        "yi": "ꊋꃅꎆꎹ",
        "han": "打工"
      },
      {
        "yi": "ꊙꌠꎹꃅ",
        "han": "招投标"
      },
      {
        "yi": "ꃺꃶꎹꄉꌠ",
        "han": "如兄"
      }
    ]
  },
  {
    "g": "ꏓ",
    "initial": "r",
    "final": "e",
    "tone": "p",
    "py": "rep",
    "ipa": "ʐɯ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rep.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏓꐋꀋꎹ",
        "han": "不结盟"
      },
      {
        "yi": "ꏓꀨꈛꏦ",
        "han": "总路线"
      },
      {
        "yi": "ꍕꏓ",
        "han": "缩合"
      },
      {
        "yi": "ꏓ ꈹꐯꇯ",
        "han": "归拢"
      },
      {
        "yi": "ꋍꈜꏓ",
        "han": "攒聚"
      }
    ]
  },
  {
    "g": "ꀬ",
    "initial": "b",
    "final": "u",
    "tone": "t",
    "py": "but",
    "ipa": "pu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_but.mp3",
    "radical": "꒪",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀬꅑꃅꌬꈧ",
        "han": "勇于实践"
      },
      {
        "yi": "ꌧꑌꀬꅑ",
        "han": "胆识"
      },
      {
        "yi": "ꒈꀑꅉꀬ",
        "han": "北纬"
      },
      {
        "yi": "ꀝꀬꏦꍠ",
        "han": "布帛"
      },
      {
        "yi": "ꌳꈄꀬꅑ",
        "han": "英勇"
      }
    ]
  },
  {
    "g": "ꁊ",
    "initial": "p",
    "final": "u",
    "tone": "t",
    "py": "put",
    "ipa": "pʰu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_put.mp3",
    "radical": "꒞",
    "strokes": 1,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁊꏮ",
        "han": "流传"
      },
      {
        "yi": "ꒉꁊꅍ",
        "han": "喷雾器"
      },
      {
        "yi": "ꃢꅐꐨꁸꁊ",
        "han": "频率分布"
      },
      {
        "yi": "ꁘꁊꌗꄀ",
        "han": "三逸层"
      },
      {
        "yi": "ꒉꁊ ꂱꀯ",
        "han": "喷嘴"
      }
    ]
  },
  {
    "g": "ꁬ",
    "initial": "bb",
    "final": "u",
    "tone": "t",
    "py": "bbut",
    "ipa": "bu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbut.mp3",
    "radical": "꒛",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꆅꉜꄉꁬꋌꄐ",
        "han": "对症下药"
      },
      {
        "yi": "ꇵꈌꃶꁬꋌ",
        "han": "古柯碱"
      },
      {
        "yi": "ꇩꁬꋌ",
        "han": "国药"
      },
      {
        "yi": "ꂷꄨꇊꁬ",
        "han": "曼佗罗"
      },
      {
        "yi": "ꁬꋌꉄꅉ",
        "han": "药房"
      }
    ]
  },
  {
    "g": "ꂅ",
    "initial": "nb",
    "final": "u",
    "tone": "t",
    "py": "nbut",
    "ipa": "mbu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbut.mp3",
    "radical": "꒝",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉌꂅ",
        "han": "心烦"
      },
      {
        "yi": "ꅔꈿꂅꈿꏿ",
        "han": "争分夺秒"
      },
      {
        "yi": "ꋓꂅꄉꌤꃅ",
        "han": "竞争上岗"
      },
      {
        "yi": "ꉌꂵ ꂅ",
        "han": "心焦"
      },
      {
        "yi": "ꂅꈿꏿꄉꃼ",
        "han": "抢购"
      }
    ]
  },
  {
    "g": "ꂣ",
    "initial": "hm",
    "final": "u",
    "tone": "t",
    "py": "hmut",
    "ipa": "m̥u⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmut.mp3",
    "radical": "꒾",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꂣꈓ",
        "han": "怀抱"
      }
    ]
  },
  {
    "g": "ꃃ",
    "initial": "m",
    "final": "u",
    "tone": "t",
    "py": "mut",
    "ipa": "mu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mut.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃀꇌꏈꃃꅥ",
        "han": "开罗"
      },
      {
        "yi": "ꃃꐆꀕ",
        "han": "愤愤"
      },
      {
        "yi": "ꃃꈌꃃꑓ",
        "han": "怒容"
      },
      {
        "yi": "ꑳꃃ",
        "han": "烟灰"
      },
      {
        "yi": "ꎲꃃꏿ",
        "han": "羞愤"
      }
    ]
  },
  {
    "g": "ꃘ",
    "initial": "f",
    "final": "u",
    "tone": "t",
    "py": "fut",
    "ipa": "fu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fut.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꊰꃘꄟꃀꀛꐂꌠ",
        "han": "十六天魔舞"
      },
      {
        "yi": "ꆺꃘ",
        "han": "锁喉"
      },
      {
        "yi": "ꃘꏢꌠ",
        "han": "第六条"
      },
      {
        "yi": "ꃘꇥꉧꎑꁯꄸ",
        "han": "六钩蚴"
      },
      {
        "yi": "ꏢꃘꌺ",
        "han": "京二胡"
      }
    ]
  },
  {
    "g": "ꃴ",
    "initial": "v",
    "final": "u",
    "tone": "t",
    "py": "vut",
    "ipa": "vu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vut.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃴꑌꌋꅪ",
        "han": "妊妇"
      },
      {
        "yi": "ꃴꑌ",
        "han": "大肚子"
      },
      {
        "yi": "ꁧꃴꇉꅍ",
        "han": "翠微"
      },
      {
        "yi": "ꀨꎹꆽꃴ",
        "han": "侍弄"
      },
      {
        "yi": "ꉑꋖꀊꃴ",
        "han": "青虾"
      }
    ]
  },
  {
    "g": "ꄔ",
    "initial": "d",
    "final": "u",
    "tone": "t",
    "py": "dut",
    "ipa": "tu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dut.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃪꆭꊹꄔ",
        "han": "铁蚕豆"
      },
      {
        "yi": "ꇂꋌꄔꄿ",
        "han": "蜡烛"
      },
      {
        "yi": "ꃅꄔꇉꅪꋌ",
        "han": "石苇"
      },
      {
        "yi": "ꑦꐈꄔꋌ",
        "han": "硝化甘油"
      },
      {
        "yi": "ꈯꄔꁠꐤ",
        "han": "中央管"
      }
    ]
  },
  {
    "g": "ꄰ",
    "initial": "t",
    "final": "u",
    "tone": "t",
    "py": "tut",
    "ipa": "tʰu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tut.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏗꄰꌧꁈ",
        "han": "儒术"
      },
      {
        "yi": "ꌋꅪꄰ",
        "han": "女家"
      },
      {
        "yi": "ꃰꃅꄰ",
        "han": "皇家"
      },
      {
        "yi": "ꃥꌋꄰ",
        "han": "施主"
      },
      {
        "yi": "ꇑ,ꍓꄰꊿꑫꅿꀎꋏꀉꁌ、ꀊꂵꂷꅍꄀꅉ。",
        "han": "禄，者氏家族宗亲考妣灵位。"
      }
    ]
  },
  {
    "g": "ꅋ",
    "initial": "dd",
    "final": "u",
    "tone": "t",
    "py": "ddut",
    "ipa": "du⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddut.mp3",
    "radical": "꒾",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꅋꒉꑱꒉ",
        "han": "流毒"
      },
      {
        "yi": "ꅋꇓ",
        "han": "毒砂"
      },
      {
        "yi": "ꇤꇧꎭ、ꅋꋊ",
        "han": "消毒"
      },
      {
        "yi": "ꅋꑌꁮꏂ",
        "han": "蝮蛇"
      },
      {
        "yi": "ꇁꍗꅋꅍ",
        "han": "烛台"
      }
    ]
  },
  {
    "g": "ꅢ",
    "initial": "nd",
    "final": "u",
    "tone": "t",
    "py": "ndut",
    "ipa": "ndu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndut.mp3",
    "radical": "꒼",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑣꅢꈑꆠ",
        "han": "香灰"
      }
    ]
  },
  {
    "g": "ꅼ",
    "initial": "hn",
    "final": "u",
    "tone": "t",
    "py": "hnut",
    "ipa": "n̥u⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hnut.mp3",
    "radical": "꒗",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄏꃏꇅꋧꀊꅼꅉ",
        "han": "东非大裂谷"
      },
      {
        "yi": "ꉪꏡꄐꅍ、ꉪꑌꏢꅼ",
        "han": "思维能力"
      },
      {
        "yi": "ꌧꐯꈻꅼ",
        "han": "宏论"
      },
      {
        "yi": "ꈍꅼꀋꐚ",
        "han": "莫测高深"
      },
      {
        "yi": "ꃹꅼ",
        "han": "深入"
      }
    ]
  },
  {
    "g": "ꆑ",
    "initial": "n",
    "final": "u",
    "tone": "t",
    "py": "nut",
    "ipa": "nu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nut.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆑꋤꀕ",
        "han": "怒冲冲"
      }
    ]
  },
  {
    "g": "ꆫ",
    "initial": "hl",
    "final": "u",
    "tone": "t",
    "py": "hlut",
    "ipa": "ɬu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlut.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆫꈩ꒧",
        "han": "旅游业"
      },
      {
        "yi": "ꆫꃅꉼꑴ",
        "han": "库伦"
      },
      {
        "yi": "ꈜꎴꆫꅐ",
        "han": "千里眼"
      },
      {
        "yi": "ꊾꀣꆫ",
        "han": "相亲"
      },
      {
        "yi": "ꍏꇩꆹꆫꈩꅉꂓꅑꑠꀉꑌꃅꐥ",
        "han": "中国有很多名胜古迹"
      }
    ]
  },
  {
    "g": "ꇎ",
    "initial": "l",
    "final": "u",
    "tone": "t",
    "py": "lut",
    "ipa": "lu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lut.mp3",
    "radical": "꒨",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀏꈩꇎ",
        "han": "性满足"
      },
      {
        "yi": "ꀧꇎ",
        "han": "够本"
      },
      {
        "yi": "ꋠꇎꅝꄀ",
        "han": "富裕"
      },
      {
        "yi": "ꇎꀋꈴ",
        "han": "欠缺"
      },
      {
        "yi": "ꀑꇎꑭꈲ",
        "han": "富足"
      }
    ]
  },
  {
    "g": "ꇲ",
    "initial": "g",
    "final": "u",
    "tone": "t",
    "py": "gut",
    "ipa": "ku⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gut.mp3",
    "radical": "꒩",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꉛꁯꇲꉘꃅ",
        "han": "蛏田"
      },
      {
        "yi": "ꊋꇲꊿ",
        "han": "人夫"
      },
      {
        "yi": "ꇲꁵ",
        "han": "供应"
      },
      {
        "yi": "ꀻꇲꂥ",
        "han": "平菇"
      },
      {
        "yi": "ꇙꊋꇲꌅꅍ",
        "han": "动力器官"
      }
    ]
  },
  {
    "g": "ꈎ",
    "initial": "k",
    "final": "u",
    "tone": "t",
    "py": "kut",
    "ipa": "kʰu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kut.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃑꉚꈎꄜ",
        "han": "假释考验期限"
      },
      {
        "yi": "ꃅꈎꋍꈐꌠꁸꌊꇖꊭꃅꄉ",
        "han": "一年分四季"
      },
      {
        "yi": "ꃪꈎ",
        "han": "万岁"
      },
      {
        "yi": "ꌬꑭꈎ",
        "han": "光年"
      },
      {
        "yi": "ꈎꀨꋩꑍ",
        "han": "元旦节"
      }
    ]
  },
  {
    "g": "ꈪ",
    "initial": "gg",
    "final": "u",
    "tone": "t",
    "py": "ggut",
    "ipa": "gu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggut.mp3",
    "radical": "꒕",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꑳꏣ ꍔꈪ",
        "han": "静脉曲张"
      },
      {
        "yi": "ꀒꀞꊂꈪꊐ、ꑽꌠꂴꆹꉃꌠꊁꇁ",
        "han": "惩前毖后"
      },
      {
        "yi": "ꈛꆽꈪꅉ",
        "han": "急弯"
      },
      {
        "yi": "ꈪꃚ",
        "han": "上声"
      },
      {
        "yi": "ꃚꈪꃚꐕ",
        "han": "抑扬顿挫"
      }
    ]
  },
  {
    "g": "ꉀ",
    "initial": "mg",
    "final": "u",
    "tone": "t",
    "py": "mgut",
    "ipa": "ŋgu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgut.mp3",
    "radical": "꒤",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꌌꇐꉀ",
        "han": "雷五加"
      },
      {
        "yi": "ꀍꉀꆹ",
        "han": "上进"
      },
      {
        "yi": "ꉀꁉꌍꑓ",
        "han": "吊窗"
      },
      {
        "yi": "ꊌꐨꉀꐕ",
        "han": "提升效益"
      },
      {
        "yi": "ꇷꐈꉀꒆ",
        "han": "变态发育"
      }
    ]
  },
  {
    "g": "ꊢ",
    "initial": "z",
    "final": "u",
    "tone": "t",
    "py": "zut",
    "ipa": "tsu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zut.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎆꊢ",
        "han": "财迷"
      },
      {
        "yi": "ꉌꊢꃅꉪ",
        "han": "凝思"
      },
      {
        "yi": "ꊢꐯꄀꁈ",
        "han": "反间计"
      },
      {
        "yi": "ꉌꊢꍸꇐ",
        "han": "遗志"
      },
      {
        "yi": "ꊢꇱꀖꇱ",
        "han": "搬弄是非"
      }
    ]
  },
  {
    "g": "ꋄ",
    "initial": "c",
    "final": "u",
    "tone": "t",
    "py": "cut",
    "ipa": "tsʰu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cut.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꋄꏢꅪꒉ",
        "han": "醋酸洋红液"
      },
      {
        "yi": "ꃅꃴꋄꄆ",
        "han": "天电"
      },
      {
        "yi": "ꋄꏢ",
        "han": "醋酸"
      },
      {
        "yi": "ꋄꑭꅐꅍ",
        "han": "激光器"
      },
      {
        "yi": "ꋄꏢꇤ",
        "han": "醋酸酐"
      }
    ]
  },
  {
    "g": "ꌞ",
    "initial": "s",
    "final": "u",
    "tone": "t",
    "py": "sut",
    "ipa": "su⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sut.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌞꉌꃹꅍꃅ",
        "han": "取悦"
      },
      {
        "yi": "ꈁꁠꋋꂷꆹꉪꐋꀨꐯꇯꌞꆏꁳꌠ",
        "han": "这是我们全体同志送的礼物"
      },
      {
        "yi": "ꌞꇩꏤꉙ",
        "han": "外国语"
      },
      {
        "yi": "ꀀꌞ",
        "han": "梦乡"
      },
      {
        "yi": "ꌞꅇꃅꅲ",
        "han": "从善如流"
      }
    ]
  },
  {
    "g": "ꌼ",
    "initial": "ss",
    "final": "u",
    "tone": "t",
    "py": "ssut",
    "ipa": "zu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssut.mp3",
    "radical": "꒖",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌼꇱ、ꍔꌼ",
        "han": "杂交"
      },
      {
        "yi": "ꋲꌼ",
        "han": "错落"
      },
      {
        "yi": "ꌼꇑꁘꆹ",
        "han": "纷乱"
      },
      {
        "yi": "ꌿꇓꌼꇓ",
        "han": "乱纷纷"
      },
      {
        "yi": "ꌼꃀꎭꃃ",
        "han": "杂面"
      }
    ]
  },
  {
    "g": "ꍕ",
    "initial": "zh",
    "final": "u",
    "tone": "t",
    "py": "zhut",
    "ipa": "tʂu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhut.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍕꎇꑞꅉ",
        "han": "弹性限度"
      },
      {
        "yi": "ꎇꆌꍕꑕ",
        "han": "等张收缩"
      },
      {
        "yi": "ꀑꍕꂪꑕ",
        "han": "畏缩"
      },
      {
        "yi": "ꑇꍕꐛꉆ",
        "han": "可塑性"
      },
      {
        "yi": "ꍕꎇꁈꁱꄻ",
        "han": "伸缩法作图"
      }
    ]
  },
  {
    "g": "ꎈ",
    "initial": "rr",
    "final": "u",
    "tone": "t",
    "py": "rrut",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rrut.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꎟ",
    "initial": "nr",
    "final": "u",
    "tone": "t",
    "py": "nrut",
    "ipa": "ndʐu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrut.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆳꎟꉐꎟ",
        "han": "风吹雨打"
      },
      {
        "yi": "ꅶꎧꍮꎟ",
        "han": "横冲直撞"
      },
      {
        "yi": "ꉢꈯꒆꄿꎟꉌꃹꐯꉌꃹ",
        "han": "我很喜欢体育运动"
      },
      {
        "yi": "ꆍꇩꏤꇬꈯꒆꄿꎟꂓꅑꌠꑞꉬ",
        "han": "你们国家最有名的运动是什么"
      },
      {
        "yi": "ꆳꎟꉐꋠ",
        "han": "风蚀"
      }
    ]
  },
  {
    "g": "ꎺ",
    "initial": "sh",
    "final": "u",
    "tone": "t",
    "py": "shut",
    "ipa": "ʂu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shut.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀋ ꎺꈝ ꐯ",
        "han": "健忘"
      },
      {
        "yi": "ꎺꀱꀋꉆ",
        "han": "不堪回首"
      },
      {
        "yi": "ꎺꀱ",
        "han": "追怀"
      },
      {
        "yi": "ꎺꊡꅇꁱ",
        "han": "题词"
      },
      {
        "yi": "ꎽꇓꎺꇓ",
        "han": "迷糊"
      }
    ]
  },
  {
    "g": "ꏔ",
    "initial": "r",
    "final": "u",
    "tone": "t",
    "py": "rut",
    "ipa": "ʐu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rut.mp3",
    "radical": "꒐",
    "strokes": 7,
    "remainingStrokes": 6,
    "phrases": [
      {
        "yi": "ꏔꈾ",
        "han": "烈性"
      },
      {
        "yi": "ꏔꃹ",
        "han": "底襟"
      },
      {
        "yi": "ꏔꈾꁏ、ꇨꒉꋦ",
        "han": "威风"
      },
      {
        "yi": "ꏔꈾꅍ",
        "han": "虎背熊腰"
      }
    ]
  },
  {
    "g": "ꏰ",
    "initial": "j",
    "final": "u",
    "tone": "t",
    "py": "jut",
    "ipa": "tɕu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jut.mp3",
    "radical": "꒨",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆈꀕꏰꏳ",
        "han": "鬼祟"
      },
      {
        "yi": "ꈌꏂꑓꏰ",
        "han": "口炎歪斜"
      },
      {
        "yi": "ꊫꏰ",
        "han": "百灵"
      }
    ]
  },
  {
    "g": "ꐌ",
    "initial": "q",
    "final": "u",
    "tone": "t",
    "py": "qut",
    "ipa": "tɕʰu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qut.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃆꐌꂄ",
        "han": "封火"
      },
      {
        "yi": "ꐌꁿꑵꐃ",
        "han": "防火墙"
      }
    ]
  },
  {
    "g": "ꐧ",
    "initial": "jj",
    "final": "u",
    "tone": "t",
    "py": "jjut",
    "ipa": "dʑu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjut.mp3",
    "radical": "꒪",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꐧꄜꈴ",
        "han": "横贯"
      },
      {
        "yi": "ꐧꊭꊈꇙꀕ",
        "han": "脊椎动物"
      },
      {
        "yi": "ꐧꊭꋇ",
        "han": "腰丛"
      },
      {
        "yi": "ꉐꐧꃚ",
        "han": "尖团音"
      },
      {
        "yi": "ꌠꐧ",
        "han": "壮年"
      }
    ]
  },
  {
    "g": "ꑙ",
    "initial": "ny",
    "final": "u",
    "tone": "t",
    "py": "nyut",
    "ipa": "ȵu⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyut.mp3",
    "radical": "꒨",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀊꑙꀊꑙꐮꅲꇬꆜ",
        "han": "火并"
      },
      {
        "yi": "ꀊꑙꎸ",
        "han": "猴肉"
      },
      {
        "yi": "ꀊꑙꏸ",
        "han": "猴胆"
      },
      {
        "yi": "ꀊꑙ",
        "han": "猴子"
      },
      {
        "yi": "ꄠꃪꑙ",
        "han": "台湾猴"
      }
    ]
  },
  {
    "g": "ꒁ",
    "initial": "y",
    "final": "u",
    "tone": "t",
    "py": "yut",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yut.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꀭ",
    "initial": "b",
    "final": "u",
    "tone": "x",
    "py": "bux",
    "ipa": "pu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀭꐞꃀꐞꃨ",
        "han": "单性花"
      },
      {
        "yi": "ꀭꉂ",
        "han": "浮雕"
      },
      {
        "yi": "ꌑꇌꀭꀮ",
        "han": "子棉"
      },
      {
        "yi": "ꂵꅐ、ꄞꅐ、ꀭꉂ、ꀨꅐ",
        "han": "突出"
      },
      {
        "yi": "ꃪꄅꀭꉂ",
        "han": "背斜"
      }
    ]
  },
  {
    "g": "ꁋ",
    "initial": "p",
    "final": "u",
    "tone": "x",
    "py": "pux",
    "ipa": "pʰu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊗꁋꄀꄯꒉ",
        "han": "壁报"
      },
      {
        "yi": "ꊥꋦ；ꁋꅐ",
        "han": "典型"
      },
      {
        "yi": "ꃅꀋꁋ",
        "han": "暮色"
      },
      {
        "yi": "ꊖꁋꄀꄯꒉ",
        "han": "墙报"
      },
      {
        "yi": "ꃅꁋꌗꄉꇠ",
        "han": "方位推算法"
      }
    ]
  },
  {
    "g": "ꁭ",
    "initial": "bb",
    "final": "u",
    "tone": "x",
    "py": "bbux",
    "ipa": "bu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁭꁏꌋꐈ",
        "han": "变态反应"
      },
      {
        "yi": "ꁭꅐꈴꂽ",
        "han": "东路军"
      },
      {
        "yi": "ꇓꁭꀕ",
        "han": "石棉"
      },
      {
        "yi": "ꎝꁭꊿ",
        "han": "债务人"
      },
      {
        "yi": "ꁮꑟꁭꀕ",
        "han": "丝绵"
      }
    ]
  },
  {
    "g": "ꂆ",
    "initial": "nb",
    "final": "u",
    "tone": "x",
    "py": "nbux",
    "ipa": "mbu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁮꐚꂆꐊ",
        "han": "敌焰"
      },
      {
        "yi": "ꂆꐊ",
        "han": "忿詈"
      }
    ]
  },
  {
    "g": "ꂤ",
    "initial": "hm",
    "final": "u",
    "tone": "x",
    "py": "hmux",
    "ipa": "m̥u⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꂤꏂꈁꏦ",
        "han": "砂型"
      },
      {
        "yi": "ꒈꅐꂤꅉ",
        "han": "高潮"
      },
      {
        "yi": "ꐯꂤꉙ",
        "han": "同位语"
      },
      {
        "yi": "ꈁꇁꉳꆹꂤꏂꅔꃀ",
        "han": "卡拉哈里沙漠"
      },
      {
        "yi": "ꌒꏦꂤꏂꑄꒉꍆꀻ",
        "han": "三江冲河沙闸"
      }
    ]
  },
  {
    "g": "ꃄ",
    "initial": "m",
    "final": "u",
    "tone": "x",
    "py": "mux",
    "ipa": "mu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃄꁕ、ꃅꄷ",
        "han": "地区"
      },
      {
        "yi": "ꃄꇖꄷ",
        "han": "八方"
      },
      {
        "yi": "ꃄꏦꎹ",
        "han": "取景"
      },
      {
        "yi": "ꅔꊂꐨꐥꌠꃄꀑꐛꐨ",
        "han": "大陆性气候"
      },
      {
        "yi": "ꃅꄙꃄꄙ",
        "han": "比肩继踵"
      }
    ]
  },
  {
    "g": "ꃙ",
    "initial": "f",
    "final": "u",
    "tone": "x",
    "py": "fux",
    "ipa": "fu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃙꋉꂡꄀ",
        "han": "烘云托月"
      },
      {
        "yi": "ꃙꏦ",
        "han": "音律"
      },
      {
        "yi": "ꃙꈌ",
        "han": "伧俗"
      },
      {
        "yi": "ꁱꂷꃙꋉꁈ",
        "han": "如字"
      },
      {
        "yi": "ꃙꐂꂓ",
        "han": "音名"
      }
    ]
  },
  {
    "g": "ꃵ",
    "initial": "v",
    "final": "u",
    "tone": "x",
    "py": "vux",
    "ipa": "vu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃵꐞ",
        "han": "盲肠"
      },
      {
        "yi": "ꃵꐔꉆꐔꁏ",
        "han": "狗血喷头"
      },
      {
        "yi": "ꁸꃵ",
        "han": "配售"
      },
      {
        "yi": "ꋋꊰꃵꆈ",
        "han": "降结肠"
      },
      {
        "yi": "ꎧꃵꅉ",
        "han": "酒家"
      }
    ]
  },
  {
    "g": "ꄕ",
    "initial": "d",
    "final": "u",
    "tone": "x",
    "py": "dux",
    "ipa": "tu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃅꌗꀊꄕꈭꄀ",
        "han": "大气圈"
      },
      {
        "yi": "ꄕꊪ",
        "han": "动员"
      },
      {
        "yi": "ꎆꏣꄕꄂ",
        "han": "经济激励"
      },
      {
        "yi": "ꂴꄕꊪꌠ",
        "han": "先河"
      },
      {
        "yi": "ꅇꏤꒃ、ꂽꄏ、ꄕꊪ",
        "han": "誓师"
      }
    ]
  },
  {
    "g": "ꄱ",
    "initial": "t",
    "final": "u",
    "tone": "x",
    "py": "tux",
    "ipa": "tʰu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊖꄱ",
        "han": "土方"
      },
      {
        "yi": "ꑭꄱꈛꈷ、ꑭꋋꈜꇈ",
        "han": "阻挠"
      },
      {
        "yi": "ꊖꄱꅤ",
        "han": "挖方"
      },
      {
        "yi": "ꊖꄱꇓꄱ",
        "han": "土石方"
      },
      {
        "yi": "ꄱꄂ",
        "han": "鬼风疙瘩"
      }
    ]
  },
  {
    "g": "ꅌ",
    "initial": "dd",
    "final": "u",
    "tone": "x",
    "py": "ddux",
    "ipa": "du⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꅌꇖ",
        "han": "欠扁"
      },
      {
        "yi": "ꅌꇐ、ꅌꇖ",
        "han": "讨打"
      },
      {
        "yi": "ꅌꇖ(ꉌꋦ)",
        "han": "欠扁/欠揍"
      }
    ]
  },
  {
    "g": "ꅣ",
    "initial": "nd",
    "final": "u",
    "tone": "x",
    "py": "ndux",
    "ipa": "ndu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꂿꅣ",
        "han": "尺骨"
      },
      {
        "yi": "ꐯꅣꐮꇤ",
        "han": "争斗"
      },
      {
        "yi": "ꋒꅣꁮꅉꉙ",
        "han": "鱼鼓道情"
      },
      {
        "yi": "ꋒꅣꉙꅇ",
        "han": "鼓子词"
      },
      {
        "yi": "ꋒꅣꇮꃀ",
        "han": "鼓师"
      }
    ]
  },
  {
    "g": "ꆒ",
    "initial": "n",
    "final": "u",
    "tone": "x",
    "py": "nux",
    "ipa": "nu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌩꋚꇓꂷꇴꆒ",
        "han": "果肉"
      },
      {
        "yi": "ꌩꑆꇴꆒ",
        "han": "软硬木"
      }
    ]
  },
  {
    "g": "ꆬ",
    "initial": "hl",
    "final": "u",
    "tone": "x",
    "py": "hlux",
    "ipa": "ɬu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꆬꄻ",
        "han": "炮炼"
      }
    ]
  },
  {
    "g": "ꇏ",
    "initial": "l",
    "final": "u",
    "tone": "x",
    "py": "lux",
    "ipa": "lu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇏꁱ",
        "han": "描写"
      },
      {
        "yi": "ꋯꁦꃅꇏ",
        "han": "民主作风"
      },
      {
        "yi": "ꈎꄜꀄꊭ、ꉙꂿꀋꌧ、ꀊꉘꃅꇏ",
        "han": "幼稚"
      },
      {
        "yi": "ꃅꇏꐛꄟ",
        "han": "风度"
      },
      {
        "yi": "ꋻꅑꃅꇏ",
        "han": "习气"
      }
    ]
  },
  {
    "g": "ꇳ",
    "initial": "g",
    "final": "u",
    "tone": "x",
    "py": "gux",
    "ipa": "ku⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇵꏂꇳꆉꏦ",
        "han": "满头大汗"
      },
      {
        "yi": "ꇳꉔ",
        "han": "鼓噪"
      },
      {
        "yi": "ꇳꐞꊋꃤ",
        "han": "离心力"
      },
      {
        "yi": "ꆳꉜꄉꇉꇳ",
        "han": "看风使舵"
      },
      {
        "yi": "ꆄꁮꁋꀘ、ꆅꌌꊿꇳ",
        "han": "散步病菌"
      }
    ]
  },
  {
    "g": "ꈏ",
    "initial": "k",
    "final": "u",
    "tone": "x",
    "py": "kux",
    "ipa": "kʰu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꄟꌤꈏꉀ",
        "han": "细胞内消化"
      },
      {
        "yi": "ꈏꇓꎿ",
        "han": "内海"
      },
      {
        "yi": "ꈏꃹꎆ",
        "han": "入款"
      },
      {
        "yi": "ꈏꊫꌕꎏꄲ",
        "han": "内接三角形"
      },
      {
        "yi": "ꈏꐊꁷꏦ",
        "han": "包含除法"
      }
    ]
  },
  {
    "g": "ꈫ",
    "initial": "gg",
    "final": "u",
    "tone": "x",
    "py": "ggux",
    "ipa": "gu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇖꈫꂢꇐ",
        "han": "轻音乐"
      },
      {
        "yi": "ꒉꈫ",
        "han": "徒涉"
      },
      {
        "yi": "ꀑꆊꀉꒉꈋꌠꈫꁁ",
        "han": "大脑半球"
      },
      {
        "yi": "ꒉꈫꈜꀸ、ꇉꇳꈌ",
        "han": "渡口"
      },
      {
        "yi": "ꇖꈫꑵꉙ",
        "han": "咏叹调"
      }
    ]
  },
  {
    "g": "ꉁ",
    "initial": "mg",
    "final": "u",
    "tone": "x",
    "py": "mgux",
    "ipa": "ŋgu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꄆꉁꈾ",
        "han": "电料"
      },
      {
        "yi": "ꉁꈾꄐ",
        "han": "备料"
      },
      {
        "yi": "ꆅꉚꆅꉁ",
        "han": "诊疗"
      },
      {
        "yi": "ꆅꉁ",
        "han": "悬壶"
      },
      {
        "yi": "ꂿ꒧ꉁꈾ",
        "han": "农械"
      }
    ]
  },
  {
    "g": "ꊣ",
    "initial": "z",
    "final": "u",
    "tone": "x",
    "py": "zux",
    "ipa": "tsu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊣꌬ、ꊤꁠ",
        "han": "租赁"
      },
      {
        "yi": "ꏮꊤꀱ、ꊣꀱ",
        "han": "转租"
      },
      {
        "yi": "ꁌꐭꊣꑳ；ꑳꁌꈝꐮꌠ",
        "han": "廉租房"
      },
      {
        "yi": "ꊣꁌ",
        "han": "租价"
      },
      {
        "yi": "ꊣꀱꑲꊣꌋ",
        "han": "二房东"
      }
    ]
  },
  {
    "g": "ꋅ",
    "initial": "c",
    "final": "u",
    "tone": "x",
    "py": "cux",
    "ipa": "tsʰu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊿꋅꁌꄝꃅꐪ",
        "han": "民族解放运动"
      },
      {
        "yi": "ꊿꋅꋦꁍ",
        "han": "民族风情院"
      },
      {
        "yi": "ꈻꃀ、ꋅꈯꃹ",
        "han": "大寒"
      },
      {
        "yi": "ꃅꄷꊿꋅꉪꏦ",
        "han": "地方民族主义"
      },
      {
        "yi": "ꊿꋅꀉꒉꉪꏦ",
        "han": "大民族主义"
      }
    ]
  },
  {
    "g": "ꋢ",
    "initial": "zz",
    "final": "u",
    "tone": "x",
    "py": "zzux",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshanzzux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꋾ",
    "initial": "nz",
    "final": "u",
    "tone": "x",
    "py": "nzux",
    "ipa": "ndzu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀊꋾ",
        "han": "头领"
      },
      {
        "yi": "ꁮꐚꀊꋾ",
        "han": "敌酋"
      },
      {
        "yi": "ꋾꊈ、ꅋꁘ",
        "han": "发炎"
      },
      {
        "yi": "ꀑꋾ、ꀒꁵ",
        "han": "顶点"
      },
      {
        "yi": "ꋍꃀꋾꊈ",
        "han": "肺炎"
      }
    ]
  },
  {
    "g": "ꌟ",
    "initial": "s",
    "final": "u",
    "tone": "x",
    "py": "sux",
    "ipa": "su⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊿꂒꋦꌠ、ꌟꃅ",
        "han": "人士"
      },
      {
        "yi": "ꐯꌟꃨꊱꁨ",
        "han": "总状花序"
      },
      {
        "yi": "ꌟꃅꇉꇬꐥ",
        "han": "藏龙卧虎"
      },
      {
        "yi": "ꇭꌟꇬꄖ",
        "han": "打鼓"
      },
      {
        "yi": "ꏦꃤꂲꆽꊿꐥꐯꌟ",
        "han": "法律面前人人平等"
      }
    ]
  },
  {
    "g": "ꌽ",
    "initial": "ss",
    "final": "u",
    "tone": "x",
    "py": "ssux",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꍖ",
    "initial": "zh",
    "final": "u",
    "tone": "x",
    "py": "zhux",
    "ipa": "tʂu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍖꀴ",
        "han": "称道"
      },
      {
        "yi": "ꍖꀴꇐꀳ",
        "han": "赞美诗"
      },
      {
        "yi": "ꍖꇨ",
        "han": "过奖"
      },
      {
        "yi": "ꍖꀴ、ꀮꄑ",
        "han": "赞扬"
      }
    ]
  },
  {
    "g": "ꍱ",
    "initial": "ch",
    "final": "u",
    "tone": "x",
    "py": "chux",
    "ipa": "tʂʰu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍱꋚ、ꑋꋚ",
        "han": "大春"
      }
    ]
  },
  {
    "g": "ꎉ",
    "initial": "rr",
    "final": "u",
    "tone": "x",
    "py": "rrux",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rrux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꎠ",
    "initial": "nr",
    "final": "u",
    "tone": "x",
    "py": "nrux",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꎻ",
    "initial": "sh",
    "final": "u",
    "tone": "x",
    "py": "shux",
    "ipa": "ʂu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꅝꎻ",
        "han": "劝酒"
      },
      {
        "yi": "ꀑꇬꀧꎻ",
        "han": "请命"
      },
      {
        "yi": "ꌗꈴꎻ",
        "han": "放风"
      },
      {
        "yi": "ꊿꎻꈴꐨ",
        "han": "客流"
      },
      {
        "yi": "ꃅꎻꌫꁌ",
        "han": "许可费"
      }
    ]
  },
  {
    "g": "ꏕ",
    "initial": "r",
    "final": "u",
    "tone": "x",
    "py": "rux",
    "ipa": "ʐu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊫꏗꁱꏕ",
        "han": "有恃无恐"
      }
    ]
  },
  {
    "g": "ꏱ",
    "initial": "j",
    "final": "u",
    "tone": "x",
    "py": "jux",
    "ipa": "tɕu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏱꎆꏱꁈ",
        "han": "财政政策"
      },
      {
        "yi": "ꏱꁕ",
        "han": "行政区"
      },
      {
        "yi": "ꋚꒉꏱꅉ",
        "han": "粮站"
      },
      {
        "yi": "ꋍꏳꌧꆏꊰꏱꈴ",
        "han": "举一反三"
      },
      {
        "yi": "ꏱꎖ",
        "han": "侵越"
      }
    ]
  },
  {
    "g": "ꐍ",
    "initial": "q",
    "final": "u",
    "tone": "x",
    "py": "qux",
    "ipa": "tɕʰu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐍꃰꍍꆀ",
        "han": "白色污染"
      },
      {
        "yi": "ꐍꈘ",
        "han": "银角子"
      },
      {
        "yi": "ꐍꎆꏁꎆ",
        "han": "铸币"
      },
      {
        "yi": "ꐍꐥꀕ",
        "han": "明慧"
      },
      {
        "yi": "ꐍꌬꄹ",
        "han": "银本位"
      }
    ]
  },
  {
    "g": "ꐨ",
    "initial": "jj",
    "final": "u",
    "tone": "x",
    "py": "jjux",
    "ipa": "dʑu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉐꁧꋊꐊꐨ",
        "han": "百分比浓度"
      },
      {
        "yi": "ꊈꎴꐨ",
        "han": "纯洁性"
      },
      {
        "yi": "ꊋꋠꐨꇔ",
        "han": "脱困"
      },
      {
        "yi": "ꐮꆦꐯꏶꐛꐨ",
        "han": "互换互吸现象"
      },
      {
        "yi": "ꄙꊋꐥꇙꉈ（ꑟꐨꊨꇙꉈ）",
        "han": "阻尼振荡（件幅振荡）"
      }
    ]
  },
  {
    "g": "ꐿ",
    "initial": "nj",
    "final": "u",
    "tone": "x",
    "py": "njux",
    "ipa": "ndʑu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐿꑭꒃꇇ",
        "han": "伪足"
      }
    ]
  },
  {
    "g": "ꑚ",
    "initial": "ny",
    "final": "u",
    "tone": "x",
    "py": "nyux",
    "ipa": "ȵu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑚꌋꈤ",
        "han": "东北"
      }
    ]
  },
  {
    "g": "ꒂ",
    "initial": "y",
    "final": "u",
    "tone": "x",
    "py": "yux",
    "ipa": "ʑu⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yux.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏦꀋꊒꃅꒃꈢ、ꏦꀋꊒꃅꒂꏢ",
        "han": "非法拘禁"
      },
      {
        "yi": "ꁱꒂꑴꂂ",
        "han": "鬼斧神工"
      },
      {
        "yi": "ꐯꒂ",
        "han": "熏陶"
      },
      {
        "yi": "ꒂꋽꅉ",
        "han": "棱缝"
      },
      {
        "yi": "ꒂꄙꒂꑣ",
        "han": "抗拒逮捕"
      }
    ]
  },
  {
    "g": "ꀮ",
    "initial": "b",
    "final": "u",
    "tone": "",
    "py": "bu",
    "ipa": "pu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bu.mp3",
    "radical": "꒑",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꌩꀮꉼꑴ",
        "han": "松墙子"
      },
      {
        "yi": "ꉌꇿꀮ",
        "han": "道喜"
      },
      {
        "yi": "ꅧꇑꀮ",
        "han": "珠玑"
      },
      {
        "yi": "ꀮꐙꃀꐛꐞ",
        "han": "雌雄异体"
      },
      {
        "yi": "ꃨꀮ",
        "han": "雄花"
      }
    ]
  },
  {
    "g": "ꁌ",
    "initial": "p",
    "final": "u",
    "tone": "",
    "py": "pu",
    "ipa": "pʰu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pu.mp3",
    "radical": "꒐",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉹꁌꑵꉙ",
        "han": "民谣"
      },
      {
        "yi": "ꉹꁌꌦꐳ",
        "han": "民脂民膏"
      },
      {
        "yi": "ꉹꁌꌶꅉ",
        "han": "民校"
      },
      {
        "yi": "ꃅꐨꐯꌠꃄꁌꐯꒈ",
        "han": "同工同酬"
      },
      {
        "yi": "ꃷꇐꊭꄉꁌꇨꈹ",
        "han": "囤积居奇"
      }
    ]
  },
  {
    "g": "ꁮ",
    "initial": "bb",
    "final": "u",
    "tone": "",
    "py": "bbu",
    "ipa": "bu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbu.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꂪꂿꁮꏂ",
        "han": "响尾蛇"
      },
      {
        "yi": "ꏦꀾꁮ",
        "han": "姜片虫"
      },
      {
        "yi": "ꃅꀹ；ꒉꁮ",
        "han": "风化"
      },
      {
        "yi": "ꉌꁮꑓꁞ、ꇿꌜ",
        "han": "兴奋"
      },
      {
        "yi": "ꇉꋠꁮ",
        "han": "船蛆"
      }
    ]
  },
  {
    "g": "ꂇ",
    "initial": "nb",
    "final": "u",
    "tone": "",
    "py": "nbu",
    "ipa": "mbu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbu.mp3",
    "radical": "꒩",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉩꉗ、ꂇꉗ",
        "han": "咆哮"
      },
      {
        "yi": "ꃙꂇꃚꍮ",
        "han": "激昂慷慨"
      },
      {
        "yi": "ꀉꉌꅉꂇ",
        "han": "地羊"
      },
      {
        "yi": "ꂇꉺ",
        "han": "声势"
      },
      {
        "yi": "ꈎꇁꃅꈭꏝꃅꎭꈐꂄ，ꃄꇖꄹꊂꎆꂇꑱꈐꃹ",
        "han": "一年四季行好运，八方财宝进家门"
      }
    ]
  },
  {
    "g": "ꂥ",
    "initial": "hm",
    "final": "u",
    "tone": "",
    "py": "hmu",
    "ipa": "m̥u³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmu.mp3",
    "radical": "꒑",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꃚꂥꐨ",
        "han": "音域"
      },
      {
        "yi": "ꀁꂥꊐꌠ",
        "han": "低级"
      },
      {
        "yi": "ꂥꊪꅪ",
        "han": "紫丁香蘑"
      },
      {
        "yi": "ꑴꄗꌗꍅꀁꂥꅉ",
        "han": "印度低压"
      },
      {
        "yi": "ꐯꀋꌡꀊꂥꐨ",
        "han": "相对高度"
      }
    ]
  },
  {
    "g": "ꃅ",
    "initial": "m",
    "final": "u",
    "tone": "",
    "py": "mu",
    "ipa": "mu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mu.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃅꈎꃅꆪꃅꑍ",
        "han": "牧年牧月牧日"
      },
      {
        "yi": "ꃅꏀ",
        "han": "新手"
      },
      {
        "yi": "ꉘꀋꇉꃅ",
        "han": "出其不意"
      },
      {
        "yi": "ꋋꑍꃅ",
        "han": "终日"
      },
      {
        "yi": "ꀑꐳꃅ",
        "han": "笼统"
      }
    ]
  },
  {
    "g": "ꃚ",
    "initial": "f",
    "final": "u",
    "tone": "",
    "py": "fu",
    "ipa": "fu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fu.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꐋꃚꐚꇿ",
        "han": "亲痛仇快"
      },
      {
        "yi": "ꃚꌐꅥ",
        "han": "拍板"
      },
      {
        "yi": "ꍔꃚꀋꈁꉪꏦ",
        "han": "无政府主义"
      },
      {
        "yi": "ꃚꌷꇐ",
        "han": "声学"
      },
      {
        "yi": "ꍔꃚꌊꃼ",
        "han": "政府采购"
      }
    ]
  },
  {
    "g": "ꃶ",
    "initial": "v",
    "final": "u",
    "tone": "",
    "py": "vu",
    "ipa": "vu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vu.mp3",
    "radical": "꒟",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃆꃶꑖꋩ",
        "han": "慌乱"
      },
      {
        "yi": "ꑬꃶꇇꋩ",
        "han": "搓手顿脚"
      },
      {
        "yi": "ꀊꃶꋌ",
        "han": "干燥剂"
      },
      {
        "yi": "ꉢꀿꃶꂓꃀꐥ",
        "han": "我有堂姐"
      },
      {
        "yi": "ꃶꎭꁧ",
        "han": "巫山"
      }
    ]
  },
  {
    "g": "ꄖ",
    "initial": "d",
    "final": "u",
    "tone": "",
    "py": "du",
    "ipa": "tu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_du.mp3",
    "radical": "꒹",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꍯꄖꄉꇁꌠꉻꍯꆏꑟꈚꇬꐕꄉ",
        "han": "从成都来的火车停在哪里"
      },
      {
        "yi": "ꂱꍞꏀꄖ",
        "han": "明治维新"
      },
      {
        "yi": "ꅻꄖꌺ",
        "han": "耳屏"
      },
      {
        "yi": "ꇇꏸꄖꇇꃀꂖ",
        "han": "比画"
      },
      {
        "yi": "ꋚꁧꄖ",
        "han": "扶苗"
      }
    ]
  },
  {
    "g": "ꄲ",
    "initial": "t",
    "final": "u",
    "tone": "",
    "py": "tu",
    "ipa": "tʰu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tu.mp3",
    "radical": "꒨",
    "strokes": 1,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊷꁈꄲ",
        "han": "扇形"
      },
      {
        "yi": "ꄲ꓀ꎺ",
        "han": "秃衫"
      },
      {
        "yi": "ꃀꑭꇰꎾꃝꊸꌗꄲ",
        "han": "墨西哥湾暖流"
      },
      {
        "yi": "ꀧꑊꌕꎏꄲ",
        "han": "球面三角形"
      },
      {
        "yi": "ꒈꈌꌕꎏꄲꍏ",
        "han": "河口三角洲"
      }
    ]
  },
  {
    "g": "ꅍ",
    "initial": "dd",
    "final": "u",
    "tone": "",
    "py": "ddu",
    "ipa": "du³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddu.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꅇꉉꅍ",
        "han": "谈助"
      },
      {
        "yi": "ꃶꊡꃷꅍ",
        "han": "海螵蛸"
      },
      {
        "yi": "ꒉꇊꅍ",
        "han": "谷坊"
      },
      {
        "yi": "ꎸꅍꑐꅍ",
        "han": "铁夹"
      },
      {
        "yi": "ꒊꅍꅐ",
        "han": "闹笑话"
      }
    ]
  },
  {
    "g": "ꅤ",
    "initial": "nd",
    "final": "u",
    "tone": "",
    "py": "ndu",
    "ipa": "ndu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndu.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇑꅤꂷꇭ",
        "han": "矿灯"
      },
      {
        "yi": "ꌺꅤ",
        "han": "侄子"
      },
      {
        "yi": "ꋖꅤ、ꁰꋖ、ꁱꁶ",
        "han": "雕刻"
      },
      {
        "yi": "ꉃꅤꉁꅤ",
        "han": "咕哝"
      },
      {
        "yi": "ꒉꌤꑲꆀꒉꐬꅤ",
        "han": "临渴掘井"
      }
    ]
  },
  {
    "g": "ꆓ",
    "initial": "n",
    "final": "u",
    "tone": "",
    "py": "nu",
    "ipa": "nu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nu.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꇨꌠꐵꆓꌠꊝ",
        "han": "避实就虚"
      },
      {
        "yi": "ꃷꅍꀁꆓꉖꇉ",
        "han": "软骨陷窝"
      },
      {
        "yi": "ꇨꆓꎖꅍ",
        "han": "莫氏硬度表"
      },
      {
        "yi": "ꀁꆓ",
        "han": "柔和"
      },
      {
        "yi": "ꈴꁨꀁꆓꊈ",
        "han": "透明软骨"
      }
    ]
  },
  {
    "g": "ꆭ",
    "initial": "hl",
    "final": "u",
    "tone": "",
    "py": "hlu",
    "ipa": "ɬu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlu.mp3",
    "radical": "꒰",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꒈ ꆭ",
        "han": "笑容"
      },
      {
        "yi": "ꇌꎸꋐꇰꆭꄉꌠ",
        "han": "青椒炒牛肉"
      },
      {
        "yi": "ꃬꎸꆭꄉꌠ",
        "han": "炒鸡肉"
      },
      {
        "yi": "ꆭꑆꈪꇔꇷ",
        "han": "皮匠"
      },
      {
        "yi": "ꀎꆭ",
        "han": "歇顶"
      }
    ]
  },
  {
    "g": "ꇐ",
    "initial": "l",
    "final": "u",
    "tone": "",
    "py": "lu",
    "ipa": "lu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lu.mp3",
    "radical": "꒳",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌬꇐꇮ꒧",
        "han": "轻工业"
      },
      {
        "yi": "ꁱꇐꐛꀹ",
        "han": "笔致"
      },
      {
        "yi": "ꋦꈭꌋꃅꇮꇐ",
        "han": "环保型技术"
      },
      {
        "yi": "ꋧꁮꊈꋠꇐꅋꌸ",
        "han": "细菌性食物中毒"
      },
      {
        "yi": "ꏹꃏꌷꇐ",
        "han": "积分学"
      }
    ]
  },
  {
    "g": "ꇴ",
    "initial": "g",
    "final": "u",
    "tone": "",
    "py": "gu",
    "ipa": "ku³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gu.mp3",
    "radical": "꒤",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꐛꇴꐛꉻ",
        "han": "状貌"
      },
      {
        "yi": "ꇴꉻ",
        "han": "轮廓"
      },
      {
        "yi": "ꀋꇴꃅꊭꌸ",
        "han": "晴天霹雳"
      },
      {
        "yi": "ꇴꉻꑴꂷ",
        "han": "略图"
      },
      {
        "yi": "ꅲꀋ ꏾꇴ",
        "han": "漠然"
      }
    ]
  },
  {
    "g": "ꈐ",
    "initial": "k",
    "final": "u",
    "tone": "",
    "py": "ku",
    "ipa": "kʰu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ku.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꄺꅐꈍꈐ",
        "han": "必要限度"
      },
      {
        "yi": "ꐻꄂꈐ",
        "han": "冰斗"
      },
      {
        "yi": "ꁯꈐꉐꐙꀁꑌꅉ",
        "han": "极地少雨带"
      },
      {
        "yi": "ꃐꍰꇓꈐ",
        "han": "肥城"
      },
      {
        "yi": "ꑵꈐꐮꃆꂮ",
        "han": "种内关系"
      }
    ]
  },
  {
    "g": "ꈬ",
    "initial": "gg",
    "final": "u",
    "tone": "",
    "py": "ggu",
    "ipa": "gu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggu.mp3",
    "radical": "꓀",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊾꈬꄉꊿꅰ、ꅇꆠꌊꊾꊏ",
        "han": "哗众取宠"
      },
      {
        "yi": "ꆈꈬꀕ",
        "han": "森严"
      },
      {
        "yi": "ꎊꈬꏸꄉꌠ",
        "han": "漆器"
      },
      {
        "yi": "ꇈꈬꄉꌉꈩ",
        "han": "打野外"
      },
      {
        "yi": "ꑍꈬ",
        "han": "红藤"
      }
    ]
  },
  {
    "g": "ꉂ",
    "initial": "mg",
    "final": "u",
    "tone": "",
    "py": "mgu",
    "ipa": "ŋgu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgu.mp3",
    "radical": "꒟",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꈩꉂꇬꈩ",
        "han": "器械体操"
      },
      {
        "yi": "ꉂꁦꋠ",
        "han": "情夫"
      },
      {
        "yi": "ꉂꐪ",
        "han": "情愫"
      },
      {
        "yi": "ꉂꑟꋉꃆ",
        "han": "暖心工程"
      },
      {
        "yi": "ꉪꇐꉂꑟ",
        "han": "思想感情"
      }
    ]
  },
  {
    "g": "ꊤ",
    "initial": "z",
    "final": "u",
    "tone": "",
    "py": "zu",
    "ipa": "tsu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zu.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌊꎆꊤꊰ",
        "han": "实物地租"
      },
      {
        "yi": "ꊣꌬ、ꊤꁠ",
        "han": "租赁"
      },
      {
        "yi": "ꊌꁧꀧꊤꇬꑟ",
        "han": "包产到组"
      },
      {
        "yi": "ꑼꏃꊤ",
        "han": "元世祖"
      },
      {
        "yi": "ꃄꇷ、ꃅꁧꃄꊤꊰ、ꃄꊤ",
        "han": "地租"
      }
    ]
  },
  {
    "g": "ꋆ",
    "initial": "c",
    "final": "u",
    "tone": "",
    "py": "cu",
    "ipa": "tsʰu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cu.mp3",
    "radical": "꓀",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꋆꇐꉾꇌ",
        "han": "粗糙"
      },
      {
        "yi": "ꃅꋆꋬꂻꐏꁇ",
        "han": "冬防"
      },
      {
        "yi": "ꋆꊨ",
        "han": "减肥"
      },
      {
        "yi": "ꋆꇩꉙꇐ",
        "han": "楚辞"
      },
      {
        "yi": "ꋆꇩ",
        "han": "楚国"
      }
    ]
  },
  {
    "g": "ꋣ",
    "initial": "zz",
    "final": "u",
    "tone": "",
    "py": "zzu",
    "ipa": "dzu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzu.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈍꋣꈌꂰ",
        "han": "骚客"
      },
      {
        "yi": "ꋣꋌ",
        "han": "刺激素"
      },
      {
        "yi": "ꑌꂩꇉꁖꋍꂱꋣ",
        "han": "狐群狗党"
      },
      {
        "yi": "ꉄꌎꋣꌉ",
        "han": "侵扰"
      },
      {
        "yi": "ꋣꌉ",
        "han": "骚动"
      }
    ]
  },
  {
    "g": "ꋿ",
    "initial": "nz",
    "final": "u",
    "tone": "",
    "py": "nzu",
    "ipa": "ndzu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzu.mp3",
    "radical": "꒳",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꅲꋿꒉ",
        "han": "鼻涕水"
      },
      {
        "yi": "ꋿꏶꈭ",
        "han": "开脸"
      },
      {
        "yi": "ꎼꋿꀴ",
        "han": "角雉"
      }
    ]
  },
  {
    "g": "ꌠ",
    "initial": "s",
    "final": "u",
    "tone": "",
    "py": "su",
    "ipa": "su³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_su.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꐧꋦꄸꃅꌠ",
        "han": "黑社会"
      },
      {
        "yi": "ꅓꀞꏯꐯꌠꐯꇯꌬ",
        "han": "惩办与宽大相结合"
      },
      {
        "yi": "ꀜꅐꌠ",
        "han": "残品"
      },
      {
        "yi": "ꄯꒉꌌꌠ",
        "han": "通信员"
      },
      {
        "yi": "ꅐꀦꉾꃪꌠ",
        "han": "资源优势"
      }
    ]
  },
  {
    "g": "ꌾ",
    "initial": "ss",
    "final": "u",
    "tone": "",
    "py": "ssu",
    "ipa": "zu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssu.mp3",
    "radical": "꒗",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꎬꐚꊈꌾꋌ",
        "han": "糖皮质激素"
      },
      {
        "yi": "ꌾꀖꊝꐨ",
        "han": "应激"
      },
      {
        "yi": "ꐭꌾꇨꃷꁨ",
        "han": "阈值"
      },
      {
        "yi": "ꇨꃃꑓꇬꅪ、ꈁꃃꀍꑐꌾ",
        "han": "怒发冲冠"
      },
      {
        "yi": "ꌾꑭꇮꁈ",
        "han": "激光技术"
      }
    ]
  },
  {
    "g": "ꍗ",
    "initial": "zh",
    "final": "u",
    "tone": "",
    "py": "zhu",
    "ipa": "tʂu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhu.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎹꉼꍗꑴ",
        "han": "社会主义"
      },
      {
        "yi": "ꈁꍗꉏꑐ",
        "han": "阿谀逢迎"
      },
      {
        "yi": "ꎹꉼꍗꑴꉜꄉꄺꀱ",
        "han": "社会主义改造"
      },
      {
        "yi": "ꂸꂷ、ꏸꍗ",
        "han": "明珠"
      },
      {
        "yi": "ꍗꅇ",
        "han": "颂词"
      }
    ]
  },
  {
    "g": "ꍲ",
    "initial": "ch",
    "final": "u",
    "tone": "",
    "py": "chu",
    "ipa": "tʂʰu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chu.mp3",
    "radical": "꒩",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꇪꇇꍲ",
        "han": "枝刺"
      },
      {
        "yi": "ꍲꂷ",
        "han": "菱角"
      },
      {
        "yi": "ꍲꏾ",
        "han": "叶刺"
      },
      {
        "yi": "ꍲꀁꑌꁯꄸꃬꑇ",
        "han": "少棘蜈蚣"
      },
      {
        "yi": "ꃮꃀꍲꈬ",
        "han": "烟管蓟"
      }
    ]
  },
  {
    "g": "ꎊ",
    "initial": "rr",
    "final": "u",
    "tone": "",
    "py": "rru",
    "ipa": "dʐu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rru.mp3",
    "radical": "꒪",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꊿꌋꆀꎊꈬꐮꉔꄡꊐ",
        "han": "客货分家"
      },
      {
        "yi": "ꀧꎊꇓ",
        "han": "球冠"
      },
      {
        "yi": "ꄉꉻꆓꎊ",
        "han": "公共软件"
      },
      {
        "yi": "ꄐꅍꀉꒉꋧꌺꎊꇗ",
        "han": "高能粒子物理"
      },
      {
        "yi": "ꎊꒌꐋꐛ",
        "han": "物象共轭"
      }
    ]
  },
  {
    "g": "ꎡ",
    "initial": "nr",
    "final": "u",
    "tone": "",
    "py": "nru",
    "ipa": "ndʐu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nru.mp3",
    "radical": "꒓",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꊋꎡ",
        "han": "活化"
      },
      {
        "yi": "ꏁꎡ",
        "han": "错金"
      },
      {
        "yi": "ꍩꎡꄯꁯ",
        "han": "锡杖"
      },
      {
        "yi": "ꆸꎡꉙ、ꆹꅑꏣ",
        "han": "领带"
      },
      {
        "yi": "ꌊꎡꅐ",
        "han": "反衬"
      }
    ]
  },
  {
    "g": "ꎼ",
    "initial": "sh",
    "final": "u",
    "tone": "",
    "py": "shu",
    "ipa": "ʂu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shu.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈛꎼ",
        "han": "行动"
      },
      {
        "yi": "ꌧꎼꃶꏢ",
        "han": "四书五经"
      },
      {
        "yi": "ꎼꅀ",
        "han": "莫非"
      },
      {
        "yi": "ꄐꎼꇁ",
        "han": "指出"
      },
      {
        "yi": "ꋌꅇꉉꅇꀋꌗꑠꆹꊿꋌꎼꉌꊰꑓꊰ",
        "han": "他说话不算数"
      }
    ]
  },
  {
    "g": "ꏖ",
    "initial": "r",
    "final": "u",
    "tone": "",
    "py": "ru",
    "ipa": "ʐu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ru.mp3",
    "radical": "꓄",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꏖꄑꁈ",
        "han": "激将法"
      },
      {
        "yi": "ꄂꏖꍣ",
        "han": "丁汝昌"
      },
      {
        "yi": "ꐮꁧꏖꊋꃤ",
        "han": "内力"
      },
      {
        "yi": "ꌥꆹꐤꆹꏖ",
        "han": "性命交关"
      },
      {
        "yi": "ꏖꊅꆈꏢ",
        "han": "山羊耳"
      }
    ]
  },
  {
    "g": "ꏲ",
    "initial": "j",
    "final": "u",
    "tone": "",
    "py": "ju",
    "ipa": "tɕu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ju.mp3",
    "radical": "꒟",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꏲꂂ、ꏲꉔ",
        "han": "勤政"
      },
      {
        "yi": "ꏦꏲ、ꏢꇋ",
        "han": "管制"
      },
      {
        "yi": "ꂰꂽꏲꇩꏤꉪꏦ",
        "han": "军国主义"
      },
      {
        "yi": "ꑲ ꏲꌋ",
        "han": "户主"
      },
      {
        "yi": "ꈜꏲꅉ",
        "han": "路局"
      }
    ]
  },
  {
    "g": "ꐎ",
    "initial": "q",
    "final": "u",
    "tone": "",
    "py": "qu",
    "ipa": "tɕʰu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qu.mp3",
    "radical": "꒨",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꑍꐎꃀꀕ",
        "han": "奶粉"
      },
      {
        "yi": "ꁯꆮꀊꐎ",
        "han": "粉蝶"
      },
      {
        "yi": "ꃱꐎꌺ",
        "han": "小白菜"
      },
      {
        "yi": "ꇓꃨꃱꑍꐎ",
        "han": "石花胶"
      },
      {
        "yi": "ꌧꅗꀊꐎ",
        "han": "白梨"
      }
    ]
  },
  {
    "g": "ꐩ",
    "initial": "jj",
    "final": "u",
    "tone": "",
    "py": "jju",
    "ipa": "dʑu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jju.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꐩꋊꃰꊿꁱꄯꒉ",
        "han": "纪传体"
      },
      {
        "yi": "ꐩꋊꄯꒉ",
        "han": "青史"
      },
      {
        "yi": "ꐩꋊꎺꁱ",
        "han": "史记"
      },
      {
        "yi": "ꐩꋊꏂꀨꄯꒉ",
        "han": "历史文献"
      },
      {
        "yi": "ꀉꐩꎸ",
        "han": "狐狸肉"
      }
    ]
  },
  {
    "g": "ꑀ",
    "initial": "nj",
    "final": "u",
    "tone": "",
    "py": "nju",
    "ipa": "ndʑu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nju.mp3",
    "radical": "꒟",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃅꌧꑀ",
        "han": "橙子"
      },
      {
        "yi": "ꃛꏧꌧꑀ",
        "han": "福橘"
      },
      {
        "yi": "ꎷꑀꏣ",
        "han": "履带"
      },
      {
        "yi": "ꈌꌧꑀꂶꀕ",
        "han": "枳壳"
      },
      {
        "yi": "ꌧꑀ",
        "han": "柑橘"
      }
    ]
  },
  {
    "g": "ꑛ",
    "initial": "ny",
    "final": "u",
    "tone": "",
    "py": "nyu",
    "ipa": "ȵu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyu.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑛꁮ",
        "han": "爬虫"
      },
      {
        "yi": "ꑛꌋꈤꌕꌜ",
        "han": "东三省"
      },
      {
        "yi": "ꑛꌋꈤꂽ",
        "han": "东北军"
      },
      {
        "yi": "ꑛꐺꇙꀕ",
        "han": "爬行动物"
      },
      {
        "yi": "ꑛꌋꈤꎐ",
        "han": "东北角"
      }
    ]
  },
  {
    "g": "ꒃ",
    "initial": "y",
    "final": "u",
    "tone": "",
    "py": "yu",
    "ipa": "ʑu³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yu.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꊫꌐꒃ、ꉉꊪ",
        "han": "论证"
      },
      {
        "yi": "ꑋꅉꒃꀋꇁ",
        "han": "芒刺在背"
      },
      {
        "yi": "ꐛꉻꒃ",
        "han": "取样"
      },
      {
        "yi": "ꉈꒃ",
        "han": "霜冻"
      },
      {
        "yi": "ꑓꋪꂭꄉꉌꊭꒃ",
        "han": "闭起眼睛抓麻雀"
      }
    ]
  },
  {
    "g": "ꀯ",
    "initial": "b",
    "final": "u",
    "tone": "p",
    "py": "bup",
    "ipa": "pu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bup.mp3",
    "radical": "꒟",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꁖꅉꀯꆱꏢꁮꄟꌤ",
        "han": "腺泡旁细胞"
      },
      {
        "yi": "ꍞꀯꇊꄬꇅꋧ",
        "han": "直布罗陀海峡"
      },
      {
        "yi": "ꉇꇷꀯꃅꒉ",
        "han": "冷笑"
      },
      {
        "yi": "ꂱꀯꋯ",
        "han": "唇红缘"
      },
      {
        "yi": "ꒉꀯꆫ",
        "han": "液泡"
      }
    ]
  },
  {
    "g": "ꁍ",
    "initial": "p",
    "final": "u",
    "tone": "p",
    "py": "pup",
    "ipa": "pʰu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pup.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊾꋠꁍ ꈌꅪ",
        "han": "混世魔王"
      },
      {
        "yi": "ꃬꎸꎸꈠꋂꋐꁍꄉꌠ",
        "han": "凉拌鸡肉"
      },
      {
        "yi": "ꁍꌒ",
        "han": "菩萨"
      },
      {
        "yi": "ꁍꄯ",
        "han": "普特"
      },
      {
        "yi": "ꉌꁍꉹ",
        "han": "云南鼠尾"
      }
    ]
  },
  {
    "g": "ꁯ",
    "initial": "bb",
    "final": "u",
    "tone": "p",
    "py": "bbup",
    "ipa": "bu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbup.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꁯꄸꈂꀸ",
        "han": "口器"
      },
      {
        "yi": "ꀉꐚꁯꄸ",
        "han": "地老虎"
      },
      {
        "yi": "ꅐꅑꁯꍛ",
        "han": "直翅目"
      },
      {
        "yi": "ꑭꀠꁯꄸ",
        "han": "草履虫"
      },
      {
        "yi": "ꐽꏣꄯꁯ",
        "han": "平衡棒"
      }
    ]
  },
  {
    "g": "ꂈ",
    "initial": "nb",
    "final": "u",
    "tone": "p",
    "py": "nbup",
    "ipa": "mbu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbup.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꂈꈿꌉꏦꌷ",
        "han": "打靶势"
      }
    ]
  },
  {
    "g": "ꂦ",
    "initial": "hm",
    "final": "u",
    "tone": "p",
    "py": "hmup",
    "ipa": "m̥u²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmup.mp3",
    "radical": "꒨",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꃪꁬꂦ",
        "han": "万丈"
      },
      {
        "yi": "ꐛꐨꐛꊂꉜꑲꌧ、ꃄꎖꄉꈁꏷ、ꐛꐨꉜꑲꌧ、ꐛꂦꐛꄡꉜꈴ",
        "han": "审时度势"
      }
    ]
  },
  {
    "g": "ꃆ",
    "initial": "m",
    "final": "u",
    "tone": "p",
    "py": "mup",
    "ipa": "mu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mup.mp3",
    "radical": "꒸",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "꒧ꃆꀉꌠꏯ",
        "han": "劳方"
      },
      {
        "yi": "ꌕꇩꃆꂮꌧꍣꅇ",
        "han": "三国语评略"
      },
      {
        "yi": "ꃆꄔꂴꅰ",
        "han": "笼火"
      },
      {
        "yi": "ꇭꃆꃨ",
        "han": "鬼目"
      },
      {
        "yi": "ꉢꁱꇐꃆꂮꉾꐯꉾ",
        "han": "我协作水平很好"
      }
    ]
  },
  {
    "g": "ꃛ",
    "initial": "f",
    "final": "u",
    "tone": "p",
    "py": "fup",
    "ipa": "fu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fup.mp3",
    "radical": "꓆",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꀻꃛꎾꃝ",
        "han": "平湖"
      },
      {
        "yi": "ꎤꏣ、ꈻꃛꏣ",
        "han": "拉链"
      },
      {
        "yi": "ꃛꁶꏿ",
        "han": "狂热"
      },
      {
        "yi": "ꃛꐊꇡ",
        "han": "氟化钙"
      },
      {
        "yi": "ꐻꄔꃛ",
        "han": "冻豆腐"
      }
    ]
  },
  {
    "g": "ꃷ",
    "initial": "v",
    "final": "u",
    "tone": "p",
    "py": "vup",
    "ipa": "vu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vup.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈁꃅꃷꋪꊒ",
        "han": "规行矩步"
      },
      {
        "yi": "ꁱꈓꃷꅍ、ꏾꊨ",
        "han": "耻骨"
      },
      {
        "yi": "ꀱꃷꁨꀱꊌ",
        "han": "指数幂"
      },
      {
        "yi": "ꉺꁧꃷꁨ",
        "han": "公倍数"
      },
      {
        "yi": "ꆿꐔꃷꅍ",
        "han": "虎矢中骨"
      }
    ]
  },
  {
    "g": "ꄗ",
    "initial": "d",
    "final": "u",
    "tone": "p",
    "py": "dup",
    "ipa": "tu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dup.mp3",
    "radical": "꒪",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꄗꍕ",
        "han": "萎缩"
      },
      {
        "yi": "ꏮꑟꄗꃅꄷꃅꐙꌠ",
        "han": "纬度地带"
      },
      {
        "yi": "ꄗꀕꇻꀕ",
        "han": "厚实"
      },
      {
        "yi": "ꄗꇬꉆ",
        "han": "卖呆"
      },
      {
        "yi": "ꇂꄗꁬ",
        "han": "狼毒"
      }
    ]
  },
  {
    "g": "ꄳ",
    "initial": "t",
    "final": "u",
    "tone": "p",
    "py": "tup",
    "ipa": "tʰu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tup.mp3",
    "radical": "꒪",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄳꂱꏦꄇꒉ",
        "han": "图门江"
      },
      {
        "yi": "ꊪꄳ",
        "han": "见证"
      },
      {
        "yi": "ꊪꄳꅇ",
        "han": "证言"
      },
      {
        "yi": "ꑭꈢꄳ",
        "han": "扯后腿"
      },
      {
        "yi": "ꄳꌦꁬ",
        "han": "菟丝子"
      }
    ]
  },
  {
    "g": "ꅎ",
    "initial": "dd",
    "final": "u",
    "tone": "p",
    "py": "ddup",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddup.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꅥ",
    "initial": "nd",
    "final": "u",
    "tone": "p",
    "py": "ndup",
    "ipa": "ndu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndup.mp3",
    "radical": "꒪",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꁮꏂꋍꏢꅥꊰꏢꀨ",
        "han": "杀鸡吓猴"
      },
      {
        "yi": "ꎲꌩꑽꅥ",
        "han": "打黄扫非"
      },
      {
        "yi": "ꌶꌺꅥꌒꀻ",
        "han": "戒尺"
      },
      {
        "yi": "ꉢꆭꀧꅥꇮ",
        "han": "我会打篮球"
      },
      {
        "yi": "ꅥꈩꌳꈄꄻꌠ",
        "han": "武生"
      }
    ]
  },
  {
    "g": "ꆔ",
    "initial": "n",
    "final": "u",
    "tone": "p",
    "py": "nup",
    "ipa": "nu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nup.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꆔꏤ",
        "han": "奴家"
      },
      {
        "yi": "ꊴꃚꀒꆔ",
        "han": "鹿茸"
      },
      {
        "yi": "ꆿꀒꆔ",
        "han": "芽茶"
      },
      {
        "yi": "ꆔꂷ",
        "han": "黄豆"
      }
    ]
  },
  {
    "g": "ꆮ",
    "initial": "hl",
    "final": "u",
    "tone": "p",
    "py": "hlup",
    "ipa": "ɬu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlup.mp3",
    "radical": "꒪",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉌꇑꊉꁯꆮ",
        "han": "蝙蝠蛾"
      },
      {
        "yi": "ꊉꁯꆮ",
        "han": "蛾"
      },
      {
        "yi": "ꐪꆮꁬꌺ",
        "han": "芦笙"
      },
      {
        "yi": "ꐪꆮꂶꅿꌺ",
        "han": "竽"
      },
      {
        "yi": "ꏜꏂꁭꆮ",
        "han": "燕"
      }
    ]
  },
  {
    "g": "ꇑ",
    "initial": "l",
    "final": "u",
    "tone": "p",
    "py": "lup",
    "ipa": "lu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lup.mp3",
    "radical": "꒼",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉌꇑꊉꁯꆮ",
        "han": "蝙蝠蛾"
      },
      {
        "yi": "ꑳꇑꌒꇌ",
        "han": "耶路撒冷"
      },
      {
        "yi": "ꇑꐊꇲ",
        "han": "氯化钴"
      },
      {
        "yi": "ꎽꇑꃏꆹ",
        "han": "吊儿郎当"
      },
      {
        "yi": "ꇩꏤꌅꈌꇑ",
        "han": "窃国"
      }
    ]
  },
  {
    "g": "ꇵ",
    "initial": "g",
    "final": "u",
    "tone": "p",
    "py": "gup",
    "ipa": "ku²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gup.mp3",
    "radical": "꒨",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇵꆅꁠꆅ",
        "han": "疫疠"
      },
      {
        "yi": "ꇵꊫ",
        "han": "拳头"
      },
      {
        "yi": "ꃃꇵꀕꀀ",
        "han": "俯伏"
      },
      {
        "yi": "ꅳꆌꐔꇵꅍ",
        "han": "耳挖子"
      },
      {
        "yi": "ꇵꅐ",
        "han": "自汗"
      }
    ]
  },
  {
    "g": "ꈑ",
    "initial": "k",
    "final": "u",
    "tone": "p",
    "py": "kup",
    "ipa": "kʰu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kup.mp3",
    "radical": "꒡",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꈑꆞꒈꈾ",
        "han": "喉痧"
      },
      {
        "yi": "ꀋꇙꄆꈑꋧꏶꅍ",
        "han": "静电除尘器"
      },
      {
        "yi": "ꀠꈑꇓꋌꅏꅉ",
        "han": "巴库油田"
      },
      {
        "yi": "ꈑꇍꏤꈜ",
        "han": "库仑定律"
      },
      {
        "yi": "ꀑꈑꀊꂥ",
        "han": "高枕"
      }
    ]
  },
  {
    "g": "ꈭ",
    "initial": "gg",
    "final": "u",
    "tone": "p",
    "py": "ggup",
    "ipa": "gu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggup.mp3",
    "radical": "꓀",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑻꈭꀕ",
        "han": "稳练"
      },
      {
        "yi": "ꈭꅐ",
        "han": "脱险"
      },
      {
        "yi": "ꎂꈭꏢ",
        "han": "直圆锥"
      },
      {
        "yi": "ꉨꊝꈭ",
        "han": "闲雅"
      },
      {
        "yi": "ꉌꂵꐂꈭꏓ",
        "han": "心动周期"
      }
    ]
  },
  {
    "g": "ꉃ",
    "initial": "mg",
    "final": "u",
    "tone": "p",
    "py": "mgup",
    "ipa": "ŋgu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgup.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꆅꈜꋍꉃꁈ",
        "han": "封闭疗养"
      },
      {
        "yi": "ꁬꋌꉃꉒ",
        "han": "药物治疗"
      },
      {
        "yi": "ꆅꂁꆅꀋꉃ",
        "han": "炜疾忌医"
      },
      {
        "yi": "ꄮꄉꉃꁈ",
        "han": "姑息疗法"
      },
      {
        "yi": "ꄆꁱꈴꄉꉃ",
        "han": "远程医疗"
      }
    ]
  },
  {
    "g": "ꊥ",
    "initial": "z",
    "final": "u",
    "tone": "p",
    "py": "zup",
    "ipa": "tsu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zup.mp3",
    "radical": "꒢",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꎀꍹꊥꃀ",
        "han": "会首"
      },
      {
        "yi": "ꊥꇬ",
        "han": "发动"
      },
      {
        "yi": "ꊥꁏ",
        "han": "策反"
      },
      {
        "yi": "ꊥꇙꏸ",
        "han": "发动机"
      },
      {
        "yi": "ꍔꁖꅉꊥꎆꌾꋌ",
        "han": "促性腺激素"
      }
    ]
  },
  {
    "g": "ꋇ",
    "initial": "c",
    "final": "u",
    "tone": "p",
    "py": "cup",
    "ipa": "tsʰu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cup.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀔꇌꍫꋇ",
        "han": "鄂伦春族"
      },
      {
        "yi": "ꑗꍓꋇ",
        "han": "女真族"
      },
      {
        "yi": "ꀑꋇ",
        "han": "氧族"
      },
      {
        "yi": "ꏢꋇ",
        "han": "京族"
      },
      {
        "yi": "ꍀꈌꏸꋇ",
        "han": "天蝎座"
      }
    ]
  },
  {
    "g": "ꋤ",
    "initial": "zz",
    "final": "u",
    "tone": "p",
    "py": "zzup",
    "ipa": "dzu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzup.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꀊꍆꇓꋤꁠꐤ",
        "han": "石英玻璃管"
      },
      {
        "yi": "ꐻꋤꀕ",
        "han": "霜条"
      },
      {
        "yi": "ꄫꑌꇓꋤ",
        "han": "重晶石"
      },
      {
        "yi": "ꋤꐊ",
        "han": "结晶体"
      },
      {
        "yi": "ꈾꋤꆹꒉ",
        "han": "沸泉"
      }
    ]
  },
  {
    "g": "ꌀ",
    "initial": "nz",
    "final": "u",
    "tone": "p",
    "py": "nzup",
    "ipa": "ndzu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzup.mp3",
    "radical": "꒴",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꒈꃬꌀꀴ",
        "han": "鸳鸯"
      },
      {
        "yi": "ꌀꇗ",
        "han": "总角"
      },
      {
        "yi": "ꌀꂥ",
        "han": "垂髫"
      },
      {
        "yi": "ꌀꏶꂽ",
        "han": "辫子军"
      },
      {
        "yi": "ꃬꌀꉐꀖ",
        "han": "黑白菜"
      }
    ]
  },
  {
    "g": "ꌡ",
    "initial": "s",
    "final": "u",
    "tone": "p",
    "py": "sup",
    "ipa": "su²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sup.mp3",
    "radical": "꒩",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꈁꉬꁮꐚꁆꏯꌡꈴ",
        "han": "全盘西化"
      },
      {
        "yi": "ꇿꋌꐋꀋꌡ",
        "han": "特效"
      },
      {
        "yi": "ꂁꌡ",
        "han": "暗喻"
      },
      {
        "yi": "ꐛꄟꌡ",
        "han": "形似"
      },
      {
        "yi": "ꏾꌡꄜ",
        "han": "叶状体"
      }
    ]
  },
  {
    "g": "ꌿ",
    "initial": "ss",
    "final": "u",
    "tone": "p",
    "py": "ssup",
    "ipa": "zu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssup.mp3",
    "radical": "꒖",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꌿꎧꁬꃨ",
        "han": "啤酒花"
      },
      {
        "yi": "ꂷꇭꌿ",
        "han": "掌灯"
      },
      {
        "yi": "ꌿꂷꎭꂷꊨꀋꄅ",
        "han": "不辨菽麦"
      },
      {
        "yi": "ꌿꑌꂷꑴꁨꂷꀑꍔꀋꅑ",
        "han": "杉也保竹竹头无泥雨"
      },
      {
        "yi": "ꌿꃰꇰ",
        "han": "云杉"
      }
    ]
  },
  {
    "g": "ꍘ",
    "initial": "zh",
    "final": "u",
    "tone": "p",
    "py": "zhup",
    "ipa": "tʂu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhup.mp3",
    "radical": "꒪",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃶꍘꌩ",
        "han": "夹竹桃"
      },
      {
        "yi": "ꇖꁨꄜꍘꊭ",
        "han": "方桌"
      },
      {
        "yi": "ꌗꃅꍘꊭ",
        "han": "供桌"
      },
      {
        "yi": "ꎴꏢꍘ",
        "han": "水经注"
      },
      {
        "yi": "ꇗꃅꄂꄩꑣꁱꏍ, ꐎꄛꈨꌒꍘꃨꅐ。",
        "han": "宝鼎呈祥香结彩，银台报喜烛生花。"
      }
    ]
  },
  {
    "g": "ꍳ",
    "initial": "ch",
    "final": "u",
    "tone": "p",
    "py": "chup",
    "ipa": "tʂʰu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chup.mp3",
    "radical": "꒩",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꍳꏳ",
        "han": "楚剧"
      },
      {
        "yi": "ꀾꍳꌙ",
        "han": "派力司"
      }
    ]
  },
  {
    "g": "ꎋ",
    "initial": "rr",
    "final": "u",
    "tone": "p",
    "py": "rrup",
    "ipa": "dʐu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rrup.mp3",
    "radical": "꒟",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꄔꑐꎋ",
        "han": "火筷子"
      },
      {
        "yi": "ꎋꈈ",
        "han": "总状蓟"
      },
      {
        "yi": "ꉼꑣꎋꈆ",
        "han": "霍香蓟"
      }
    ]
  },
  {
    "g": "ꎢ",
    "initial": "nr",
    "final": "u",
    "tone": "p",
    "py": "nrup",
    "ipa": "ndʐu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrup.mp3",
    "radical": "꒡",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꎢꃆꂥꌦ",
        "han": "夏布"
      },
      {
        "yi": "ꎢꈆ",
        "han": "大蓟"
      }
    ]
  },
  {
    "g": "ꎽ",
    "initial": "sh",
    "final": "u",
    "tone": "p",
    "py": "shup",
    "ipa": "ʂu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shup.mp3",
    "radical": "꒪",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀈꎽ",
        "han": "浅兰色"
      },
      {
        "yi": "ꎽꃴ",
        "han": "鸭蛋青"
      },
      {
        "yi": "ꎽꏿꇊ",
        "han": "竖琴螺"
      },
      {
        "yi": "ꏱꇺꇬꎽ",
        "han": "行政公署"
      },
      {
        "yi": "ꎽꃀ",
        "han": "沧海"
      }
    ]
  },
  {
    "g": "ꏗ",
    "initial": "r",
    "final": "u",
    "tone": "p",
    "py": "rup",
    "ipa": "ʐu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rup.mp3",
    "radical": "꒠",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏗꆺꊉꏂ",
        "han": "儒林外史"
      },
      {
        "yi": "ꏗꇭꌩ",
        "han": "肉桂"
      },
      {
        "yi": "ꊫꏗꁱꏕ",
        "han": "有恃无恐"
      },
      {
        "yi": "ꀉ ꐩꆿꃀ ꏗ",
        "han": "狐假虎威"
      },
      {
        "yi": "ꃄꈬꏗ",
        "han": "凭险"
      }
    ]
  },
  {
    "g": "ꏳ",
    "initial": "j",
    "final": "u",
    "tone": "p",
    "py": "jup",
    "ipa": "tɕu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jup.mp3",
    "radical": "꒝",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꏳꍹꁬ",
        "han": "锯齿草"
      },
      {
        "yi": "ꋧꃅꎖꌗꏳ",
        "han": "国际计量局"
      },
      {
        "yi": "ꌐꄉꃷꌠꌤ꒧ꏲꂠꏳ",
        "han": "专卖事业管理局"
      },
      {
        "yi": "ꋦꈭꀧꌋꃅꏳ",
        "han": "环保局"
      },
      {
        "yi": "ꆈꀕꏰꏳ",
        "han": "鬼祟"
      }
    ]
  },
  {
    "g": "ꐏ",
    "initial": "q",
    "final": "u",
    "tone": "p",
    "py": "qup",
    "ipa": "tɕʰu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qup.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇩꐏꉪꐨ",
        "han": "国防意识"
      },
      {
        "yi": "ꃅꋮꐏ",
        "han": "边防"
      },
      {
        "yi": "ꂿꐏ",
        "han": "送终"
      },
      {
        "yi": "ꐏꅲ",
        "han": "监护"
      },
      {
        "yi": "ꇮꃅꐏꑳ",
        "han": "工棚"
      }
    ]
  },
  {
    "g": "ꐪ",
    "initial": "jj",
    "final": "u",
    "tone": "p",
    "py": "jjup",
    "ipa": "dʑu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjup.mp3",
    "radical": "꒰",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꋨꄵꐪ",
        "han": "斧凿痕"
      },
      {
        "yi": "ꑽꐪꀞꌅꈌ",
        "han": "处分权"
      },
      {
        "yi": "ꑽꐪꀞ、ꄸꁵ",
        "han": "处分"
      },
      {
        "yi": "ꉸꁌꏤꐪ",
        "han": "黄埔条约"
      },
      {
        "yi": "ꉂꐪ",
        "han": "情愫"
      }
    ]
  },
  {
    "g": "ꑁ",
    "initial": "nj",
    "final": "u",
    "tone": "p",
    "py": "njup",
    "ipa": "ndʑu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njup.mp3",
    "radical": "꒟",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꏀꂿꆹꑁ",
        "han": "喜新厌旧"
      },
      {
        "yi": "ꑁꈋ",
        "han": "鄙弃"
      }
    ]
  },
  {
    "g": "ꑜ",
    "initial": "ny",
    "final": "u",
    "tone": "p",
    "py": "nyup",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nyup.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꒄ",
    "initial": "y",
    "final": "u",
    "tone": "p",
    "py": "yup",
    "ipa": "ʑu²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yup.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꒄꑷꂱꌩ",
        "han": "榆叶梅"
      },
      {
        "yi": "ꎥꒄꌷꇐ",
        "han": "仿生学"
      },
      {
        "yi": "ꒄꌷ",
        "han": "模仿"
      },
      {
        "yi": "ꒄꊖꁬ",
        "han": "玉簪"
      },
      {
        "yi": "ꃴꇉꀎꒄ",
        "han": "绿色奥运"
      }
    ]
  },
  {
    "g": "ꀰ",
    "initial": "b",
    "final": "ur",
    "tone": "x",
    "py": "burx",
    "ipa": "pu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_burx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀰꆽꃀꆽꉔ",
        "han": "混杂"
      },
      {
        "yi": "ꀰꏢꏲꂠ",
        "han": "经理"
      },
      {
        "yi": "ꀰꏮꉉꇗ",
        "han": "循环论"
      },
      {
        "yi": "ꀰꏮꊭ",
        "han": "循环节"
      },
      {
        "yi": "ꒆꇐꅉꆺꐈꇐꀰꏮ",
        "han": "生物地球化学循环"
      }
    ]
  },
  {
    "g": "ꁎ",
    "initial": "p",
    "final": "ur",
    "tone": "x",
    "py": "purx",
    "ipa": "pʰu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_purx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁎꂓ",
        "han": "译名"
      },
      {
        "yi": "ꑠꃖꃅꆳꁎꅉ",
        "han": "信风带"
      },
      {
        "yi": "ꏮꑟꄗꐧꑭꃖꃅꆳꁎꅉ",
        "han": "中纬西风带"
      },
      {
        "yi": "ꁎꐆ",
        "han": "违犯"
      },
      {
        "yi": "ꁨꑭꁎꁘ",
        "han": "漫反射"
      }
    ]
  },
  {
    "g": "ꁰ",
    "initial": "bb",
    "final": "ur",
    "tone": "x",
    "py": "bburx",
    "ipa": "bu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bburx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁰ ꈘ",
        "han": "断然"
      },
      {
        "yi": "ꁰ ꏦ",
        "han": "笔路"
      },
      {
        "yi": "ꁰ ꐂ",
        "han": "彩绘"
      },
      {
        "yi": "ꁰꄻꌅꈌ",
        "han": "著作权"
      },
      {
        "yi": "ꁱꇐꁰꉻ",
        "han": "体例"
      }
    ]
  },
  {
    "g": "ꂉ",
    "initial": "nb",
    "final": "ur",
    "tone": "x",
    "py": "nburx",
    "ipa": "mbu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nburx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꂉꀕꊷꀕꅲ",
        "han": "问寒问暖"
      }
    ]
  },
  {
    "g": "ꂧ",
    "initial": "hm",
    "final": "ur",
    "tone": "x",
    "py": "hmurx",
    "ipa": "m̥u̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌬꐨꂧꊈ",
        "han": "支出膨胀"
      },
      {
        "yi": "ꌬꈧꂧꊈ",
        "han": "消费膨胀"
      }
    ]
  },
  {
    "g": "ꃇ",
    "initial": "m",
    "final": "ur",
    "tone": "x",
    "py": "murx",
    "ipa": "mu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_murx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃇꑐ",
        "han": "狎昵"
      },
      {
        "yi": "ꃇꏅ",
        "han": "撒娇"
      }
    ]
  },
  {
    "g": "ꃜ",
    "initial": "f",
    "final": "ur",
    "tone": "x",
    "py": "furx",
    "ipa": "fu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_furx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃜꀠꐋꀠ",
        "han": "门当户对"
      },
      {
        "yi": "ꃜꊭꄹꏦ",
        "han": "等级婚姻制度"
      },
      {
        "yi": "ꃜꌎ",
        "han": "胳肢"
      },
      {
        "yi": "ꃜꇤꃅ",
        "han": "作伐"
      },
      {
        "yi": "ꃜꇤ",
        "han": "冰人"
      }
    ]
  },
  {
    "g": "ꃸ",
    "initial": "v",
    "final": "ur",
    "tone": "x",
    "py": "vurx",
    "ipa": "vu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃸꁮ",
        "han": "曲霉"
      },
      {
        "yi": "ꃸꅐꌠ",
        "han": "干系"
      },
      {
        "yi": "ꃸꅐꋍꊂꏠꌠ",
        "han": "次级消费者"
      },
      {
        "yi": "ꃸꅉ",
        "han": "去向"
      },
      {
        "yi": "ꃸꅐꐨꊨꒊ",
        "han": "减少损失"
      }
    ]
  },
  {
    "g": "ꄘ",
    "initial": "d",
    "final": "ur",
    "tone": "x",
    "py": "durx",
    "ipa": "tu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_durx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐔꄘꇤ",
        "han": "甜瓜"
      },
      {
        "yi": "ꈜꄡ、ꄘꊋ",
        "han": "阻力"
      },
      {
        "yi": "ꄘꅉ",
        "han": "支点"
      },
      {
        "yi": "ꃅꇨꄘꁈ",
        "han": "防旱措施"
      },
      {
        "yi": "ꄘꇤꆃꇤ",
        "han": "老腌瓜"
      }
    ]
  },
  {
    "g": "ꄴ",
    "initial": "t",
    "final": "ur",
    "tone": "x",
    "py": "turx",
    "ipa": "tʰu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_turx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃄꇙꄴꏮ",
        "han": "防震"
      },
      {
        "yi": "ꈳꇬꃅꌠꄴꏮ",
        "han": "防止走过场"
      },
      {
        "yi": "ꌦꏶꁮꆅꄴꏮꌤꃅ",
        "han": "血防工程"
      },
      {
        "yi": "ꃅꇨꄴꏮ",
        "han": "防涝"
      },
      {
        "yi": "ꅋꄴꏮ",
        "han": "防毒"
      }
    ]
  },
  {
    "g": "ꅏ",
    "initial": "dd",
    "final": "ur",
    "tone": "x",
    "py": "ddurx",
    "ipa": "du̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꅔꁖꊖꌋꅏꅉ",
        "han": "露天煤矿"
      },
      {
        "yi": "ꀂꄁꅏꐡ",
        "han": "偏衫"
      },
      {
        "yi": "ꀙꉰꇓꋌꅏꅉ",
        "han": "北海油田"
      },
      {
        "yi": "ꃷꇐꋚꂷꅏꅉ",
        "han": "商品粮基地"
      },
      {
        "yi": "ꅏ ꄮꐛꄟ",
        "han": "初生态"
      }
    ]
  },
  {
    "g": "ꅦ",
    "initial": "nd",
    "final": "ur",
    "tone": "x",
    "py": "ndurx",
    "ipa": "ndu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁧꀍꅦꇓ",
        "han": "山峰"
      },
      {
        "yi": "ꅦꁱꋐ",
        "han": "简本"
      },
      {
        "yi": "ꅦꌋꏓ ꄻꄉꌠ",
        "han": "简编"
      },
      {
        "yi": "ꎭꏿꅦꇯ",
        "han": "牵累"
      },
      {
        "yi": "ꅦꎆ",
        "han": "编余"
      }
    ]
  },
  {
    "g": "ꆕ",
    "initial": "n",
    "final": "ur",
    "tone": "x",
    "py": "nurx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꆯ",
    "initial": "hl",
    "final": "ur",
    "tone": "x",
    "py": "hlurx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꇒ",
    "initial": "l",
    "final": "ur",
    "tone": "x",
    "py": "lurx",
    "ipa": "lu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑊꈻꇓꀎꇒꈓꌠ",
        "han": "球面镜"
      },
      {
        "yi": "ꇒꌋꏠꐕ",
        "han": "钻机"
      }
    ]
  },
  {
    "g": "ꇶ",
    "initial": "g",
    "final": "ur",
    "tone": "x",
    "py": "gurx",
    "ipa": "ku̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌉꇉꂴꐊꇶꌠ",
        "han": "主力舰"
      },
      {
        "yi": "ꅔꊂꇶꏦ",
        "han": "大陆架"
      },
      {
        "yi": "ꁨꑭꐈꇐꇶꑐꃴ",
        "han": "光化学烟雾"
      },
      {
        "yi": "ꄯꒉꁱꇶꏦꃅ",
        "han": "书面形式"
      },
      {
        "yi": "ꌬꈧꇶꏦ",
        "han": "消费模式"
      }
    ]
  },
  {
    "g": "ꈒ",
    "initial": "k",
    "final": "ur",
    "tone": "x",
    "py": "kurx",
    "ipa": "kʰu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈒꇤꊋꇤ",
        "han": "奋发"
      },
      {
        "yi": "ꌷꈎꋍꈓꈒꌠ",
        "han": "第一学年"
      }
    ]
  },
  {
    "g": "ꈮ",
    "initial": "gg",
    "final": "ur",
    "tone": "x",
    "py": "ggurx",
    "ipa": "gu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈮ ꁁꁌ",
        "han": "半价"
      },
      {
        "yi": "ꈮꈜ",
        "han": "热肠"
      },
      {
        "yi": "ꈮꇤꃅ",
        "han": "欣然"
      },
      {
        "yi": "ꅉꆺꒈꂪꈮꁁꌠ",
        "han": "南半球"
      },
      {
        "yi": "ꅉꆺꁭꅐꈮꁁꌠ",
        "han": "东半球"
      }
    ]
  },
  {
    "g": "ꉄ",
    "initial": "mg",
    "final": "ur",
    "tone": "x",
    "py": "mgurx",
    "ipa": "ŋgu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁨꇐꉄꌎꑽꃤ",
        "han": "侵犯财产罪"
      },
      {
        "yi": "ꑬꑃ、ꉄꋖ",
        "han": "排斥"
      },
      {
        "yi": "ꉄꌎ、ꆹꇏ",
        "han": "侵犯"
      },
      {
        "yi": "ꇩꏤꃰꊿꌅꅍꉄꌎ",
        "han": "侵犯公民权利"
      },
      {
        "yi": "ꁱꂷꉄꋖꌠ",
        "han": "手民"
      }
    ]
  },
  {
    "g": "ꊦ",
    "initial": "z",
    "final": "ur",
    "tone": "x",
    "py": "zurx",
    "ipa": "tsu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊦꈌ",
        "han": "奶嘴"
      },
      {
        "yi": "ꀆꐒꉂꊦ",
        "han": "亲水基"
      },
      {
        "yi": "ꊦꂪ",
        "han": "因果"
      }
    ]
  },
  {
    "g": "ꋈ",
    "initial": "c",
    "final": "ur",
    "tone": "x",
    "py": "curx",
    "ipa": "tsʰu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_curx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋈꅤ",
        "han": "回采"
      },
      {
        "yi": "ꋈꄻꃅꑍ",
        "han": "建设工期"
      },
      {
        "yi": "ꎆꏣꋈꄻ",
        "han": "经济建设"
      },
      {
        "yi": "ꐥꐨꂄꃪꌠꋈꄻ",
        "han": "建设美好生活"
      },
      {
        "yi": "ꍔꀊꐯꃅꋈꄻ",
        "han": "扩建"
      }
    ]
  },
  {
    "g": "ꋥ",
    "initial": "zz",
    "final": "ur",
    "tone": "x",
    "py": "zzurx",
    "ipa": "dzu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐧꋦꋥꄟ",
        "han": "社会形态"
      },
      {
        "yi": "ꀀꁕ、ꋥꁕ",
        "han": "之乡"
      },
      {
        "yi": "ꋥꐥ、ꒆꉻ",
        "han": "生态"
      },
      {
        "yi": "ꃅꑘꋥꑣ",
        "han": "钻研业务"
      },
      {
        "yi": "ꂽꄻꋥꏦ",
        "han": "兵役制"
      }
    ]
  },
  {
    "g": "ꌁ",
    "initial": "nz",
    "final": "ur",
    "tone": "x",
    "py": "nzurx",
    "ipa": "ndzu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌁꇨ",
        "han": "怨怼"
      },
      {
        "yi": "ꌁ ꑣ",
        "han": "仇怨"
      },
      {
        "yi": "ꌁ ꑷ",
        "han": "仇隙"
      }
    ]
  },
  {
    "g": "ꌢ",
    "initial": "s",
    "final": "ur",
    "tone": "x",
    "py": "surx",
    "ipa": "su̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_surx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌢꎭ",
        "han": "贫穷"
      },
      {
        "yi": "ꌢꎭꑤ",
        "han": "贫困县"
      },
      {
        "yi": "ꌢꄻ",
        "han": "清偿"
      },
      {
        "yi": "ꌢꎭꇤꅠꀕ",
        "han": "一贫如洗"
      },
      {
        "yi": "ꌢꎭꇇꀨꈁꀾ",
        "han": "帮困卡"
      }
    ]
  },
  {
    "g": "ꍙ",
    "initial": "zh",
    "final": "ur",
    "tone": "x",
    "py": "zhurx",
    "ipa": "tʂu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍙꑷ",
        "han": "巴结"
      },
      {
        "yi": "ꍙ ꑻ",
        "han": "吹捧"
      }
    ]
  },
  {
    "g": "ꍴ",
    "initial": "ch",
    "final": "ur",
    "tone": "x",
    "py": "churx",
    "ipa": "tʂʰu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_churx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍴꆳ",
        "han": "西风"
      },
      {
        "yi": "ꍴꈾ",
        "han": "秋荞"
      },
      {
        "yi": "ꍴꃹ",
        "han": "立秋"
      }
    ]
  },
  {
    "g": "ꎌ",
    "initial": "rr",
    "final": "ur",
    "tone": "x",
    "py": "rrurx",
    "ipa": "dʐu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rrurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎌꅉꁨ、ꇫꅉꏤ",
        "han": "定位"
      },
      {
        "yi": "ꎌꅉꒃ",
        "han": "着床"
      },
      {
        "yi": "ꎌꅉꌡꍔꊧ",
        "han": "等位基因"
      },
      {
        "yi": "ꋦꐥꄟꎌꅉ",
        "han": "生态位"
      },
      {
        "yi": "ꎌꅉꊈ",
        "han": "位移"
      }
    ]
  },
  {
    "g": "ꎣ",
    "initial": "nr",
    "final": "ur",
    "tone": "x",
    "py": "nrurx",
    "ipa": "ndʐu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎣꁏ",
        "han": "陪房"
      }
    ]
  },
  {
    "g": "ꎾ",
    "initial": "sh",
    "final": "ur",
    "tone": "x",
    "py": "shurx",
    "ipa": "ʂu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꅔꈐꎾꃝ",
        "han": "内陆湖泊"
      },
      {
        "yi": "ꍏꆆꎾꃹꅔ",
        "han": "中南半岛"
      },
      {
        "yi": "ꄣꇭꆀꈁꎾꃝ",
        "han": "塔噶尼喀湖"
      },
      {
        "yi": "ꎾꉌ",
        "han": "海猩"
      },
      {
        "yi": "ꏲꄸꎾꉻ",
        "han": "领海"
      }
    ]
  },
  {
    "g": "ꏘ",
    "initial": "r",
    "final": "ur",
    "tone": "x",
    "py": "rurx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꏴ",
    "initial": "j",
    "final": "ur",
    "tone": "x",
    "py": "jurx",
    "ipa": "tɕu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏴꏵ",
        "han": "骨髓"
      },
      {
        "yi": "ꁲꀙꏴꏵ",
        "han": "铅笔芯"
      },
      {
        "yi": "ꃅꏴꏵ",
        "han": "马骨髓"
      },
      {
        "yi": "ꏵꏴ",
        "han": "种仁"
      },
      {
        "yi": "ꀙꏴꏵ",
        "han": "笔铅"
      }
    ]
  },
  {
    "g": "ꐐ",
    "initial": "q",
    "final": "ur",
    "tone": "x",
    "py": "qurx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꐫ",
    "initial": "jj",
    "final": "ur",
    "tone": "x",
    "py": "jjurx",
    "ipa": "dʑu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꅳꀧꐫꆣ",
        "han": "前庭"
      },
      {
        "yi": "ꀮꐫꇓ",
        "han": "雄孔"
      },
      {
        "yi": "ꐫ ꄂꑮ",
        "han": "单孔目"
      },
      {
        "yi": "ꅳꀧꐫꇓ",
        "han": "外听道"
      },
      {
        "yi": "ꃀꐫꇓ",
        "han": "雌孔"
      }
    ]
  },
  {
    "g": "ꑂ",
    "initial": "nj",
    "final": "ur",
    "tone": "x",
    "py": "njurx",
    "ipa": "ndʑu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꑂꌺꄻ",
        "han": "揽工"
      },
      {
        "yi": "ꑂꊙ",
        "han": "排挤"
      },
      {
        "yi": "ꉈꏭꌠꑂꊙ",
        "han": "排外"
      },
      {
        "yi": "ꑂꑣ",
        "han": "排击"
      },
      {
        "yi": "ꑂ ꌺ",
        "han": "长工"
      }
    ]
  },
  {
    "g": "ꒅ",
    "initial": "y",
    "final": "ur",
    "tone": "x",
    "py": "yurx",
    "ipa": "ʑu̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yurx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꒅꁮꇷꑴ",
        "han": "细胞膜"
      },
      {
        "yi": "ꍔꄅꒅꇰꄮ",
        "han": "生殖生长期"
      },
      {
        "yi": "ꌦꐈꒅꀱ",
        "han": "投胎"
      },
      {
        "yi": "ꄾꇰ、ꒅꇰ",
        "han": "在成长"
      },
      {
        "yi": "ꇬꅑꒅꁮꑌꌠ",
        "han": "多细胞生物"
      }
    ]
  },
  {
    "g": "ꀱ",
    "initial": "b",
    "final": "ur",
    "tone": "",
    "py": "bur",
    "ipa": "pu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bur.mp3",
    "radical": "꒥",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀱꐥꇁ",
        "han": "来生"
      },
      {
        "yi": "ꆎꀱꉢꌉꃅ",
        "han": "混战"
      },
      {
        "yi": "ꅇꀱꎼꇁ",
        "han": "批复"
      },
      {
        "yi": "ꋍꁊꀉꁁꀱ",
        "han": "翻一番半"
      },
      {
        "yi": "ꀱꀉꆹꉪꏦ",
        "han": "复古主义"
      }
    ]
  },
  {
    "g": "ꁏ",
    "initial": "p",
    "final": "ur",
    "tone": "",
    "py": "pur",
    "ipa": "pʰu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pur.mp3",
    "radical": "꒩",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꄓꉇꁏ",
        "han": "发难"
      },
      {
        "yi": "ꁏꐛ",
        "han": "生成"
      },
      {
        "yi": "ꁰꁏ",
        "han": "编译"
      },
      {
        "yi": "ꑋꈌꁏ",
        "han": "春色"
      },
      {
        "yi": "ꏦꁏ",
        "han": "不法"
      }
    ]
  },
  {
    "g": "ꁱ",
    "initial": "bb",
    "final": "ur",
    "tone": "",
    "py": "bbur",
    "ipa": "bu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbur.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈝꐮꃅꁱ",
        "han": "简笔"
      },
      {
        "yi": "ꁱꌺꑬꄌ",
        "han": "抱佛脚"
      },
      {
        "yi": "ꁱꀦꋐꌠ",
        "han": "原作"
      },
      {
        "yi": "ꌦꌺꁱ",
        "han": "神像"
      },
      {
        "yi": "ꃆꃀꁱꇐꈋꍣ",
        "han": "文学议论"
      }
    ]
  },
  {
    "g": "ꂊ",
    "initial": "nb",
    "final": "ur",
    "tone": "",
    "py": "nbur",
    "ipa": "mbu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbur.mp3",
    "radical": "꒩",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꋠꂊꈚꊸ",
        "han": "丰衣足食"
      },
      {
        "yi": "ꏷꂊ",
        "han": "丰润"
      },
      {
        "yi": "ꋠꂊꈚꊸꌐ",
        "han": "家给人足"
      },
      {
        "yi": "ꋠꂊ",
        "han": "果腹"
      },
      {
        "yi": "ꋠꂊꈚꊸꋉꃆ",
        "han": "温饱工程"
      }
    ]
  },
  {
    "g": "ꂨ",
    "initial": "hm",
    "final": "ur",
    "tone": "",
    "py": "hmur",
    "ipa": "m̥u̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmur.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꅉꂨꍩꇓ",
        "han": "地雷"
      },
      {
        "yi": "ꒉꂨꁖ",
        "han": "开口子"
      },
      {
        "yi": "ꄇꍩꌌꂨ",
        "han": "炮击"
      },
      {
        "yi": "ꁏꐈꂨꇐ",
        "han": "反应堆"
      },
      {
        "yi": "ꋍꃀꌗꂨ",
        "han": "肺气肿"
      }
    ]
  },
  {
    "g": "ꃈ",
    "initial": "m",
    "final": "ur",
    "tone": "",
    "py": "mur",
    "ipa": "mu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mur.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃰꃅꌳꃈꅮ",
        "han": "帝子"
      },
      {
        "yi": "ꀍꃈꄚ",
        "han": "顶礼"
      },
      {
        "yi": "ꉌꃈꑓꌒ",
        "han": "心情舒畅"
      },
      {
        "yi": "ꀍꃈꏵꀠ",
        "han": "倒置"
      },
      {
        "yi": "ꀉꃈꀉꑐ",
        "han": "娇气"
      }
    ]
  },
  {
    "g": "ꃝ",
    "initial": "f",
    "final": "ur",
    "tone": "",
    "py": "fur",
    "ipa": "fu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fur.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉢꄊ꒧ꎾꃝ",
        "han": "安大略湖"
      },
      {
        "yi": "ꇇꌭꌌꄉꃝꎭ",
        "han": "武装挑衅"
      },
      {
        "yi": "ꃝꊙꒉꁬ",
        "han": "栅藻"
      },
      {
        "yi": "ꃝꐨꏈꏼ",
        "han": "婚姻纠纷"
      },
      {
        "yi": "ꄐꄜꎾꃝ",
        "han": "洞庭湖"
      }
    ]
  },
  {
    "g": "ꃹ",
    "initial": "v",
    "final": "ur",
    "tone": "",
    "py": "vur",
    "ipa": "vu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vur.mp3",
    "radical": "꒯",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃅꋆꃹ",
        "han": "立冬"
      },
      {
        "yi": "ꑍꃹꏦ",
        "han": "二进制"
      },
      {
        "yi": "ꑐꃹ",
        "han": "打颤"
      },
      {
        "yi": "ꇗꃹ",
        "han": "受精"
      },
      {
        "yi": "ꅲꂿꃹ",
        "han": "着迷"
      }
    ]
  },
  {
    "g": "ꄙ",
    "initial": "d",
    "final": "ur",
    "tone": "",
    "py": "dur",
    "ipa": "tu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_dur.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇷꄙꊋꌭ",
        "han": "精干"
      },
      {
        "yi": "ꉔꇙꄆꄙꐈꅍ",
        "han": "滑动变阻器"
      },
      {
        "yi": "ꌕꑭꄙꅍ",
        "han": "三脚架"
      },
      {
        "yi": "ꂽꃌꌺꏝꀪꏭꄙꌠ",
        "han": "抗属"
      },
      {
        "yi": "ꄆꄙ꒧ꐨ",
        "han": "电功器"
      }
    ]
  },
  {
    "g": "ꄵ",
    "initial": "t",
    "final": "ur",
    "tone": "",
    "py": "tur",
    "ipa": "tʰu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_tur.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꑾꃶꑾꉆꄵꄉꌠ",
        "han": "清炖羊杂"
      },
      {
        "yi": "ꈜꄵ",
        "han": "阻击"
      },
      {
        "yi": "ꏀꈜꄵꅍ",
        "han": "螺丝攻"
      },
      {
        "yi": "ꁦꄵꇈꐥ",
        "han": "穿山甲"
      },
      {
        "yi": "ꋍꃀꎸꄵ",
        "han": "心肺杂碎汤"
      }
    ]
  },
  {
    "g": "ꅐ",
    "initial": "dd",
    "final": "ur",
    "tone": "",
    "py": "ddur",
    "ipa": "du̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ddur.mp3",
    "radical": "꒤",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉇꅐꅋ",
        "han": "外毒素"
      },
      {
        "yi": "ꄞꅐꂓꄀꅉ",
        "han": "光荣榜"
      },
      {
        "yi": "ꀴꊪꅐ",
        "han": "脓包病"
      },
      {
        "yi": "ꅔꅐ",
        "han": "登陆"
      },
      {
        "yi": "ꅐꀋꅑꉌꊭ",
        "han": "几维鸟"
      }
    ]
  },
  {
    "g": "ꅧ",
    "initial": "nd",
    "final": "ur",
    "tone": "",
    "py": "ndur",
    "ipa": "ndu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ndur.mp3",
    "radical": "꒪",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꐮꁧꊈꅧꃷꁨꈋꍣ",
        "han": "堆垒素数论"
      },
      {
        "yi": "ꐮꀋꅧ",
        "han": "互质"
      },
      {
        "yi": "ꃢꋊꅧ",
        "han": "鉴频"
      },
      {
        "yi": "ꇙꐪꋊꅧꅍ",
        "han": "鉴相器"
      },
      {
        "yi": "ꎭꅧ",
        "han": "魔难"
      }
    ]
  },
  {
    "g": "ꆖ",
    "initial": "n",
    "final": "ur",
    "tone": "",
    "py": "nur",
    "ipa": "nu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nur.mp3",
    "radical": "꒔",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꆖꋌ",
        "han": "豆油"
      },
      {
        "yi": "ꆖꇗꂶꆈ",
        "han": "鸦胆子"
      },
      {
        "yi": "ꆖꃴ",
        "han": "豆绿"
      },
      {
        "yi": "ꆖꂷ",
        "han": "黄豆"
      },
      {
        "yi": "ꆖꑆ",
        "han": "豆腐皮"
      }
    ]
  },
  {
    "g": "ꆰ",
    "initial": "hl",
    "final": "ur",
    "tone": "",
    "py": "hlur",
    "ipa": "ɬu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlur.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃆꄔꆰ",
        "han": "纵火"
      },
      {
        "yi": "ꃨꆰꅉꆈꍮ",
        "han": "探险"
      },
      {
        "yi": "ꁮꆰꌺ",
        "han": "跟头虫"
      },
      {
        "yi": "ꊿꃨꆰ",
        "han": "艰危"
      },
      {
        "yi": "ꐫꆰ",
        "han": "砂眼"
      }
    ]
  },
  {
    "g": "ꇓ",
    "initial": "l",
    "final": "ur",
    "tone": "",
    "py": "lur",
    "ipa": "lu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lur.mp3",
    "radical": "꒼",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌋꀋꐊꇑꇓꐥꇐ",
        "han": "无机矿物质"
      },
      {
        "yi": "ꅋꐞꍩꇓ",
        "han": "凝固汽油弹"
      },
      {
        "yi": "ꋤꇓꉱꀻ",
        "han": "盖玻片"
      },
      {
        "yi": "ꃰꃅꀎꇓ",
        "han": "王冠"
      },
      {
        "yi": "ꇓꇂ ꋌꆅꄻ",
        "han": "蜡疗"
      }
    ]
  },
  {
    "g": "ꇷ",
    "initial": "g",
    "final": "ur",
    "tone": "",
    "py": "gur",
    "ipa": "ku̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_gur.mp3",
    "radical": "꒤",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꇷꇨꌩ",
        "han": "坚果"
      },
      {
        "yi": "ꂶꀕꇷꀠꋦꁧ",
        "han": "裸子植物"
      },
      {
        "yi": "ꁯꇲꁱꇷ",
        "han": "贝壳"
      },
      {
        "yi": "ꌧꑀꁱꇷ",
        "han": "橘红"
      },
      {
        "yi": "ꉇꇷꁱ",
        "han": "假象"
      }
    ]
  },
  {
    "g": "ꈓ",
    "initial": "k",
    "final": "ur",
    "tone": "",
    "py": "kur",
    "ipa": "kʰu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_kur.mp3",
    "radical": "꒑",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꂱꈓꃆ꒧ꄓ",
        "han": "祸起萧墙"
      },
      {
        "yi": "ꏓꈉꇓꈓ",
        "han": "都城"
      },
      {
        "yi": "ꋍꈓꎭꈐꑋꈌꐊꄉꑟ，ꇖꄮꎆꐪꒈꂃꄓꄉꇁ",
        "han": "一年好运随春到，四季彩云滚滚来"
      },
      {
        "yi": "ꇓꈓꐛꈴ",
        "han": "城镇化"
      },
      {
        "yi": "ꇓꈓꉮꌸꊨꒊ",
        "han": "城市减灾"
      }
    ]
  },
  {
    "g": "ꈯ",
    "initial": "gg",
    "final": "ur",
    "tone": "",
    "py": "ggur",
    "ipa": "gu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ggur.mp3",
    "radical": "꒪",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꈯꄿꎸꒊ",
        "han": "瘦身"
      },
      {
        "yi": "ꃢꃷꈯꄜ",
        "han": "服饰中心"
      },
      {
        "yi": "ꇘꅉꈯꄔ",
        "han": "震中"
      },
      {
        "yi": "ꈯꄜ",
        "han": "核心"
      },
      {
        "yi": "ꈯꄜꋈꄻ",
        "han": "构建枢纽"
      }
    ]
  },
  {
    "g": "ꉅ",
    "initial": "mg",
    "final": "ur",
    "tone": "",
    "py": "mgur",
    "ipa": "ŋgu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_mgur.mp3",
    "radical": "꒤",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉌꉅꃴꆅ",
        "han": "忌妒"
      },
      {
        "yi": "ꑬꏸꇓꀋꉅ",
        "han": "一路顺风"
      },
      {
        "yi": "ꉅꇓꄻꇔꇷ",
        "han": "瓦匠"
      },
      {
        "yi": "ꉅꇓꃱ",
        "han": "鸭跖草"
      },
      {
        "yi": "ꉅꌉ",
        "han": "进犯"
      }
    ]
  },
  {
    "g": "ꊧ",
    "initial": "z",
    "final": "ur",
    "tone": "",
    "py": "zur",
    "ipa": "tsu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zur.mp3",
    "radical": "꓁",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍔꊧꉹ",
        "han": "基因型"
      },
      {
        "yi": "ꉢꊧꀋꐊ",
        "han": "脱氨基"
      },
      {
        "yi": "ꊧꂷꃢ",
        "han": "珠被"
      },
      {
        "yi": "ꁢꊧꎹ",
        "han": "追根"
      },
      {
        "yi": "ꁵꊧ",
        "han": "正极"
      }
    ]
  },
  {
    "g": "ꋉ",
    "initial": "c",
    "final": "ur",
    "tone": "",
    "py": "cur",
    "ipa": "tsʰu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cur.mp3",
    "radical": "꒩",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꋉꌐꄮ",
        "han": "竣工时间"
      },
      {
        "yi": "ꑮꒃꋑꋉꃆꂮ",
        "han": "亲事"
      },
      {
        "yi": "ꎄꋉ",
        "han": "星子"
      },
      {
        "yi": "ꈲꒉꋉ꒧",
        "han": "水利枢纽"
      },
      {
        "yi": "ꁱꂷꃙꋉꁈ",
        "han": "如字"
      }
    ]
  },
  {
    "g": "ꋦ",
    "initial": "zz",
    "final": "ur",
    "tone": "",
    "py": "zzur",
    "ipa": "dzu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzur.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉇꋦꉸꊿ",
        "han": "华侨"
      },
      {
        "yi": "ꑍꈤꋦꁧ",
        "han": "藤本植物"
      },
      {
        "yi": "ꊒꆽꃅꋦ",
        "han": "鹄立"
      },
      {
        "yi": "ꄁꋦꃅꌌꌬ",
        "han": "独立行使"
      },
      {
        "yi": "ꑲꋦꇤꄂ",
        "han": "成家立业"
      }
    ]
  },
  {
    "g": "ꌂ",
    "initial": "nz",
    "final": "ur",
    "tone": "",
    "py": "nzur",
    "ipa": "ndzu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzur.mp3",
    "radical": "꒤",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌂꑷꀉꇨꆅ",
        "han": "急性炎症"
      },
      {
        "yi": "ꌂꏷꈌꀕ",
        "han": "深恶痛绝"
      },
      {
        "yi": "ꌂꃆ ꑌ",
        "han": "结怨"
      },
      {
        "yi": "ꊿꋋꌂ ꅍ",
        "han": "牢什子"
      },
      {
        "yi": "ꌟꌂꀀꃌꅥ、ꈌꃃꃮꄩꍀ",
        "han": "迁怒"
      }
    ]
  },
  {
    "g": "ꌣ",
    "initial": "s",
    "final": "ur",
    "tone": "",
    "py": "sur",
    "ipa": "su̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sur.mp3",
    "radical": "꒑",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꑽꐪꌣ",
        "han": "赎罪"
      },
      {
        "yi": "ꌣꈚꌠ",
        "han": "士绅"
      },
      {
        "yi": "ꌣꈚꐞꄿꌠ",
        "han": "乡绅"
      },
      {
        "yi": "ꌣꈚꇁ",
        "han": "发家"
      },
      {
        "yi": "ꊼꇅꌣꈚ",
        "han": "小康"
      }
    ]
  },
  {
    "g": "ꍚ",
    "initial": "zh",
    "final": "ur",
    "tone": "",
    "py": "zhur",
    "ipa": "tʂu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhur.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꍚꅇꑻꅇ",
        "han": "花言巧语"
      },
      {
        "yi": "ꑊꍚꁵ、ꐛꀋꌒ、ꑊꀋꌒ",
        "han": "委曲"
      },
      {
        "yi": "ꍚꏠꄯꒉ",
        "han": "砂纸"
      },
      {
        "yi": "ꈌꍚꉏꑐꈩ",
        "han": "卖乖"
      },
      {
        "yi": "ꎐꍚꋌ",
        "han": "牙膏"
      }
    ]
  },
  {
    "g": "ꍵ",
    "initial": "ch",
    "final": "ur",
    "tone": "",
    "py": "chur",
    "ipa": "tʂʰu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chur.mp3",
    "radical": "꒞",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃅꍵꌶꎖ",
        "han": "秋试"
      },
      {
        "yi": "ꍵꋚꒇꋩ",
        "han": "收秋"
      },
      {
        "yi": "ꃅꍵꋚ",
        "han": "秋粮"
      },
      {
        "yi": "ꍵꋚꎴ",
        "han": "秋收"
      },
      {
        "yi": "ꍵꐧꈪꅉ",
        "han": "秋分点"
      }
    ]
  },
  {
    "g": "ꎍ",
    "initial": "rr",
    "final": "ur",
    "tone": "",
    "py": "rrur",
    "ipa": "dʐu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rrur.mp3",
    "radical": "꒟",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐥꇐꀨꎍꉪꏦ",
        "han": "唯物主义"
      },
      {
        "yi": "ꐥꇐꀨꎍꋊꐚꏦ、ꐥꇐꐛꐈꏥꏦ",
        "han": "唯物辩证法"
      },
      {
        "yi": "ꌄꇤ、ꆼꎍ",
        "han": "负责"
      },
      {
        "yi": "ꆼꎍꐨꑞꅉꐥꌠꇬꌦ",
        "han": "有限责任公司"
      },
      {
        "yi": "ꀨꎍꈆꑪꌧꃀ",
        "han": "首席科学家"
      }
    ]
  },
  {
    "g": "ꎤ",
    "initial": "nr",
    "final": "ur",
    "tone": "",
    "py": "nrur",
    "ipa": "ndʐu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nrur.mp3",
    "radical": "꒪",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꋍꎤꄉ",
        "han": "封存"
      },
      {
        "yi": "ꎤꏣ",
        "han": "拉锁"
      },
      {
        "yi": "ꎤꂷ",
        "han": "碰簧锁"
      },
      {
        "yi": "ꎤꏣ、ꈻꃛꏣ",
        "han": "拉链"
      },
      {
        "yi": "ꂫꎤꅇ",
        "han": "结穴"
      }
    ]
  },
  {
    "g": "ꎿ",
    "initial": "sh",
    "final": "ur",
    "tone": "",
    "py": "shur",
    "ipa": "ʂu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shur.mp3",
    "radical": "꒺",
    "strokes": 1,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏃꉰꎿ",
        "han": "湿海"
      },
      {
        "yi": "ꎿꉱꑱꎹ",
        "han": "大海捞针"
      },
      {
        "yi": "ꎿꇬꅔꇬꅐꇐ",
        "han": "海陆资源"
      },
      {
        "yi": "ꑿꆺꎿꃝ",
        "han": "泸沽湖"
      },
      {
        "yi": "ꎿꂽꀕꂽꈾꋎꍅꏤꐪ",
        "han": "限制海军军备条约"
      }
    ]
  },
  {
    "g": "ꏙ",
    "initial": "r",
    "final": "ur",
    "tone": "",
    "py": "rur",
    "ipa": "ʐu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rur.mp3",
    "radical": "꒐",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꀆꏿꇁꏙ",
        "han": "变蛋"
      },
      {
        "yi": "ꇇꏙ",
        "han": "手淫"
      },
      {
        "yi": "ꇁꏙ",
        "han": "腊味"
      },
      {
        "yi": "ꉛꇁꏙ",
        "han": "鲍鱼"
      },
      {
        "yi": "ꇁꏙꀉꆹ",
        "han": "老腌儿"
      }
    ]
  },
  {
    "g": "ꏵ",
    "initial": "j",
    "final": "ur",
    "tone": "",
    "py": "jur",
    "ipa": "tɕu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jur.mp3",
    "radical": "꒤",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀍꃈꏵꀠꒌ",
        "han": "倒影"
      },
      {
        "yi": "ꀉꇖꏵ",
        "han": "重核"
      },
      {
        "yi": "ꀍꃈꏵꀠ",
        "han": "倒置"
      },
      {
        "yi": "ꏵꋠꁮ",
        "han": "蛀心虫"
      },
      {
        "yi": "ꁲꀙꏴꏵ",
        "han": "铅笔芯"
      }
    ]
  },
  {
    "g": "ꐑ",
    "initial": "q",
    "final": "ur",
    "tone": "",
    "py": "qur",
    "ipa": "tɕʰu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qur.mp3",
    "radical": "꒨",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈁꑓꐑ",
        "han": "修面"
      },
      {
        "yi": "ꀂꏾꐑ",
        "han": "剃头"
      },
      {
        "yi": "ꊸꒉꐑ",
        "han": "热泉"
      },
      {
        "yi": "ꂴꊨꐑ",
        "han": "刮脸"
      },
      {
        "yi": "ꒉꐑ",
        "han": "喷泉"
      }
    ]
  },
  {
    "g": "ꐬ",
    "initial": "jj",
    "final": "ur",
    "tone": "",
    "py": "jjur",
    "ipa": "dʑu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjur.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎖꐬꇢꊭ",
        "han": "会元"
      },
      {
        "yi": "ꌋꐬꌗ",
        "han": "坑气"
      },
      {
        "yi": "ꇷꌾꐬꆠꃅꇏ",
        "han": "恐怖主义"
      },
      {
        "yi": "ꃅꐬꄙ ꅍ",
        "han": "井架"
      },
      {
        "yi": "ꊾꁿꃅꐬ",
        "han": "防空洞"
      }
    ]
  },
  {
    "g": "ꑃ",
    "initial": "nj",
    "final": "ur",
    "tone": "",
    "py": "njur",
    "ipa": "ndʑu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njur.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑃꈋ",
        "han": "厌弃"
      },
      {
        "yi": "ꉇꑃꊋ",
        "han": "反冲力"
      },
      {
        "yi": "ꀋꑃꄇꍩ",
        "han": "无坐力炮"
      },
      {
        "yi": "ꑃꑟꀃꈈ",
        "han": "弹簧门"
      },
      {
        "yi": "ꐋꌠꉂꀋꐋꌠꑃ",
        "han": "党同伐异"
      }
    ]
  },
  {
    "g": "ꒆ",
    "initial": "y",
    "final": "ur",
    "tone": "",
    "py": "yur",
    "ipa": "ʑu̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yur.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꊱꒆꑴꁱ",
        "han": "图谱"
      },
      {
        "yi": "ꊐꉀꒆ",
        "han": "高就"
      },
      {
        "yi": "ꐮꊒꊈꉈꒆ",
        "han": "补偿性再生"
      },
      {
        "yi": "ꒆꌅꄜ",
        "han": "染色体"
      },
      {
        "yi": "ꒆꉅꏡꁈꀊꏀꌠ",
        "han": "新法接生"
      }
    ]
  },
  {
    "g": "ꀲ",
    "initial": "b",
    "final": "y",
    "tone": "t",
    "py": "byt",
    "ipa": "pɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_byt.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꒌꀕ、ꀲꒌ",
        "han": "阴影计"
      },
      {
        "yi": "ꀲꈌ",
        "han": "阴门"
      },
      {
        "yi": "ꀲꒉꆅ",
        "han": "带下"
      },
      {
        "yi": "ꀲꒉ",
        "han": "白带"
      },
      {
        "yi": "ꀲꒉꈴꏡ、ꃏꒉꈳꅉ",
        "han": "输卵管"
      }
    ]
  },
  {
    "g": "ꁐ",
    "initial": "p",
    "final": "y",
    "tone": "t",
    "py": "pyt",
    "ipa": "pʰɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pyt.mp3",
    "radical": "꒬",
    "strokes": 1,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꆖꁐ",
        "han": "豆嘴儿"
      },
      {
        "yi": "ꐩꁐꏫ",
        "han": "麦片"
      },
      {
        "yi": "ꄇꍩꀕꇓꁐꌠ",
        "han": "群子弹"
      },
      {
        "yi": "ꁁꁐꎐ",
        "han": "弦切角"
      },
      {
        "yi": "ꁁꁐꎖ",
        "han": "优弧"
      }
    ]
  },
  {
    "g": "ꁲ",
    "initial": "bb",
    "final": "y",
    "tone": "t",
    "py": "bbyt",
    "ipa": "bɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbyt.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꁲꈏꄀꌠ",
        "han": "内胚层"
      },
      {
        "yi": "ꁲꒉꀊꏂꌠ",
        "han": "黄体"
      },
      {
        "yi": "ꁲꒉ",
        "han": "羊水"
      },
      {
        "yi": "ꁲꀙꏴꏵ",
        "han": "铅笔芯"
      },
      {
        "yi": "ꅉꂨꁲꇓꌌꌉꌠ",
        "han": "地雷战"
      }
    ]
  },
  {
    "g": "ꂋ",
    "initial": "nb",
    "final": "y",
    "tone": "t",
    "py": "nbyt",
    "ipa": "mbɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbyt.mp3",
    "radical": "꒩",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꒉꂋ、ꁮꁖ、ꁭꁘ",
        "han": "泛滥"
      },
      {
        "yi": "ꈳꎆꅐꂋ",
        "han": "通胀"
      },
      {
        "yi": "ꒉꂋ",
        "han": "漫溢"
      },
      {
        "yi": "ꈳꎆꅐꂋꇨ",
        "han": "高通胀"
      },
      {
        "yi": "ꎿꒉꂋ",
        "han": "来潮"
      }
    ]
  },
  {
    "g": "ꃉ",
    "initial": "m",
    "final": "y",
    "tone": "t",
    "py": "myt",
    "ipa": "mɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_myt.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃉꉘꏜ",
        "han": "兰草"
      },
      {
        "yi": "ꂸꃉ",
        "han": "毛笋"
      },
      {
        "yi": "ꑋꈌꂸꃉ",
        "han": "春笋"
      },
      {
        "yi": "ꃉꉘꇇꌋ",
        "han": "兰花指"
      },
      {
        "yi": "ꃉꉘꃨ",
        "han": "兰花"
      }
    ]
  },
  {
    "g": "ꃞ",
    "initial": "f",
    "final": "y",
    "tone": "t",
    "py": "fyt",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fyt.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꃺ",
    "initial": "v",
    "final": "y",
    "tone": "t",
    "py": "vyt",
    "ipa": "vɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vyt.mp3",
    "radical": "꒓",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꊫꃺ",
        "han": "吐沫"
      },
      {
        "yi": "ꉢꀿꃶꃺꃶꐥ",
        "han": "我有堂兄"
      },
      {
        "yi": "ꃺꄸ",
        "han": "麻木"
      },
      {
        "yi": "ꊫꃺꆅꇳ",
        "han": "飞沫传染"
      },
      {
        "yi": "ꀠꃺ",
        "han": "狗獾"
      }
    ]
  },
  {
    "g": "ꆱ",
    "initial": "hl",
    "final": "y",
    "tone": "t",
    "py": "hlyt",
    "ipa": "ɬɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlyt.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆱꌡꇗꊧ",
        "han": "囊胚"
      },
      {
        "yi": "ꏮꇉꀱꆱ",
        "han": "内胎"
      },
      {
        "yi": "ꆱꈥꅐ",
        "han": "囊空如洗"
      },
      {
        "yi": "ꊨꄟꆱ",
        "han": "关节囊"
      },
      {
        "yi": "ꆱꑭꇬꁖ",
        "han": "破绽"
      }
    ]
  },
  {
    "g": "ꇔ",
    "initial": "l",
    "final": "y",
    "tone": "t",
    "py": "lyt",
    "ipa": "lɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lyt.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꇔꐆ",
        "han": "撤销"
      },
      {
        "yi": "ꀎꇓꇔ",
        "han": "免冠"
      },
      {
        "yi": "ꀨꊰꇔꊰ",
        "han": "本息"
      },
      {
        "yi": "ꊋꋠꐨꇔ",
        "han": "脱困"
      },
      {
        "yi": "ꇔꊵꊰ",
        "han": "降息"
      }
    ]
  },
  {
    "g": "ꊨ",
    "initial": "z",
    "final": "y",
    "tone": "t",
    "py": "zyt",
    "ipa": "tsɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zyt.mp3",
    "radical": "꒛",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꊨꏦꀑꐱꃆꂮ",
        "han": "本人概况"
      },
      {
        "yi": "ꒉꌤꆏꇓꅐ、ꊨꄅ",
        "han": "水落石出"
      },
      {
        "yi": "ꊨꃀ",
        "han": "锄头"
      },
      {
        "yi": "ꄐꇐꊨꇽ",
        "han": "战略决策"
      },
      {
        "yi": "ꉹꁌꀵꃤꊨ",
        "han": "减轻群众负担"
      }
    ]
  },
  {
    "g": "ꋊ",
    "initial": "c",
    "final": "y",
    "tone": "t",
    "py": "cyt",
    "ipa": "tsʰɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cyt.mp3",
    "radical": "꒣",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꐥꇐꀨꎍꋊꐚꏦ、ꐥꇐꐛꐈꏥꏦ",
        "han": "唯物辩证法"
      },
      {
        "yi": "ꄹꁆꁧꋊꉻ",
        "han": "部分分式"
      },
      {
        "yi": "ꋊꊈꒉ",
        "han": "硬水"
      },
      {
        "yi": "ꆴ、ꆹꆴꏀꐛ、ꋊꆴ",
        "han": "代谢"
      },
      {
        "yi": "ꀑꈴꂪꋊ",
        "han": "贯串"
      }
    ]
  },
  {
    "g": "ꋧ",
    "initial": "zz",
    "final": "y",
    "tone": "t",
    "py": "zzyt",
    "ipa": "dzɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzyt.mp3",
    "radical": "꓆",
    "strokes": 6,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꋧ꒧",
        "han": "细活"
      },
      {
        "yi": "ꎿꇉꇉ、ꎿꇅꋧ",
        "han": "海峡"
      },
      {
        "yi": "ꊿꋧꊿꀞ",
        "han": "熙熙攘攘"
      },
      {
        "yi": "ꅇ ꋧ",
        "han": "花絮"
      },
      {
        "yi": "ꉪꋧꎖꏡ",
        "han": "权衡"
      }
    ]
  },
  {
    "g": "ꌃ",
    "initial": "nz",
    "final": "y",
    "tone": "t",
    "py": "nzyt",
    "ipa": "ndzɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzyt.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌋꌃꇷꀻ",
        "han": "碳精薄片"
      },
      {
        "yi": "ꅧꅇ、ꐛꌃꅇ",
        "han": "成语"
      },
      {
        "yi": "ꏂꌃ",
        "han": "足金"
      },
      {
        "yi": "ꎧꌃ",
        "han": "乙醇"
      },
      {
        "yi": "ꃚꌃ",
        "han": "纯音"
      }
    ]
  },
  {
    "g": "ꌤ",
    "initial": "s",
    "final": "y",
    "tone": "t",
    "py": "syt",
    "ipa": "sɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_syt.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌤꀋꐥꇛꌺ",
        "han": "冗官"
      },
      {
        "yi": "ꏓꀘꑭꏿꌤꑟ",
        "han": "聚丙烯睛纤维"
      },
      {
        "yi": "ꄔꆰꌤ",
        "han": "火警"
      },
      {
        "yi": "ꅪꄟꌤ",
        "han": "红细胞"
      },
      {
        "yi": "ꐧꋦꌤꃅ",
        "han": "社会合作"
      }
    ]
  },
  {
    "g": "ꍀ",
    "initial": "ss",
    "final": "y",
    "tone": "t",
    "py": "ssyt",
    "ipa": "zɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssyt.mp3",
    "radical": "꒐",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꍀꆿ ꑍꈯꀕ",
        "han": "虎视眈眈"
      },
      {
        "yi": "ꍀꈌꏸꋇ",
        "han": "天蝎座"
      },
      {
        "yi": "ꋖꍀꋕꆿꄓ",
        "han": "狂暴"
      },
      {
        "yi": "ꅳꍩꂴꍀ",
        "han": "炮火"
      },
      {
        "yi": "ꀍꑐꍀꋌ",
        "han": "头油"
      }
    ]
  },
  {
    "g": "ꍛ",
    "initial": "zh",
    "final": "y",
    "tone": "t",
    "py": "zhyt",
    "ipa": "tʂɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhyt.mp3",
    "radical": "꒚",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀡꍛꆃꁬ",
        "han": "半支莲"
      },
      {
        "yi": "ꌕꏾꁯ ꍛ",
        "han": "三叶虫"
      },
      {
        "yi": "ꃅꍛꁱ",
        "han": "拂晓"
      },
      {
        "yi": "ꍛꈈꎮꀙ",
        "han": "栉孔扇贝"
      },
      {
        "yi": "ꎭꃛꁯꍛ",
        "han": "珊瑚虫"
      }
    ]
  },
  {
    "g": "ꍶ",
    "initial": "ch",
    "final": "y",
    "tone": "t",
    "py": "chyt",
    "ipa": "tʂʰɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chyt.mp3",
    "radical": "꒗",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄤꇙꍶ",
        "han": "塔尔羊"
      },
      {
        "yi": "ꀑꃚꏀꇉꍶ",
        "han": "扭角羚"
      },
      {
        "yi": "ꃪꍶ",
        "han": "石羊"
      },
      {
        "yi": "ꅱꉂꇉꍶ",
        "han": "高鼻羚羊"
      },
      {
        "yi": "ꒈꀑꍶ",
        "han": "北山羊"
      }
    ]
  },
  {
    "g": "ꎎ",
    "initial": "rr",
    "final": "y",
    "tone": "t",
    "py": "rryt",
    "ipa": "dʐɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rryt.mp3",
    "radical": "꒖",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꁨꑭꏭꎎꐨ",
        "han": "趋光性"
      },
      {
        "yi": "ꂪꑟꅿꎎꐨ",
        "han": "切线的斜率"
      },
      {
        "yi": "ꎎꁨꑭ",
        "han": "偏振光"
      },
      {
        "yi": "ꐃꎎꇂꂮ",
        "han": "东倒西歪"
      },
      {
        "yi": "ꎎꌕꎏꄲ",
        "han": "斜三角形"
      }
    ]
  },
  {
    "g": "ꎥ",
    "initial": "nr",
    "final": "y",
    "tone": "t",
    "py": "nryt",
    "ipa": "ndʐɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nryt.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃷꁨꎥꃪ",
        "han": "定量分析"
      },
      {
        "yi": "ꉡꆹꎥꃪ",
        "han": "我是来研究"
      },
      {
        "yi": "ꌗꇐꎥꃪ",
        "han": "数学分析"
      },
      {
        "yi": "ꍰꎥ",
        "han": "查考"
      },
      {
        "yi": "ꋉꁸꎥꁸꁈ",
        "han": "分组分解法"
      }
    ]
  },
  {
    "g": "ꏀ",
    "initial": "sh",
    "final": "y",
    "tone": "t",
    "py": "shyt",
    "ipa": "ʂɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shyt.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆜꋌꏀꋌ",
        "han": "胰脂酶"
      },
      {
        "yi": "ꍔꏀꍔꄅ",
        "han": "繁殖新品种"
      },
      {
        "yi": "ꐎꑱꉀꁈꀊꏀꌠ",
        "han": "新针疗法"
      },
      {
        "yi": "ꃪꅐꏀꏸ",
        "han": "岩燕胆"
      },
      {
        "yi": "ꌌꃀꀊꏀ",
        "han": "少奶奶"
      }
    ]
  },
  {
    "g": "ꏚ",
    "initial": "r",
    "final": "y",
    "tone": "t",
    "py": "ryt",
    "ipa": "ʐɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ryt.mp3",
    "radical": "꒚",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀋꏚ",
        "han": "吃不来"
      },
      {
        "yi": "ꏚꍆꅇ",
        "han": "供词"
      },
      {
        "yi": "ꏚꏣꍔꊱ、ꈲꁵꏱꁈ",
        "han": "优惠政策"
      },
      {
        "yi": "ꏚꍆ",
        "han": "认帐"
      },
      {
        "yi": "ꎆꏣꏚꏤꉹꐧꋦꇢꈴꏲꉻ",
        "han": "经济鉴证类社会中介机构"
      }
    ]
  },
  {
    "g": "ꏶ",
    "initial": "j",
    "final": "y",
    "tone": "t",
    "py": "jyt",
    "ipa": "tɕɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jyt.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꒉꏶꏸ",
        "han": "水汞"
      },
      {
        "yi": "ꒉꏶꊋꐨ",
        "han": "排水量"
      },
      {
        "yi": "ꄮꐰꃅꆳꂓꏶꂿꃋꃅꌗ",
        "han": "季风性湿润气候"
      },
      {
        "yi": "ꏶꈻ",
        "han": "引流"
      },
      {
        "yi": "ꅉꊈꏶꊋꀒꂩ",
        "han": "地磁极"
      }
    ]
  },
  {
    "g": "ꐒ",
    "initial": "q",
    "final": "y",
    "tone": "t",
    "py": "qyt",
    "ipa": "tɕʰɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qyt.mp3",
    "radical": "꓀",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀆꐒꇸꄿ",
        "han": "桔槔"
      },
      {
        "yi": "ꐒꅐꊀꅐ",
        "han": "散闷"
      },
      {
        "yi": "ꐒꇖꏽ",
        "han": "悲叹"
      },
      {
        "yi": "ꆏꋍꍈꇯꐒꀋꌸ",
        "han": "你一点都不用担心"
      },
      {
        "yi": "ꏓꐛꀆꐒ",
        "han": "结合水"
      }
    ]
  },
  {
    "g": "ꐭ",
    "initial": "jj",
    "final": "y",
    "tone": "t",
    "py": "jjyt",
    "ipa": "dʑɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjyt.mp3",
    "radical": "꒙",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꍍꏢꐭꏢ",
        "han": "治污禁排"
      },
      {
        "yi": "ꐭꏵꒉꄟꌤ",
        "han": "幼巨核细胞"
      },
      {
        "yi": "ꇢꎙꐭꌶꅉ",
        "han": "业余小学"
      },
      {
        "yi": "ꊂꐭꉜꐛꏦ",
        "han": "亚显微结构"
      },
      {
        "yi": "ꐥꐭ",
        "han": "微贱"
      }
    ]
  },
  {
    "g": "ꑄ",
    "initial": "nj",
    "final": "y",
    "tone": "t",
    "py": "njyt",
    "ipa": "ndʑɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njyt.mp3",
    "radical": "꒚",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌒꏦꂤꏂꑄꒉꍆꀻ",
        "han": "三江冲河沙闸"
      },
      {
        "yi": "ꌩꑄꀻ",
        "han": "木锨"
      },
      {
        "yi": "ꑄꆜ",
        "han": "爽朗"
      },
      {
        "yi": "ꋌꑄ",
        "han": "脱脂"
      },
      {
        "yi": "ꀋꑄꁈ",
        "han": "分散染料"
      }
    ]
  },
  {
    "g": "ꑫ",
    "initial": "x",
    "final": "y",
    "tone": "t",
    "py": "xyt",
    "ipa": "ɕɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xyt.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꑭꊂ、ꋬꈭ、ꉻꑫ",
        "han": "系统"
      },
      {
        "yi": "ꊪꁧꋍꑫ",
        "han": "同科作物"
      },
      {
        "yi": "ꄆꒌꑫꄯꒉ",
        "han": "电影剧本"
      },
      {
        "yi": "ꃀꑫꋆꁥ",
        "han": "母性族群"
      },
      {
        "yi": "ꈍꃻꑮ、ꉙꇐꑫ",
        "han": "诗剧"
      }
    ]
  },
  {
    "g": "ꒇ",
    "initial": "y",
    "final": "y",
    "tone": "t",
    "py": "yyt",
    "ipa": "ʑɿ⁵⁵",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yyt.mp3",
    "radical": "꒡",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꉇꈴꐧꒇꑟ",
        "han": "外公切线"
      },
      {
        "yi": "ꄿꒇꑊ",
        "han": "轴截面"
      },
      {
        "yi": "ꒇꊪꏿ",
        "han": "双抢"
      },
      {
        "yi": "ꋒꒇꏣꑟ",
        "han": "余割线"
      },
      {
        "yi": "ꒇꁨꇴ",
        "han": "心安理得"
      }
    ]
  },
  {
    "g": "ꀳ",
    "initial": "b",
    "final": "y",
    "tone": "x",
    "py": "byx",
    "ipa": "pɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_byx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍻꇬꀳꄉ",
        "han": "定睛"
      },
      {
        "yi": "ꉬꁱꇐꀳ",
        "han": "五言诗"
      },
      {
        "yi": "ꇐꀳꈍꎞ",
        "han": "散文诗"
      },
      {
        "yi": "ꀂꄑꀂꊙꀳ",
        "han": "毛遂自荐"
      },
      {
        "yi": "ꅸꐯꀳ",
        "han": "交锋"
      }
    ]
  },
  {
    "g": "ꁑ",
    "initial": "p",
    "final": "y",
    "tone": "x",
    "py": "pyx",
    "ipa": "pʰɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꁑꊰꀕ",
        "han": "辣丝丝"
      },
      {
        "yi": "ꁑꉻꀕ",
        "han": "辣酥酥"
      },
      {
        "yi": "ꁑꊰ",
        "han": "辣乎乎"
      }
    ]
  },
  {
    "g": "ꁳ",
    "initial": "bb",
    "final": "y",
    "tone": "x",
    "py": "bbyx",
    "ipa": "bɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꉇꁳꃅ",
        "han": "封地"
      },
      {
        "yi": "ꃥꋩꃥꈴꅉꁳꅽꆫꃨꃆꂮꄐꌐꄻꅏꀕ",
        "han": "你要旅行社给你安排旅游吗"
      },
      {
        "yi": "ꄇꌠꁳ",
        "han": "招盘"
      },
      {
        "yi": "ꃄꇽꌠꁳ",
        "han": "割让"
      },
      {
        "yi": "ꂿꃅꋌꁳ",
        "han": "天授"
      }
    ]
  },
  {
    "g": "ꂌ",
    "initial": "nb",
    "final": "y",
    "tone": "x",
    "py": "nbyx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꂩ",
    "initial": "hm",
    "final": "y",
    "tone": "x",
    "py": "hmyx",
    "ipa": "m̥ɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊸꂩ",
        "han": "末伏"
      },
      {
        "yi": "ꀒꂩꃆꂮ",
        "han": "颠末"
      },
      {
        "yi": "ꑌꂩꇉꁖꋍꂱꋣ",
        "han": "狐群狗党"
      },
      {
        "yi": "ꇁꂩꌗ",
        "han": "秋后算帐"
      },
      {
        "yi": "ꂓꂩ",
        "han": "背榜"
      }
    ]
  },
  {
    "g": "ꃊ",
    "initial": "m",
    "final": "y",
    "tone": "x",
    "py": "myx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_myx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꃟ",
    "initial": "f",
    "final": "y",
    "tone": "x",
    "py": "fyx",
    "ipa": "fɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃟꈌ",
        "han": "粗鄙"
      }
    ]
  },
  {
    "g": "ꃻ",
    "initial": "v",
    "final": "y",
    "tone": "x",
    "py": "vyx",
    "ipa": "vɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃻꄻ",
        "han": "置备"
      },
      {
        "yi": "ꃻꋩ",
        "han": "丧心病狂"
      },
      {
        "yi": "ꃻꊋꉀꐕ",
        "han": "购买能力提高"
      },
      {
        "yi": "ꌤꃅꀕꈎꃻꈘ",
        "han": "买断工龄"
      },
      {
        "yi": "ꃻꎴ",
        "han": "收购"
      }
    ]
  },
  {
    "g": "ꆲ",
    "initial": "hl",
    "final": "y",
    "tone": "x",
    "py": "hlyx",
    "ipa": "ɬɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃣꎓꈌꐡ、ꆲꁏꄂꈧ",
        "han": "风雨飘摇"
      },
      {
        "yi": "ꎆꒉꎆꇁꆲꇨꉏꇨ",
        "han": "金融风暴"
      },
      {
        "yi": "ꆲꇁꄵ",
        "han": "风锤"
      },
      {
        "yi": "ꆲꈌꄐꅍ",
        "han": "风向标"
      },
      {
        "yi": "ꆲꁏꉐꈧ",
        "han": "兴风作浪"
      }
    ]
  },
  {
    "g": "ꇕ",
    "initial": "l",
    "final": "y",
    "tone": "x",
    "py": "lyx",
    "ipa": "lɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇕꆏꉬꇬꎷ",
        "han": "有求必应"
      },
      {
        "yi": "ꋚꇕꋉꃆ",
        "han": "种子工程"
      },
      {
        "yi": "ꉩꇕꉩ",
        "han": "撒泼"
      },
      {
        "yi": "ꇕꉬꑻꃅꋍꈜꏓ",
        "han": "攒三聚五"
      },
      {
        "yi": "ꋚꇕꒈꊭ",
        "han": "浸种"
      }
    ]
  },
  {
    "g": "ꊩ",
    "initial": "z",
    "final": "y",
    "tone": "x",
    "py": "zyx",
    "ipa": "tsɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐯꊩ ꅉ",
        "han": "界面"
      },
      {
        "yi": "ꊩꌬ、ꌌꌬ",
        "han": "采纳"
      },
      {
        "yi": "ꍤꎖ、ꊫꎖ、ꎕꊩ",
        "han": "验证"
      },
      {
        "yi": "ꂴꆽꄕꊩꌠ",
        "han": "先行者"
      },
      {
        "yi": "ꐯꊩꇁꀋꉆ",
        "han": "不可向迩"
      }
    ]
  },
  {
    "g": "ꋋ",
    "initial": "c",
    "final": "y",
    "tone": "x",
    "py": "cyx",
    "ipa": "tsʰɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋋꇅꃅꅉꐚꇁ",
        "han": "茅塞顿开"
      },
      {
        "yi": "ꌠꋋꌟꁘ",
        "han": "卑贱"
      },
      {
        "yi": "ꋋꆹꈨꏀꌤꃅꊿꂷ",
        "han": "他是个新闻工作者"
      },
      {
        "yi": "ꅇꂷꋋꇬꆈꌠꉙꈍꃅꉉ",
        "han": "这句话彝语怎么说"
      },
      {
        "yi": "ꅽꋂꄮꋋꏢꄻꌋꁨꐯꁨ",
        "han": "你做的这道菜很好吃"
      }
    ]
  },
  {
    "g": "ꋨ",
    "initial": "zz",
    "final": "y",
    "tone": "x",
    "py": "zzyx",
    "ipa": "dzɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋋꑵꇬꄉꉜꅷꀊꋨꑵꇬꑟ",
        "han": "由此及彼"
      },
      {
        "yi": "ꇖꋨꄟꃀꀯ",
        "han": "参谋部"
      },
      {
        "yi": "ꊿꀊꋨꂷ",
        "han": "伊人"
      },
      {
        "yi": "ꋨꏦꃀꈿ",
        "han": "庆典"
      },
      {
        "yi": "ꀊꋨꈨ",
        "han": "那些"
      }
    ]
  },
  {
    "g": "ꌄ",
    "initial": "nz",
    "final": "y",
    "tone": "x",
    "py": "nzyx",
    "ipa": "ndzɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋚꅗꊿꇿꌄꆣꋩ,ꃅꂄꏦꎔꈎꏀꀮ。ꐥꌒꄻꌒ",
        "han": "人乐丰年庆盛世，天开美景贺佳春。国泰民安"
      },
      {
        "yi": "ꌄꒉꉘꉩ",
        "han": "奸雄"
      },
      {
        "yi": "ꌄꆣꐞꄿ",
        "han": "繁荣昌盛"
      },
      {
        "yi": "ꇨꃶꌄꆣꄮ",
        "han": "光武中兴"
      },
      {
        "yi": "ꇴꀾꏤꄮꌄꏦ",
        "han": "股票期权制"
      }
    ]
  },
  {
    "g": "ꌥ",
    "initial": "s",
    "final": "y",
    "tone": "x",
    "py": "syx",
    "ipa": "sɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_syx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃅꆹꈜꌥ",
        "han": "老马识途"
      },
      {
        "yi": "ꌥꆅꍤꍝꌷꇐ",
        "han": "法医学"
      },
      {
        "yi": "ꌧꈓꌥꈓ",
        "han": "幽咽"
      },
      {
        "yi": "ꌥꆹꐤꆹꐮꐊ",
        "han": "生死与共"
      },
      {
        "yi": "ꋒꌥꌠ",
        "han": "熟人"
      }
    ]
  },
  {
    "g": "ꍁ",
    "initial": "ss",
    "final": "y",
    "tone": "x",
    "py": "ssyx",
    "ipa": "zɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꊿꍁꄯꒉ",
        "han": "传檄"
      },
      {
        "yi": "ꂴꍁꌠ",
        "han": "前世"
      }
    ]
  },
  {
    "g": "ꍜ",
    "initial": "zh",
    "final": "y",
    "tone": "x",
    "py": "zhyx",
    "ipa": "tʂɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍜꋦ、ꋕꋦ、ꋭꑘ",
        "han": "义务"
      },
      {
        "yi": "ꍜꁨꃅꊩꉘ",
        "han": "定向培育"
      },
      {
        "yi": "ꅉꃴꒉꍜ",
        "han": "地下水流向"
      },
      {
        "yi": "ꈜꍜ",
        "han": "航向"
      },
      {
        "yi": "ꍜꇽ",
        "han": "裁判"
      }
    ]
  },
  {
    "g": "ꍷ",
    "initial": "ch",
    "final": "y",
    "tone": "x",
    "py": "chyx",
    "ipa": "tʂʰɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꃶꇬꍷꆅ",
        "han": "肠结核"
      },
      {
        "yi": "ꊈꍷꆅ",
        "han": "骨痨"
      },
      {
        "yi": "ꑭꍷꀖ꒧",
        "han": "尘芥"
      },
      {
        "yi": "ꑱꍹꇮꑘ、ꋩꍷꇮꑘ",
        "han": "纺织工业"
      },
      {
        "yi": "ꇬꍷꆅꎖ",
        "han": "结核菌素"
      }
    ]
  },
  {
    "g": "ꎏ",
    "initial": "rr",
    "final": "y",
    "tone": "x",
    "py": "rryx",
    "ipa": "dʐɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rryx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌕꎏꈻꇓ",
        "han": "棱镜"
      },
      {
        "yi": "ꍝꁨꌕꎏꄲ",
        "han": "有向三角形"
      },
      {
        "yi": "ꁠꎏ",
        "han": "领属"
      },
      {
        "yi": "ꋯꆌꌕꎏꄲ",
        "han": "等边三角形"
      },
      {
        "yi": "ꊒꑭꌕꎏꄲ",
        "han": "垂足三角形"
      }
    ]
  },
  {
    "g": "ꎦ",
    "initial": "nr",
    "final": "y",
    "tone": "x",
    "py": "nryx",
    "ipa": "ndʐɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nryx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎦ ꑐ",
        "han": "撒酒风"
      },
      {
        "yi": "ꎦꃶ",
        "han": "发酒疯"
      },
      {
        "yi": "ꎦꎸ",
        "han": "酒菜"
      },
      {
        "yi": "ꎦꃶꌠ",
        "han": "醉鬼"
      },
      {
        "yi": "ꎦꁌꑳꁌ",
        "han": "酒钱"
      }
    ]
  },
  {
    "g": "ꏁ",
    "initial": "sh",
    "final": "y",
    "tone": "x",
    "py": "shyx",
    "ipa": "ʂɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀧꏁꊿ",
        "han": "走镖"
      },
      {
        "yi": "ꄐꏁ",
        "han": "指引"
      },
      {
        "yi": "ꏁꁈ",
        "han": "措施"
      },
      {
        "yi": "ꏁꇅꀕ",
        "han": "金煌煌"
      },
      {
        "yi": "ꆍꊿꏁꆫꃬꌠꈀꀕ",
        "han": "你们需要导游吗"
      }
    ]
  },
  {
    "g": "ꏛ",
    "initial": "r",
    "final": "y",
    "tone": "x",
    "py": "ryx",
    "ipa": "ʐɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ryx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐚꏛꇖꂟ",
        "han": "请缨"
      },
      {
        "yi": "ꌤꋋꐘꉢꏛꃅꅽꏯꊌꀋꉉ",
        "han": "这件事没尽早告诉你"
      },
      {
        "yi": "ꏮꏛꈳꏦ",
        "han": "周期律"
      },
      {
        "yi": "ꁌꄝꏛꅉ",
        "han": "老区"
      },
      {
        "yi": "ꃰꃅꏜꏛ ꊿ",
        "han": "宦官"
      }
    ]
  },
  {
    "g": "ꏷ",
    "initial": "j",
    "final": "y",
    "tone": "x",
    "py": "jyx",
    "ipa": "tɕɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏷꄻ",
        "han": "陶铸"
      },
      {
        "yi": "ꌦꏷ",
        "han": "吊唁"
      },
      {
        "yi": "ꏷꉢ",
        "han": "违碍"
      },
      {
        "yi": "ꏷꄂꇔꇷ",
        "han": "油漆匠"
      },
      {
        "yi": "ꏷꃬꀮ",
        "han": "启明"
      }
    ]
  },
  {
    "g": "ꐓ",
    "initial": "q",
    "final": "y",
    "tone": "x",
    "py": "qyx",
    "ipa": "tɕʰɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀜ---ꐓ",
        "han": "陈设"
      },
      {
        "yi": "ꊗꑗꃚꐓꌠ",
        "han": "耐火黏土"
      },
      {
        "yi": "ꃅꇨꐓ",
        "han": "耐旱"
      },
      {
        "yi": "ꃚꐓꑵꉙ",
        "han": "高歌"
      },
      {
        "yi": "ꑭꐓ",
        "han": "起步"
      }
    ]
  },
  {
    "g": "ꐮ",
    "initial": "jj",
    "final": "y",
    "tone": "x",
    "py": "jjyx",
    "ipa": "dʑɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐮꎖ",
        "han": "印证"
      },
      {
        "yi": "ꄯꒉꂷꋶꐮꏈ",
        "han": "笔墨官司"
      },
      {
        "yi": "ꐮꊒꈯꄜ",
        "han": "对称中心"
      },
      {
        "yi": "ꃨꁌꎭꐮꏦ",
        "han": "传送花粉"
      },
      {
        "yi": "ꍔꊧꎑꊛꐮꆦꈳꏦ",
        "han": "基因连锁互换规律"
      }
    ]
  },
  {
    "g": "ꑅ",
    "initial": "nj",
    "final": "y",
    "tone": "x",
    "py": "njyx",
    "ipa": "ndʑɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌧꀠꑅꇷ",
        "han": "肾囊"
      },
      {
        "yi": "ꌦꑇꌋꑅ",
        "han": "迷信"
      },
      {
        "yi": "ꑅꁱꑆꍷ ꆅ",
        "han": "霉菌病"
      },
      {
        "yi": "ꑅꃅꎸꈠꉬꑵ",
        "han": "五刑"
      },
      {
        "yi": "ꌋꑅ ꁥ",
        "han": "教派"
      }
    ]
  },
  {
    "g": "ꑬ",
    "initial": "x",
    "final": "y",
    "tone": "x",
    "py": "xyx",
    "ipa": "ɕɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇐꑬꌋ",
        "han": "龙爪"
      },
      {
        "yi": "ꑬꏸꇓꀋꉅ",
        "han": "一路顺风"
      },
      {
        "yi": "ꑬꏪ",
        "han": "扁平足"
      },
      {
        "yi": "ꑬ ꊋ",
        "han": "脚力"
      },
      {
        "yi": "ꑬꅮꈷꄉꌠ",
        "han": "绣花鞋"
      }
    ]
  },
  {
    "g": "ꒈ",
    "initial": "y",
    "final": "y",
    "tone": "x",
    "py": "yyx",
    "ipa": "ʑɿ⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yyx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꒈꊭ",
        "han": "浸渍"
      },
      {
        "yi": "ꅊꁨꒈꅉ",
        "han": "卫生间"
      },
      {
        "yi": "ꆏꅽꏣꃀꏣꑟꁌꒈꀕ",
        "han": "你喜欢你的亲戚吗"
      },
      {
        "yi": "ꒈꋌ",
        "han": "沐浴"
      },
      {
        "yi": "ꒈꋌꀻ",
        "han": "盆子"
      }
    ]
  },
  {
    "g": "ꀴ",
    "initial": "b",
    "final": "y",
    "tone": "",
    "py": "by",
    "ipa": "pɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_by.mp3",
    "radical": "꒔",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꂽꀴꃭꌒ",
        "han": "仪仗"
      },
      {
        "yi": "ꇱꄓꀴꊪ",
        "han": "瘩背"
      },
      {
        "yi": "ꃵꂪꀴꊪꉊ",
        "han": "挂线疗法"
      },
      {
        "yi": "ꀴꊪꐳ",
        "han": "脓包"
      },
      {
        "yi": "ꒈꃬꌀꀴ",
        "han": "鸳鸯"
      }
    ]
  },
  {
    "g": "ꁒ",
    "initial": "p",
    "final": "y",
    "tone": "",
    "py": "py",
    "ipa": "pʰɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_py.mp3",
    "radical": "꒿",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉈꀋꁒ",
        "han": "坐视"
      },
      {
        "yi": "ꆼꁒꋠ",
        "han": "敲诈"
      },
      {
        "yi": "ꁒꀮꇉ",
        "han": "肾炎草"
      },
      {
        "yi": "ꏾꁒꒈꐚ",
        "han": "鬼子姜"
      },
      {
        "yi": "ꁁꁒꄀꇗ",
        "han": "聚敛"
      }
    ]
  },
  {
    "g": "ꁴ",
    "initial": "bb",
    "final": "y",
    "tone": "",
    "py": "bby",
    "ipa": "bɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bby.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉌꎭꑓꁴ",
        "han": "血泪"
      },
      {
        "yi": "ꑗꁴꌩꃅ",
        "han": "（牛比斯木）拭泪金"
      },
      {
        "yi": "ꈌꌺꅲꒉꊎꇌꎶꑓꁴꅐ",
        "han": "物伤其类"
      },
      {
        "yi": "ꑓꁴ",
        "han": "泪水"
      },
      {
        "yi": "ꁴꍂꅐ",
        "han": "凶死"
      }
    ]
  },
  {
    "g": "ꂍ",
    "initial": "nb",
    "final": "y",
    "tone": "",
    "py": "nby",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nby.mp3",
    "radical": "꒤",
    "strokes": 6,
    "remainingStrokes": 5
  },
  {
    "g": "ꂪ",
    "initial": "hm",
    "final": "y",
    "tone": "",
    "py": "hmy",
    "ipa": "m̥ɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmy.mp3",
    "radical": "꒑",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꌉꅐꂪꅐ",
        "han": "战火"
      },
      {
        "yi": "ꐮꂪ",
        "han": "合龙"
      },
      {
        "yi": "ꀑꐳꂪꐳ",
        "han": "粗线条"
      },
      {
        "yi": "ꉩꍏꒈꂪꁆꌠ",
        "han": "南欧"
      },
      {
        "yi": "ꀋꇎꋍ、ꀋꂪꅋ",
        "han": "补偏救弊"
      }
    ]
  },
  {
    "g": "ꃋ",
    "initial": "m",
    "final": "y",
    "tone": "",
    "py": "my",
    "ipa": "mɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_my.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀋꃋꋋꇅꉪꏦ",
        "han": "写实主义"
      },
      {
        "yi": "ꑮꃀꀋꃋ",
        "han": "妻孥"
      },
      {
        "yi": "ꀋꃋꋋꄮꇮꑘ、ꐛꏀꇮꑘ",
        "han": "现代工业"
      },
      {
        "yi": "ꀋ ꃋꀊꆨ",
        "han": "今昔"
      },
      {
        "yi": "ꃋꉜꈎꌗ",
        "han": "天文历法"
      }
    ]
  },
  {
    "g": "ꃠ",
    "initial": "f",
    "final": "y",
    "tone": "",
    "py": "fy",
    "ipa": "fɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fy.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃠꅇꁱꂷ",
        "han": "脏字"
      },
      {
        "yi": "ꅇꃠꅇꈌ",
        "han": "粗话"
      }
    ]
  },
  {
    "g": "ꃼ",
    "initial": "v",
    "final": "y",
    "tone": "",
    "py": "vy",
    "ipa": "vɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vy.mp3",
    "radical": "꒡",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꇩꎝꀱꃼ",
        "han": "国债回购"
      },
      {
        "yi": "ꃼꇇꁌꒊ",
        "han": "减收价款"
      },
      {
        "yi": "ꎂꃼꄿ",
        "han": "直棱柱"
      },
      {
        "yi": "ꃼꋊ",
        "han": "赎买"
      },
      {
        "yi": "ꎃꇖꃼꄹ",
        "han": "正四棱台"
      }
    ]
  },
  {
    "g": "ꆳ",
    "initial": "hl",
    "final": "y",
    "tone": "",
    "py": "hly",
    "ipa": "ɬɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hly.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꆳꈽꁏ",
        "han": "漫卷"
      },
      {
        "yi": "ꄮꐰꃅꆳꏮꈭ",
        "han": "季风环流"
      },
      {
        "yi": "ꊷꆣꅉꄮꐰꃅꆳꂿꃋꃅꌗ",
        "han": "温带季风气候"
      },
      {
        "yi": "ꁯꈐꄏꃗꃅꆳꁎꅉ",
        "han": "极地东风带"
      },
      {
        "yi": "ꆳꂾꆏꈜ",
        "han": "趸船"
      }
    ]
  },
  {
    "g": "ꇖ",
    "initial": "l",
    "final": "y",
    "tone": "",
    "py": "ly",
    "ipa": "lɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ly.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꈬꑳꐂꇖ",
        "han": "迟脉"
      },
      {
        "yi": "ꇖꃼꇖꃷ",
        "han": "议购议销"
      },
      {
        "yi": "ꇖꎐꐽꑟ",
        "han": "平行四边形"
      },
      {
        "yi": "ꉸꍔꌺꇖ",
        "han": "华裔"
      },
      {
        "yi": "ꀉꇖꐕ",
        "han": "举重"
      }
    ]
  },
  {
    "g": "ꊪ",
    "initial": "z",
    "final": "y",
    "tone": "",
    "py": "zy",
    "ipa": "tsɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zy.mp3",
    "radical": "꒼",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꀏꇁꊪꈴꌅ",
        "han": "下行传导束"
      },
      {
        "yi": "ꅇꊪꈎꅉ",
        "han": "筋节"
      },
      {
        "yi": "ꊪꅪꉲꌦ",
        "han": "紫檀木"
      },
      {
        "yi": "ꍮꊪꌤꅐ",
        "han": "车祸"
      },
      {
        "yi": "ꑍꊪꍯ",
        "han": "双季稻"
      }
    ]
  },
  {
    "g": "ꋌ",
    "initial": "c",
    "final": "y",
    "tone": "",
    "py": "cy",
    "ipa": "tsʰɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cy.mp3",
    "radical": "꒼",
    "strokes": 3,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꋌꑌꐨ",
        "han": "含油量"
      },
      {
        "yi": "ꏦꏪꋌ",
        "han": "脂油"
      },
      {
        "yi": "ꊁꇿꋌ",
        "han": "后效"
      },
      {
        "yi": "ꀊꆨꁆꋌ",
        "han": "古方"
      },
      {
        "yi": "ꁬꋌꇓꑱ",
        "han": "药石"
      }
    ]
  },
  {
    "g": "ꋩ",
    "initial": "zz",
    "final": "y",
    "tone": "",
    "py": "zzy",
    "ipa": "dzɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzy.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌥꋩꆅꈽ",
        "han": "居丧"
      },
      {
        "yi": "ꑟꋩꅍ",
        "han": "纺车"
      },
      {
        "yi": "ꁮꋩꒉ",
        "han": "悬浊液"
      },
      {
        "yi": "ꎷꋩ",
        "han": "打铁"
      },
      {
        "yi": "ꈾꋩꑌꃅꋐꑣ",
        "han": "旁骛"
      }
    ]
  },
  {
    "g": "ꌅ",
    "initial": "nz",
    "final": "y",
    "tone": "",
    "py": "nzy",
    "ipa": "ndzɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzy.mp3",
    "radical": "꒐",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꑸꌅꎊꇗꌷꇐ",
        "han": "原子物理学"
      },
      {
        "yi": "ꒆꌅꄜꋉꉹ",
        "han": "染色体组型"
      },
      {
        "yi": "ꄆꌅꃼꇇꌤꑘ、ꄆꌅꃼꇇ",
        "han": "电子商务"
      },
      {
        "yi": "ꁨꑭꄆꌅꌬꇐ",
        "han": "光电子材料"
      },
      {
        "yi": "ꇮꑘꒆꅐꌅ、ꇮꑘꒃꅐꌅꈌ",
        "han": "工业产权"
      }
    ]
  },
  {
    "g": "ꌦ",
    "initial": "s",
    "final": "y",
    "tone": "",
    "py": "sy",
    "ipa": "sɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_sy.mp3",
    "radical": "꒡",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꂷꇻꌦ",
        "han": "马克思"
      },
      {
        "yi": "ꌦꄽꁁ",
        "han": "月经带"
      },
      {
        "yi": "ꐛꅹꃅꌦ",
        "han": "致死"
      },
      {
        "yi": "ꎃꊐꌦ",
        "han": "代血浆"
      },
      {
        "yi": "ꏦꇁꏦꌦ",
        "han": "加拉加斯"
      }
    ]
  },
  {
    "g": "ꍂ",
    "initial": "ss",
    "final": "y",
    "tone": "",
    "py": "ssy",
    "ipa": "zɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssy.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐥꍂꑽꃤꉼꅉ",
        "han": "涤罪所"
      },
      {
        "yi": "ꌑꍂꀋꎴ",
        "han": "折福"
      },
      {
        "yi": "ꍂꄽꁁ",
        "han": "尿布"
      },
      {
        "yi": "ꍂꏿꐎ",
        "han": "蛋白尿"
      },
      {
        "yi": "ꁴꍂꑊꑍ",
        "han": "金刚努目"
      }
    ]
  },
  {
    "g": "ꍝ",
    "initial": "zh",
    "final": "y",
    "tone": "",
    "py": "zhy",
    "ipa": "tʂɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhy.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꍝꁨꎐ",
        "han": "有向角"
      },
      {
        "yi": "ꁯꍝꁨꃷꁨ",
        "han": "负矢量"
      },
      {
        "yi": "ꌐꍝꐯꌟꀋꆌꉻ",
        "han": "同项不等式"
      },
      {
        "yi": "ꇤꒀꌕꍝ",
        "han": "甘油三酯"
      },
      {
        "yi": "ꍝꁨꁌꃷꁨ",
        "han": "模数"
      }
    ]
  },
  {
    "g": "ꍸ",
    "initial": "ch",
    "final": "y",
    "tone": "",
    "py": "chy",
    "ipa": "tʂʰɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chy.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀊꆨꍸꇐꋩ",
        "han": "考古"
      },
      {
        "yi": "ꍸꁵ",
        "han": "传家"
      },
      {
        "yi": "ꃅꀹꍸꇐ",
        "han": "遗风"
      },
      {
        "yi": "ꀊꆨꍸꇐꌷꇐ",
        "han": "考古学"
      },
      {
        "yi": "ꌺꍸꉗ ꅉ",
        "han": "育婴堂"
      }
    ]
  },
  {
    "g": "ꎐ",
    "initial": "rr",
    "final": "y",
    "tone": "",
    "py": "rry",
    "ipa": "dʐɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rry.mp3",
    "radical": "꒖",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꏢꎐꌕꎐꐊꐈꇐ",
        "han": "锐角三角函数"
      },
      {
        "yi": "ꅉꌐꎐ",
        "han": "坐标角"
      },
      {
        "yi": "ꎐꄶꄿ",
        "han": "齿坝"
      },
      {
        "yi": "ꂱꎆꎐ",
        "han": "平角"
      },
      {
        "yi": "ꑘꊋꃷꎐ",
        "han": "劳务市场"
      }
    ]
  },
  {
    "g": "ꎧ",
    "initial": "nr",
    "final": "y",
    "tone": "",
    "py": "nry",
    "ipa": "ndʐɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nry.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꄳꌠꎧ",
        "han": "屠苏"
      },
      {
        "yi": "ꎧꅝꎸꋠꐉ",
        "han": "酒肉朋友"
      },
      {
        "yi": "ꌿꎧꒉ",
        "han": "啤酒"
      },
      {
        "yi": "ꎧꏂ",
        "han": "黄汤"
      },
      {
        "yi": "ꎧꌅꂷꇭ",
        "han": "酒精灯"
      }
    ]
  },
  {
    "g": "ꏂ",
    "initial": "sh",
    "final": "y",
    "tone": "",
    "py": "shy",
    "ipa": "ʂɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shy.mp3",
    "radical": "꒰",
    "strokes": 1,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꄊꑱꏂꀨꇇꊂꄈꅉ",
        "han": "大英博物馆"
      },
      {
        "yi": "ꂿꏂꊈꈌ",
        "han": "孟什维克"
      },
      {
        "yi": "ꃔꏂꆺꉔꋌ",
        "han": "凡士林"
      },
      {
        "yi": "ꁮꏂꅋꊖ",
        "han": "穆坪马兜铃"
      },
      {
        "yi": "ꃨꏂ",
        "han": "黄花"
      }
    ]
  },
  {
    "g": "ꏜ",
    "initial": "r",
    "final": "y",
    "tone": "",
    "py": "ry",
    "ipa": "ʐɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ry.mp3",
    "radical": "꒕",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꏜꈻ",
        "han": "早退"
      },
      {
        "yi": "ꀡꑷꐴꏜ",
        "han": "掌裂叶秋海棠"
      },
      {
        "yi": "ꏜꎀ",
        "han": "草垫子"
      },
      {
        "yi": "ꍮꏜꏹꑮ",
        "han": "草鞋"
      },
      {
        "yi": "ꃅꏜꀒ ꊛ",
        "han": "马齿苋"
      }
    ]
  },
  {
    "g": "ꏸ",
    "initial": "j",
    "final": "y",
    "tone": "",
    "py": "jy",
    "ipa": "tɕɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jy.mp3",
    "radical": "꒟",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꉆꏸꏽ",
        "han": "踩水"
      },
      {
        "yi": "ꃆꑮꏮꏸ",
        "han": "类木行星"
      },
      {
        "yi": "ꏸꆅ",
        "han": "胆囊痛"
      },
      {
        "yi": "ꉢꅽꏯꀠꂘꌠꄡꏸꄡꉢꅊꇈ",
        "han": "请原谅我对你的批评"
      },
      {
        "yi": "ꑟꀋꈴꄆꆗꏸ",
        "han": "无线电发射机"
      }
    ]
  },
  {
    "g": "ꐔ",
    "initial": "q",
    "final": "y",
    "tone": "",
    "py": "qy",
    "ipa": "tɕʰɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qy.mp3",
    "radical": "꒡",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꌕꁯꐯꇯꐔ",
        "han": "三家抬"
      },
      {
        "yi": "ꅳꀧꐔ",
        "han": "盯聆"
      },
      {
        "yi": "ꀮꐔ",
        "han": "豪猪矢"
      },
      {
        "yi": "ꌷꑳꀧꐔ",
        "han": "青洋参"
      },
      {
        "yi": "ꈩꈤꐔ",
        "han": "抬阁"
      }
    ]
  },
  {
    "g": "ꐯ",
    "initial": "jj",
    "final": "y",
    "tone": "",
    "py": "jjy",
    "ipa": "dʑɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjy.mp3",
    "radical": "꒵",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐻꐯꀡꆃꁏ",
        "han": "翻浆"
      },
      {
        "yi": "ꉾꐯꉾꅉ",
        "han": "首善之区"
      },
      {
        "yi": "ꐯꀋꌡꉪꏦ",
        "han": "相对主义"
      },
      {
        "yi": "ꐻꏪꐻꐯꐥꇐ",
        "han": "冰川冰碛物"
      },
      {
        "yi": "ꀋꐯꀉꇙꀕ",
        "han": "假惺惺"
      }
    ]
  },
  {
    "g": "ꑆ",
    "initial": "nj",
    "final": "y",
    "tone": "",
    "py": "njy",
    "ipa": "ndʑɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njy.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑆꊋꏗ",
        "han": "居功"
      },
      {
        "yi": "ꈮ ꑆꌠ",
        "han": "健儿"
      },
      {
        "yi": "ꑆꊋꇰꀋꃀ",
        "han": "伟绩"
      },
      {
        "yi": "ꑆꐒꎸꀨ",
        "han": "刮地皮"
      },
      {
        "yi": "ꑆꊈꇷꑴ",
        "han": "皮质膜"
      }
    ]
  },
  {
    "g": "ꑭ",
    "initial": "x",
    "final": "y",
    "tone": "",
    "py": "xy",
    "ipa": "ɕɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xy.mp3",
    "radical": "꒐",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꑭꑟꁬ",
        "han": "细辛"
      },
      {
        "yi": "ꏷꑭ",
        "han": "后肢"
      },
      {
        "yi": "ꑭꁘꊈꄆꍑꄆꌸ",
        "han": "跨步电压触电"
      },
      {
        "yi": "ꀘꑭ",
        "han": "丙烯"
      },
      {
        "yi": "ꑭꊂꂽ",
        "han": "嫡系部队"
      }
    ]
  },
  {
    "g": "ꒉ",
    "initial": "y",
    "final": "y",
    "tone": "",
    "py": "yy",
    "ipa": "ʑɿ³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yy.mp3",
    "radical": "꒐",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꒉꊏ、ꎵꊏ、ꀖꋊ",
        "han": "排泄"
      },
      {
        "yi": "ꄲꒀꄯꒉ",
        "han": "油纸"
      },
      {
        "yi": "ꄯꒉꐛꀋꒆꌠ",
        "han": "残篇断简"
      },
      {
        "yi": "ꍏꑷꊿꋅꒉꌶꅉꀁꑌꌺꇖꅇꂷꁱꂷꁱꇐꑫꆀꉙꎥꃪꅉ",
        "han": "中央民族大学少数民族语言文学系彝语教研室"
      },
      {
        "yi": "ꍡꑮꄯꒉ",
        "han": "台本"
      }
    ]
  },
  {
    "g": "ꀵ",
    "initial": "b",
    "final": "y",
    "tone": "p",
    "py": "byp",
    "ipa": "pɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_byp.mp3",
    "radical": "꒓",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꅑꀋꀵ",
        "han": "宽宥"
      },
      {
        "yi": "ꆏꇫꅑꀵꃆꇲꀋꐥ",
        "han": "不要老责怪他"
      },
      {
        "yi": "ꀵꅔꊈꏪ",
        "han": "骶骨"
      },
      {
        "yi": "ꄔꄽꑍꀵ",
        "han": "炉桥"
      },
      {
        "yi": "ꂵꇖꀕ、ꀋꀵꀕ",
        "han": "神奇"
      }
    ]
  },
  {
    "g": "ꁓ",
    "initial": "p",
    "final": "y",
    "tone": "p",
    "py": "pyp",
    "ipa": "pʰɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pyp.mp3",
    "radical": "꒓",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꐛꁓꊖꌋ",
        "han": "蜂窝煤"
      },
      {
        "yi": "ꀒꁓ",
        "han": "鼻疽"
      },
      {
        "yi": "ꃬꌤꁓ",
        "han": "栽秧果"
      },
      {
        "yi": "ꁓꅔ",
        "han": "屁股"
      },
      {
        "yi": "ꑍꁓ",
        "han": "箅子"
      }
    ]
  },
  {
    "g": "ꁵ",
    "initial": "bb",
    "final": "y",
    "tone": "p",
    "py": "bbyp",
    "ipa": "bɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_bbyp.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀒꁵꒆꐳ",
        "han": "顶端优势"
      },
      {
        "yi": "ꌅꈌꁵ",
        "han": "授权"
      },
      {
        "yi": "ꃪꁵꊪ",
        "han": "骨碎补"
      },
      {
        "yi": "ꁸꁵꄹꏦ",
        "han": "分封制"
      },
      {
        "yi": "ꁮꐚꐞꌗꈻꁰꅐꁵ",
        "han": "西气东输"
      }
    ]
  },
  {
    "g": "ꂎ",
    "initial": "nb",
    "final": "y",
    "tone": "p",
    "py": "nbyp",
    "ipa": "mbɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbyp.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꀄꂼꂎꆶ",
        "han": "梦遗"
      },
      {
        "yi": "ꂎꐛꒅꌺ",
        "han": "生精细胞"
      },
      {
        "yi": "ꀡꂎ",
        "han": "耍赖"
      },
      {
        "yi": "ꂎꒉ",
        "han": "精虫"
      }
    ]
  },
  {
    "g": "ꂫ",
    "initial": "hm",
    "final": "y",
    "tone": "p",
    "py": "hmyp",
    "ipa": "m̥ɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmyp.mp3",
    "radical": "꒖",
    "strokes": 7,
    "remainingStrokes": 6,
    "phrases": [
      {
        "yi": "ꊋꂫ",
        "han": "潜力"
      },
      {
        "yi": "ꊫꂫꊏ",
        "han": "留后手"
      },
      {
        "yi": "ꉈꇨꂫꀋꑌ",
        "han": "强弩之末"
      },
      {
        "yi": "ꊫꂫꎴꌠꏥꏦ",
        "han": "长效机制"
      },
      {
        "yi": "ꂫꑓ",
        "han": "圈套"
      }
    ]
  },
  {
    "g": "ꃌ",
    "initial": "m",
    "final": "y",
    "tone": "p",
    "py": "myp",
    "ipa": "mɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_myp.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꃌꒆꐮꁌꒉ",
        "han": "举案齐眉"
      },
      {
        "yi": "ꃌꌺ",
        "han": "家属"
      },
      {
        "yi": "ꃌꅿꈌꌈꉏꄧ",
        "han": "泼妇"
      },
      {
        "yi": "ꃌꒆ",
        "han": "夫妇"
      },
      {
        "yi": "ꃌꎹꆗꈹ",
        "han": "外遇"
      }
    ]
  },
  {
    "g": "ꃡ",
    "initial": "f",
    "final": "y",
    "tone": "p",
    "py": "fyp",
    "ipa": "fɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_fyp.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2
  },
  {
    "g": "ꃽ",
    "initial": "v",
    "final": "y",
    "tone": "p",
    "py": "vyp",
    "ipa": "vɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vyp.mp3",
    "radical": "꒔",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꊋꏓꃽꏢꃅ",
        "han": "抱团取暖"
      },
      {
        "yi": "ꃽꇇꋧꅉ",
        "han": "市集"
      },
      {
        "yi": "ꋍꃀꃽ",
        "han": "肺吸虫"
      },
      {
        "yi": "ꃽꁒꑴꅪ",
        "han": "左胛右肋"
      },
      {
        "yi": "ꃽꇇꃅꑳ",
        "han": "市房"
      }
    ]
  },
  {
    "g": "ꆴ",
    "initial": "hl",
    "final": "y",
    "tone": "p",
    "py": "hlyp",
    "ipa": "ɬɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlyp.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꌕꃢꆴ",
        "han": "三龄"
      },
      {
        "yi": "ꏦꆴꉻꄑ",
        "han": "变法运动"
      },
      {
        "yi": "ꏲꋊꆴ",
        "han": "改朝换代"
      },
      {
        "yi": "ꇇꆴꂟ",
        "han": "化募"
      },
      {
        "yi": "ꏮꏂꆴ",
        "han": "老化脱落"
      }
    ]
  },
  {
    "g": "ꇗ",
    "initial": "l",
    "final": "y",
    "tone": "p",
    "py": "lyp",
    "ipa": "lɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lyp.mp3",
    "radical": "꒙",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꃀꇗꇰꉪꏦ",
        "han": "摩尔根主义"
      },
      {
        "yi": "ꈣꎖꉻꇗ",
        "han": "度量公理"
      },
      {
        "yi": "ꄆꒆꇗꏡꁈ",
        "han": "电生理方法"
      },
      {
        "yi": "ꇙꊌꃷꁨꏲꏤꇗ",
        "han": "动量矩定理"
      },
      {
        "yi": "ꐭꇨꃷꁨꇗꀨ",
        "han": "最小数原理"
      }
    ]
  },
  {
    "g": "ꊫ",
    "initial": "z",
    "final": "y",
    "tone": "p",
    "py": "zyp",
    "ipa": "tsɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zyp.mp3",
    "radical": "꒲",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꊫꌐꄯꒉ",
        "han": "票据"
      },
      {
        "yi": "ꍞꇽꊫꌐ",
        "han": "判例"
      },
      {
        "yi": "ꁌꀵꊫꌐ",
        "han": "有价证券"
      },
      {
        "yi": "ꊫꌐꄺꀱ",
        "han": "考订"
      },
      {
        "yi": "ꎞꊪꊫꌐꄯꒉ",
        "han": "货票"
      }
    ]
  },
  {
    "g": "ꋍ",
    "initial": "c",
    "final": "y",
    "tone": "p",
    "py": "cyp",
    "ipa": "tsʰɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cyp.mp3",
    "radical": "꒔",
    "strokes": 1,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋍꏅꎊꈬ",
        "han": "公产"
      },
      {
        "yi": "ꊵꑵꃅꀋꉜ、ꋍꑵꀋꉬꏭꃅ",
        "han": "掉以轻心"
      },
      {
        "yi": "ꇩꂱꋍꉻꏤꐪ",
        "han": "国民公约"
      },
      {
        "yi": "ꋍꌐ",
        "han": "指正"
      },
      {
        "yi": "ꋍꑟꋍꉹ",
        "han": "各类"
      }
    ]
  },
  {
    "g": "ꋪ",
    "initial": "zz",
    "final": "y",
    "tone": "p",
    "py": "zzyp",
    "ipa": "dzɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzyp.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑓꋪꁉꍰꃹ",
        "han": "异物入目"
      },
      {
        "yi": "ꋍꇅꇬꌬꌠꏦꋪ",
        "han": "临时章程"
      },
      {
        "yi": "ꑓꋪꃰꒃ",
        "han": "雪盲"
      },
      {
        "yi": "ꑓꋪꉼꋐꆅ",
        "han": "干眼病"
      },
      {
        "yi": "ꑶꇽꃷꋪ",
        "han": "乡规民约"
      }
    ]
  },
  {
    "g": "ꌆ",
    "initial": "nz",
    "final": "y",
    "tone": "p",
    "py": "nzyp",
    "ipa": "ndzɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzyp.mp3",
    "radical": "꒨",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꑲꅉꌆ",
        "han": "破土"
      },
      {
        "yi": "ꄀꌆꁧꃤꃅꊿ",
        "han": "店小二"
      },
      {
        "yi": "ꃅꄩꏬꌆ",
        "han": "驮轿"
      },
      {
        "yi": "ꄀꌆ",
        "han": "馆子"
      },
      {
        "yi": "ꌷꅍꌷꌆ",
        "han": "温习功课"
      }
    ]
  },
  {
    "g": "ꌧ",
    "initial": "s",
    "final": "y",
    "tone": "p",
    "py": "syp",
    "ipa": "sɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_syp.mp3",
    "radical": "꒖",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑌꃀꌧꊈꌡꁧꁥ",
        "han": "葡萄状堆团"
      },
      {
        "yi": "ꌤꋋꐘꋌꇫꃅꑲꀋꌧ",
        "han": "这件事他不会做"
      },
      {
        "yi": "ꌧꑳꀉꆈ",
        "han": "乌梅"
      },
      {
        "yi": "ꁱꂷꀋꌧ",
        "han": "目不识丁"
      },
      {
        "yi": "ꌧꅗꆿꆈ",
        "han": "杜梨"
      }
    ]
  },
  {
    "g": "ꍃ",
    "initial": "ss",
    "final": "y",
    "tone": "p",
    "py": "ssyp",
    "ipa": "zɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssyp.mp3",
    "radical": "꒜",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꍃꇫꐥ",
        "han": "逸民"
      },
      {
        "yi": "ꍃꄉ",
        "han": "住口"
      },
      {
        "yi": "ꅚꍃꁧ",
        "han": "泸山"
      },
      {
        "yi": "ꍃꐥꏾꀕ",
        "han": "和光同尘"
      },
      {
        "yi": "ꆈꍃꇬ",
        "han": "幽暗"
      }
    ]
  },
  {
    "g": "ꍞ",
    "initial": "zh",
    "final": "y",
    "tone": "p",
    "py": "zhyp",
    "ipa": "tʂɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhyp.mp3",
    "radical": "꒙",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꍞꐥꁮ",
        "han": "寄生虫"
      },
      {
        "yi": "ꍞꀯꇊꄬꇅꋧ",
        "han": "直布罗陀海峡"
      },
      {
        "yi": "ꍞꅝꏽ",
        "han": "迅猛"
      },
      {
        "yi": "ꍔꍞꊈꑼ",
        "han": "政治委员"
      },
      {
        "yi": "ꍞꄀ",
        "han": "发纵指示"
      }
    ]
  },
  {
    "g": "ꍹ",
    "initial": "ch",
    "final": "y",
    "tone": "p",
    "py": "chyp",
    "ipa": "tʂʰɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chyp.mp3",
    "radical": "꒑",
    "strokes": 7,
    "remainingStrokes": 6,
    "phrases": [
      {
        "yi": "ꏳꍹꁬ",
        "han": "锯齿草"
      },
      {
        "yi": "ꂴꊙꎀꍹ",
        "han": "特务组织"
      },
      {
        "yi": "ꍹꐛꈲꒆ",
        "han": "营腐生"
      },
      {
        "yi": "ꍹꈔꁏ",
        "han": "反腐败"
      },
      {
        "yi": "ꍹꐛ",
        "han": "腐朽"
      }
    ]
  },
  {
    "g": "ꎑ",
    "initial": "rr",
    "final": "y",
    "tone": "p",
    "py": "rryp",
    "ipa": "dʐɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rryp.mp3",
    "radical": "꒓",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐯꀋꎑꑊ",
        "han": "不连续面"
      },
      {
        "yi": "ꎑꐺ",
        "han": "附和"
      },
      {
        "yi": "ꎑꀕꎓ",
        "han": "纷纷"
      },
      {
        "yi": "ꍔꊧꎑꊛꐮꆦꈳꏦ",
        "han": "基因连锁互换规律"
      },
      {
        "yi": "ꎑꐈ",
        "han": "机化"
      }
    ]
  },
  {
    "g": "ꎨ",
    "initial": "nr",
    "final": "y",
    "tone": "p",
    "py": "nryp",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nryp.mp3",
    "radical": "꒐",
    "strokes": 4,
    "remainingStrokes": 3
  },
  {
    "g": "ꏃ",
    "initial": "sh",
    "final": "y",
    "tone": "p",
    "py": "shyp",
    "ipa": "ʂɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shyp.mp3",
    "radical": "꒖",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꎭꏃꀘꑸ",
        "han": "莎士比亚"
      },
      {
        "yi": "ꉱꐽꐗꑽꏃ",
        "han": "平底烧瓶"
      },
      {
        "yi": "ꌠꑳꏃꎿꈪ",
        "han": "苏伊士湾"
      },
      {
        "yi": "ꏃꃅꆈꊨꋪ",
        "han": "鸿蒙"
      },
      {
        "yi": "ꇮꃅꊿꏠꌠꏃꃀꃅ",
        "han": "工人阶级为领导"
      }
    ]
  },
  {
    "g": "ꏝ",
    "initial": "r",
    "final": "y",
    "tone": "p",
    "py": "ryp",
    "ipa": "ʐɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ryp.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꂽꃌꌺꏝꀪꏭꄙꌠ",
        "han": "抗属"
      },
      {
        "yi": "ꀃꑍꃏꏸꏝꀪꏭꁧꌠꐤꀕ",
        "han": "今天有飞往日本的飞机吗"
      },
      {
        "yi": "ꉢꏝꀪꁱꅇꂷꌷ",
        "han": "我学日语"
      },
      {
        "yi": "ꏝꒀꄤ",
        "han": "日客潭"
      },
      {
        "yi": "ꉪꏤꀁꇬꆹꏝꀪꐛ",
        "han": "我家住在日本"
      }
    ]
  },
  {
    "g": "ꏹ",
    "initial": "j",
    "final": "y",
    "tone": "p",
    "py": "jyp",
    "ipa": "tɕɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jyp.mp3",
    "radical": "꒟",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇭꍣꇩꏹ",
        "han": "共产国际"
      },
      {
        "yi": "ꏷꐥꏹꍀ",
        "han": "油光"
      },
      {
        "yi": "ꉌꏹꑓꏹ",
        "han": "排遣"
      },
      {
        "yi": "ꏹꇙꏹꌦ",
        "han": "吉尔吉斯"
      },
      {
        "yi": "ꇩꏹꌗꄻ",
        "han": "国际清算"
      }
    ]
  },
  {
    "g": "ꐕ",
    "initial": "q",
    "final": "y",
    "tone": "p",
    "py": "qyp",
    "ipa": "tɕʰɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qyp.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇜꐕ、ꊐꎆ",
        "han": "升级"
      },
      {
        "yi": "ꌦꆈꐕ",
        "han": "新地生"
      },
      {
        "yi": "ꁌꏤꉀꐕ",
        "han": "价格上涨"
      },
      {
        "yi": "ꁯꑟꐕ",
        "han": "负线段"
      },
      {
        "yi": "ꇒꌋꏠꐕ",
        "han": "钻机"
      }
    ]
  },
  {
    "g": "ꐰ",
    "initial": "jj",
    "final": "y",
    "tone": "p",
    "py": "jjyp",
    "ipa": "dʑɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jjyp.mp3",
    "radical": "꒓",
    "strokes": 7,
    "remainingStrokes": 6,
    "phrases": [
      {
        "yi": "ꄏꀙꄮꐰꃅꆳ",
        "han": "东北季风"
      },
      {
        "yi": "ꉀꐰꋌ",
        "han": "克食"
      },
      {
        "yi": "ꊥꐰꄉꅍ",
        "han": "副职"
      },
      {
        "yi": "ꇛꌺꃅꎻꐰ",
        "han": "封官许愿"
      },
      {
        "yi": "ꐰꐛꉎꐛ",
        "han": "三长两短"
      }
    ]
  },
  {
    "g": "ꑇ",
    "initial": "nj",
    "final": "y",
    "tone": "p",
    "py": "njyp",
    "ipa": "ndʑɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njyp.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꐺ、ꃅꈩ、ꑇꆜ",
        "han": "活动"
      },
      {
        "yi": "ꋌꎆꃀꀋꐥꄷꊿꋌꀋꑇ",
        "han": "我不相信他没有钱"
      },
      {
        "yi": "ꌦꑇꌋꑅ",
        "han": "迷信"
      },
      {
        "yi": "ꑇꆜ",
        "han": "发奋"
      },
      {
        "yi": "ꌦꑇꌋꑅꌠ",
        "han": "信徒"
      }
    ]
  },
  {
    "g": "ꑮ",
    "initial": "x",
    "final": "y",
    "tone": "p",
    "py": "xyp",
    "ipa": "ɕɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xyp.mp3",
    "radical": "꒡",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑮꏀꆦ",
        "han": "暖房"
      },
      {
        "yi": "ꑙꑮꌠ",
        "han": "灵长目"
      },
      {
        "yi": "ꎸꑮꍅꑐꐨꊱꁨ",
        "han": "金属活动性顺序"
      },
      {
        "yi": "《ꇙꐺꊻꂷꑮꒆꊫꌐ》ꀞꄻꁧꃤꃅꄐꌐ",
        "han": "办理《流动人口婚育证》服务指南"
      },
      {
        "yi": "ꄫꑌꎸꑮ",
        "han": "重金属"
      }
    ]
  },
  {
    "g": "ꒊ",
    "initial": "y",
    "final": "y",
    "tone": "p",
    "py": "yyp",
    "ipa": "ʑɿ²¹",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yyp.mp3",
    "radical": "꒰",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꄹꊐꒊꃀ",
        "han": "梯河"
      },
      {
        "yi": "ꒊꇗ",
        "han": "波浪"
      },
      {
        "yi": "ꒊꀋꋌꌐꂷ",
        "han": "大于号"
      },
      {
        "yi": "ꒊꋌꊰ",
        "han": "飘渺"
      },
      {
        "yi": "ꋍꒈꒊ",
        "han": "莫大"
      }
    ]
  },
  {
    "g": "ꀶ",
    "initial": "b",
    "final": "yr",
    "tone": "x",
    "py": "byrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_byrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꁔ",
    "initial": "p",
    "final": "yr",
    "tone": "x",
    "py": "pyrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꂏ",
    "initial": "nb",
    "final": "yr",
    "tone": "x",
    "py": "nbyrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꂬ",
    "initial": "hm",
    "final": "yr",
    "tone": "x",
    "py": "hmyrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꃾ",
    "initial": "v",
    "final": "yr",
    "tone": "x",
    "py": "vyrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꆵ",
    "initial": "hl",
    "final": "yr",
    "tone": "x",
    "py": "hlyrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꇘ",
    "initial": "l",
    "final": "yr",
    "tone": "x",
    "py": "lyrx",
    "ipa": "lɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꇘꑐꁰꒌ",
        "han": "动画片"
      },
      {
        "yi": "ꇘꊈ",
        "han": "活质"
      },
      {
        "yi": "ꇘꑐꀋꉆ",
        "han": "动弹不得"
      },
      {
        "yi": "ꇘꄮꎙꅇ",
        "han": "时态助词"
      },
      {
        "yi": "ꍕꎇꇘꑐ",
        "han": "弹性震动"
      }
    ]
  },
  {
    "g": "ꊬ",
    "initial": "z",
    "final": "yr",
    "tone": "x",
    "py": "zyrx",
    "ipa": "tsɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐛꂯꄐꄉꄮ、ꊭꄎꄮ、ꊭꄎꊬꌠ",
        "han": "预备期"
      },
      {
        "yi": "ꊬꐨꄐꐨ",
        "han": "阵势"
      },
      {
        "yi": "ꉦꃀꂴꊬꌠ",
        "han": "前胸"
      },
      {
        "yi": "ꑮꌐꂫꊬꌠ",
        "han": "结幕"
      },
      {
        "yi": "ꄟꌤꀊꅪꏜꊬꌠ",
        "han": "早幼红细胞"
      }
    ]
  },
  {
    "g": "ꋎ",
    "initial": "c",
    "final": "yr",
    "tone": "x",
    "py": "cyrx",
    "ipa": "tsʰɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꋎꁁ",
        "han": "郁热"
      },
      {
        "yi": "ꋎꊸ",
        "han": "熏蒸"
      },
      {
        "yi": "ꑊꑆꋎꁏꀋꄹ",
        "han": "无动于衷"
      },
      {
        "yi": "ꐯꌬꋎꌠ",
        "han": "铜器时代"
      },
      {
        "yi": "ꇴꍆꋎꌬꇬꌦ",
        "han": "控股公司"
      }
    ]
  },
  {
    "g": "ꋫ",
    "initial": "zz",
    "final": "yr",
    "tone": "x",
    "py": "zzyrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꌇ",
    "initial": "nz",
    "final": "yr",
    "tone": "x",
    "py": "nzyrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꌨ",
    "initial": "s",
    "final": "yr",
    "tone": "x",
    "py": "syrx",
    "ipa": "sɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_syrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꌨꑻꇧꎭ",
        "han": "扫除"
      },
      {
        "yi": "ꌨꑻ",
        "han": "横扫"
      },
      {
        "yi": "ꌨꑻ꒧ꒃ",
        "han": "扫平"
      }
    ]
  },
  {
    "g": "ꍄ",
    "initial": "ss",
    "final": "yr",
    "tone": "x",
    "py": "ssyrx",
    "ipa": "zɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꈳꅐꍄꎴ、ꈳꎆꃛꍕ",
        "han": "通货紧缩"
      },
      {
        "yi": "ꍄꑐꐨ",
        "han": "活性"
      },
      {
        "yi": "ꈐꄑꊋꄓ、ꊋꄖꍄꑐ",
        "han": "振兴"
      },
      {
        "yi": "ꈏꉻꎆꏣꍄꑐꎻ、ꈏꇓꎆꏣꍄꑐꎻ",
        "han": "对内搞活经济"
      },
      {
        "yi": "ꋽꂫꍄꏦ",
        "han": "韵律"
      }
    ]
  },
  {
    "g": "ꍟ",
    "initial": "zh",
    "final": "yr",
    "tone": "x",
    "py": "zhyrx",
    "ipa": "tʂɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꍟꑌꐴꀋꄓ",
        "han": "坚韧不拔"
      },
      {
        "yi": "ꍟꑐꅍ",
        "han": "绞手"
      }
    ]
  },
  {
    "g": "ꍺ",
    "initial": "ch",
    "final": "yr",
    "tone": "x",
    "py": "chyrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꎒ",
    "initial": "rr",
    "final": "yr",
    "tone": "x",
    "py": "rryrx",
    "ipa": "dʐɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rryrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꐥꐨꎒꐡ",
        "han": "生存危机"
      },
      {
        "yi": "ꍔꍞꎒꐡ",
        "han": "政治危机"
      },
      {
        "yi": "ꉬꇮꎒꐡꏦ",
        "han": "完全解理"
      },
      {
        "yi": "ꂷꊂꎒꐡ",
        "han": "溃疡"
      },
      {
        "yi": "ꐧꀠꃅꎒꐡꏦ",
        "han": "中等解理"
      }
    ]
  },
  {
    "g": "ꎩ",
    "initial": "nr",
    "final": "yr",
    "tone": "x",
    "py": "nryrx",
    "ipa": "ndʐɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nryrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꎩꍣ",
        "han": "误差"
      }
    ]
  },
  {
    "g": "ꏄ",
    "initial": "sh",
    "final": "yr",
    "tone": "x",
    "py": "shyrx",
    "ipa": "ʂɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏄ ꍿꁥꌠ",
        "han": "匪帮"
      },
      {
        "yi": "ꑲꐂꏄ ꍿ",
        "han": "飞贼"
      },
      {
        "yi": "ꏄꍿꄻꄻ",
        "han": "落草"
      },
      {
        "yi": "ꏄꍿ",
        "han": "豪客"
      },
      {
        "yi": "ꀜꇤꏄꍻꏸ",
        "han": "仰泳"
      }
    ]
  },
  {
    "g": "ꏞ",
    "initial": "r",
    "final": "yr",
    "tone": "x",
    "py": "ryrx",
    "ipa": "ʐɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ryrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏞꏈ",
        "han": "闹腾"
      }
    ]
  },
  {
    "g": "ꏺ",
    "initial": "j",
    "final": "yr",
    "tone": "x",
    "py": "jyrx",
    "ipa": "tɕɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꏺꂳꀕ",
        "han": "壁立"
      }
    ]
  },
  {
    "g": "ꐖ",
    "initial": "q",
    "final": "yr",
    "tone": "x",
    "py": "qyrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꑈ",
    "initial": "nj",
    "final": "yr",
    "tone": "x",
    "py": "njyrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꑯ",
    "initial": "x",
    "final": "yr",
    "tone": "x",
    "py": "xyrx",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0
  },
  {
    "g": "ꒋ",
    "initial": "y",
    "final": "yr",
    "tone": "x",
    "py": "yyrx",
    "ipa": "ʑɿ̱⁴⁴",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yyrx.mp3",
    "radical": "",
    "strokes": 0,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꒊꇙꒋꇙ",
        "han": "空幻"
      },
      {
        "yi": "ꒋꒌꀉꇰ",
        "han": "麦冬"
      }
    ]
  },
  {
    "g": "ꀷ",
    "initial": "b",
    "final": "yr",
    "tone": "",
    "py": "byr",
    "ipa": "pɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_byr.mp3",
    "radical": "꒬",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꀷꇙꀕ",
        "han": "繁密"
      }
    ]
  },
  {
    "g": "ꁕ",
    "initial": "p",
    "final": "yr",
    "tone": "",
    "py": "pyr",
    "ipa": "pʰɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_pyr.mp3",
    "radical": "꒬",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꑤꏱꁕꎆꏣ",
        "han": "县域经济"
      },
      {
        "yi": "ꃄꁕꌅꌋ",
        "han": "封建主"
      },
      {
        "yi": "ꏱꁕꀉꒉꌠ",
        "han": "大行政区"
      },
      {
        "yi": "ꎾꁕ",
        "han": "海区"
      },
      {
        "yi": "ꃴꈴꁕ",
        "han": "绿化带"
      }
    ]
  },
  {
    "g": "ꂐ",
    "initial": "nb",
    "final": "yr",
    "tone": "",
    "py": "nbyr",
    "ipa": null,
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nbyr.mp3",
    "radical": "꒿",
    "strokes": 4,
    "remainingStrokes": 2
  },
  {
    "g": "ꂭ",
    "initial": "hm",
    "final": "yr",
    "tone": "",
    "py": "hmyr",
    "ipa": "m̥ɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hmyr.mp3",
    "radical": "꒪",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꑓꂭ",
        "han": "永眠"
      },
      {
        "yi": "ꈌꂭ",
        "han": "绝口"
      },
      {
        "yi": "ꑓꋪꂭꄉꉌꊭꒃ",
        "han": "闭起眼睛抓麻雀"
      },
      {
        "yi": "ꈌꂭꃚꃀ",
        "han": "闭口韵"
      },
      {
        "yi": "ꑓꂭꌃꎹ",
        "han": "盲目求纯"
      }
    ]
  },
  {
    "g": "ꃿ",
    "initial": "v",
    "final": "yr",
    "tone": "",
    "py": "vyr",
    "ipa": "vɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_vyr.mp3",
    "radical": "꒐",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꎰꅇꃿꅇ",
        "han": "冷言冷语"
      }
    ]
  },
  {
    "g": "ꆶ",
    "initial": "hl",
    "final": "yr",
    "tone": "",
    "py": "hlyr",
    "ipa": "ɬɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_hlyr.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꃢꒃꆏꑷꆶ",
        "han": "捉猪鸡飞"
      },
      {
        "yi": "ꆄꆶ",
        "han": "触发"
      },
      {
        "yi": "ꆶꁧꉪꏦ",
        "han": "逃跑主义"
      },
      {
        "yi": "ꆶꒉꇬꈴꁧ",
        "han": "水遁"
      },
      {
        "yi": "ꃏꒉꆶ",
        "han": "排卵"
      }
    ]
  },
  {
    "g": "ꇙ",
    "initial": "l",
    "final": "yr",
    "tone": "",
    "py": "lyr",
    "ipa": "lɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_lyr.mp3",
    "radical": "꒚",
    "strokes": 1,
    "remainingStrokes": 0,
    "phrases": [
      {
        "yi": "ꀊꇙꄠꁧꏡ",
        "han": "阿尔泰山脉"
      },
      {
        "yi": "ꇙꉮꎿ",
        "han": "洱海"
      },
      {
        "yi": "ꈬꇙꐨ",
        "han": "脉动"
      },
      {
        "yi": "ꏸꇙꊿꄻꒊꃀ",
        "han": "基尔致运河"
      },
      {
        "yi": "ꒉꐥꇙꀕ",
        "han": "水生动物"
      }
    ]
  },
  {
    "g": "ꊭ",
    "initial": "z",
    "final": "yr",
    "tone": "",
    "py": "zyr",
    "ipa": "tsɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zyr.mp3",
    "radical": "꒰",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꑟꊭ",
        "han": "线束"
      },
      {
        "yi": "ꉌꊭꀨꆺ",
        "han": "樊笼"
      },
      {
        "yi": "ꉌꊭꃬꇤ",
        "han": "荠菜"
      },
      {
        "yi": "ꇇꊭꐕ",
        "han": "悬腕"
      },
      {
        "yi": "ꎆꊭꎆꊐꅉ",
        "han": "钱庄"
      }
    ]
  },
  {
    "g": "ꋏ",
    "initial": "c",
    "final": "yr",
    "tone": "",
    "py": "cyr",
    "ipa": "tsʰɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_cyr.mp3",
    "radical": "꒼",
    "strokes": 4,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꇖꉮꈔꋏ",
        "han": "除四害"
      },
      {
        "yi": "ꋍꑷꃅꈔꋏ",
        "han": "灭族"
      },
      {
        "yi": "ꀎꋏꌦꏷꄹꏦ",
        "han": "守制"
      },
      {
        "yi": "ꋧꃅꈭꋏꌋ",
        "han": "救世主"
      },
      {
        "yi": "ꇵꋏꇗ",
        "han": "抱拳"
      }
    ]
  },
  {
    "g": "ꋬ",
    "initial": "zz",
    "final": "yr",
    "tone": "",
    "py": "zzyr",
    "ipa": "dzɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zzyr.mp3",
    "radical": "꒤",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꐧꋦꋬꂻꏱꄻ",
        "han": "社会治安"
      },
      {
        "yi": "ꉪꋬꆏꃅꐛ",
        "han": "行成于思"
      },
      {
        "yi": "ꊉꑍꋬ",
        "han": "嘟囔"
      },
      {
        "yi": "ꇖꄮꋬꂻ",
        "han": "四季平安"
      },
      {
        "yi": "ꋬꂻꂽ",
        "han": "公安部队"
      }
    ]
  },
  {
    "g": "ꌈ",
    "initial": "nz",
    "final": "yr",
    "tone": "",
    "py": "nzyr",
    "ipa": "ndzɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nzyr.mp3",
    "radical": "꒤",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꅇꌈ",
        "han": "词锋"
      },
      {
        "yi": "ꅐꅑꇨꌈꑮ",
        "han": "猛禽类"
      },
      {
        "yi": "ꇧꌈ",
        "han": "凶猛"
      },
      {
        "yi": "ꈌꌈꉏ ꄧ",
        "han": "贫嘴薄舌"
      },
      {
        "yi": "ꌈꌗ",
        "han": "蚁醛"
      }
    ]
  },
  {
    "g": "ꌩ",
    "initial": "s",
    "final": "yr",
    "tone": "",
    "py": "syr",
    "ipa": "sɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_syr.mp3",
    "radical": "꒡",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꌩꏦꇓꏦ",
        "han": "木头"
      },
      {
        "yi": "ꑳꊪꌩ",
        "han": "椰子"
      },
      {
        "yi": "ꌩꀻꁱ",
        "han": "木刻"
      },
      {
        "yi": "ꇬꆅꌩ",
        "han": "规那树"
      },
      {
        "yi": "ꌿꉲꌩ",
        "han": "扁柏"
      }
    ]
  },
  {
    "g": "ꍅ",
    "initial": "ss",
    "final": "yr",
    "tone": "",
    "py": "ssyr",
    "ipa": "zɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ssyr.mp3",
    "radical": "꒷",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꏣꍅ",
        "han": "压秤"
      },
      {
        "yi": "ꍅꁍꀕ",
        "han": "生动活泼"
      },
      {
        "yi": "ꍅꌋꏡꁈ、ꃪꌋꁈ",
        "han": "优选法"
      },
      {
        "yi": "ꍅꊋꇱ",
        "han": "加压"
      },
      {
        "yi": "ꇨꌠꏦꆓꌠꍅ",
        "han": "欺软怕硬"
      }
    ]
  },
  {
    "g": "ꍠ",
    "initial": "zh",
    "final": "yr",
    "tone": "",
    "py": "zhyr",
    "ipa": "tʂɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_zhyr.mp3",
    "radical": "꒟",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꉌꆏꀱꍠꀕ",
        "han": "遗恨"
      },
      {
        "yi": "ꁁꍠꉷꁧꌠꀾꋍꁬꌠꈍꑋꉬ",
        "han": "去攀枝花的票多少钱一张"
      },
      {
        "yi": "ꊿꈔꆅꀱꍠ",
        "han": "泼天"
      },
      {
        "yi": "ꐤꎴꋍꍠꁧꃤꃅ",
        "han": "廉洁奉公"
      },
      {
        "yi": "ꏁꑟꈷꏦꍠ",
        "han": "平金"
      }
    ]
  },
  {
    "g": "ꍻ",
    "initial": "ch",
    "final": "yr",
    "tone": "",
    "py": "chyr",
    "ipa": "tʂʰɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_chyr.mp3",
    "radical": "꒕",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꀜꇤꏅꍻ",
        "han": "仰八叉"
      },
      {
        "yi": "ꇧꍻ",
        "han": "挣扎"
      },
      {
        "yi": "ꉜꏂꑓꍻ",
        "han": "龙睛鱼"
      },
      {
        "yi": "ꍻ……ꀵ",
        "han": "集注"
      },
      {
        "yi": "ꍻꇬꀳꄉ",
        "han": "定睛"
      }
    ]
  },
  {
    "g": "ꎓ",
    "initial": "rr",
    "final": "yr",
    "tone": "",
    "py": "rryr",
    "ipa": "dʐɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_rryr.mp3",
    "radical": "꒕",
    "strokes": 4,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꎓꁨ",
        "han": "闹哄哄"
      },
      {
        "yi": "ꎓꀦꐠꊧ、ꊋꋠ",
        "han": "危机"
      },
      {
        "yi": "ꀱꇐꌩꎓ",
        "han": "烦嚣"
      },
      {
        "yi": "ꍯꏾꁯꎓ",
        "han": "稻叶蝉"
      },
      {
        "yi": "ꐡꎓꐡꈘ",
        "han": "破破烂烂"
      }
    ]
  },
  {
    "g": "ꎪ",
    "initial": "nr",
    "final": "yr",
    "tone": "",
    "py": "nryr",
    "ipa": "ndʐɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_nryr.mp3",
    "radical": "꒔",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꎪꌠꇬꄡꇁ",
        "han": "非诚勿扰"
      },
      {
        "yi": "ꀋ ꎪꃅ……ꑇ",
        "han": "坚信"
      },
      {
        "yi": "ꈎꎪ",
        "han": "岁差"
      },
      {
        "yi": "ꀋꎪꀕꍣ",
        "han": "绝对误差"
      },
      {
        "yi": "ꊋ꒧ꃅꎪꈜ",
        "han": "做功冲程"
      }
    ]
  },
  {
    "g": "ꏅ",
    "initial": "sh",
    "final": "yr",
    "tone": "",
    "py": "shyr",
    "ipa": "ʂɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_shyr.mp3",
    "radical": "꒟",
    "strokes": 5,
    "remainingStrokes": 4,
    "phrases": [
      {
        "yi": "ꋍꏅ",
        "han": "公共"
      },
      {
        "yi": "ꋍꏅꀞꌠ",
        "han": "公营"
      },
      {
        "yi": "ꋍꏅꉌꂵꇿ",
        "han": "皆大花喜"
      },
      {
        "yi": "ꈎꏅꈁꁠ",
        "han": "压岁钱"
      },
      {
        "yi": "ꆍꈎꏅꃅꌒꅊꇉ",
        "han": "祝你们新年好"
      }
    ]
  },
  {
    "g": "ꏟ",
    "initial": "r",
    "final": "yr",
    "tone": "",
    "py": "ryr",
    "ipa": "ʐɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_ryr.mp3",
    "radical": "꒲",
    "strokes": 2,
    "remainingStrokes": 1,
    "phrases": [
      {
        "yi": "ꏟꃆꏈ꒧",
        "han": "纠纷"
      },
      {
        "yi": "ꏟꈯꃅꇗꍬꏦꍬ",
        "han": "验收法纪"
      },
      {
        "yi": "ꏟꈯ",
        "han": "严守"
      },
      {
        "yi": "ꏟꈯꃅꐏ",
        "han": "死守"
      },
      {
        "yi": "ꏟꇤꏇꇤ",
        "han": "纷争"
      }
    ]
  },
  {
    "g": "ꏻ",
    "initial": "j",
    "final": "yr",
    "tone": "",
    "py": "jyr",
    "ipa": "tɕɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_jyr.mp3",
    "radical": "꒕",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꂓꏻꃅꐙ",
        "han": "潮呼呼"
      },
      {
        "yi": "ꉔꇙꏻꇙ",
        "han": "滑润"
      },
      {
        "yi": "ꏻꃅꇬ",
        "han": "款留"
      },
      {
        "yi": "ꅫꏻ",
        "han": "潮湿"
      },
      {
        "yi": "ꊛꏻ",
        "han": "脱节"
      }
    ]
  },
  {
    "g": "ꐗ",
    "initial": "q",
    "final": "yr",
    "tone": "",
    "py": "qyr",
    "ipa": "tɕʰɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_qyr.mp3",
    "radical": "꒿",
    "strokes": 5,
    "remainingStrokes": 3,
    "phrases": [
      {
        "yi": "ꉱꈭꐗꑽꏃ",
        "han": "圆底烧瓶"
      },
      {
        "yi": "ꐗꋊ",
        "han": "烧碱"
      },
      {
        "yi": "ꃆꄔꐗ",
        "han": "烧伤"
      },
      {
        "yi": "ꁍꁈꐗꃝ",
        "han": "祖坟"
      },
      {
        "yi": "ꐗꉻꃮꎃꊐ",
        "han": "替罪羊"
      }
    ]
  },
  {
    "g": "ꑉ",
    "initial": "nj",
    "final": "yr",
    "tone": "",
    "py": "njyr",
    "ipa": "ndʑɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_njyr.mp3",
    "radical": "꒗",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꋊꑉ",
        "han": "消弱"
      },
      {
        "yi": "ꁮꐚꂴꊙꑉ",
        "han": "锄奸"
      }
    ]
  },
  {
    "g": "ꑰ",
    "initial": "x",
    "final": "yr",
    "tone": "",
    "py": "xyr",
    "ipa": "ɕɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_xyr.mp3",
    "radical": "꒐",
    "strokes": 3,
    "remainingStrokes": 2,
    "phrases": [
      {
        "yi": "ꂷꉐꑰꀕ",
        "han": "雨脚"
      }
    ]
  },
  {
    "g": "ꒌ",
    "initial": "y",
    "final": "yr",
    "tone": "",
    "py": "yyr",
    "ipa": "ʑɿ̱³³",
    "audioUrl": "https://wordsound.yixueyanjiu.com/liangshan_yyr.mp3",
    "radical": "꒐",
    "strokes": 6,
    "remainingStrokes": 5,
    "phrases": [
      {
        "yi": "ꁰꒌꁱꑲ",
        "han": "画像"
      },
      {
        "yi": "ꄆꒌꃑꅉ",
        "han": "影院"
      },
      {
        "yi": "ꁻꒌꏤꇗ",
        "han": "射影定理"
      },
      {
        "yi": "ꒌꐛꂪꌦ",
        "han": "银幕"
      },
      {
        "yi": "ꄿꐨꌦꀋꃋꌋꀋꃋꁰꒌ",
        "han": "自由女神像"
      }
    ]
  }
]

export const TOTAL_WORDS = WORDS.length

/** 统一处理「暂无资料」显示 */
export function displayText(value: string | number | null | undefined): string {
  if (value === '' || value === 0 || value == null) return '-'
  return String(value)
}

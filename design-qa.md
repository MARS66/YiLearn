# YiLearn V2 页面还原 QA

final result: passed

## 比对目标

- 设计稿：`design/screens/08-learning-memory-card-selected-v2.png`
- 实现：`miniprogram/pages/learn/learn.*`
- 设计稿：`design/screens/09-learning-completion-share-selected-v2.png`
- 实现：`miniprogram/pages/complete/complete.*`
- 设计稿：`design/screens/07-profile-selected-v2.png`
- 实现：`miniprogram/pages/profile/profile.*`
- 设计稿尺寸：均为 853 × 1844 px，约对应 426.5 × 922 CSS px 的 2x 移动端画面。
- 目标状态：顺序识字进行中、学习完成海报、我的默认状态。

## 已核对

- 字体与层级：保留项目现有中文展示字体、彝文字体和红黄双色拼音层级。
- 布局与间距：按设计稿重建头部、IP 叠放、深色主卡、数据分区、底部操作和安全区。
- 色彩：继续使用 `#FAF7F0`、`#171614`、`#E13C2F`、`#F2B632` 等既有令牌。
- 图片：使用项目已有透明 IP PNG、品牌图和小程序码资源，未生成替代角色。
- 文案：设计稿中的旧概念已按 V2 PRD 替换为顺序识字、自主回顾、已认识和固定 10 字。
- 交互：上一张/下一张、完成、继续学习、成就、设置开关、存储说明和清除确认仍接入现有逻辑。

## 运行时视觉验证

- 已通过微信开发者工具实际打开三个页面，模拟器截图均为 593 × 1280 px，与 853 × 1844 px 设计稿具有相同纵横比。
- 学习卡：`/private/tmp/yilearn-learn-final2.png`，核对头部进度、IP 与卡片叠放、字形信息区和底部双按钮。
- 学习完成：`/private/tmp/yilearn-complete-final2.png`，核对完成标题、深色分享海报、数据区、小程序码与分享按钮。
- 我的：`/private/tmp/yilearn-profile-final2.png`，核对角色头图、总进度、周历、统计、成就和底部导航。
- 比对时排除微信模拟器原生状态栏、胶囊与底部系统指示条；应用自有内容未被这些原生区域遮挡。
- 未发现 P0、P1 或 P2 视觉问题。

## 静态验证

- TypeScript 语法通过。
- WXML 标签闭合通过。
- SCSS 大括号平衡通过。
- 页面资源路径存在。
- 首页、学习、完成和我的页面未出现课程、课节、待复习、掌握、正确率、答题等禁用术语。
- 学习页“下一个”已实点验证，进度由 `1 / 10` 更新为 `2 / 10`。
- 我的页声音开关已实点验证，`aria-checked` 由 `true` 更新为 `false`。
- 模拟器控制台按 error、warn、exception、fail 过滤后为空。
- 验收结束后已恢复原学习进度，并回到首页。

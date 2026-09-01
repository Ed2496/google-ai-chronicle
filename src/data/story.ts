export type ChapterMood = 'fact' | 'power' | 'turn'

export interface Chapter {
  id: string
  year: string
  span: string
  title: string
  kicker: string
  mood: ChapterMood
  points: string[]
  footnote?: string
  tag: string
}

export const chapters: Chapter[] = [
  {
    id: 'c1',
    year: '2017',
    span: '第一幕',
    title: '天胡開局',
    kicker: '事實與數據的巔峰',
    mood: 'fact',
    points: [
      '《Attention Is All You Need》發表，Transformer 架構誕生——今日所有大模型的底層基石',
      '8 位作者、自研 TPU 算力、全網最龐大的數據，全部握在 Google 手裡',
      '工程師文化尚存，科學家的終極目標是實現 AGI',
    ],
    tag: 'FACT · 技術事實主導',
  },
  {
    id: 'c2',
    year: '19–21',
    span: '第二幕',
    title: '權力接管',
    kicker: '權力敘事凌駕事實',
    mood: 'power',
    points: [
      'Alphabet 重組，職業經理人全面掌權，「降本增效」成為最高指導原則',
      '2021 年 LaMDA 已成熟——比 ChatGPT 早整整一年——卻遭雪藏：不給算力、不給預算',
      '理由：大模型會給出直接答案，摧毀每年數百億美元的搜索廣告基本盤',
    ],
    footnote: '「當一家公司的傳統業務太賺錢時，它內部所有的激勵機制都會傾向於保護現有業務。」',
    tag: 'POWER · 財報凌駕程式碼',
  },
  {
    id: 'c3',
    year: '2022',
    span: '第三幕',
    title: '降維打擊',
    kicker: '創新者的窘境',
    mood: 'power',
    points: [
      '11 月 30 日，OpenAI 發布 ChatGPT——用 Google 發明的架構，砸碎 Google 的高牆',
      'Google 內部宣布「Code Red」，倉促推出 Bard 應戰，發布會失誤蒸發千億市值',
      '矽谷機構開始出具「死亡報告」：AI 鼻祖淪為追趕者',
    ],
    tag: 'SHOCK · 高牆被自己的發明擊碎',
  },
  {
    id: 'c4',
    year: '22–25',
    span: '第四幕',
    title: '追趕與內耗',
    kicker: '基層創新者的悲劇',
    mood: 'turn',
    points: [
      '全棧押注：TPU 迭代、Google Brain 與 DeepMind 強制合併、搜尋全面接入 AI',
      '寫下 Transformer 論文的 8 位靈魂人物，在此期間全數離開',
      'AlphaFold 團隊被邊緣化——創造價值的人，成為 KPI 考核下的犧牲品',
    ],
    footnote: 'Grassroots Tragedy：資源被剝奪、責任被轉嫁、最終被迫離場。',
    tag: 'EXODUS I · 八子出走',
  },
  {
    id: 'c5',
    year: '2025',
    span: '第五幕',
    title: '絕地反攻',
    kicker: '事實與數據重新主導',
    mood: 'fact',
    points: [
      '11 月 18 日 Gemini 3 發布：LMArena 1501 Elo 登頂，Humanity\u2019s Last Exam 37.5%',
      '12 月 1 日，Sam Altman 宣布 OpenAI 進入「紅色警戒」——距 Google 當年的 Code Red 正好三年，角色完全逆轉',
      'Alphabet 市值七年來首次超越微軟；Gemini 月活衝上 7.5 億',
    ],
    footnote: '但程式能力仍輸 Claude Opus 4.5（SWE-bench 76.2% 對 80.9%）——「全面領先」是第一個需要驗證的「相」。',
    tag: 'COMEBACK · 攻守易形',
  },
  {
    id: 'c6',
    year: '2026',
    span: '第六幕',
    title: '勝利中的大逃亡',
    kicker: '勝利的「相」，潰敗的「因」',
    mood: 'power',
    points: [
      '6 月：Gemini 共同負責人 Noam Shazeer 跳槽 OpenAI；諾貝爾獎得主 John Jumper 出走 Anthropic',
      '8 月 5 日：任職 27 年的 Jeff Dean 離職創業，帶走 Ghemawat、Quoc Le、Vinyals；同日 Hassabis 卸任 DeepMind CEO——股價盤中重挫 5.4%',
      'Q2 自由現金流 2004 年以來首次轉負（−59 億美元）；資本支出指引上調至 1,950–2,050 億美元；Gemini 3.5 Pro 延遲',
    ],
    footnote: 'Jeff Dean 離職後說：「成為獨立公司後，我們或許能做出一些不符合公司最純粹財務利益的決定。」',
    tag: 'EXODUS II · 靈魂人物離場',
  },
]

export interface Stat {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
  label: string
  sub: string
  mood: 'fact' | 'power'
}

export const stats: Stat[] = [
  { value: 9.5, decimals: 1, suffix: ' 億', label: 'Gemini 月活用戶', sub: '2026 年 7 月財報 · 日活一年翻三倍', mood: 'fact' },
  { value: 4.2, decimals: 1, prefix: '$', suffix: ' 兆', label: 'Alphabet 市值', sub: '2026 年中 · 微軟同期約 $3.1 兆', mood: 'fact' },
  { value: 5140, suffix: ' 億', prefix: '$', label: '雲端在手訂單', sub: '2026 Q2 backlog · 需求仍大於供給', mood: 'fact' },
  { value: 1501, suffix: ' Elo', label: 'LMArena 登頂分數', sub: 'Gemini 3 Pro · 2025 年 11 月', mood: 'fact' },
  { value: -59, prefix: '$', suffix: ' 億', label: 'Q2 自由現金流', sub: '2004 年以來首次轉負', mood: 'power' },
  { value: 2050, prefix: '$', suffix: ' 億', label: '2026 資本支出上限', sub: '財報公布當日股價跌約 7%', mood: 'power' },
  { value: 82, suffix: '%', label: 'Google Cloud 營收年增', sub: '2026 Q2 · 單季 248 億美元', mood: 'fact' },
  { value: 20, suffix: ' 億+', label: 'AI Overviews 月用戶', sub: '覆蓋 200+ 國家 · 最強變現渠道', mood: 'fact' },
]

export interface Person {
  name: string
  role: string
  to: string
  year: string
}

export const waveOne: Person[] = [
  { name: 'Ashish Vaswani', role: 'Transformer 第一作者', to: '創辦 Essential AI', year: '2021' },
  { name: 'Noam Shazeer', role: 'Transformer 作者', to: '創辦 Character.AI', year: '2021' },
  { name: 'Aidan Gomez', role: 'Transformer 作者', to: '創辦 Cohere', year: '2019' },
  { name: 'Jakob Uszkoreit', role: 'Transformer 作者', to: '創辦 Inceptive', year: '2021' },
  { name: 'Llion Jones', role: 'Transformer 作者', to: '創辦 Sakana AI', year: '2023' },
  { name: 'Niki Parmar', role: 'Transformer 作者', to: '創辦 Essential AI', year: '2021' },
  { name: 'Lukasz Kaiser', role: 'Transformer 作者', to: '加入 OpenAI', year: '2021' },
  { name: 'Illia Polosukhin', role: 'Transformer 作者', to: '創辦 NEAR Protocol', year: '2019' },
]

export const waveTwo: Person[] = [
  { name: 'Jeff Dean', role: '首席科學家 · 第 30 號員工 · 27 年', to: '創辦 Discovery Loop', year: '2026.08' },
  { name: 'Sanjay Ghemawat', role: 'MapReduce / TensorFlow 奠基人', to: '隨 Dean 出走', year: '2026.08' },
  { name: 'Quoc Le', role: 'Google Brain 共同創辦人', to: '隨 Dean 出走', year: '2026.08' },
  { name: 'Oriol Vinyals', role: 'DeepMind 研究副總', to: '隨 Dean 出走', year: '2026.08' },
  { name: 'Noam Shazeer', role: 'Gemini 共同負責人（回歸後再走）', to: '加入 OpenAI', year: '2026.06' },
  { name: 'John Jumper', role: '諾貝爾化學獎 · AlphaFold 締造者', to: '加入 Anthropic', year: '2026.06' },
  { name: 'Demis Hassabis', role: 'DeepMind 執行長', to: '卸任 · 轉任董事長', year: '2026.08' },
]

export interface Framework {
  no: string
  title: string
  en: string
  desc: string
  evidence: string
}

export const frameworks: Framework[] = [
  {
    no: '01',
    title: '基層創新者的悲劇',
    en: 'GRASSROOTS TRAGEDY',
    desc: '真正創造價值的一線人員，在官僚化與短視決策下，資源被剝奪、責任被轉嫁，最終被邊緣化或離場。',
    evidence: 'Google 例證：Transformer 八子全數離開；LaMDA 團隊不給算力；2026 年連「重建者」一代也在勝利當年出走。',
  },
  {
    no: '02',
    title: '管理主義的侵蝕',
    en: 'MBB MANAGERIALISM',
    desc: '從「工程師治國」到「PPT 大師治國」：擅長財務揉捏與組織調整，以降本增效和短期跑分為最高原則，外行指導內行。',
    evidence: 'Google 例證：為保護廣告財報雪藏成熟技術；用管理代工廠的 KPI 考核頂尖科學家；3.5 Pro 因跑分未達標而延遲。',
  },
  {
    no: '03',
    title: '收租食利與金融化',
    en: 'RENTIER CAPITALISM',
    desc: '商業模式從「價值創造」不可逆地滑向「價值提取」：守成、壟斷、收租，而非冒險突破。',
    evidence: 'Google 例證：前期出租算力當「二房東」；如今以兩千億美元資本支出與發債豪賭——收租基因未變，只是賭注升級。',
  },
]

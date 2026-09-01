# Google AI 七年興衰圖解

一個深色/淺綠松色調的捲動敘事（scrollytelling）圖解網站，講述 Google 從 2017 年發明 Transformer、雪藏 LaMDA、被 ChatGPT 降維打擊，到 2025 年 Gemini 3 絕地反攻、2026 年勝利中再度人才出走的完整編年史。

技術棧：**React + TypeScript + Vite + Tailwind CSS + GSAP ScrollTrigger + Lenis**

## 本地啟動（重要）

這是一個 Vite 專案，**不能直接雙擊打開 `index.html`**（瀏覽器無法載入 `src/main.tsx`，會出現 404）。請在專案根目錄執行：

```bash
# 1. 安裝依賴（需要 Node.js 20+）
npm install

# 2. 開發模式（熱更新）
npm run dev
# 然後打開 http://localhost:5173

# 或：建置 + 預覽正式版
npm run build
npm run preview
```

建置產物會輸出到 `dist/`，該目錄可直接部署到任何靜態主機。

## 頁面結構

| 區塊 | 檔案 | 內容 |
| --- | --- | --- |
| Hero | `src/sections/Hero.tsx` | 主標題、視差光暈、關鍵數字 |
| Timeline | `src/sections/Timeline.tsx` | 六幕編年時間軸（捲動驅動） |
| Framework | `src/sections/Framework.tsx` | 三條鎖鏈病理診斷 |
| DataBoard | `src/sections/DataBoard.tsx` | 勝利與代價的數據儀表板 |
| Exodus | `src/sections/Exodus.tsx` | 兩波人才出走名錄 |
| Epilogue | `src/sections/Epilogue.tsx` | 七年驗證理論結語 |

所有敘事內容集中在 `src/data/story.ts`，修改文字不用動元件。

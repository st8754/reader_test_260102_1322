<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1sh4uQwFSXHOVsD4TW2lTF0mLPtfKYkZs

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

### 自動部署（推薦）

1. 在 GitHub repository 設定中啟用 Pages：
   - 前往 Settings → Pages
   - Source 選擇 "GitHub Actions"

2. 推送代碼到 main/master 分支，GitHub Actions 會自動構建並部署

### 手動部署

1. 構建專案（根據您的 repository 名稱設置 BASE_PATH）：
   ```bash
   BASE_PATH=/reader_test_260102_1322/ npm run build
   ```
   如果您的 repository 名稱不同，請替換 `/reader_test_260102_1322/` 為您的 repository 名稱

2. 將 `dist` 資料夾的內容部署到 GitHub Pages：
   - 前往 Settings → Pages
   - Source 選擇 "Deploy from a branch"
   - Branch 選擇 `gh-pages` 或 `main`，資料夾選擇 `/ (root)` 或 `/dist`

### 重要提示

- 如果部署後頁面空白，請確認 `vite.config.ts` 中的 `base` 設定與您的 repository 名稱一致
- Repository 名稱格式：`username.github.io` 使用 `base: '/'`，其他使用 `base: '/repository-name/'`

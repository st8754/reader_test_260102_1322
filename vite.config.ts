import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // GitHub Pages 部署配置
    // 如果部署到 username.github.io (根路徑)，使用 '/'
    // 如果部署到 username.github.io/repo-name/ (子路徑)，使用 '/repo-name/'
    // 可以通過環境變數 BASE_PATH 覆蓋，例如：BASE_PATH=/reader_test_260102_1322/ npm run build
    const base = env.BASE_PATH || process.env.BASE_PATH || '/reader_test_260102_1322/';
    
    return {
      base: base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist',
        assetsDir: 'assets',
      }
    };
});

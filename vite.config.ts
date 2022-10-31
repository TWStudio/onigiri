import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

const root = 'src/pages/';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 获取环境变量
  const env: Partial<ImportMeta> = loadEnv(mode, process.cwd(), 'VITE_');
  console.warn('command', command);
  console.warn('mode', mode);
  console.warn('env', env);
  dotenv.config({ path: `./.env.${mode}` });
  return {
    root,
    base: '',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env': env,
    },
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: {
          spring: resolve(__dirname, 'src/pages/spring/index.html'),
          summer: resolve(__dirname, 'src/pages/summer/index.html'),
          autumn: resolve(__dirname, 'src/pages/autumn/index.html'),
          winter: resolve(__dirname, 'src/pages/winter/index.html'),
        },
        output: {
          dir: './dist',
        },
      },
    },
  };
});

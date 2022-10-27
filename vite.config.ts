import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const root = 'src/pages/';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    root,
    base: '',
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
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

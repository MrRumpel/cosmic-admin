import { viteMockServe } from 'vite-plugin-mock';
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      mockPath: 'src/mock',
      enable: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/index.scss";',
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '/#/': fileURLToPath(new URL('./src/types/', import.meta.url)),
      '/@/store/': fileURLToPath(new URL('./src/core/stores/', import.meta.url)),
      '/@/settings/': fileURLToPath(new URL('./src/core/config/', import.meta.url)),
      '/@/enums/': fileURLToPath(new URL('./src/core/enums/', import.meta.url)),
      '/@/hooks/': fileURLToPath(new URL('./src/core/hooks/', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/basic-api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
        // only https
        // secure: false
      },
      '/upload': {
        target: 'http://localhost:3300/upload',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp(`^/upload`), ''),
      },
    },
  },
});

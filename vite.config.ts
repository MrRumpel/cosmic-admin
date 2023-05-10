import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
function AutoImport(arg0: { resolvers: any[]; }): import("vite").PluginOption {
  throw new Error('Function not implemented.');
}

function ElementPlusResolver() {
  throw new Error('Function not implemented.');
}

function Components(arg0: { resolvers: any[]; }): import("vite").PluginOption {
  throw new Error('Function not implemented.');
}


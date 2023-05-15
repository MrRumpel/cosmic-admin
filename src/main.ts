import './assets/main.css';
import { createApp, createSSRApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import appRoutingModule from './app-routing.module';

const main = async () => {
  // ssr 预留
  const app = createSSRApp(App);
  // 挂载路由
  appRoutingModule(app);
  // 主入口
  app.mount('#app');
};

main();

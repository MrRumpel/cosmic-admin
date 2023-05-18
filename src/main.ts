import './assets/main.css';
import { createSSRApp } from 'vue';

import App from './App';
import setupRouter from './core/router';

const main = async () => {
  // ssr 预留
  const app = createSSRApp(App);
  // 挂载路由
  setupRouter(app);
  // 主入口
  app.mount('#app');
};

main();

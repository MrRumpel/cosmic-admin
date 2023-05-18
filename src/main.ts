import './assets/main.css';
import { createSSRApp } from 'vue';

import App from './App';
import setupRouter from './core/router';
import { setupStore } from './core/stores';
import { setupI18n } from './core/locales/setupI18n';

const main = async () => {
  // ssr 预留
  const app = createSSRApp(App);
  // 配置 store
  setupStore(app);
  // 异步加载i18n
  await setupI18n(app);
  // 挂载路由
  setupRouter(app);
  // 主入口
  app.mount('#app');
};

main();

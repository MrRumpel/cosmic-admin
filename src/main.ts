import './assets/main.css';
import { createSSRApp } from 'vue';

import App from './App';
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

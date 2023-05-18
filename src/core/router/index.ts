import type { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { basicRoutes } from './routes';

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // 初始路由列表。
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 严格匹配
  strict: true,
});

// 路由入口
export default (app: App<Element>) => {
  app.use(router);
};

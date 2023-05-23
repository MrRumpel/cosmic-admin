import type { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { basicRoutes } from './routes';

// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = [];
const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name);
    getRouteNames(item.children || []);
  });
getRouteNames(basicRoutes);

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // 初始路由列表。
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 严格匹配
  strict: true,
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route;
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name);
    }
  });
}

// 路由入口
export default (app: App<Element>) => {
  app.use(router);
};

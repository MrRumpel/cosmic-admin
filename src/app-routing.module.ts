import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/AboutView.vue'),
    },
  ],
  // 严格匹配
  strict: true,
});

// 路由入口
export default (app: App<Element>) => {
  app.use(router);
};
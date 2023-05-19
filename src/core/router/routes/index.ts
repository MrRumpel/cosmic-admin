import { PageEnum } from '@/core/enums/pageEnum';
import { AppRouteModule, AppRouteRecordRaw } from '../types';
import { REDIRECT_ROUTE, PAGE_NOT_FOUND_ROUTE } from './basic';
import { mainOutRoutes } from './mainOut';

const modules = import.meta.glob('./modules/**/*.ts', { eager: true });
const routeModuleList: AppRouteModule[] = [];

// 加入到路由集合中
Object.keys(modules).forEach((key) => {
  const mod = (modules[key] as any).default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const asyncRoutes = [...routeModuleList];

// 根路由
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

// 未授权的基本路由
export const basicRoutes = [RootRoute, ...mainOutRoutes, REDIRECT_ROUTE, PAGE_NOT_FOUND_ROUTE];

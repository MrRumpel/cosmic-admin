import { t } from '@/core/hooks/web/useI18n';
import { LAYOUT } from '../../constant';
import { AppRouteModule } from '../../types';


const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/pages/dashboard'),
      meta: {
        title: t('routes.dashboard.analysis'),
      },
    },
  ],
};

export default dashboard;

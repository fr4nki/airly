import Loadable from '@/components/loadable';

import { RouteItem } from '@/providers/routing';

const routing: RouteItem[] = [
  {
    path: '*',
    component: Loadable(() => import('@/pages/error/page')),
  },
];

export default routing;

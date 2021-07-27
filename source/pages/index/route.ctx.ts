import Loadable from '@/components/loadable';

import { RouteItem } from '@/providers/routing';

export enum RoutingPaths {
  root = '/',
}

const routing: RouteItem[] = [
  {
    path: RoutingPaths.root,
    exact: true,
    component: Loadable(() => import('@/pages/index/page')),
  },
];

export default routing;

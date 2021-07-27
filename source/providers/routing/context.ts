import { RouteItem } from './types';

interface R {
  list: RouteItem[];
  notFound: RouteItem | null;
}

const routes: R = {
  list: [],
  notFound: null,
};

const ctx = require.context('../../', true, /^pages\/.*\/route.ctx.ts$/);

ctx.keys().forEach((value) => {
  const current: RouteItem[] = ctx(value).default;

  current.forEach((route) => {
    if (route.path === '*') {
      routes.notFound = route;
    } else {
      routes.list.push(route);
    }
  });
});

export default routes;

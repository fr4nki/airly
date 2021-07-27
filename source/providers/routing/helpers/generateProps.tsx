import { RouteItem } from '../types';

export const generateProps = (route: RouteItem | null): Record<string, unknown> | null => {
  if (!route) {
    return null;
  }

  const {
    path,
    props,
    exact,
    component,
  } = route;

  const Component = component;

  const routeProps: Record<string, unknown> = {
    path,
    render: () => <Component {...props} />,
  };

  if (exact !== undefined) {
    routeProps.exact = exact;
  }

  return routeProps;
};

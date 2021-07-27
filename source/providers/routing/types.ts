import { ComponentType } from 'react';

export interface RouteItem {
  component: ComponentType;
  path: string;
  pathIsError?: boolean;
  exact?: boolean;
  props?: {
    [key: string]: unknown;
  };
}

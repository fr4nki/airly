import type { ComponentType } from 'react';
import FullFrame from './component';

export const withFullFrame = <T, >(Component: ComponentType) => (props: T): JSX.Element => (
  <FullFrame>
    <Component {...{ ...props }} />
  </FullFrame>
);

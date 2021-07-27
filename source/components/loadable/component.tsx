import {
  ReactChild,
  ReactFragment,
  ReactPortal,
  ComponentType,
  Suspense,
  lazy,
} from 'react';

import { LoadingPage } from '@/components/loaders';

/* eslint-disable @typescript-eslint/no-explicit-any */
const Loadable = <T extends unknown>(
  component: () => Promise<any>,
  loader?: ReactChild | ReactFragment | ReactPortal,
): ComponentType<T> => {
  const LoadableComponent = lazy(component);
  const Loader = loader ?? <LoadingPage />;

  return (props: T) => (
    <Suspense {...{
      fallback: Loader,
    }}>
      <LoadableComponent {...props} />
    </Suspense>
  );
};
/* eslint-enable @typescript-eslint/no-explicit-any */

export default Loadable;

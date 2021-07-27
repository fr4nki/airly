import { FC } from 'react';

import * as serviceWorker from './serviceWorker';

const Provider: FC = ({
  children,
}) => {
  serviceWorker.unregister();

  return (
    <>
      { children }
    </>
  );
};

export default Provider;

import { FC } from 'react';
import * as Sentry from '@sentry/react';

import config from '@/config';

const { app, sentry } = config;

if (app.isProduction && sentry.dsn && app.mode !== 'local') {
  Sentry.init({ dsn: sentry.dsn, environment: app.mode });
}

const Provider: FC = ({ children }) => (
  <>{children}</>
);

export default Provider;

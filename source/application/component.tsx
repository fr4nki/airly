import { FC } from 'react';

import ServiceWorkerProvider from '@/providers/serviceWorker';
import SentryProvider from '@/providers/sentry';
import I18nProvider from '@/providers/i18n';
import ThemeProvider from '@/providers/theme';
import RoutingProvider from '@/providers/routing';

import logger from '@/utils/logger';
import config from '@/config';

logger.info(`Mode: ${config.app.mode}`);
logger.info(`Build: ${config.app.build}`);

const Application: FC = () => (
  <SentryProvider>
    <ServiceWorkerProvider>
      <ThemeProvider>
        <I18nProvider>
          <RoutingProvider />
        </I18nProvider>
      </ThemeProvider>
    </ServiceWorkerProvider>
  </SentryProvider>
);

export default Application;

import { FC, Fragment } from 'react';
import { IntlProvider } from 'react-intl';

import locales from './context';
import { getUserLocale } from './helpers';

const locale = getUserLocale();

const Provider: FC = ({ children }) => (
  <IntlProvider {...{
    locale,
    messages: locales[locale],
    textComponent: Fragment,
  }}>
    {children}
  </IntlProvider>
);

export default Provider;

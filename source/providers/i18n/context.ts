import { LOCALES } from './constants';

const locales = {
  [LOCALES.en]: {},
  [LOCALES.ru]: {},
};

const ctx = require.context('../../', true, /i18n.ctx.ts$/);

ctx.keys().forEach((value) => {
  const current = ctx(value).default;

  locales[LOCALES.ru] = {
    ...locales[LOCALES.ru],
    ...current.ru,
  };

  locales[LOCALES.en] = {
    ...locales[LOCALES.en],
    ...current.en,
  };
});

export default locales;

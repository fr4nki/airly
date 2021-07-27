import { DEFAULT_LOCALE, LOCALES_DICT, LOCALES } from '../constants';

export const getUserLanguage = (): string => navigator.language.split('-')[0];

export const getUserLocale = (): LOCALES => {
  let locale: LOCALES = DEFAULT_LOCALE;

  const userLanguage = getUserLanguage();

  if (Object.keys(LOCALES_DICT).includes(userLanguage)) {
    locale = userLanguage as LOCALES;
  }

  return locale;
};

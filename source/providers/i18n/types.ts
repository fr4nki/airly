import { LOCALES } from './constants';

export interface I18NDict {
  [LOCALES.en]: Record<string, string>;
  [LOCALES.ru]: Record<string, string>;
}

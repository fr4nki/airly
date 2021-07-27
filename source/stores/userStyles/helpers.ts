import { readStorage, withStorageKeyPrefix, writeStorage } from '@/utils/storage';

import { defaultUserStyles, PERSIST_STORAGE_KEY } from './constants';
import { UserStylesSchema, configSchemaValidate } from './schema';

export const setUserStyles = (cfg: UserStylesSchema): void => (
  writeStorage(withStorageKeyPrefix(PERSIST_STORAGE_KEY), cfg)
);

export const getUserStyles = (): UserStylesSchema => {
  const storedData = readStorage(withStorageKeyPrefix(PERSIST_STORAGE_KEY));
  const [error, config] = configSchemaValidate(storedData);

  if (error) {
    setUserStyles(defaultUserStyles);
  }

  return !error && config ? config : defaultUserStyles;
};

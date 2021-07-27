import { readStorage, withStorageKeyPrefix, writeStorage } from '@/utils/storage';

import { sanitizeHTML } from '@/utils/helpers';

import { PERSIST_STORAGE_KEY, defaultUserContent } from './constants';

export const setUserContent = (content: string): void => {
  writeStorage(withStorageKeyPrefix(PERSIST_STORAGE_KEY), content);
};

export const getUserContent = (): string => {
  const storedData = readStorage<string>(withStorageKeyPrefix(PERSIST_STORAGE_KEY));

  if (storedData) {
    const sanitizedData = sanitizeHTML(storedData);

    if (sanitizedData !== storedData) {
      setUserContent(sanitizedData);

      return sanitizedData;
    }

    return storedData;
  }

  return defaultUserContent;
};

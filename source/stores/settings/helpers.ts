import { readStorage, withStorageKeyPrefix, writeStorage } from '@/utils/storage';

import { defaultSettings, PERSIST_STORAGE_KEY } from './constants';
import { SettingsSchema, settingsSchemaValidate } from './schema';

export const setUserSettings = (settings: SettingsSchema): void => (
  writeStorage(withStorageKeyPrefix(PERSIST_STORAGE_KEY), settings)
);

export const getUserSettings = (): SettingsSchema => {
  const storedData = readStorage(withStorageKeyPrefix(PERSIST_STORAGE_KEY));
  const [error, config] = settingsSchemaValidate(storedData);

  if (error) {
    setUserSettings(defaultSettings);
  }

  return !error && config ? config : defaultSettings;
};

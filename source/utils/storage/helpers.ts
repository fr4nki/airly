import { storageKeyPrefix } from '@/utils/storage/constants';

export const withStorageKeyPrefix = (key: string): string => `${storageKeyPrefix}${key}`;

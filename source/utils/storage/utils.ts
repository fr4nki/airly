export function readStorage<T>(key: string): (T | null) {
  let result = null;
  const item = window.localStorage.getItem(key);

  if (item) {
    try {
      result = JSON.parse(item) as T;
    } catch (error: unknown) {
      result = null;
    }
  }

  return result;
}

export const writeStorage = (key: string, value: unknown): void => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const clearStorage = (recordKeys: string | string[]): void => {
  if (Array.isArray(recordKeys)) {
    recordKeys.forEach((key) => {
      window.localStorage.removeItem(key);
    });

    return;
  }

  window.localStorage.removeItem(recordKeys);
};

import create from 'zustand';
import { loadFontAsync } from './helpers';

export interface FontsStore {
  fonts: string[];
  readonly fetchFont: (name: string) => Promise<boolean>;
}

export const useFontStore = create<FontsStore>((set, get) => ({
  fonts: [],
  fetchFont: async (name: string) => {
    if (get().fonts.includes(name)) {
      return Promise.resolve(true);
    }

    try {
      await loadFontAsync(name);

      set({
        fonts: [...get().fonts, name],
      });

      return Promise.resolve(true);
    } catch (e: unknown) {
      return Promise.reject(e);
    }
  },
}));

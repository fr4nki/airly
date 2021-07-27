import create from 'zustand';

import { SettingsSchema } from './schema';
import { getUserSettings, setUserSettings } from './helpers';

export interface SettingsStore {
  settings: SettingsSchema;
  readonly updateSettings: (key: keyof SettingsSchema, partial: SettingsSchema[keyof SettingsSchema]) => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  settings: getUserSettings(),
  updateSettings: (key: keyof SettingsSchema, partial: SettingsSchema[keyof SettingsSchema]) => set((state) => {
    const settings = {
      ...state.settings,
      [key]: partial,
    };

    setUserSettings(settings);

    return {
      settings,
    };
  }),
}));

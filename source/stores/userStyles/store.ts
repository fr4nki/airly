import create from 'zustand';

import { UserStylesSchema } from './schema';
import { getUserStyles, setUserStyles } from './helpers';

export interface UserStylesStore {
  userStyles: UserStylesSchema;
  readonly updateConfig: (key: keyof UserStylesSchema, partial: UserStylesSchema[keyof UserStylesSchema]) => void;
}

export const useUserStylesStore = create<UserStylesStore>((set) => ({
  userStyles: getUserStyles(),
  updateConfig: (key: keyof UserStylesSchema, partial: UserStylesSchema[keyof UserStylesSchema]) => set((state) => {
    const userStyles = {
      ...state.userStyles,
      [key]: partial,
    };

    setUserStyles(userStyles);

    return {
      userStyles,
    };
  }),
}));

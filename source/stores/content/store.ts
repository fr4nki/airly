import create from 'zustand';

import { sanitizeHTML } from '@/utils/helpers';

import { getUserContent, setUserContent } from './helpers';

export interface ContentStore {
  content: string;
  readonly updateContent: (content: string) => void;
}

export const useContentStore = create<ContentStore>((set) => ({
  content: getUserContent(),
  updateContent: (content: string) => set((state) => {
    const sanitizedContent = sanitizeHTML(content);

    setUserContent(sanitizedContent);

    return {
      ...state,
      content: sanitizedContent,
    };
  }),
}));

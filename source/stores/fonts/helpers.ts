import { generateFontLink } from './constants';

export const loadFontAsync = (name: string): Promise<boolean> => new Promise((resolve, reject) => {
  const font = document.createElement('link');
  font.rel = 'stylesheet';
  font.href = generateFontLink(name);

  font.onload = () => {
    resolve(true);
  };

  font.onerror = () => {
    reject(new Error('Font fetch failed'));
  };

  document.head.appendChild(font);
});

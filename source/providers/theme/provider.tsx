import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { FC, ReactNode } from 'react';

import { theme } from './theme';

import { global } from './styles';

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => (
  <>
    <Global {...{
      styles: global,
    }} />

    <EmotionThemeProvider {...{
      theme,
    }}>
      { children }
    </EmotionThemeProvider>
  </>
);

export default ThemeProvider;

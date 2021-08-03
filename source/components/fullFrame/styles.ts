import { css, SerializedStyles } from '@emotion/react';

import { AppTheme } from '@/providers/theme';

export const fullFrame = (theme: AppTheme): SerializedStyles => css`
  height: 100vh;
  background-color: ${theme.colors.background.default};
  max-height: 100vh;
  overflow: hidden;

  > * {
    height: 100%;
    padding: 1px;
    margin: -1px;
  }
`;

import { css, SerializedStyles } from '@emotion/react';

import { AppTheme } from '@/providers/theme';

export const configMenu = (theme: AppTheme): SerializedStyles => css`
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background.graySoft};
`;

export const configMenuUpper = css`
  height: 100%;
  overflow: auto;
`;

export const configMenuLower = css`
  border-top: 1px solid purple;
`;

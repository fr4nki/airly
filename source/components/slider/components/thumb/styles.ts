import { css, SerializedStyles } from '@emotion/react';
import { AppTheme } from '@/providers/theme';

const size = 14;

export const thumb = (theme: AppTheme): SerializedStyles => css`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  background-color: ${theme.colors.accent.default};
`;

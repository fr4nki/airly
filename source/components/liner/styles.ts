import { css, SerializedStyles } from '@emotion/react';

import { AppTheme } from '@/providers/theme';

export const liner = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const linerLine = (thickness: number) => (theme: AppTheme): SerializedStyles => css`
  border-bottom: ${thickness}px solid ${theme.colors.separator};
  display: block;
  height: 0;
  opacity: 0.5;
`;

import { css, SerializedStyles } from '@emotion/react';

import { AppTheme } from '@/providers/theme';

export const track = (theme: AppTheme): SerializedStyles => css`
  width: 100%;
  // background: ${theme.colors.background.gray};
  background: red;
  height: ${theme.gaps.default}px;
  border-radius: 1000px;
`;

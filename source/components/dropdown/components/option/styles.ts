import { css, SerializedStyles } from '@emotion/react';

import { AppTheme } from '@/providers/theme';

export const option = (theme: AppTheme): SerializedStyles => css`
  appearance: none;
  border: none;
  background: none;
  width: 100%;
  color: inherit;
  cursor: pointer;
  text-align: left;
  padding: ${theme.gaps.default * 2}px ${theme.gaps.default * 4}px;
`;

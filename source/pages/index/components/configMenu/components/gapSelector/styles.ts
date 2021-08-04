import { css, SerializedStyles } from '@emotion/react';

import { AppTheme } from '@/providers/theme';

export const gapSelector = css`
`;

export const slider = css`
`;

export const gapSelectorTitle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const gapSelectorTitleValue = (theme: AppTheme): SerializedStyles => css`
  color: ${theme.colors.accent.default};
  margin: 0;
  font-weight: 500;
`;

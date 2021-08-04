import { css, SerializedStyles } from '@emotion/react';

import { AppTheme } from '@/providers/theme';

const iconSize = 24;

export const menuItem = css`
  height: ${iconSize}px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const menuItemIcon = (theme: AppTheme): SerializedStyles => css`
  width: ${iconSize}px;
  height: ${iconSize}px;
  color: ${theme.colors.font.gray};
`;

export const menuItemText = (theme: AppTheme): SerializedStyles => css`
  margin-left: ${theme.gaps.default}px;
`;

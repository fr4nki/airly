import { css, SerializedStyles } from '@emotion/react';

import { AppTheme } from '@/providers/theme';

import { PaletteSize } from '../../types';

const getSize = (theme: AppTheme, size: PaletteSize) => {
  let itemSize = theme.gaps.default * 4;

  if (size === 'medium') {
    itemSize = theme.gaps.default * 8;
  }

  if (size === 'big') {
    itemSize = theme.gaps.default * 10;
  }

  return itemSize;
};

export const color = (background: string, size: PaletteSize) => (theme: AppTheme): SerializedStyles => css`
  background-color: ${background};
  border: 1px solid ${theme.colors.background.gray};
  width: ${getSize(theme, size)}px;
  height: ${getSize(theme, size)}px;
  border-radius: 50%;
`;

import { css, SerializedStyles } from '@emotion/react';

import { AppTheme } from '@/providers/theme';

import { RadioItemSize } from '../../types';

const getFontSize = (size: RadioItemSize) => {
  let fontSize = '12px';

  if (size === 'm') {
    fontSize = '18px';
  }

  return fontSize;
};

const getPadding = (size: RadioItemSize) => {
  let offset = '5px 10px';

  if (size === 'm') {
    offset = '6px 20px';
  }

  return offset;
};

export const radio = (size: RadioItemSize, selected?: boolean) => (theme: AppTheme): SerializedStyles => css`
  border-width: 1px;
  border-style: solid;
  border-color: ${selected ? theme.colors.accent.default : theme.colors.controls.inactive};
  color: ${selected ? theme.colors.accent.default : theme.colors.controls.active};
  background-color: ${selected ? theme.colors.accent.semi : 'transparent'};
  border-radius: 10000px;
  cursor: pointer;
  font-size: ${getFontSize(size)};
  padding: ${getPadding(size)};
  line-height: 1;
  font-weight: 500;
  margin-right: ${theme.gaps.default}px;
  transition: border-color ${theme.timings.animation.fast} ease-out,
    background-color ${theme.timings.animation.fast} ease-out;

  &:hover {
    border-color: ${selected ? theme.colors.accent.default : theme.colors.controls.active};
    color: ${selected ? theme.colors.accent.default : theme.colors.controls.active};
  }

  &:last-child {
    margin-right: 0;
  }
`;

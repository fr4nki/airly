import { css, SerializedStyles } from '@emotion/react';
import { AppTheme } from '@/providers/theme';

const switcherWidth = 72;
const switcherHeight = 36;
const tumblerOffset = 6;
const tumblerSize = switcherHeight - (tumblerOffset * 2);
const tumblerCheckedOffsetPosition = switcherWidth - tumblerSize - (tumblerOffset * 2);

export const switcher = (isChecked: boolean) => (theme: AppTheme): SerializedStyles => css`
  cursor: pointer;
  appearance: none;
  border: none;
  background-color: ${isChecked ? theme.colors.accent.default : theme.colors.background.gray};
  border-radius: 10000px;
  position: relative;
  width: ${switcherWidth}px;
  height: ${switcherHeight}px;
  padding: ${tumblerOffset}px;
  transition: background-color ${theme.timings.animation.fast} ease-out;

  &:active > div {
    width: ${isChecked ? `${tumblerSize}px` : '60%'};
    transition: ${isChecked ? '' : `width ${theme.timings.animation.slow} ease-in`};
  }
`;

export const switcherTumbler = (isChecked: boolean) => (theme: AppTheme): SerializedStyles => css`
  border-radius: ${tumblerSize}px;
  height: ${tumblerSize}px;
  width: ${tumblerSize}px;
  background-color: ${theme.colors.background.default};
  top: 0;
  left: 0;
  transform: translate(${isChecked ? `${tumblerCheckedOffsetPosition}px` : 0}, 0);
  transition: transform ${theme.timings.animation.fast} ease-out;
`;

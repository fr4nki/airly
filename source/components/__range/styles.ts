import { css, SerializedStyles } from '@emotion/react';
import { AppTheme } from '@/providers/theme';

export const range = (theme: AppTheme): SerializedStyles => css`
  width: 100%;
  position: relative;
  appearance: none;
  padding: 10px;
  box-sizing: border-box;
  background: transparent;

  &:focus {
    outline: none;
  }

  // Track
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: default;
    background: ${theme.colors.accent.default};
    border-radius: 1000px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: ${theme.colors.accent.default};
  }

  // Thumb
  &::-webkit-slider-thumb {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: red;
    cursor: pointer;
    appearance: none;
    margin-top: -6px;
  }
`;

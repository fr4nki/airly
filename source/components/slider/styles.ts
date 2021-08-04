import { css, SerializedStyles } from '@emotion/react';
import { AppTheme } from '@/providers/theme';

const thumbSize = 14;

export const slider = css`
  width: 100%;
  position: relative;
  height: ${thumbSize}px;
  display: flex;
  align-items: center;
`;

export const sliderValue = css`
  position: absolute;
  top: 0;
  left: 0;
`;

export const sliderThumb = (percentage: number) => (theme: AppTheme): SerializedStyles => css`
  position: absolute;
  cursor: grab;
  width: ${thumbSize}px;
  height: ${thumbSize}px;
  border-radius: 50%;
  background-color: ${theme.colors.accent.default};
  left: ${percentage}%;
  touch-action: pan-x;
  transform: translateX(-${thumbSize / 2}px);
  z-index: 2;
`;

export const sliderTrack = css`
  width: 100%;
  height: 100%;
  border-radius: 1000px;
  cursor: pointer;
  position: relative;
`;

export const sliderTrackActive = (percentage: number) => (theme: AppTheme): SerializedStyles => css`
  border-radius: 1000px;
  position: absolute;
  height: ${theme.gaps.default}px;
  top: 0;
  bottom: 0;
  background-color: ${theme.colors.accent.default};
  width: ${percentage}%;
  transform: translateY(${(thumbSize - theme.gaps.default) / 2}px);
  z-index: 1;
`;

export const sliderTrackInactive = (theme: AppTheme): SerializedStyles => css`
  border-radius: 1000px;
  background-color: ${theme.colors.background.gray};
  height: ${theme.gaps.default}px;
  width: 100%;
  transform: translateY(${(thumbSize - theme.gaps.default) / 2}px);
`;

import { css } from '@emotion/react';

export const range = css`
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
    background: yellow;
    border-radius: 1000px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: yellow;
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

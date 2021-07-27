import { css } from '@emotion/react';

export const loadingBlock = css`
  width: 150px;
  height: 150px;
  background-color: transparent;
  position: relative;
`;

export const loadingBlockInner = css`
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  background: purple;
`;

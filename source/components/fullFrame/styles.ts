import { css } from '@emotion/react';

export const fullFrame = css`
  height: 100vh;
  background-color: purple;
  max-height: 100vh;
  overflow: hidden;

  > * {
    height: 100%;
    padding: 1px;
    margin: -1px;
  }
`;

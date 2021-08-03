import { css, SerializedStyles } from '@emotion/react';

export const divider = (height: number) => (): SerializedStyles => css`
  width: 100%;
  height: ${height}px;
  font-size: 0;
  color: transparent;
  background: red;
`;

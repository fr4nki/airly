import { css, SerializedStyles } from '@emotion/react';

export const previewLiner = (isLinesVisible: boolean) => (): SerializedStyles => css`
  transition: opacity .1s ease-in;
  opacity: ${Number(isLinesVisible)};
`;

import { css, SerializedStyles } from '@emotion/react';

export const liner = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const linerLine = (step: number) => (): SerializedStyles => css`
  display: block;
  opacity: 0.5;
  margin-top: ${step}px;
`;

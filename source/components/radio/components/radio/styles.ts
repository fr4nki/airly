import { css, SerializedStyles } from '@emotion/react';

export const radio = (selected?: boolean) => (): SerializedStyles => css`
  background: ${selected ? 'red' : 'blue'};
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
`;

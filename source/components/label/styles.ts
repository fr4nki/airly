import { css, SerializedStyles } from '@emotion/react';

import { TextPosition } from './types';

export const label = (position: TextPosition) => (): SerializedStyles => css`
  display: flex;
  vertical-align: middle;
  align-items: center;
  flex-direction: ${position === 'left' || position === 'right' ? 'row' : 'column'};
`;

export const labelText = css`
  cursor: pointer;
`;

export const labelContent = (position: TextPosition) => ():SerializedStyles => css`
  padding-${position}: 10px;
`;

import { css, SerializedStyles } from '@emotion/react';

import { UserStylesSchema, generateCSS } from '@/stores/userStyles';

export const previewContainer = css``;

export const applyConfigTheme = (config: UserStylesSchema): SerializedStyles => css`
  ${generateCSS(config)};
`;

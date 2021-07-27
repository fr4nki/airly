import { UserStylesSchema } from './schema';

/* eslint-disable max-len */
export const generateCSS = (config: UserStylesSchema): string => `
  * {
    font-family: ${config.font};
  }

  p {
    margin-top: ${config.gap}px;
    margin-bottom: ${config.gap}px;
  }
`;

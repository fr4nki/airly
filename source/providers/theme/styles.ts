// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import normalize from 'normalize.css';
import { css } from '@emotion/react';
import { theme } from './theme';

/* eslint-disable max-len */
export const global = css`
  ${normalize}

  html {
    height: 100%;
    width: 100%;
    background: ${theme.colors.default};
  }

  body {
    margin: 0;
    width: 100%;
    background: ${theme.colors.background};
    color: ${theme.colors.default};
    height: auto;
    min-height: 100%;
    display: flex;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input,
  select,
  a {
    outline: none;
  }

  a {
    color: ${theme.colors.link.normal};
    text-decoration: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: red;
    -webkit-box-shadow: 0 0 0 1000px red inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  #content {
    width: 100%;
    flex-grow: 1;
  }
`;
/* eslint-enable max-len */

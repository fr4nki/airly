import { css, SerializedStyles } from '@emotion/react';
import { AppTheme } from '@/providers/theme';

export const dropdown = (optionsVisible: boolean) => (theme: AppTheme): SerializedStyles => css`
  border-radius: ${theme.gaps.medium}px;
  width: 100%;
  color: ${optionsVisible ? theme.colors.font.default : theme.colors.font.gray};

  // TODO: !!!!!!!!! FIXME !!!!!!!!!!!!
  background-color: ${optionsVisible ? '#F1F0EE' : 'transparent'};

  &:focus, &:hover {
    color: ${theme.colors.font.default};
    background-color: #F1F0EE;
  }
`;

export const dropdownSelected = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const dropdownSelectedPrefix = (theme: AppTheme): SerializedStyles => css`
  margin-right: ${theme.gaps.medium}px;
`;

export const dropdownSelectedText = css`
  width: 100%;
`;

export const dropdownSelectedArrow = (optionsVisible: boolean) => (theme: AppTheme): SerializedStyles => css`
  color: ${theme.colors.accent.default};
  transform: rotate(${optionsVisible ? '180deg' : 0});
  margin-left: ${theme.gaps.medium}px;
`;

export const dropdownContent = (optionsVisible: boolean): SerializedStyles => css`
  display: ${optionsVisible ? 'flex' : 'none'};
  flex-direction: column;
  width: 100%;

  // TODO: !!!!!!!!! FIXME !!!!!!!!!!!!
  border-top: 1px solid #DFDFDE;
`;

export const dropdownContentItem = css`
  border-bottom: 1px solid #DFDFDE;
  margin-left: 4px;
  margin-right: 4px;
  width: auto;

  &:last-child {
    border-bottom: none;
  }
`;

import { css } from 'styled-components';
import { SelectProps } from './types';

export const cssSelect = css<SelectProps>`
  appearance: none;
  cursor: pointer;
  box-sizing: content-box;
  padding: 16px 12px;
  padding-right: 68px;
  border-radius: 8px;
  width: 100%;
  color: ${({ theme, errored }) => {
    if (errored) {
      return theme.palette.danger.main;
    }
    return theme.palette.dark2.main;
  }};
  border: 1px solid
    ${({ theme, errored }) => {
      if (errored) {
        return theme.palette.danger.main;
      }
      return theme.palette.dark1.main;
    }};
  :focus {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
  :disabled {
    color: ${({ theme }) => theme.palette.light3.main};
    border: 1px solid ${({ theme }) => theme.palette.light3.main};
    background-color: ${({ theme }) => theme.palette.light1.main};
  }
`;

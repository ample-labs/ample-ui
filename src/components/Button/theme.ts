import { css } from 'styled-components';
import hexToRgb from '../../utils/hexToRgb';
import { ButtonProps } from './Button';
import { buttonVariants, buttonSizes } from './types';

export const sizeVariants = {
  [buttonSizes.MD]: {
    fontSize: `16px`,
    fontWeight: 600,
    lineHeight: `26px`,
    padding: `11px 40px`,
  },
  [buttonSizes.SM]: {
    fontSize: `14px`,
    fontWeight: 600,
    lineHeight: `24px`,
    padding: `8px 12px`,
  },
};

export const iconSizeVariants = {
  [buttonSizes.SM]: {
    fontSize: `20px`,
  },
  [buttonSizes.MD]: {
    fontSize: `24px`,
  },
};

export const variants = {
  [buttonVariants.FILLED]: css<ButtonProps>`
    background-color: ${({ theme, color }) =>
      color && theme.palette[color].dark};
    color: ${({ theme, color }) => color && theme.palette[color].contrastText};
    :hover {
      background-color: ${({ theme, color }) =>
        color && theme.palette[color].main};
    }
  `,
  [buttonVariants.OUTLINED]: css<ButtonProps>`
    border: 1px solid
      ${({ theme, color }) => color && theme.palette[color].dark};
    color: ${({ theme, color }) => color && theme.palette[color].dark};
    :hover {
      background-color: rgba(
        ${({ theme, color }) => color && hexToRgb(theme.palette[color].main)},
        0.1
      );
    }
    :disabled {
      border: none;
    }
  `,
  [buttonVariants.TEXT]: css<ButtonProps>`
    color: ${({ theme, color }) => color && theme.palette[color].dark};
  `,
};

import { css } from 'styled-components';
import hexToRgb from '../../utils/hexToRgb';
import { ButtonProps } from './Button';
import { buttonVariants, buttonSizes } from './types';

export const sizeVariants = {
  [buttonSizes.SM]: {
    fontSize: `14px`,
    fontWeight: 600,
    lineHeight: `24px`,
    padding: `7px 40px`,
  },
  [buttonSizes.MD]: {
    fontSize: `16px`,
    fontWeight: 600,
    lineHeight: `26px`,
    padding: `11px 40px`,
  },
};

export const iconSizeVariants = {
  [buttonSizes.SM]: {
    fontSize: `14px`,
  },
  [buttonSizes.MD]: {
    fontSize: `16px`,
  },
};

export const variants = {
  [buttonVariants.FILLED]: css<ButtonProps>`
    background-color: ${({ theme, color }) =>
      color && theme.palette[color].main};
    color: ${({ theme, color }) => color && theme.palette[color].contrastText};
    :hover {
      background-color: ${({ theme, color }) =>
        color && theme.palette[color].light};
    }
  `,
  [buttonVariants.OUTLINED]: css<ButtonProps>`
    border: 1px solid
      ${({ theme, color }) => color && theme.palette[color].main};
    color: ${({ theme, color }) => color && theme.palette[color].main};
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
    color: ${({ theme, color }) => color && theme.palette[color].main};
  `,
};

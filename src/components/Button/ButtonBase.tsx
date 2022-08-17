import styled from 'styled-components';
import createTransition from '../../utils/createTransition';
import { variants, sizeVariants } from './theme';
import { ButtonColor, ButtonSize, ButtonVariant } from './types';

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
}

const ButtonBase = styled.button<ButtonBaseProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: opacity 0.1s linear;
  cursor: pointer;
  font-weight: 500;
  vertical-align: middle;
  transition: ${createTransition([
    `background-color`,
    `box-shadow`,
    `border-color`,
    `color`,
  ])};

  ${({ size }) => size && sizeVariants[size]}
  ${({ variant }) => variant && variants[variant]}

  :disabled {
    background-color: ${({ theme }) => theme.palette.light2.main};
    color: ${({ theme }) => theme.palette.grey2.main};
    pointer-events: none;
    cursor: default;
  }
`;

export default ButtonBase;

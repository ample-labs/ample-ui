import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';
import ButtonBase, { ButtonBaseProps } from './ButtonBase';
import { iconSizeVariants } from './theme';
import { buttonColors, ButtonSize, buttonSizes, buttonVariants } from './types';

export interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const ButtonElement = styled(ButtonBase)<ButtonProps>`
  width: ${({ fullWidth }) => fullWidth && `100%`};
`;

const IconLeftWrapper = styled.span<{ size?: ButtonSize }>`
  display: inherit;
  margin-left: -8px;
  margin-right: 8px;
  ${({ size }) => size && iconSizeVariants[size]}
`;
const IconRightWrapper = styled.span<{ size?: ButtonSize }>`
  display: inherit;
  margin-left: 8px;
  margin-right: -8px;
  ${({ size }) => size && iconSizeVariants[size]}
`;

const Button: FC<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> & ButtonProps
> = ({ children, iconLeft, iconRight, size, ...props }) => {
  const wrappedIconLeft = iconLeft && (
    <IconLeftWrapper size={size}>{iconLeft}</IconLeftWrapper>
  );

  const wrappedIconRight = iconRight && (
    <IconRightWrapper size={size}>{iconRight}</IconRightWrapper>
  );

  return (
    <ButtonElement size={size} {...props}>
      {wrappedIconLeft}
      {children}
      {wrappedIconRight}
    </ButtonElement>
  );
};

Button.defaultProps = {
  color: buttonColors.PRIMARY,
  variant: buttonVariants.FILLED,
  size: buttonSizes.MD,
};

export default Button;

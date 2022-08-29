import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';
import ButtonBase, { ButtonBaseProps } from './ButtonBase';
import { iconSizeVariants } from './theme';
import { ButtonSize, buttonSizes } from './types';

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
  margin-left: ${({ size }) => (size === buttonSizes.SM ? `-12px` : `-8px`)};
  ${({ size }) => size && iconSizeVariants[size]}
`;
const IconRightWrapper = styled.span<{ size?: ButtonSize }>`
  display: inherit;
  margin-right: ${({ size }) => (size === buttonSizes.SM ? `-12px` : `-8px`)};
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

export default Button;

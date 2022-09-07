import styled from 'styled-components';
import ButtonBase, { ButtonBaseProps } from '../Button/ButtonBase';
import { iconSizeVariants } from '../Button/theme';
import { IconButtonShape, iconButtonShapes } from './types';

export interface IconButtonProps extends ButtonBaseProps {
  shape?: IconButtonShape;
}

const IconButton = styled(ButtonBase)<IconButtonProps>`
  padding: 0; // Icon padding as button padding
  border-width: 2px;

  border-radius: ${({ shape }) =>
    shape === iconButtonShapes.ROUND ? `50%` : `8px`};
  ${({ size }) => size && iconSizeVariants[size]}
`;

IconButton.defaultProps = {
  shape: iconButtonShapes.RECTANGLE,
};

export default IconButton;

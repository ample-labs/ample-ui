import styled from 'styled-components';
import Button, { ButtonProps } from '../Button/Button';
import { IconButtonShape, iconButtonShapes } from './types';

export interface IconButtonProps
  extends Omit<ButtonProps, 'iconLeft' | 'iconRight' | 'fullWidth'> {
  shape?: IconButtonShape;
}

const IconButton = styled(Button)<IconButtonProps>`
  padding: 12px;
  border-width: 2px;

  border-radius: ${({ shape }) =>
    shape === iconButtonShapes.ROUND ? `50%` : `8px`};
`;

IconButton.defaultProps = {
  shape: iconButtonShapes.RECTANGLE,
};

export default IconButton;

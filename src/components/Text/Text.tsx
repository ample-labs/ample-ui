import styled from 'styled-components';
import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from 'styled-system';
import { CuiTheme } from '../../utils/createCuiTheme';
import { TextColor } from './types';

export interface TextProps extends SpaceProps, TypographyProps {
  variant?: keyof CuiTheme['typography'];
  color?: TextColor;
}

const Text = styled(`span`)<TextProps>`
  ${variant({
    key: `typography`,
  })}
  color: ${({ theme, color }) => color && theme.palette[color].main};
  ${space}
  ${typography}
`;

export default Text;

import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

export interface BoxProps extends SpaceProps, LayoutProps {}

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
`;

export default Box;

import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import Box, { BoxProps } from '../Box/Box';

export interface FlexProps extends BoxProps, FlexboxProps {}

const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`;

export default Flex;

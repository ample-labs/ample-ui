import styled from 'styled-components';
import { flexbox, FlexboxProps } from 'styled-system';
import Box, { BoxProps } from '../Box/Box';

export interface FlexProps extends BoxProps, FlexboxProps {
  gap?: string;
}

const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
  gap: ${({ gap }) => gap};
`;

export default Flex;

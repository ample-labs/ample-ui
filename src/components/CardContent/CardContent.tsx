import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export type CardContentProps = SpaceProps;

const CardContent = styled.div<CardContentProps>`
  ${space}
`;

export default CardContent;

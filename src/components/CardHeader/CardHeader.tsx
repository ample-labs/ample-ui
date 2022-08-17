import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export type CardHeaderProps = SpaceProps;

const CardHeader = styled.div<CardHeaderProps>`
  ${space}
`;

export default CardHeader;

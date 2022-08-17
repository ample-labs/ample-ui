import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import Paper, { PaperProps } from '../Paper/Paper';

export interface CardProps extends PaperProps, SpaceProps {
  minWidth?: string;
}

const Card = styled(Paper)<CardProps>`
  box-shadow: 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  ${space}
  min-width: ${({ minWidth }) => minWidth};
`;

export default Card;

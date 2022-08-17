import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

export type PaperProps = LayoutProps;

const Paper = styled.div<PaperProps>`
  background-color: ${({ theme }) => theme.palette.background.paper};
  ${layout}

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
`;

export default Paper;

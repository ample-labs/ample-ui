import styled from 'styled-components';
import ButtonBase, { ButtonBaseProps } from '../Button/ButtonBase';

interface MenuItemProps extends ButtonBaseProps {
  disabled?: boolean;
}

const MenuItem = styled(ButtonBase).attrs({ as: `li` })<MenuItemProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px;
  color: ${({ theme }) => theme.palette.dark2.main};
`;

export default MenuItem;

import styled from 'styled-components';
import List, { ListProps } from '../List/List';

export type MenuListProps = ListProps;

const MenuList = styled(List)<MenuListProps>`
  margin: 0px; // reset
  padding: 8px;
  min-width: 160px;
`;

MenuList.defaultProps = {
  role: `menu`,
};

export default MenuList;

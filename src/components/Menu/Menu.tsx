import React, { FC, PropsWithChildren } from 'react';
import Popover, { PopoverProps } from '../Popover/Popover';
import MenuList from './MenuList';

export type MenuProps = PopoverProps;

const Menu: FC<PropsWithChildren<MenuProps>> = ({ children, ...props }) => (
  <Popover {...props}>
    <MenuList>{children}</MenuList>
  </Popover>
);

Menu.defaultProps = {};

export default Menu;

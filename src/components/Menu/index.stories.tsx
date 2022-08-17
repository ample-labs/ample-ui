import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from './Menu';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import MenuItem from './MenuItem';
import MenuList from './MenuList';
import Paper from '../Paper/Paper';
import Button from '../Button/Button';

export default {
  title: `Components/Menu`,
  component: Menu,
  argTypes: {
    ...hideUnnecessaryControls(),
    anchorEl: {
      control: false,
    },
  },
  parameters: {
    backgrounds: {
      default: `grey`,
    },
  },
} as ComponentMeta<typeof Menu>;

export const Default: ComponentStory<typeof Menu> = ({ ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | undefined>();
  const open = Boolean(anchorEl);
  return (
    <>
      <Button onClick={(e) => setAnchorEl(open ? undefined : e.currentTarget)}>
        Open
      </Button>
      <Menu
        {...props}
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setAnchorEl(undefined);
        }}
      >
        <MenuItem>Option1</MenuItem>
        <MenuItem>Option2</MenuItem>
        <MenuItem>Option3</MenuItem>
      </Menu>
    </>
  );
};

export const List: ComponentStory<typeof MenuList> = ({ ...props }) => (
  <Paper width={160}>
    <MenuList {...props}>
      <MenuItem>Option1</MenuItem>
      <MenuItem>Option2</MenuItem>
      <MenuItem>Option3</MenuItem>
    </MenuList>
  </Paper>
);

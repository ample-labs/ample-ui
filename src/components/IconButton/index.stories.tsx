import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from './IconButton';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import { IconChevronDown } from '../SvgIcon';

export default {
  title: `Data Display/IconButton`,
  component: IconButton,
  argTypes: {
    ...hideUnnecessaryControls(),
    disabled: {
      type: `boolean`,
    },
  },
} as ComponentMeta<typeof IconButton>;

export const Default: ComponentStory<typeof IconButton> = ({ ...props }) => (
  <IconButton {...props}>
    <IconChevronDown />
  </IconButton>
);
Default.args = {
  disabled: false,
};

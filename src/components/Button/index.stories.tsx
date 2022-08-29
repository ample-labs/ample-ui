import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { buttonColors, buttonVariants, buttonSizes } from './types';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import { IconNextOutlined, IconWalletOutlined } from '../SvgIcon';

export default {
  title: `Form/Button`,
  component: Button,
  argTypes: {
    ...hideUnnecessaryControls(),
    iconLeft: {
      control: false,
    },
    iconRight: {
      control: false,
    },
    disabled: {
      type: `boolean`,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `Button`,
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  children: `Connect Wallet`,
  variant: buttonVariants.FILLED,
  color: buttonColors.PRIMARY,
  size: buttonSizes.MD,
  iconLeft: <IconWalletOutlined />,
};

export const IconRight = Template.bind({});
IconRight.args = {
  children: `Next`,
  variant: buttonVariants.FILLED,
  color: buttonColors.PRIMARY,
  size: buttonSizes.MD,
  iconRight: <IconNextOutlined />,
};

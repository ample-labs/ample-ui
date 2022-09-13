import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import Flex from './Flex';

export default {
  title: `Layout/Flex`,
  component: Flex,
  argTypes: {
    ...hideUnnecessaryControls(),
  },
} as ComponentMeta<typeof Flex>;

export const Default: ComponentStory<typeof Flex> = ({ ...props }) => (
  <Flex style={{ border: `1px dashed grey` }} {...props} />
);
Default.args = {
  p: 2,
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import Box from './Box';

export default {
  title: `Layout/Box`,
  component: Box,
  argTypes: {
    ...hideUnnecessaryControls(),
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box style={{ border: `1px dashed grey` }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  p: 2,
};

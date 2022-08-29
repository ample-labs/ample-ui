import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabBar from './TabBar';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import TabButton from './TabButton';

export default {
  title: `Navigation/TabBar`,
  component: TabBar,
  argTypes: {
    ...hideUnnecessaryControls(),
    fullWidth: {
      type: `boolean`,
    },
    selectedIndex: {
      control: false,
    },
  },
} as ComponentMeta<typeof TabBar>;

export const Default: ComponentStory<typeof TabBar> = (args) => {
  const [index, setIndex] = useState(0);

  return (
    <TabBar {...args} selectedIndex={index} onChange={(e, i) => setIndex(i)}>
      <TabButton>Tab1</TabButton>
      <TabButton>Tab2</TabButton>
      <TabButton>Tab3</TabButton>
    </TabBar>
  );
};

export const FullWidth = Default.bind({});
FullWidth.args = {
  fullWidth: true,
};

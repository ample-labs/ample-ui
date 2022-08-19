import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabBar from './TabBar';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import TabButton from './TabButton';

export default {
  title: `Components/TabBar`,
  component: TabBar,
  argTypes: {
    ...hideUnnecessaryControls(),
    disabled: {
      type: `boolean`,
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

Default.args = {};

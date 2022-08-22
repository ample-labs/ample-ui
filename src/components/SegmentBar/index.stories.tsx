import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SegmentBar from './SegmentBar';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import SegmentButton from './SegmentButton';

export default {
  title: `Components/SegmentBar`,
  component: SegmentBar,
  argTypes: {
    ...hideUnnecessaryControls(),
    disabled: {
      type: `boolean`,
    },
  },
} as ComponentMeta<typeof SegmentBar>;

export const Default: ComponentStory<typeof SegmentBar> = (args) => {
  const [index, setIndex] = useState(0);

  return (
    <SegmentBar
      {...args}
      selectedIndex={index}
      onChange={(e, i) => setIndex(i)}
    >
      <SegmentButton>Segment1</SegmentButton>
      <SegmentButton>Segment2</SegmentButton>
      <SegmentButton>Segment3</SegmentButton>
    </SegmentBar>
  );
};

Default.args = {};

import React, { useEffect, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Slider';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import FormControlLabel from '../FormControlLabel/FormControlLabel';

export default {
  title: `Form/Slider`,
  component: Slider,
  argTypes: {
    ...hideUnnecessaryControls(),
    disabled: {
      type: `boolean`,
    },
    min: {
      type: `number`,
    },
    max: {
      type: `number`,
    },
    step: {
      type: `number`,
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel: ComponentStory<typeof FormControlLabel> = ({
  disabled,
  ...props
}) => {
  return (
    <FormControlLabel
      control={
        <Slider min={20} max={100} rangeValue={50} disabled={disabled} />
      }
      {...props}
    />
  );
};
WithLabel.args = {
  disabled: false,
};

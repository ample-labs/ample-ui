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
  min,
  max,
  value,
  disabled,
  ...props
}) => {
  const [newValue, setNewValue] = useState(value);

  // Slider value changes
  const handleSliderChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.valueAsNumber);
      setNewValue(e.target.valueAsNumber);
    },
    [],
  );

  return (
    <Slider
      min={min}
      max={max}
      value={newValue}
      onChange={(e) => {
        handleSliderChange(e);
      }}
      disabled={disabled}
    />
  );
};
WithLabel.args = {
  min: 20,
  max: 150,
  value: 30,
  disabled: false,
};

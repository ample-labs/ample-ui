import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField from './TextField';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import FormControlLabel from '../FormControlLabel/FormControlLabel';
import FormControl from '../FormControl/FormControl';
import FormHelperText from '../FormHelperText/FormHelperText';

export default {
  title: `Components/TextField`,
  component: TextField,
  argTypes: {
    ...hideUnnecessaryControls(),
    disabled: {
      type: `boolean`,
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithLabel: ComponentStory<typeof FormControlLabel> = ({
  ...props
}) => (
  <FormControl control={<TextField {...props} />}>
    <FormHelperText>Helper Text</FormHelperText>
  </FormControl>
);
WithLabel.args = {
  disabled: false,
};

export const WithLabelErrored: ComponentStory<typeof FormControlLabel> = ({
  ...props
}) => (
  <FormControl errored control={<TextField {...props} />}>
    <FormHelperText>Helper Text</FormHelperText>
  </FormControl>
);
WithLabel.args = {
  disabled: false,
};

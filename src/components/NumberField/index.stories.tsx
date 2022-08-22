import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NumberField from './NumberField';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import FormControlLabel from '../FormControlLabel/FormControlLabel';
import FormControl from '../FormControl/FormControl';
import FormHelperText from '../FormHelperText/FormHelperText';

export default {
  title: `Form/NumberField`,
  component: NumberField,
  argTypes: {
    ...hideUnnecessaryControls(),
    disabled: {
      type: `boolean`,
    },
  },
} as ComponentMeta<typeof NumberField>;

const Template: ComponentStory<typeof NumberField> = (args) => (
  <NumberField {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithLabel: ComponentStory<typeof FormControlLabel> = ({
  ...props
}) => (
  <FormControl control={<NumberField {...props} />}>
    <FormHelperText textAlign="right">Helper Text</FormHelperText>
  </FormControl>
);
WithLabel.args = {
  disabled: false,
};

export const WithLabelErrored: ComponentStory<typeof FormControlLabel> = ({
  ...props
}) => (
  <FormControl errored control={<NumberField {...props} />}>
    <FormHelperText textAlign="right">Helper Text</FormHelperText>
  </FormControl>
);
WithLabel.args = {
  disabled: false,
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radio from './Radio';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import FormControlLabel from '../FormControlLabel/FormControlLabel';

export default {
  title: `Form/Radio`,
  component: Radio,
  argTypes: {
    ...hideUnnecessaryControls(),
    disabled: {
      type: `boolean`,
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel: ComponentStory<typeof FormControlLabel> = ({
  disabled,
  ...props
}) => (
  <FormControlLabel
    control={<Radio disabled={disabled} />}
    label="This is a placeholder."
    {...props}
  />
);
WithLabel.args = {
  disabled: false,
};

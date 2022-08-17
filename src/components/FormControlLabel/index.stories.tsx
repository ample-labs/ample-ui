import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import FormControlLabel from './FormControlLabel';
import Checkbox from '../Checkbox/Checkbox';

export default {
  title: `Components/FormControlLabel`,
  component: FormControlLabel,
  argTypes: {
    ...hideUnnecessaryControls(),
    control: {
      control: false,
    },
    label: {
      type: `string`,
    },
  },
} as ComponentMeta<typeof FormControlLabel>;

export const WithCheckbox: ComponentStory<typeof FormControlLabel> = ({
  disabled,
  ...props
}) => (
  <FormControlLabel control={<Checkbox disabled={disabled} />} {...props} />
);
WithCheckbox.args = {
  disabled: false,
  label: `This is a placeholder.`,
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import FormControlLabel from '../FormControlLabel/FormControlLabel';
import Tooltip from './Tooltip';
import Button from '../Button/Button';

export default {
  title: `Data Display/Tooltip`,
  component: Tooltip,
  argTypes: {
    ...hideUnnecessaryControls(),
  },
} as ComponentMeta<typeof Tooltip>;

export const Default: ComponentStory<typeof FormControlLabel> = ({
  disabled,
  ...props
}) => {
  return (
    <>
      <Tooltip title="Hello world" {...props}>
        <Button type="button">Open tooltip</Button>
      </Tooltip>
    </>
  );
};
Default.args = {
  disabled: false,
};

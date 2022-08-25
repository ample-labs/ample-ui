import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import Tooltip from './Tooltip';
import Button from '../Button/Button';

export default {
  title: `Data Display/Tooltip`,
  component: Tooltip,
  argTypes: {
    ...hideUnnecessaryControls(),
  },
} as ComponentMeta<typeof Tooltip>;

export const Default: ComponentStory<typeof Tooltip> = ({ ...props }) => {
  return (
    <>
      <Tooltip {...props}>
        <Button type="button">Open tooltip</Button>
      </Tooltip>
    </>
  );
};
Default.args = {
  title: `Hello world`,
};

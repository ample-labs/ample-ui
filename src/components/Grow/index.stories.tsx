import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Popper from './Popper';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import FormControlLabel from '../FormControlLabel/FormControlLabel';
import Box from '../Box/Box';
import Button from '../Button/Button';

export default {
  title: `Utils/Popper`,
  component: Popper,
  argTypes: {
    ...hideUnnecessaryControls(),
  },
} as ComponentMeta<typeof Popper>;

export const Default: ComponentStory<typeof FormControlLabel> = ({
  disabled,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        type="button"
        onClick={(e) => setAnchorEl(open ? null : e.currentTarget)}
      >
        Open
      </Button>
      <Popper
        {...props}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <Box>content of popper</Box>
      </Popper>
    </>
  );
};
Default.args = {
  disabled: false,
};

import React, { useCallback, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import Button from '../Button/Button';
import DialogContent from './DialogContent';
import Text from '../Text/Text';

export default {
  title: `Feedback/Dialog`,
  component: Dialog,
  argTypes: {
    ...hideUnnecessaryControls(),
  },
} as ComponentMeta<typeof Dialog>;

export const Default: ComponentStory<typeof Dialog> = ({ ...props }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Dialog
        {...props}
        open={open}
        onClose={handleClose}
        footer={
          <Button fullWidth onClick={handleClose}>
            Confirm
          </Button>
        }
      >
        <DialogContent>
          <Text>Content of Dialog</Text>
        </DialogContent>
      </Dialog>
    </>
  );
};

Default.args = {
  title: `Dialog Title`,
  subtitle: `You can change settings related to swaps and liquidity supply.`,
};

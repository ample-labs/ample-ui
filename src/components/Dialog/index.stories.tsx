import React, { useCallback, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dialog from './Dialog';
import { hideUnnecessaryControls } from '../../helpers/storybookHelper';
import Button from '../Button/Button';
import DialogHeader from './DialogHeader';
import DialogContent from './DialogContent';
import DialogFooter from './DialogFooter';
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
      <Dialog {...props} open={open} onClose={handleClose}>
        <DialogHeader>Dialog Title</DialogHeader>
        <DialogContent>
          <Text>Content of Dialog</Text>
        </DialogContent>
        <DialogFooter>
          <Button fullWidth onClick={handleClose}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const WithCloseButton: ComponentStory<typeof Dialog> = ({
  ...props
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Dialog {...props} open={open} onClose={handleClose}>
        <DialogHeader onClose={handleClose}>Dialog Title</DialogHeader>
        <DialogContent>
          <Text>Content of Dialog</Text>
        </DialogContent>
        <DialogFooter>
          <Button fullWidth onClick={handleClose}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

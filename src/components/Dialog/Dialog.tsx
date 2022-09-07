import React, {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
} from 'react';
import styled from 'styled-components';
import Modal, { ModalProps } from '../Modal/Modal';
import Paper from '../Paper/Paper';

export interface DialogProps extends ModalProps {
  maxWidth?: string;
  minWidth?: string;
}

const DialogRoot = styled(Modal)``;

const DialogContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
  ::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
    width: 0px;
  }
`;

const DialogPaper = styled(Paper)<Pick<DialogProps, 'maxWidth' | 'minWidth'>>`
  position: relative;
  overflow-y: auto;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth || `calc(100% - 64px)`};
`;

const Dialog: FC<PropsWithChildren<DialogProps>> = ({
  maxWidth,
  minWidth,
  open,
  onClose,
  children,
  ...props
}) => {
  const handleContainerClick = useCallback<MouseEventHandler<HTMLElement>>(
    (event) => {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (onClose) {
        onClose(event, `backdropClick`);
      }
    },
    [onClose],
  );

  return (
    <DialogRoot open={open} onClose={onClose} {...props}>
      <DialogContainer onClick={handleContainerClick}>
        <DialogPaper minWidth={minWidth} maxWidth={maxWidth}>
          {children}
        </DialogPaper>
      </DialogContainer>
    </DialogRoot>
  );
};

Dialog.defaultProps = {
  minWidth: `375px`,
};

export default Dialog;

import React, {
  FC,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export interface ModalProps {
  open?: boolean;
  onClose?: (e: MouseEvent, reason: 'escapeKeyDown' | 'backdropClick') => void;
}

const Backdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: transparent;
`;

const ModalRoot = styled.div<{ open?: boolean }>`
  visibility: ${({ open }) => !open && `hidden`};
`;

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  onClose,
  children,
  ...props
}) => {
  const handleBackdropClick = useCallback<MouseEventHandler<HTMLElement>>(
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

  return createPortal(
    <ModalRoot {...props}>
      <Backdrop onClick={handleBackdropClick} />
      {children}
    </ModalRoot>,
    document.body,
  );
};

export default Modal;

import React, {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { ModalProps } from './types';

const Backdrop = styled.div<{ invisible?: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: ${({ invisible }) =>
    invisible ? `transparent` : `rgba(0, 0, 0, 0.5)`};
  z-index: -1;
`;

const ModalRoot = styled.div<{ open?: boolean }>`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.modal};
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  visibility: ${({ open }) => !open && `hidden`};
`;

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  onClose,
  children,
  open,
  backdropInvisible,
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

  if (!open) {
    return null;
  }

  return createPortal(
    <ModalRoot open={open} {...props}>
      <Backdrop onClick={handleBackdropClick} invisible={backdropInvisible} />
      {children}
    </ModalRoot>,
    document.body,
  );
};

export default Modal;

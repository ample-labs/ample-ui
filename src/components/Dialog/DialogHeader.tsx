import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';
import { IconCloseOutlined } from '../SvgIcon';
import Text from '../Text/Text';

export interface DialogHeaderProps {
  onClose?: () => void;
}

const DialogTitle = styled(Text).attrs({ as: `h2`, variant: `h6` })``;

const DialogHeaderRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const CloseButton = styled(IconButton).attrs({ variant: `text` })``;

const DialogHeader: FC<PropsWithChildren<DialogHeaderProps>> = ({
  children,
  onClose,
  ...props
}) => (
  <DialogHeaderRoot {...props}>
    <DialogTitle>{children}</DialogTitle>
    {onClose && (
      <CloseButton onClick={onClose}>
        <IconCloseOutlined />
      </CloseButton>
    )}
  </DialogHeaderRoot>
);

export default DialogHeader;

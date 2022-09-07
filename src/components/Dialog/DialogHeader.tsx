import React, {
  FC,
  MouseEventHandler,
  PropsWithChildren,
  ReactNode,
} from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton/IconButton';
import { IconCloseOutlined } from '../SvgIcon';
import Text from '../Text/Text';

export interface DialogHeaderProps {
  onClose?: MouseEventHandler<HTMLElement>;
  title?: ReactNode;
  subtitle?: ReactNode;
}

const DialogTitle = styled(Text).attrs({ as: `h2`, variant: `h5` })``;

const DialogSubtitle = styled(Text).attrs({
  as: `h3`,
  variant: `body2`,
  color: `grey3`,
})`
  margin-top: 8px;
  display: inline-block;
`;

const DialogHeaderRoot = styled.div`
  padding: 24px;
`;

const DialogTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconClose = styled(IconCloseOutlined)`
  color: #000000;
`;

const DialogHeader: FC<PropsWithChildren<DialogHeaderProps>> = ({
  title,
  subtitle,
  onClose,
  ...props
}) => (
  <DialogHeaderRoot {...props}>
    <DialogTitleContainer>
      <DialogTitle>{title}</DialogTitle>
      {onClose && (
        <IconButton variant="text" onClick={onClose}>
          <IconClose />
        </IconButton>
      )}
    </DialogTitleContainer>
    {subtitle && <DialogSubtitle>{subtitle}</DialogSubtitle>}
  </DialogHeaderRoot>
);

export default DialogHeader;

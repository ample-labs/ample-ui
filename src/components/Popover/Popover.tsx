import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import debounce from '../../utils/debounce';
import ownerWindow from '../../utils/ownerWindow';
import Modal, { ModalProps } from '../Modal/Modal';
import Paper from '../Paper/Paper';

export interface PopoverProps extends ModalProps {
  anchorEl?: HTMLElement;
}

const PopoverRoot = styled(Modal)``;

const PopoverPaper = styled(Paper)<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

interface BoundingRect {
  top: number;
  left: number;
}

const Popover: FC<PropsWithChildren<PopoverProps>> = ({
  anchorEl,
  open,
  onClose,
  ...props
}) => {
  const [anchorOffset, setAnchorOffset] = useState<BoundingRect>({
    top: 0,
    left: 0,
  });

  const updateAnchorOffeset = useCallback(() => {
    if (anchorEl) {
      const anchorRect = anchorEl.getBoundingClientRect();
      setAnchorOffset({
        top: anchorRect.top + anchorRect.height,
        left: anchorRect.left,
      });
      return;
    }
    setAnchorOffset({
      top: 0,
      left: 0,
    });
  }, [anchorEl]);

  useEffect(() => {
    updateAnchorOffeset();
  }, [open, updateAnchorOffeset]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleResize = debounce(() => {
      updateAnchorOffeset();
    });

    const containerWindow = ownerWindow(anchorEl);
    containerWindow.addEventListener(`resize`, handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener(`resize`, handleResize);
    };
  }, [anchorEl, open, updateAnchorOffeset]);

  return (
    <PopoverRoot open={open} onClose={onClose}>
      <PopoverPaper {...anchorOffset} {...props} />
    </PopoverRoot>
  );
};

export default Popover;

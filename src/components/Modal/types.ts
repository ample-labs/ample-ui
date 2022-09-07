import { MouseEvent } from 'react';

export type ModalCloseReason = 'escapeKeyDown' | 'backdropClick';

export interface ModalProps<T = ModalCloseReason> {
  open?: boolean;
  onClose?: (e: MouseEvent, reason: T) => void;
  backdropInvisible?: boolean;
}

import { ReactNode } from 'react';
import { ModalCloseReason, ModalProps } from '../Modal/types';

export type DialogCloseReason = ModalCloseReason | 'closeButtonClick';
export interface DialogProps extends ModalProps<DialogCloseReason> {
  maxWidth?: string;
  minWidth?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  hideCloseButton?: boolean;
  footer?: ReactNode;
}

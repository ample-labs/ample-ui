import { ValueOf } from '../../utils/tsHelper';

export const buttonVariants = {
  FILLED: `filled`,
  OUTLINED: `outlined`,
  TEXT: `text`,
} as const;

export type ButtonVariant = ValueOf<typeof buttonVariants>;

export const buttonColors = {
  PRIMARY: `primary`,
  SECONDARY: `secondary`,
  DANGER: `danger`,
  SUCCESS: `success`,
  INFO: `info`,
  WARNING: `warning`,
} as const;

export type ButtonColor = ValueOf<typeof buttonColors>;

export const buttonSizes = {
  SM: `sm`,
  MD: `md`,
} as const;

export type ButtonSize = ValueOf<typeof buttonSizes>;

import { ValueOf } from '../../utils/tsHelper';

export const radioColors = {
  PRIMARY: `primary`,
  SECONDARY: `secondary`,
  DANGER: `danger`,
  SUCCESS: `success`,
  INFO: `info`,
  WARNING: `warning`,
} as const;

export type RadioColor = ValueOf<typeof radioColors>;

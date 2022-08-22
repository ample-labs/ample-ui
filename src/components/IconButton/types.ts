import { ValueOf } from '../../utils/tsHelper';

export const iconButtonShapes = {
  RECTANGLE: `rectangle`,
  ROUND: `round`,
} as const;

export type IconButtonShape = ValueOf<typeof iconButtonShapes>;

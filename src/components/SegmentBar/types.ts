import { ValueOf } from '../../utils/tsHelper';

export const segmentBarColors = {
  PRIMARY: `primary`,
  SECONDARY: `secondary`,
  DANGER: `danger`,
  SUCCESS: `success`,
  INFO: `info`,
  WARNING: `warning`,
} as const;

export type SegmentBarColor = ValueOf<typeof segmentBarColors>;

import { ValueOf } from '../../utils/tsHelper';

export const tabBarColors = {
  PRIMARY: `primary`,
  SECONDARY: `secondary`,
  DANGER: `danger`,
  SUCCESS: `success`,
  INFO: `info`,
  WARNING: `warning`,
} as const;

export type TabBarColor = ValueOf<typeof tabBarColors>;

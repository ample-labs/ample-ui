import { ValueOf } from '../../utils/tsHelper';

export const textColors = {
  PRIMARY: `primary`,
  SECONDARY: `secondary`,
  DANGER: `danger`,
  SUCCESS: `success`,
  INFO: `info`,
  WARNING: `warning`,
  DARK1: `dark1`,
  DARK2: `dark2`,
  DARK3: `dark3`,
  GREY1: `grey1`,
  GREY2: `grey2`,
  GREY3: `grey3`,
  LIGHT1: `light1`,
  LIGHT2: `light2`,
  LIGHT3: `light3`,
} as const;

export type TextColor = ValueOf<typeof textColors>;

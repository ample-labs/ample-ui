import { ValueOf } from '../../utils/tsHelper';

export const sliderVariants = {
  BASIC: `basic`,
  VOLUME: `volume`,
  TEMPERATURE: `temperature`,
} as const;

export const sliderColors = {
  PRIMARY: `primary`,
  SECONDARY: `secondary`,
  DANGER: `danger`,
  SUCCESS: `success`,
  INFO: `info`,
  WARNING: `warning`,
} as const;

export type SliderVariant = ValueOf<typeof sliderVariants>;
export type SliderColor = ValueOf<typeof sliderColors>;

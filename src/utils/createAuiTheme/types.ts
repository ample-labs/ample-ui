import { CSSObject } from 'styled-components';

interface BreakpointConfig {
  sm: number;
  md: number;
  lg: number;
}

interface PaletteColor {
  lighter?: string;
  light?: string;
  main: string;
  dark?: string;
  darker?: string;
  contrastText: string;
}
interface PaletteBackgroundColor {
  default: string;
  paper: string;
}

export interface PaletteConfig {
  primary: PaletteColor;
  secondary: PaletteColor;
  success: PaletteColor;
  danger: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  dark1: PaletteColor;
  dark2: PaletteColor;
  dark3: PaletteColor;
  grey1: PaletteColor;
  grey2: PaletteColor;
  grey3: PaletteColor;
  light1: PaletteColor;
  light2: PaletteColor;
  light3: PaletteColor;
  background: PaletteBackgroundColor;
}

interface TypographyConfig {
  h1: CSSObject;
  h2: CSSObject;
  h3: CSSObject;
  h4: CSSObject;
  h5: CSSObject;
  h6: CSSObject;
  subtitle: CSSObject;
  body1: CSSObject;
  body2: CSSObject;
  caption: CSSObject;
  tooltip: CSSObject;
}

interface ZIndexConfig {
  modal: number;
  tooltip: number;
}

export interface AuiTheme {
  space: number[];
  breakpoints: BreakpointConfig;
  palette: PaletteConfig;
  typography: TypographyConfig;
  zIndex: ZIndexConfig;
}

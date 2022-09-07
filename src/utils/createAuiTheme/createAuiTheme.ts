import { AuiTheme } from './types';

const createAuiTheme = (overrides: Partial<AuiTheme>): AuiTheme => ({
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
  breakpoints: {
    sm: 0,
    md: 900,
    lg: 1200,
    ...overrides.breakpoints,
  },
  palette: {
    primary: {
      lighter: `#F0F8FF`,
      light: `#D9E7FB`,
      main: `#2F5DA9`,
      dark: `#003187`,
      darker: `#042153`,
      contrastText: `#fff`,
    },
    secondary: {
      main: `#9c27b0`,
      contrastText: `#fff`,
    },
    danger: {
      main: `#e32828`,
      contrastText: `#fff`,
    },
    success: {
      main: `#0d6def`,
      contrastText: `#fff`,
    },
    info: {
      main: `#3a5e8f`,
      contrastText: `#fff`,
    },
    warning: {
      main: `#f1ce17`,
      contrastText: `#fff`,
    },
    light1: {
      main: `#F0F0F0`,
      contrastText: `#000`,
    },
    light2: {
      main: `#E2E2E2`,
      contrastText: `#000`,
    },
    light3: {
      main: `#D4D4D4`,
      contrastText: `#000`,
    },
    grey1: {
      main: `#C0C0C0`,
      contrastText: `#000`,
    },
    grey2: {
      main: `#A7A7A7`,
      contrastText: `#000`,
    },
    grey3: {
      main: `#878787`,
      contrastText: `#000`,
    },
    dark1: {
      main: `#626262`,
      contrastText: `#fff`,
    },
    dark2: {
      main: `#4D4B4B`,
      contrastText: `#fff`,
    },
    dark3: {
      main: `#000000`,
      contrastText: `#fff`,
    },
    background: {
      default: `#ffffff`,
      paper: `#ffffff`,
    },
    ...overrides.palette,
  },
  typography: {
    h1: {
      fontSize: `60px`,
      fontWeight: 400,
      lineHeight: `72px`,
      letterSpacing: `-0.015em`,
    },
    h2: {
      fontSize: `48px`,
      fontWeight: 400,
      lineHeight: `57px`,
      letterSpacing: `-0.01em`,
    },
    h3: {
      fontSize: `34px`,
      fontWeight: 400,
      lineHeight: `41px`,
      letterSpacing: `-0.005em`,
    },
    h4: {
      fontSize: `24px`,
      fontWeight: 600,
      lineHeight: `29px`,
      letterSpacing: `-0.005em`,
    },
    h5: {
      fontSize: `20px`,
      fontWeight: 600,
      lineHeight: `24px`,
    },
    h6: {
      fontSize: `18px`,
      fontWeight: 600,
      lineHeight: `21px`,
    },
    subtitle: {
      fontSize: `16px`,
      fontWeight: 600,
      lineHeight: `24px`,
    },
    body1: {
      fontSize: `16px`,
      fontWeight: 400,
      lineHeight: `24px`,
    },
    body2: {
      fontSize: `14px`,
      fontWeight: 400,
      lineHeight: `20px`,
      letterSpacing: `0.015em`,
    },
    caption: {
      fontSize: `14px`,
      fontWeight: 600,
      lineHeight: `20px`,
      letterSpacing: `0.015em`,
    },
    tooltip: {
      fontSize: `12px`,
      fontWeight: 600,
      lineHeight: `16px`,
      letterSpacing: `0.015em`,
    },
    ...overrides.typography,
  },
  zIndex: {
    modal: 1000,
    tooltip: 1100,
  },
});

export default createAuiTheme;

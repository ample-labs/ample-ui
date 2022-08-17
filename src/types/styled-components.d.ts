import { AuiTheme } from '../utils/createAuiTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AuiTheme {}
}

import { CuiTheme } from '../utils/createCuiTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CuiTheme {}
}

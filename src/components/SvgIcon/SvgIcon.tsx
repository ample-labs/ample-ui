import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';

export type SvgIconProps = StyledComponentProps<
  'svg',
  DefaultTheme,
  Record<string, unknown>,
  never
>;

const SvgIcon = styled.svg`
  width: 1em;
  height: 1em;
`;

export default SvgIcon;

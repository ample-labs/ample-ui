import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconPlusFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13 2.34H11V21.65H13V2.34Z" fill="currentColor" />
    <path d="M21.66 11H2.35001V13H21.66V11Z" fill="currentColor" />
  </SvgIcon>
);

export default IconPlusFilled;

import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconCloseFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.52998 5.55502L11.95 11.985L18.44 5.61502"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
    <path
      d="M5.52998 18.4451L11.99 11.9851L18.47 18.3451"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconCloseFilled;

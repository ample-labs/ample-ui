import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconUpFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.75 16.36L12.04 7.63998L3.25 16.28"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconUpFilled;

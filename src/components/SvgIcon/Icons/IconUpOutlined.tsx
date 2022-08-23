import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconUpOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.7539 16.355L12.0402 7.63498L3.24658 16.275"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconUpOutlined;

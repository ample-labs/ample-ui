import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconCheckOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2_2881)">
      <path
        d="M3.91 12.265L9.59 19.355L19.31 6.41498"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="bevel"
      />
    </g>
    <defs>
      <clipPath id="clip0_2_2881">
        <rect
          width="24"
          height="23.99"
          fill="white"
          transform="translate(0 0.35498)"
        />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default IconCheckOutlined;

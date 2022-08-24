import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconTransferOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.27002 15.39H20.62"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M3.39001 8.55005H20.74"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
    <path
      d="M17.98 11.49L20.69 8.53002L17.86 5.71002"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
    <path
      d="M6.10002 12.5L3.39001 15.46L6.22002 18.28"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconTransferOutlined;

import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconNoticeOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.59 18.09V9.29C18.59 8.81 18.33 8.36 17.91 8.12L12.68 4.59C12.26 4.35 11.74 4.35 11.32 4.59L5.75 8.12C5.33 8.36 5.41 8.81 5.41 9.29V18.1"
      fill="currentColor"
    />
    <path
      d="M3.46 18.22H20.54"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M9.89 19.5C10.03 20.54 10.92 21.34 12 21.34C13.08 21.34 13.96 20.54 14.11 19.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M10.23 2.67H13.77"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </SvgIcon>
);

export default IconNoticeOutlined;

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
      d="M3.91 17.89H20.09"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M10 19.1C10.14 20.08 10.98 20.84 12 20.84C13.02 20.84 13.86 20.08 14 19.1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M10.32 3.14999H13.68"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M5.76001 18.34V9.95C5.76001 9.25 6.13001 8.59999 6.73001 8.23999L10.98 5.69C11.61 5.31 12.4 5.31 13.03 5.69L17.26 8.19C17.87 8.55 18.24 9.2 18.24 9.91V18.36"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </SvgIcon>
);

export default IconNoticeOutlined;

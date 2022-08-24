import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconCopyOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.34 17.26H6.5C6.09 17.26 5.75 16.92 5.75 16.51V4.72C5.75 4.31 6.09 3.97 6.5 3.97H15.25C15.66 3.97 16 4.31 16 4.72V6.33"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M17.49 6.26999H8.68999C8.29999 6.26999 7.98999 6.57999 7.98999 6.96999V19.33C7.98999 19.72 8.29999 20.03 8.68999 20.03H14.65L18.24 16.9V7.01999C18.24 6.60999 17.9 6.26999 17.49 6.26999Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </SvgIcon>
);

export default IconCopyOutlined;

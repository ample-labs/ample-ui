import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconSearchOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.1401 19.44L15.6401 14.91"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M10.9401 17.22C14.7398 17.22 17.8201 14.1397 17.8201 10.34C17.8201 6.54027 14.7398 3.45999 10.9401 3.45999C7.1404 3.45999 4.06012 6.54027 4.06012 10.34C4.06012 14.1397 7.1404 17.22 10.9401 17.22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </SvgIcon>
);

export default IconSearchOutlined;

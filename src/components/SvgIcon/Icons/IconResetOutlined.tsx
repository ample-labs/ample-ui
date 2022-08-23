import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconResetOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.9 9.95998L17.14 5.16998C16.78 4.54998 16.12 4.16998 15.41 4.16998H8.68998C7.97998 4.16998 7.31999 4.54998 6.95999 5.16998L3.59999 10.99C3.23999 11.61 3.23999 12.37 3.59999 12.99L6.95999 18.81C7.31999 19.43 7.97998 19.81 8.68998 19.81H15.41C16.12 19.81 16.78 19.43 17.14 18.81L20.68 12.67"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M20.68 7.09L19.88 9.95999L17.02 9.16"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconResetOutlined;

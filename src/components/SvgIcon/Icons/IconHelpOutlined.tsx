import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconHelpOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.6 3.75H8.39003C7.68003 3.75 7.02003 4.13 6.66003 4.75L3.05003 11C2.69003 11.62 2.69003 12.38 3.05003 13L6.66003 19.25C7.02003 19.87 7.68003 20.25 8.39003 20.25H15.6C16.31 20.25 16.97 19.87 17.33 19.25L20.94 13C21.3 12.38 21.3 11.62 20.94 11L17.33 4.75C16.97 4.13 16.31 3.75 15.6 3.75Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M9.48004 9.75998L10.15 8.59998L13.94 8.65998L14.5201 9.79998L12.01 12.39L12 14.23"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M12 15.06V16.19"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </SvgIcon>
);

export default IconHelpOutlined;

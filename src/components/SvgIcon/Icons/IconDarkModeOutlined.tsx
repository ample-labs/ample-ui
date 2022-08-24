import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconDarkModeOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.71999 9.03998C8.71999 6.99998 9.56999 5.15998 10.93 3.84998C7.04999 4.49998 4.09999 7.87998 4.09999 11.94C4.09999 16.47 7.77 20.15 12.31 20.15C15.73 20.15 18.67 18.05 19.9 15.07C18.76 15.82 17.41 16.25 15.94 16.25C11.96 16.25 8.73 13.02 8.73 9.03998H8.71999Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconDarkModeOutlined;

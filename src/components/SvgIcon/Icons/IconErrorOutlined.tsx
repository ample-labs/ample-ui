import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconErrorOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13 8.34H11V13.16H13V8.34Z" fill="currentColor" />
    <path d="M13 14.1H11V15.65H13V14.1Z" fill="currentColor" />
    <path
      d="M12 21.65C6.66999 21.65 2.34 17.32 2.34 11.99C2.34 6.66002 6.66999 2.33002 12 2.33002C17.33 2.33002 21.66 6.66002 21.66 11.99C21.66 17.32 17.33 21.65 12 21.65ZM12 4.34001C7.77999 4.34001 4.34 7.77002 4.34 12C4.34 16.23 7.77999 19.66 12 19.66C16.22 19.66 19.66 16.23 19.66 12C19.66 7.77002 16.23 4.34001 12 4.34001Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconErrorOutlined;

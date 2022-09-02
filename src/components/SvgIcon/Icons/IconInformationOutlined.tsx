import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconInformationOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13 10.84H11V15.66H13V10.84Z" fill="currentColor" />
    <path d="M13 8.33997H11V9.88997H13V8.33997Z" fill="currentColor" />
    <path
      d="M12 21.65C6.67 21.65 2.34001 17.32 2.34001 11.99C2.34001 6.66002 6.67 2.33002 12 2.33002C17.33 2.33002 21.66 6.66002 21.66 11.99C21.66 17.32 17.33 21.65 12 21.65ZM12 4.34001C7.78 4.34001 4.34001 7.77002 4.34001 12C4.34001 16.23 7.77 19.66 12 19.66C16.23 19.66 19.66 16.23 19.66 12C19.66 7.77002 16.23 4.34001 12 4.34001Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconInformationOutlined;

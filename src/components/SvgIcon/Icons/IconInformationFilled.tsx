import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconInformationFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 20.66C16.7828 20.66 20.66 16.7828 20.66 12C20.66 7.21724 16.7828 3.34003 12 3.34003C7.21721 3.34003 3.34 7.21724 3.34 12C3.34 16.7828 7.21721 20.66 12 20.66Z"
      fill="currentColor"
    />
    <path
      d="M12 21.66C6.67 21.66 2.34 17.33 2.34 12C2.34 6.67003 6.67 2.34003 12 2.34003C17.33 2.34003 21.66 6.67003 21.66 12C21.66 17.33 17.33 21.66 12 21.66ZM12 4.34003C7.78 4.34003 4.34 7.77003 4.34 12C4.34 16.23 7.77 19.66 12 19.66C16.23 19.66 19.66 16.22 19.66 12C19.66 7.78003 16.23 4.34003 12 4.34003Z"
      fill="currentColor"
    />
    <path d="M13 10.84H11V15.66H13V10.84Z" fill="white" />
    <path d="M13 8.34003H11V9.89003H13V8.34003Z" fill="white" />
  </SvgIcon>
);

export default IconInformationFilled;

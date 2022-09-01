import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconErrorFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 20.66C16.7828 20.66 20.66 16.7828 20.66 12C20.66 7.21721 16.7828 3.34 12 3.34C7.21721 3.34 3.34 7.21721 3.34 12C3.34 16.7828 7.21721 20.66 12 20.66Z"
      fill="currentColor"
    />
    <path
      d="M12 21.66C6.67 21.66 2.34 17.33 2.34 12C2.34 6.67 6.67 2.34 12 2.34C17.33 2.34 21.66 6.67 21.66 12C21.66 17.33 17.33 21.66 12 21.66ZM12 4.34C7.78 4.34 4.34 7.77 4.34 12C4.34 16.23 7.77 19.66 12 19.66C16.23 19.66 19.66 16.22 19.66 12C19.66 7.78 16.23 4.34 12 4.34Z"
      fill="currentColor"
    />
    <path d="M13 8.34H11V13.16H13V8.34Z" fill="white" />
    <path d="M13 14.11H11V15.66H13V14.11Z" fill="white" />
  </SvgIcon>
);

export default IconErrorFilled;

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
      d="M13 14.3L11 14.28L11.02 12.03L13.27 9.70001L10.72 9.66001L10.34 10.32L8.60999 9.32001L9.57999 7.64001L14.56 7.72001L15.73 10.04L13.01 12.85L13 14.3Z"
      fill="currentColor"
    />
    <path d="M13 15.12H11V16.55H13V15.12Z" fill="currentColor" />
    <path
      d="M12 21.66C6.66997 21.66 2.33997 17.33 2.33997 12C2.33997 6.67003 6.66997 2.34003 12 2.34003C17.33 2.34003 21.66 6.67003 21.66 12C21.66 17.33 17.33 21.66 12 21.66ZM12 4.35003C7.77997 4.35003 4.33997 7.79003 4.33997 12.01C4.33997 16.23 7.76997 19.67 12 19.67C16.23 19.67 19.66 16.23 19.66 12.01C19.66 7.79003 16.23 4.35003 12 4.35003Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconHelpOutlined;

import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconSuccessOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.26 15.81L7.12 11.89L8.67999 10.64L11.03 13.57L15.29 8L16.88 9.21L11.84 15.8L10.26 15.81Z"
      fill="currentColor"
    />
    <path
      d="M12 21.66C6.66997 21.66 2.33997 17.33 2.33997 12C2.33997 6.67003 6.66997 2.34003 12 2.34003C17.33 2.34003 21.66 6.67003 21.66 12C21.66 17.33 17.33 21.66 12 21.66ZM12 4.35003C7.77997 4.35003 4.33997 7.79003 4.33997 12.01C4.33997 16.23 7.76997 19.67 12 19.67C16.23 19.67 19.66 16.23 19.66 12.01C19.66 7.79003 16.22 4.35003 12 4.35003Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconSuccessOutlined;

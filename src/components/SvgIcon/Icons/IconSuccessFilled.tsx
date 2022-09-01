import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconSuccessFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 20.66C16.7828 20.66 20.66 16.7828 20.66 12C20.66 7.21724 16.7828 3.34003 12 3.34003C7.21721 3.34003 3.34003 7.21724 3.34003 12C3.34003 16.7828 7.21721 20.66 12 20.66Z"
      fill="currentColor"
    />
    <path
      d="M12 21.66C6.67 21.66 2.34003 17.33 2.34003 12C2.34003 6.67003 6.67 2.34003 12 2.34003C17.33 2.34003 21.66 6.67003 21.66 12C21.66 17.33 17.33 21.66 12 21.66ZM12 4.35003C7.78 4.35003 4.34003 7.78003 4.34003 12.01C4.34003 16.24 7.77 19.67 12 19.67C16.23 19.67 19.66 16.24 19.66 12.01C19.66 7.78003 16.23 4.35003 12 4.35003Z"
      fill="currentColor"
    />
    <path
      d="M10.26 15.52L7.75 12.38L9.31 11.13L11.03 13.27L14.68 8.5L16.27 9.71L11.84 15.5L10.26 15.52Z"
      fill="white"
    />
  </SvgIcon>
);

export default IconSuccessFilled;

import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconHelpFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 20.66C16.7828 20.66 20.66 16.7828 20.66 12C20.66 7.21724 16.7828 3.34003 12 3.34003C7.21723 3.34003 3.34003 7.21724 3.34003 12C3.34003 16.7828 7.21723 20.66 12 20.66Z"
      fill="currentColor"
    />
    <path
      d="M12 21.66C6.67002 21.66 2.34003 17.33 2.34003 12C2.34003 6.67003 6.67002 2.34003 12 2.34003C17.33 2.34003 21.66 6.67003 21.66 12C21.66 17.33 17.33 21.66 12 21.66ZM12 4.34003C7.78002 4.34003 4.34003 7.78003 4.34003 12C4.34003 16.22 7.77002 19.66 12 19.66C16.23 19.66 19.66 16.23 19.66 12C19.66 7.77003 16.23 4.34003 12 4.34003Z"
      fill="currentColor"
    />
    <path
      d="M13 14.7L11 14.68L11.02 12.43L13.28 10.1L10.73 10.06L10.35 10.72L8.62 9.71998L9.57999 8.03998L14.57 8.11998L15.74 10.44L13.02 13.25L13 14.7Z"
      fill="white"
    />
    <path d="M13 15.52H11V16.95H13V15.52Z" fill="white" />
  </SvgIcon>
);

export default IconHelpFilled;

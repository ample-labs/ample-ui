import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconTimeResetOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2_2024)">
      <path
        d="M14.05 15.3L11.17 12.42V7.82H13.17V11.59L15.46 13.89L14.05 15.3Z"
        fill="currentColor"
      />
      <path
        d="M5.85998 19.81L1.91998 18.71L2.44998 16.78L5.42998 17.61L6.25998 14.63L8.18998 15.17L7.08998 19.11L5.85998 19.81Z"
        fill="currentColor"
      />
      <path
        d="M12.17 21.69V19.69C16.41 19.69 19.86 16.24 19.86 12C19.86 7.76 16.41 4.31 12.17 4.31C7.92998 4.31 4.47998 7.76 4.47998 12C4.47998 13.99 5.23998 15.88 6.61998 17.32L5.17998 18.7C3.43998 16.89 2.47998 14.5 2.47998 11.99C2.47998 6.65 6.82998 2.3 12.17 2.3C17.51 2.3 21.86 6.65 21.86 11.99C21.86 17.33 17.51 21.68 12.17 21.68V21.69Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_2_2024">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default IconTimeResetOutlined;

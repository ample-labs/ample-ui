import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconPinFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.92001 4.61V19.39L12.15 14.17L17.07 19.39V4.61H6.92001Z"
      fill="currentColor"
    />
    <path
      d="M7.63 20.1L5.92001 19.39V4.6L6.92001 3.6H17.07L18.07 4.6V19.39L16.34 20.08L12.12 15.6L7.62 20.1H7.63ZM7.92001 5.61V16.98L11.44 13.46L12.87 13.48L16.07 16.87V5.6H7.92001V5.61Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconPinFilled;

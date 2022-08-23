import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconSearchFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.6602 19.44L15.1602 14.91"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M10.4601 17.22C14.2599 17.22 17.3401 14.1397 17.3401 10.34C17.3401 6.54027 14.2599 3.45999 10.4601 3.45999C6.66042 3.45999 3.58014 6.54027 3.58014 10.34C3.58014 14.1397 6.66042 17.22 10.4601 17.22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </SvgIcon>
);

export default IconSearchFilled;

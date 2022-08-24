import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconInformationOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 15.45V10.63"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M12 9.68997V8.53998"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M15.62 3.73999H8.39C7.68 3.73999 7.01998 4.11999 6.65998 4.73999L3.04998 11C2.68998 11.62 2.68998 12.38 3.04998 13L6.65998 19.26C7.01998 19.88 7.68 20.26 8.39 20.26H15.62C16.33 20.26 16.99 19.88 17.35 19.26L20.96 13C21.32 12.38 21.32 11.62 20.96 11L17.35 4.73999C16.99 4.11999 16.33 3.73999 15.62 3.73999Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </SvgIcon>
);

export default IconInformationOutlined;

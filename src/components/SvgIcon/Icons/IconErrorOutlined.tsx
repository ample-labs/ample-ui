import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconErrorOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.04 8.53V13.35"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M12.04 14.29V15.45"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M15.65 3.73999H8.42C7.71 3.73999 7.04001 4.11999 6.69001 4.73999L3.08001 11C2.72001 11.62 2.72001 12.38 3.08001 13L6.69001 19.26C7.05001 19.88 7.71 20.26 8.42 20.26H15.65C16.36 20.26 17.03 19.88 17.38 19.26L20.84 13.26C21.29 12.48 21.29 11.52 20.84 10.74L17.38 4.73999C17.02 4.11999 16.36 3.73999 15.65 3.73999V3.73999Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </SvgIcon>
);

export default IconErrorOutlined;

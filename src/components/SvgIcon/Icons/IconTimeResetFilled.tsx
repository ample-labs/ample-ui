import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconTimeResetFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.94 17.94L3.08 13C2.72 12.38 2.72 11.62 3.08 11L6.67 4.78003C7.03 4.16003 7.69 3.78003 8.4 3.78003H15.59C16.3 3.78003 16.96 4.16003 17.32 4.78003L20.91 11C21.27 11.62 21.27 12.38 20.91 13L17.32 19.22C16.96 19.84 16.3 20.22 15.59 20.22H9.64"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M12 7.80003V11.16C12 11.69 12.21 12.2 12.59 12.57L14.59 14.57"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M6.76984 14.9601L5.93984 17.9401L2.95984 17.1101"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconTimeResetFilled;

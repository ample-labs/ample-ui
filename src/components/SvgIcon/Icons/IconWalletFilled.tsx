import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconWalletFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.51 18.99H4.75003C3.80003 18.99 3.03003 18.27 3.03003 17.39V9.46999C3.03003 8.58999 3.80003 7.87 4.75003 7.87H19.26C20.21 7.87 20.98 8.58999 20.98 9.46999V15.32L16.51 19V18.99ZM5.03003 16.99H15.8L18.99 14.37V9.86H5.03003V16.99Z"
      fill="currentColor"
    />
    <path d="M19.98 11.93H17.33V13.93H19.98V11.93Z" fill="currentColor" />
    <path
      d="M5.02002 9.63H3.02002V6.73C3.02002 5.79 3.76002 5.03 4.66002 5.03H16.89C17.79 5.03 18.53 5.79 18.53 6.74V8.33H16.53V7.04H5.02002V9.65V9.63Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconWalletFilled;

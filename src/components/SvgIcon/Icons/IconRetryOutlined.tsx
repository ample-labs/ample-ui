import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconRetryOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.88002 17.16C1.49002 13.38 2.05002 8.34001 5.22002 5.18001C8.41002 1.99001 13.3 1.42001 17.13 3.79001L16.08 5.49C13.05 3.61 9.16001 4.06001 6.64001 6.59001C4.13001 9.10001 3.68002 13.1 5.58002 16.09L3.89001 17.16H3.88002Z"
      fill="currentColor"
    />
    <path
      d="M12.03 21.65C10.19 21.65 8.34001 21.13 6.73001 20.06L7.83 18.39C10.85 20.38 14.9 19.97 17.46 17.41C20.04 14.83 20.44 10.75 18.4 7.72001L20.06 6.60001C22.63 10.42 22.13 15.56 18.87 18.82C17.01 20.68 14.53 21.64 12.03 21.64V21.65Z"
      fill="currentColor"
    />
    <path
      d="M5.01001 18.5L1.16 17.42L1.7 15.5L4.59001 16.3L5.39 13.41L7.32001 13.95L6.24001 17.8L5.01001 18.5Z"
      fill="currentColor"
    />
    <path
      d="M18.62 10.5L16.69 9.96L17.77 6.11L19 5.41L22.85 6.49L22.31 8.41L19.42 7.61L18.62 10.5Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconRetryOutlined;

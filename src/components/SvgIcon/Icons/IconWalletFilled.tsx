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
      d="M3.71001 8.88H3.70001V17.68C3.70001 18.06 4.04001 18.38 4.45001 18.38H16.32L20.31 14.74V13.53H17.76V12.03H20.31V8.88H3.70001H3.71001Z"
      fill="currentColor"
    />
    <path
      d="M20.3 7.37999H20.32V6.31999C20.32 5.93999 19.98 5.62 19.57 5.62H4.46002C4.04002 5.62 3.71002 5.92999 3.71002 6.31999V7.37999H20.32H20.3Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconWalletFilled;

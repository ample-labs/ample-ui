import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconWarningFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22.08 18.03L13.43 3.79999C13.13 3.28999 12.6 2.97998 12.01 2.97998C11.42 2.97998 10.88 3.29001 10.6 3.79001L1.93 18.05C1.63 18.56 1.63 19.18 1.93 19.69C2.23 20.2 2.76001 20.51 3.35001 20.51H20.68C21.27 20.51 21.81 20.2 22.1 19.69C22.4 19.18 22.4 18.56 22.1 18.03H22.08ZM12.75 16.48H11.25V15.33H12.75V16.48ZM12.75 14.38H11.25V9.56H12.75V14.38Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconWarningFilled;

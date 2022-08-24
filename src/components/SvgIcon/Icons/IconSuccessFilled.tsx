import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconSuccessFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.34 4.76001C16.98 4.14001 16.32 3.76001 15.61 3.76001H8.40004C7.69004 3.76001 7.03006 4.14001 6.67005 4.76001L3.07005 11C2.71005 11.62 2.71005 12.38 3.07005 13L6.67005 19.24C7.03006 19.86 7.69004 20.24 8.40004 20.24H15.61C16.32 20.24 16.98 19.86 17.34 19.24L20.94 13C21.3 12.38 21.3 11.62 20.94 11L17.34 4.76001ZM12.08 15.49H10.9L8.38005 12.36L9.55003 11.42L11.47 13.81L15.5401 8.5L16.7301 9.41L12.08 15.49Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconSuccessFilled;

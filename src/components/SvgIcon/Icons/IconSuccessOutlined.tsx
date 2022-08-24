import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconSuccessOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.61 3.76001H8.40004C7.69004 3.76001 7.03002 4.14001 6.67002 4.76001L3.06004 11C2.70004 11.62 2.70004 12.38 3.06004 13L6.67002 19.24C7.03002 19.86 7.69004 20.24 8.40004 20.24H15.61C16.32 20.24 16.98 19.86 17.34 19.24L20.95 13C21.31 12.38 21.31 11.62 20.95 11L17.34 4.76001C16.98 4.14001 16.32 3.76001 15.61 3.76001Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
    <path
      d="M8.96002 11.89L11.48 15.03L16.13 8.96002"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconSuccessOutlined;

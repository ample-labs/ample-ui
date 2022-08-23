import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconRetryFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.38 5.74002L19.25 8.98002L19.76 9.86002L20.64 11.38C20.86 11.76 20.86 12.23 20.64 12.62L16.86 19.17C16.64 19.55 16.23 19.79 15.79 19.79H9.77002"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M6.15001 17.45L3.36001 12.61C3.14001 12.23 3.14001 11.76 3.36001 11.37L7.14001 4.82001C7.36001 4.44001 7.77001 4.20001 8.21001 4.20001H14.35"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M7.15001 14.9L6.34001 17.79L3.45001 16.98"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
    <path
      d="M20.33 6.49L17.42 5.78L16.7 8.69"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconRetryFilled;

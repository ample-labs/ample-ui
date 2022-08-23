import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconChartFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.84998 4.84V18.39C4.84998 18.81 5.16997 19.16 5.55997 19.16H19.14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path d="M9.63 11.02H6.38V17.68H9.63V11.02Z" fill="currentColor" />
    <path d="M13.76 8.51001H10.51V17.67H13.76V8.51001Z" fill="currentColor" />
    <path d="M17.88 6.07001H14.63V17.68H17.88V6.07001Z" fill="currentColor" />
  </SvgIcon>
);

export default IconChartFilled;

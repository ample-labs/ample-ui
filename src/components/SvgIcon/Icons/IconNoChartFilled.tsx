import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconNoChartFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.93 10.1209H8.08002V15.9709H10.93V10.1209Z"
      fill="currentColor"
    />
    <path d="M14.91 7.92096H12.06V15.971H14.91V7.92096Z" fill="currentColor" />
    <path d="M18.88 5.77094H16.03V15.9709H18.88V5.77094Z" fill="currentColor" />
    <path
      d="M19.78 19.9109H5.74001C4.78001 19.9109 4 19.1109 4 18.1209V4.1109H6V17.9109H19.77V19.9109H19.78Z"
      fill="currentColor"
    />
    <path
      d="M19.0667 4.00001L4.97406 18.0927L6.38827 19.5069L20.4809 5.41422L19.0667 4.00001Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconNoChartFilled;

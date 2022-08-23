import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconDarkModeFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.73001 9.04999C8.73001 7.00999 9.58 5.16999 10.94 3.85999C7.06 4.50999 4.11 7.88998 4.11 11.95C4.11 16.48 7.78001 20.16 12.32 20.16C15.74 20.16 18.68 18.06 19.91 15.08C18.77 15.83 17.42 16.26 15.95 16.26C11.97 16.26 8.74001 13.03 8.74001 9.04999H8.73001Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconDarkModeFilled;

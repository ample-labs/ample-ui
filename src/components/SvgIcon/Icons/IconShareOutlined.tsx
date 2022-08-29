import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconShareOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.92 5.22H6.26001C5.71001 5.22 5.26001 5.67 5.26001 6.22V17.77C5.26001 18.32 5.71001 18.77 6.26001 18.77H15.09C15.35 18.77 15.61 18.67 15.79 18.48L18.44 15.87C18.63 15.68 18.74 15.43 18.74 15.16V11.04"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M11.84 12.15L18.75 5.23999"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M18.73 8.76V5.22H15.23"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconShareOutlined;

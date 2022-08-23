import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconResetFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.9 9.96999L17.14 5.17999C16.78 4.55999 16.12 4.17999 15.41 4.17999H8.69C7.98 4.17999 7.32 4.55999 6.96 5.17999L3.6 11C3.24 11.62 3.24 12.38 3.6 13L6.96 18.82C7.32 19.44 7.98 19.82 8.69 19.82H15.41C16.12 19.82 16.78 19.44 17.14 18.82L20.68 12.68"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M20.68 7.09998L19.88 9.96998L17.01 9.16998"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconResetFilled;

import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconWalletOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.98 14.49V8.52999C19.98 8.15999 19.66 7.85999 19.26 7.85999H4.75C4.35 7.85999 4.03 8.15999 4.03 8.52999V17.31C4.03 17.68 4.35 17.98 4.75 17.98H16.15L19.98 14.49V14.49Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M17.54 12.92H19.98"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M4.03 9.01999V6.71999C4.03 6.32999 4.32 6.01999 4.67 6.01999H16.9C17.25 6.01999 17.54 6.33999 17.54 6.71999V7.70999"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </SvgIcon>
);

export default IconWalletOutlined;

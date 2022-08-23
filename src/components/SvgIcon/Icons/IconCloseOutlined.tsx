import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconCloseOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.55997 5.57504L11.97 11.985L18.44 5.63504"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
    <path
      d="M5.54483 18.4251L11.9848 11.9851L18.4548 18.3251"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="bevel"
    />
  </SvgIcon>
);

export default IconCloseOutlined;

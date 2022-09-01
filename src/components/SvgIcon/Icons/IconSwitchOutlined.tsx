import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconSwitchOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.44998 3.88H7.44998V15.03H9.44998V3.88Z" fill="currentColor" />
    <path
      d="M5.62997 8.25002L4.22 6.84001L7.75 3.30002L9.12997 3.27002L12.83 6.65001L11.48 8.13002L8.48999 5.39001L5.62997 8.25002Z"
      fill="currentColor"
    />
    <path d="M16.56 8.96002H14.56V20.11H16.56V8.96002Z" fill="currentColor" />
    <path
      d="M14.88 20.73L11.18 17.34L12.53 15.87L15.52 18.61L18.38 15.75L19.79 17.16L16.26 20.7L14.88 20.73Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconSwitchOutlined;

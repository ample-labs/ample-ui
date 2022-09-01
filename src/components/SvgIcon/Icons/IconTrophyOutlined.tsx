import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconTrophyOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.56 16.61H9.64999C9.10999 16.61 8.60999 16.36 8.26999 15.94L5.85999 12.87C5.61999 12.56 5.48999 12.18 5.48999 11.79V5.11C5.48999 4.15 6.27999 3.36 7.23999 3.36H16.75C17.71 3.36 18.5 4.15 18.5 5.11V11.81C18.5 12.18 18.39 12.53 18.17 12.83L15.97 15.89C15.64 16.35 15.11 16.62 14.55 16.62L14.56 16.61ZM9.77999 14.62H14.44L16.52 11.73V5.36H7.50999V11.71L9.78999 14.62H9.77999Z"
      fill="currentColor"
    />
    <path d="M15.18 18.64H8.82001V20.64H15.18V18.64Z" fill="currentColor" />
    <path d="M13 15.61H11V19.64H13V15.61Z" fill="currentColor" />
    <path
      d="M18.32 12.64L16.7 11.47L19.27 7.92V7.39H17.51V5.39H19.52C20.48 5.39 21.27 6.18 21.27 7.14V8.57L18.32 12.65V12.64Z"
      fill="currentColor"
    />
    <path
      d="M5.68999 12.64L2.73999 8.56001V7.13C2.73999 6.17 3.52999 5.38 4.48999 5.38H6.49999V7.38H4.73999V7.91L7.30999 11.46L5.68999 12.63V12.64Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconTrophyOutlined;

import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconCopyFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.95002 5.73001H16.39V4.32001C16.39 3.77001 15.94 3.32001 15.39 3.32001H6.46002C5.91002 3.32001 5.46002 3.77001 5.46002 4.32001V16.49C5.46002 17.04 5.91002 17.49 6.46002 17.49H7.20002V7.47002C7.20002 6.51002 7.99002 5.72002 8.95002 5.72002V5.73001Z"
      fill="currentColor"
    />
    <path
      d="M18.29 7.22998H9.71002C9.16002 7.22998 8.71002 7.67998 8.71002 8.22998V20.44C8.71002 20.99 9.16002 21.44 9.71002 21.44H15.48C15.55 21.44 15.61 21.42 15.66 21.37L19.2 18.29L19.29 18.08V8.22998C19.29 7.67998 18.84 7.22998 18.29 7.22998Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconCopyFilled;

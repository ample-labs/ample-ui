import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconHelpFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.59 10.63L17.98 4.38C17.49 3.53 16.58 3 15.6 3H8.38998C7.40998 3 6.49997 3.53 6.00997 4.38L2.39997 10.63C1.90997 11.48 1.90997 12.53 2.39997 13.38L6.00997 19.63C6.49997 20.48 7.40998 21.01 8.38998 21.01H15.6C16.58 21.01 17.49 20.48 17.98 19.63L21.59 13.38C22.08 12.53 22.08 11.48 21.59 10.63ZM11.25 16.19V15.07H12.75V16.19H11.25ZM12.76 12.7V14.25H11.25L11.27 12.09L13.61 9.67L13.48 9.41L10.59 9.36L10.13 10.15L8.82998 9.39999L9.72997 7.85001L14.41 7.92999L15.43 9.95L12.76 12.71V12.7Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconHelpFilled;

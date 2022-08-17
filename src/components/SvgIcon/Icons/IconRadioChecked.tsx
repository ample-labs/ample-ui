import React, { FC } from 'react';
import SvgIcon from '../SvgIcon';

const IconRadioChecked: FC = (props) => (
  <SvgIcon
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="16" height="16" rx="8" fill="white" />
    <circle cx="8" cy="8" r="5" fill="currentColor" />
  </SvgIcon>
);

export default IconRadioChecked;

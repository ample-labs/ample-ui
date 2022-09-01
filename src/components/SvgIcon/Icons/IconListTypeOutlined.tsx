import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconListTypeFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M19 5.51001H9.21002V7.51H19V5.51001Z" fill="currentColor" />
    <path d="M19 11H9.21002V13H19V11Z" fill="currentColor" />
    <path d="M19 16.49H9.21002V18.49H19V16.49Z" fill="currentColor" />
    <path d="M7.69 5.51001H5V7.51H7.69V5.51001Z" fill="currentColor" />
    <path d="M7.69 11H5V13H7.69V11Z" fill="currentColor" />
    <path d="M7.69 16.49H5V18.49H7.69V16.49Z" fill="currentColor" />
  </SvgIcon>
);

export default IconListTypeFilled;

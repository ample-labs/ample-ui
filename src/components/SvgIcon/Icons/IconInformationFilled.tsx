import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconInformationFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.6053 10.63L17.9953 4.37C17.5053 3.52 16.5953 2.98999 15.6153 2.98999H8.38534C7.40534 2.98999 6.49533 3.52 6.00533 4.37L2.39533 10.63C1.90533 11.48 1.90533 12.53 2.39533 13.38L6.00533 19.64C6.49533 20.49 7.40534 21.01 8.38534 21.01H15.6153C16.5953 21.01 17.5053 20.48 17.9953 19.64L21.6053 13.38C22.0953 12.53 22.0953 11.48 21.6053 10.63ZM12.7453 15.46H11.2453V10.64H12.7453V15.46ZM12.7453 9.70001H11.2453V8.55002H12.7453V9.70001Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconInformationFilled;

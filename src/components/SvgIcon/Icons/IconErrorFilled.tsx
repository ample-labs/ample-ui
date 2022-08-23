import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconErrorFilled: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.6102 10.63L18.0002 4.37C17.5102 3.52 16.6002 2.98999 15.6202 2.98999H8.39021C7.41021 2.98999 6.50022 3.52 6.01022 4.37L2.40021 10.63C1.91021 11.48 1.91021 12.53 2.40021 13.38L6.01022 19.64C6.50022 20.49 7.41021 21.01 8.39021 21.01H15.6202C16.6002 21.01 17.5102 20.48 18.0002 19.64L21.6102 13.38C22.1002 12.53 22.1002 11.48 21.6102 10.63ZM12.7502 15.46H11.2502V14.31H12.7502V15.46ZM12.7502 13.36H11.2502V8.54001H12.7502V13.36Z"
      fill="currentColor"
    />
  </SvgIcon>
);

export default IconErrorFilled;

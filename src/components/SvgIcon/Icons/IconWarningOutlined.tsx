import React, { FC } from 'react';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

const IconWarningOutlined: FC<SvgIconProps> = (props) => (
  <SvgIcon
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.7498 19.76H3.33975C2.64975 19.76 2.21975 19.02 2.56975 18.42L6.89975 11.3L11.2297 4.17998C11.5697 3.57998 12.4298 3.57998 12.7798 4.17998L17.1098 11.3L21.4397 18.42C21.7797 19.02 21.3498 19.76 20.6698 19.76H17.7597"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M12 9.55994V14.3799"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M12 15.33V16.4799"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
  </SvgIcon>
);

export default IconWarningOutlined;

import styled from 'styled-components';

import Text, { TextProps } from '../Text/Text';

interface FormHelperTextProps extends TextProps {
  disabled?: boolean;
  errored?: boolean;
}

const FormHelperText = styled(Text)<FormHelperTextProps>`
  font-size: 12px;
  line-height: 2;
  font-weight: 400;
  letter-spacing: 0.015em;
  margin: 0 4px;
  color: ${({ theme, disabled, errored }) => {
    if (disabled) {
      return theme.palette.grey2.main;
    }
    if (errored) {
      return theme.palette.danger.main;
    }
    return theme.palette.grey3.main;
  }};
`;

export default FormHelperText;

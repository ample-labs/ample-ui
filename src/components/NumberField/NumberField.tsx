import styled from 'styled-components';
import Input, { InputProps } from '../Input/Input';

export interface NumberFieldProps extends InputProps {
  errored?: boolean;
}

const NumberField = styled(Input)<NumberFieldProps>`
  text-align: right;
  ${({ theme }) => theme.typography.h6}

  ::placeholder {
    color: ${({ theme }) => theme.palette.dark1.main};
  }

  :disabled {
    color: ${({ theme }) => theme.palette.light3.main};
  }
`;

NumberField.defaultProps = {
  placeholder: `0.0`,
};

export default NumberField;

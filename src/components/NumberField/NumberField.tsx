import styled from 'styled-components';
import Input, { InputProps } from '../Input/Input';

export interface NumberFieldProps extends InputProps {
  errored?: boolean;
}

const NumberField = styled(Input)<NumberFieldProps>`
  padding: 16px;
  font-size: 16px;
  border-radius: 6px;
  text-align: right;

  ::placeholder {
    color: ${({ theme }) => theme.palette.dark1.main};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
  :disabled {
    color: ${({ theme }) => theme.palette.light3.main};
  }

  border: 1px solid
    ${({ theme, errored }) => {
      if (errored) {
        return theme.palette.danger.main;
      }
      return theme.palette.grey1.main;
    }};
`;

export default NumberField;

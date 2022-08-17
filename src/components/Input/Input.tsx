import styled from 'styled-components';

export interface InputProps {}

const Input = styled.input<InputProps>`
  border-radius: 6px;
  border: 1px solid #d3d3d4;
  background: none;
  width: 100%;
  padding: 16px;
  font-size: 16px;

  ::placeholder {
    color: ${({ theme }) => theme.palette.dark1.main};
  }

  :focus {
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
  :disabled {
    color: ${({ theme }) => theme.palette.light3.main};
  }
`;

export default Input;

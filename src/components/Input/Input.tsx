import styled from 'styled-components';

export interface InputProps {
  errored?: boolean;
}

const Input = styled.input<InputProps>`
  background: none; // reset
`;

export default Input;

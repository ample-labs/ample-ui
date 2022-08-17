import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

const UnstyledTextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, ...props }, ref) => (
    <div className={className}>
      <Input ref={ref} {...props} />
    </div>
  ),
);

const TextField = styled(UnstyledTextField)``;

export default TextField;

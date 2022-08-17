import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import IconRadioChecked from '../SvgIcon/Icons/IconRadioChecked';
import { RadioColor, radioColors } from './types';

const RadioInput = styled.input`
  cursor: inherit;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

const RadioIconWrapper = styled.div<RadioProps>`
  border-radius: 50%;
  box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme, color }) => color && theme.palette[color].main};

  > svg {
    display: block;
    visibility: hidden;
    width: 1em;
    height: 1em;
  }
`;

const RadioContainer = styled.div<RadioProps>`
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 8px;

  input:checked + ${RadioIconWrapper} {
    color: ${({ theme, color }) => color && theme.palette[color].main};

    > svg {
      visibility: visible;
    }
  }
  input:disabled + ${RadioIconWrapper} {
    border-color: ${({ theme }) => theme.palette.light3.main};
  }
`;

export interface RadioProps {
  color?: RadioColor;
}

const Radio = styled(
  forwardRef<
    HTMLInputElement,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'color' | 'size'> &
      RadioProps
  >(({ className, color, ...props }, ref) => {
    return (
      <RadioContainer className={className} color={color}>
        <RadioInput type="radio" ref={ref} {...props} />
        <RadioIconWrapper color={color}>
          <IconRadioChecked />
        </RadioIconWrapper>
      </RadioContainer>
    );
  }),
)``;

Radio.defaultProps = {
  color: radioColors.PRIMARY,
};

export default Radio;

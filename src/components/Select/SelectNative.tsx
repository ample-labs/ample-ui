import React, { forwardRef, SelectHTMLAttributes } from 'react';
import styled from 'styled-components';
import IconChevronDown from '../SvgIcon/Icons/IconChevronDown';
import { cssSelect } from './theme';
import { selectColors, SelectProps } from './types';

const SelectContainer = styled.div`
  display: inline-flex;
  position: relative;
`;

const SelectElement = styled.select`
  ${cssSelect}
`;

const SelectIcon = styled(IconChevronDown)`
  position: absolute;
  top: calc(50% - 0.5em);
  right: 12px;
  pointer-events: none;
  ${SelectElement}:focus + & {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  ${SelectElement}:disabled + & {
    color: ${({ theme }) => theme.palette.light3.main};
  }
`;

const SelectNative = styled(
  forwardRef<
    HTMLSelectElement,
    Omit<SelectHTMLAttributes<HTMLSelectElement>, 'type'> & SelectProps
  >(({ className, color, ...props }, ref) => {
    return (
      <SelectContainer className={className} color={color}>
        <SelectElement ref={ref} {...props} />
        <SelectIcon />
      </SelectContainer>
    );
  }),
)``;

SelectNative.defaultProps = {
  color: selectColors.PRIMARY,
};

export default SelectNative;

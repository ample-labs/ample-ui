import React, { FC, ReactElement, ReactNode, useMemo } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { Text } from '../..';

const LabelText = styled(Text)<{ disabled: boolean }>`
  color: ${({ theme, disabled }) => disabled && theme.palette.grey1.main};
`;

export interface FormControlLabelProps extends SpaceProps {
  control: ReactElement;
  label: ReactNode;
}

const UnstyledFormControlLabel: FC<FormControlLabelProps> = ({
  control,
  label,
  ...props
}) => {
  const disabled = useMemo(
    () => !!control.props.disabled,
    [control.props.disabled],
  );

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label {...props}>
      {control}
      <LabelText disabled={disabled}>{label}</LabelText>
    </label>
  );
};

const FormControlLabel = styled(UnstyledFormControlLabel)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  ${space}
`;

export default FormControlLabel;

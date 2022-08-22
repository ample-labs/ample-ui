import React, { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import Button, { ButtonProps } from '../Button/Button';

interface SegmentButtonProps extends ButtonProps {
  selected?: boolean;
}

const UnstyledSegmentButton: FC<PropsWithChildren<SegmentButtonProps>> = (
  props,
) => <Button variant="text" {...props} />;

const UnselectedCss = css`
  color: ${({ theme }) => theme.palette.grey2.main};
`;

const SegmentButton = styled(UnstyledSegmentButton)`
  padding: 7px 10px;
  ${({ selected }) => !selected && UnselectedCss}
`;

export default SegmentButton;

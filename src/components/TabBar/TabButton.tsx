import React, { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import Button, { ButtonProps } from '../Button/Button';

interface TabButtonProps extends ButtonProps {
  selected?: boolean;
}

const UnstyledTabButton: FC<PropsWithChildren<TabButtonProps>> = (props) => (
  <Button variant="text" {...props} />
);

const UnselectedCss = css`
  color: ${({ theme }) => theme.palette.grey2.main};
`;

const TabButton = styled(UnstyledTabButton)`
  padding: 10px 14px;
  ${({ selected }) => !selected && UnselectedCss}
`;

export default TabButton;

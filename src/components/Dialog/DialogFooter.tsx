import styled from 'styled-components';

export interface DialogFooterProps {}

const DialogFooter = styled.div<DialogFooterProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  flex: 0 0 auto;
  & > :not(:first-of-type) {
    margin-left: 8px;
  }
`;

export default DialogFooter;

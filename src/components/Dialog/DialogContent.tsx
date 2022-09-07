import styled from 'styled-components';

export interface DialogContentProps {}

const DialogContent = styled.div<DialogContentProps>`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 8px 24px;
`;

export default DialogContent;

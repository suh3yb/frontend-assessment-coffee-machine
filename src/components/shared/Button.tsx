import styled from 'styled-components';

export const SUB_BUTTON_HEIGHT = 56;
export const BUTTON_HEIGHT = 94;

export const SubButton = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${({ theme }) => theme.borderRadius};
  min-height: ${SUB_BUTTON_HEIGHT}px;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.buttonBgDark};
  color: ${({ theme }) => theme.color.textLight};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export const Button = styled(SubButton)`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  min-height: ${BUTTON_HEIGHT}px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.buttonBgLight};
`;

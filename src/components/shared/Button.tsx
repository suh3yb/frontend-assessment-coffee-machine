import styled from 'styled-components';

export const Button = styled.button.attrs(props => ({
  type: props.type || 'button',
}))`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  width: 100%;
  min-height: 94px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color.buttonBgLight};
  color: ${({ theme }) => theme.color.textLight};
  font-size: 14px;
  font-weight: bold;
`;

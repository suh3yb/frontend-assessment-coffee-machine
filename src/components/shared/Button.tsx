import styled from 'styled-components';

export const Button = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  width: 100%;
  min-height: 94px;
  background-color: ${({ theme }) => theme.color.buttonBgLight};
  color: ${({ theme }) => theme.color.textLight};
`;

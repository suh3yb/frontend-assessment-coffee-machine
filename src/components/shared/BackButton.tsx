import React from 'react';
import styled from 'styled-components';

import { Icon } from './Icon';

interface Props {
  label: string;
  onClick?: () => void;
}

const ButtonWrapper = styled.button.attrs({ type: 'button' })`
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  font-weight: inherit;
  font-size: inherit;
  letter-spacing: inherit;
  cursor: pointer;

  & > svg {
    width: 24px;
    margin-right; 4px;
  }
`;

export const BackButton: React.FC<Props> = ({ label, onClick }) => (
  <ButtonWrapper onClick={onClick}>
    <Icon name="chevronLeft" />
    <span>{label}</span>
  </ButtonWrapper>
);

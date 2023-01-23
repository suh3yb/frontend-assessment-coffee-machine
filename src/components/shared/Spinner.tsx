import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Icon } from './Icon';

interface Props {
  className?: string;
}

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  & > svg {
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.color.buttonBgDark};
    animation: ${rotate} 0.7s linear infinite;
  }
`;

export const Spinner: React.FC<Props> = ({ className }) => (
  <Wrapper className={className}>
    <Icon name="spinner" />
  </Wrapper>
);

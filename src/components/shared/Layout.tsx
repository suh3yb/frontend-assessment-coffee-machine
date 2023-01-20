import React from 'react';
import styled from 'styled-components';

import { Heading } from './Typography';

interface Props {
  subtitle: string;
  title: string;
  children?: React.ReactNode;
}

const Header = styled.header`
  padding: 16px;
`;

const Subtitle = styled(Heading)`
  margin-bottom: 4px;
`;

export const Layout: React.FC<Props> = ({ subtitle, title, children }) => (
  <>
    <Header>
      <Subtitle variant="subtitle">{subtitle}</Subtitle>
      <Heading variant="title">{title}</Heading>
    </Header>
    {children}
  </>
);

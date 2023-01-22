import React from 'react';
import styled from 'styled-components';

import { Heading } from './Typography';

export const PAGE_WIDTH = 375;

interface Props {
  subtitle: React.ReactNode;
  title: string;
  optionNodes?: React.ReactNode;
  children?: React.ReactNode;
}

const Section = styled.section`
  flex: 0 0 ${PAGE_WIDTH}px;
`;

const Header = styled.header`
  padding: 16px;
`;

const Subtitle = styled(Heading)`
  margin-bottom: 4px;
`;

const OptionList = styled.ul`
  padding: 0 16px;
`;

export const Layout: React.FC<Props> = ({
  subtitle,
  title,
  optionNodes,
  children,
}) => (
  <Section>
    <Header>
      <Subtitle variant="subtitle">{subtitle}</Subtitle>
      <Heading variant="title">{title}</Heading>
    </Header>
    {optionNodes && <OptionList>{optionNodes}</OptionList>}
    {children}
  </Section>
);

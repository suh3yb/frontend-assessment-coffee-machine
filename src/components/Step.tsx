import React, { useMemo } from 'react';
import styled from 'styled-components';

import type { Action } from '../types';
import { Layout } from './shared/Layout';
import { Button as BaseButton } from './shared/Button';

type Option = { _id: string; name: string };

interface Props {
  subtitle: string;
  title: string;
  options: Option[];
  dispatch: React.Dispatch<Action>;
}

const OptionList = styled.ul`
  padding: 0 16px;
`;

const Button = styled(BaseButton)`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Step: React.FC<Props> = ({ subtitle, title, options }) => {
  const mapOptionsToButtons = useMemo(
    () =>
      options.map(option => (
        <Button key={option._id} as="li">
          {option.name}
        </Button>
      )),
    [options]
  );

  return (
    <Layout subtitle={subtitle} title={title}>
      <OptionList>{mapOptionsToButtons}</OptionList>
    </Layout>
  );
};

export default Step;

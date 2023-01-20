import React, { useMemo, useCallback } from 'react';
import styled from 'styled-components';

import type { Action } from '../types';
import { Layout } from './shared/Layout';
import { Button as BaseButton } from './shared/Button';
import { Icon } from './shared/Icon';

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

  & > svg {
    margin-right: 20px;
    width: 48px;
    height: 48px;
  }
`;

const Step: React.FC<Props> = ({ subtitle, title, options, dispatch }) => {
  const handleButtonClick = useCallback(
    (id: string) => {
      dispatch({ type: 'setType', payload: id });
      dispatch({ type: 'setActiveStepIndex', payload: 1 });
    },
    [dispatch]
  );

  const mapOptionsToButtons = useMemo(
    () =>
      options.map(option => (
        <Button
          key={option._id}
          as="li"
          onClick={() => handleButtonClick(option._id)}
        >
          <Icon name={option._id} />
          <span>{option.name}</span>
        </Button>
      )),
    [handleButtonClick, options]
  );

  return (
    <Layout subtitle={subtitle} title={title}>
      <OptionList>{mapOptionsToButtons}</OptionList>
    </Layout>
  );
};

export default Step;

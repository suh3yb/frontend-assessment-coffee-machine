import React, { useCallback } from 'react';

import { Action, State } from '../../types';
import { Layout } from '../shared/Layout';
import { BackButton } from '../shared/BackButton';
import { Button } from '../shared/Button';
import { Icon } from '../shared/Icon';

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const OverviewStep: React.FC<Props> = ({ state, dispatch }) => {
  const handleBackButton = useCallback(() => {
    dispatch({ type: 'setActiveStepIndex', payload: 2 });
  }, [dispatch]);

  return (
    <Layout
      subtitle={<BackButton label="Brew with Lex" onClick={handleBackButton} />}
      title="Select your extra's"
      optionNodes={
        <>
          <Button
            as="li"
            onClick={() => dispatch({ type: 'setActiveStepIndex', payload: 0 })}
          >
            <Icon name={state.selectedType!.id} />
            <span>{state.selectedType!.name}</span>
          </Button>
          <Button
            as="li"
            onClick={() => dispatch({ type: 'setActiveStepIndex', payload: 1 })}
          >
            <Icon name={state.selectedSize!.id} />
            <span>{state.selectedSize!.name}</span>
          </Button>
        </>
      }
    />
  );
};

export default OverviewStep;

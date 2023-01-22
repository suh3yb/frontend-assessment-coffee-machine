import React, { useCallback, useMemo } from 'react';

import { Action, State } from '../../types';
import { OptionWithSubselection } from '../shared/OptionWithSubselection';
import { Layout } from '../shared/Layout';
import { BackButton } from '../shared/BackButton';

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const CoffeeExtrasStep: React.FC<Props> = ({ state, dispatch }) => {
  const handleBackButton = useCallback(() => {
    dispatch({ type: 'setActiveStepIndex', payload: 1 });
  }, [dispatch]);

  const handleExtraSelection = useCallback(
    ({
      optionId,
      optionName,
      subselectionId,
      subselectionName,
    }: {
      optionId: string;
      optionName: string;
      subselectionId: string;
      subselectionName: string;
    }): void => {
      dispatch({
        type: 'addExtra',
        payload: {
          extra: { id: optionId, name: optionName },
          subselection: { id: subselectionId, name: subselectionName },
        },
      });
    },
    [dispatch]
  );

  const mapOptionsToButtons = useMemo(
    () =>
      state.availableExtras?.map(extra => (
        <OptionWithSubselection
          key={extra._id}
          option={extra}
          selectedExtras={state.selectedExtras}
          handler={handleExtraSelection}
        />
      )),
    [handleExtraSelection, state.availableExtras, state.selectedExtras]
  );

  return (
    <Layout
      subtitle={<BackButton label="Brew with Lex" onClick={handleBackButton} />}
      title="Select your extra's"
      optionNodes={mapOptionsToButtons}
    />
  );
};

export default CoffeeExtrasStep;

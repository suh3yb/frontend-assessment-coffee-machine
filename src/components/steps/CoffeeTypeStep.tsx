import React, { useCallback, useMemo } from 'react';

import { StepProps } from '../../types';
import { getSizesAndExtras } from '../../utils/dataHelpers';
import { Layout } from '../shared/Layout';
import { Option } from '../shared/Option';

const CoffeeTypeStep: React.FC<StepProps> = ({ state, dispatch }) => {
  const handleTypeSelection = useCallback(
    ({ id, name }: { id: string; name: string }): void => {
      if (!state.coffeeData) return;
      // @TODO add error handling
      const { sizes, extras } = getSizesAndExtras(state.coffeeData, id);

      dispatch({ type: 'reset' });
      dispatch({ type: 'setType', payload: { id, name } });
      dispatch({ type: 'setAvailableSizes', payload: sizes });
      dispatch({ type: 'setAvailableExtras', payload: extras });
      dispatch({ type: 'setActiveStepIndex', payload: 1 });
    },
    [state.coffeeData, dispatch]
  );

  const mapOptionsToButtons = useMemo(
    () =>
      state.coffeeData?.types.map(coffeeType => (
        <Option
          key={coffeeType._id}
          option={coffeeType}
          handler={handleTypeSelection}
        />
      )),
    [state.coffeeData?.types, handleTypeSelection]
  );

  return (
    <Layout
      subtitle="Brew with Lex"
      title="Select your style"
      optionNodes={mapOptionsToButtons}
    />
  );
};

export default CoffeeTypeStep;

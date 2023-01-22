import React, { useCallback, useMemo } from 'react';

import { Action, CoffeeDataResponse } from '../../types';
import { getSizesAndExtras } from '../../utils/dataHelpers';
import { Layout } from '../shared/Layout';
import { Option } from '../shared/Option';

interface Props {
  coffeeData: CoffeeDataResponse;
  dispatch: React.Dispatch<Action>;
}

const CoffeeTypeStep: React.FC<Props> = ({ coffeeData, dispatch }) => {
  const handleTypeSelection = useCallback(
    ({ id, name }: { id: string; name: string }): void => {
      // @TODO add error handling
      const { sizes, extras } = getSizesAndExtras(coffeeData, id);

      dispatch({ type: 'reset' });
      dispatch({ type: 'setType', payload: { id, name } });
      dispatch({ type: 'setAvailableSizes', payload: sizes });
      dispatch({ type: 'setAvailableExtras', payload: extras });
      dispatch({ type: 'setActiveStepIndex', payload: 1 });
    },
    [coffeeData, dispatch]
  );

  const mapOptionsToButtons = useMemo(
    () =>
      coffeeData.types.map(coffeeType => (
        <Option
          key={coffeeType._id}
          option={coffeeType}
          handler={handleTypeSelection}
        />
      )),
    [coffeeData.types, handleTypeSelection]
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

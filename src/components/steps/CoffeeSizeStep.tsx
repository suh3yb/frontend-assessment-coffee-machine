import React, { useCallback, useMemo } from 'react';

import { StepProps } from '../../types';
import { Option } from '../shared/Option';
import { Layout } from '../shared/Layout';
import { BackButton } from '../shared/BackButton';

const CoffeeSizeStep: React.FC<StepProps> = ({ state, dispatch }) => {
  const handleBackButton = useCallback(() => {
    dispatch({ type: 'setActiveStepIndex', payload: 0 });
  }, [dispatch]);

  const handleSizeSelection = useCallback(
    ({ id, name }: { id: string; name: string }) => {
      dispatch({ type: 'setSize', payload: { id, name } });
      dispatch({ type: 'setActiveStepIndex', payload: 2 });
    },
    [dispatch]
  );

  const mapOptionsToButtons = useMemo(
    () =>
      state.availableSizes?.map(size => (
        <Option key={size._id} option={size} handler={handleSizeSelection} />
      )),
    [state.availableSizes, handleSizeSelection]
  );

  return (
    <Layout
      subtitle={<BackButton label="Brew with Lex" onClick={handleBackButton} />}
      title="Select your size"
      optionNodes={mapOptionsToButtons}
    />
  );
};

export default CoffeeSizeStep;

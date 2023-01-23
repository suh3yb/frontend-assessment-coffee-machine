import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Action, State } from '../../types';
import { Layout } from '../shared/Layout';
import { BackButton } from '../shared/BackButton';
import { OverviewItem } from '../shared/OverviewItem';
import { Separator } from '../shared/Separator';

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const OverviewWrapper = styled.ul`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.buttonBgLight};
  overflow: hidden;
`;

const OverviewStep: React.FC<Props> = ({ state, dispatch }) => {
  const handleBackButton = useCallback(() => {
    dispatch({ type: 'setActiveStepIndex', payload: 2 });
  }, [dispatch]);

  const selectedExtraIds = Object.keys(state.selectedExtras);

  return (
    <Layout
      subtitle={<BackButton label="Brew with Lex" onClick={handleBackButton} />}
      title="Select your extra's"
      optionNodes={
        <OverviewWrapper>
          {state.selectedType && (
            <>
              <OverviewItem
                selectedOption={state.selectedType}
                onClick={() =>
                  dispatch({ type: 'setActiveStepIndex', payload: 0 })
                }
              />
            </>
          )}
          {state.selectedSize && (
            <>
              <Separator />
              <OverviewItem
                selectedOption={state.selectedSize!}
                onClick={() =>
                  dispatch({ type: 'setActiveStepIndex', payload: 1 })
                }
              />
            </>
          )}
          {selectedExtraIds.length > 0 &&
            selectedExtraIds.map(extraId => (
              <React.Fragment key={extraId}>
                <Separator />
                <OverviewItem
                  selectedOption={{
                    id: extraId,
                    ...state.selectedExtras[extraId],
                  }}
                  onClick={() =>
                    dispatch({ type: 'setActiveStepIndex', payload: 2 })
                  }
                />
              </React.Fragment>
            ))}
        </OverviewWrapper>
      }
    />
  );
};

export default OverviewStep;

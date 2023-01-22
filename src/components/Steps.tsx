import React, { useEffect } from 'react';
import styled from 'styled-components';

import type { State, Action } from '../types';
import CoffeeTypeStep from './steps/CoffeeTypeStep';
import CoffeeSizeStep from './steps/CoffeeSizeStep';
import CoffeeExtrasStep from './steps/CoffeeExtrasStep';
import OverviewStep from './steps/OverviewStep';

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const PAGE_WIDTH = 375;

const Container = styled.div`
  width: 100vw;
  max-width: ${PAGE_WIDTH}px;
  overflow: hidden;
`;

const Wrapper = styled.div<{ activeStepIndex: number }>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  transform: translateX(
    ${({ activeStepIndex }) => activeStepIndex * PAGE_WIDTH * -1}px
  );
`;

const Steps: React.FC<Props> = ({ state, dispatch }) => {
  useEffect(() => {
    if (state.availableExtras && state.activeStepIndex === 2) {
      let isAllSelected = true;

      state.availableExtras.forEach(extra => {
        if (!Object.keys(state.selectedExtras).includes(extra._id)) {
          isAllSelected = false;
        }
      });

      if (isAllSelected) {
        dispatch({ type: 'setActiveStepIndex', payload: 3 });
      }
    }
  }, [
    dispatch,
    state.activeStepIndex,
    state.availableExtras,
    state.selectedExtras,
  ]);

  if (!state.coffeeData) return null; // @TODO update here

  return (
    <Container>
      <Wrapper activeStepIndex={state.activeStepIndex}>
        <CoffeeTypeStep coffeeData={state.coffeeData} dispatch={dispatch} />
        {state.availableSizes && (
          <CoffeeSizeStep sizes={state.availableSizes} dispatch={dispatch} />
        )}
        {state.availableExtras && (
          <CoffeeExtrasStep state={state} dispatch={dispatch} />
        )}
        {state.selectedType &&
          state.selectedSize &&
          Object.keys(state.selectedExtras).length > 0 && (
            <OverviewStep state={state} dispatch={dispatch} />
          )}
      </Wrapper>
    </Container>
  );
};

export default Steps;

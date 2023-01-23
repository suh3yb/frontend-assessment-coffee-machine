import React, { useEffect } from 'react';
import styled from 'styled-components';

import { PAGE_WIDTH } from '../theme';
import type { State, Action } from '../types';
import CoffeeTypeStep from './steps/CoffeeTypeStep';
import CoffeeSizeStep from './steps/CoffeeSizeStep';
import CoffeeExtrasStep from './steps/CoffeeExtrasStep';
import OverviewStep from './steps/OverviewStep';
import { ErrorMessage } from './shared/Typography';

interface Props {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const Container = styled.div`
  width: 100vw;
  max-width: ${PAGE_WIDTH}px;
  margin: 0 auto;
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
  transition: transform 0.7s ease;
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

  if (!state.coffeeData) {
    return (
      <ErrorMessage>
        Coffee data is missing, please refresh the page
      </ErrorMessage>
    );
  }

  return (
    <Container>
      <Wrapper activeStepIndex={state.activeStepIndex}>
        <CoffeeTypeStep state={state} dispatch={dispatch} />
        {state.availableSizes && (
          <CoffeeSizeStep state={state} dispatch={dispatch} />
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

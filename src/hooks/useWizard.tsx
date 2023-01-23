import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';

import type { State, Action } from '../types';
import Steps from '../components/Steps';
import { useCoffeeMachineConnection } from './useCoffeeMachineConnection';
import { useCoffeeData } from './useCoffeeData';
import { ErrorMessage } from '../components/shared/Typography';
import { Spinner } from '../components/shared/Spinner';
import Landing from '../components/Landing';

type UseWizard = () => React.ReactNode;

const initialState: State = {
  coffeeData: undefined,
  activeStepIndex: 0,
  selectedType: null,
  availableSizes: null,
  availableExtras: null,
  selectedSize: null,
  selectedExtras: {},
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setCoffeeData':
      return { ...state, coffeeData: action.payload };
    case 'setActiveStepIndex':
      return { ...state, activeStepIndex: action.payload };
    case 'setType':
      return { ...state, selectedType: action.payload };
    case 'setAvailableSizes':
      return { ...state, availableSizes: action.payload };
    case 'setAvailableExtras':
      return { ...state, availableExtras: action.payload };
    case 'setSize':
      return { ...state, selectedSize: action.payload };
    case 'addExtra':
      return {
        ...state,
        selectedExtras: {
          ...state.selectedExtras,
          [action.payload.extra.id]: {
            name: action.payload.extra.name,
            subselection: {
              id: action.payload.subselection.id,
              name: action.payload.subselection.name,
            },
          },
        },
      };
    case 'reset':
      return { ...initialState, coffeeData: state.coffeeData };
    default:
      throw new Error('Unknown action type');
  }
};

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const useWizard: UseWizard = () => {
  const machineId = useCoffeeMachineConnection();
  const { coffeeData, error, isLoading } = useCoffeeData(machineId);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!coffeeData) return;
    dispatch({ type: 'setCoffeeData', payload: coffeeData });
  }, [coffeeData]);

  if (error || isLoading) {
    return (
      <PageContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {isLoading && <Spinner />}
      </PageContainer>
    );
  }

  if (!state.coffeeData) {
    return <Landing />;
  }

  return <Steps state={state} dispatch={dispatch} />;
};

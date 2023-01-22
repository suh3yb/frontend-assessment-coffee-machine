import React, { useEffect, useReducer } from 'react';

import type { CoffeeDataResponse, State, Action } from '../types';
import Steps from '../components/Steps';

type UseWizard = (
  coffeeData: CoffeeDataResponse | undefined
) => React.ReactNode | null;

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

export const useWizard: UseWizard = coffeeData => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!coffeeData) return;
    dispatch({ type: 'setCoffeeData', payload: coffeeData });
  }, [coffeeData]);

  if (!coffeeData) return null;

  return <Steps state={state} dispatch={dispatch} />;
};

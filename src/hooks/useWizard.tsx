import React, { useReducer } from 'react';

import type { CoffeeDataResponse, State, Action } from '../types';
import Step from '../components/Step';

type UseWizard = (
  coffeeData: CoffeeDataResponse | undefined
) => React.ReactNode | null;

const initialState: State = {
  activeStepIndex: 0,
  selectedType: null,
  selectedSize: null,
  selectedExtras: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setActiveStepIndex':
      return { ...state, activeStepIndex: action.payload };
    case 'setType':
      return { ...state, selectedType: action.payload };
    case 'setSize':
      return { ...state, selectedSize: action.payload };
    case 'addExtra':
      return {
        ...state,
        selectedExtras: [...state.selectedExtras, action.payload],
      };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action type');
  }
}

export const useWizard: UseWizard = coffeeData => {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (!coffeeData) return null;

  const getActiveStepComponent = (): React.ReactNode => {
    if (state.activeStepIndex === 0) {
      return (
        <Step
          subtitle="Brew with Lex"
          title="Select you style"
          options={coffeeData.types}
          dispatch={dispatch}
        />
      );
    }
    return null;
  };

  return getActiveStepComponent();
};

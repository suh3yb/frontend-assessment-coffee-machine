import React from 'react';
import InitialStep from '../components/steps/InitialStep';
// import { useCoffeeData } from './useCoffeeData';
import type { MachineId } from './useCoffeeMachineConnection';

type UseWizard = (machineId: MachineId) => {
  CurrentStep: React.FunctionComponent;
};

export const useWizard: UseWizard = machineId => {
  // const { coffeeData, error, isLoading } = useCoffeeData(machineId);
  return { CurrentStep: InitialStep };
};

import { useState, useCallback, useEffect } from 'react';

import type { CoffeeDataResponse } from '../types';
import {
  DEFAULT_ERROR_MESSAGE,
  getErrorMessage,
} from '../utils/getErrorMessage';
import type { MachineId } from './useCoffeeMachineConnection';

type UseCoffeeData = (machineId: MachineId) => {
  coffeeData: CoffeeDataResponse | undefined;
  error: string | undefined;
  isLoading: boolean;
};

const BASE_URL = 'https://darkroastedbeans.coffeeit.nl/coffee-machine/';

export const useCoffeeData: UseCoffeeData = machineId => {
  const [coffeeData, setCoffeeData] = useState<
    CoffeeDataResponse | undefined
  >();
  const [error, setError] = useState<string | undefined>();

  const fetchCoffeeData = useCallback(async () => {
    try {
      const res = await fetch(`${BASE_URL}${machineId}`);
      if (!res.ok) {
        throw new Error(DEFAULT_ERROR_MESSAGE);
      }
      const response = await res.json();
      setCoffeeData(response);
    } catch (error) {
      setError(getErrorMessage(error, DEFAULT_ERROR_MESSAGE));
    }
  }, [machineId]);

  useEffect(() => {
    if (machineId) {
      fetchCoffeeData();
    } else {
      setCoffeeData(undefined);
      setError(undefined);
    }
  }, [fetchCoffeeData, machineId]);

  return {
    coffeeData,
    error,
    isLoading: machineId ? !coffeeData && !error : false,
  };
};

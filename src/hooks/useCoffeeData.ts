import { useState, useCallback, useEffect } from 'react';

import type { CoffeeDataResponse } from '../types';
import {
  DEFAULT_ERROR_MESSAGE,
  getErrorMessage,
} from '../utils/getErrorMessage';

type UseCoffeeData = (machineId: string) => {
  coffeeData: CoffeeDataResponse | undefined;
  error: unknown; // @TODO update error type
  isLoading: boolean;
};

const BASE_URL = 'https://darkroastedbeans.coffeeit.nl/coffee-machine/';

export const useCoffeeData: UseCoffeeData = machineId => {
  const [coffeeData, setCoffeeData] = useState<
    CoffeeDataResponse | undefined
  >();
  const [error, setError] = useState<unknown>();

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
    fetchCoffeeData();
  }, [fetchCoffeeData]);

  return {
    coffeeData,
    error,
    isLoading: !coffeeData && !error,
  };
};

import { useEffect, useState } from 'react';

const MOCK_MACHINE_ID = '60ba1ab72e35f2d9c786c610';

export type MachineId = string | null;

type UseCoffeeMachineConnection = () => MachineId;

export const useCoffeeMachineConnection: UseCoffeeMachineConnection = () => {
  const [machineId, setMachineId] = useState<MachineId>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const timeoutMachineId = window.setTimeout(() => {
      setMachineId(MOCK_MACHINE_ID);
    }, 4000);

    return () => {
      window.clearTimeout(timeoutMachineId);
    };
  }, []);

  return machineId;
};

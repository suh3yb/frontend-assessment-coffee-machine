import { useEffect, useState } from 'react';

const MOCK_MACHINE_ID = '60ba1ab72e35f2d9c786c610';

export type MachineId = string | null;

type UseCoffeeMachineConnection = () => {
  machineId: MachineId;
  isConnecting: boolean;
};

export const useCoffeeMachineConnection: UseCoffeeMachineConnection = () => {
  const [machineId, setMachineId] = useState<MachineId>(null);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const timeoutConnection = window.setTimeout(() => {
      setIsConnecting(true);
    }, 2000);
    const timeoutMachineId = window.setTimeout(() => {
      setIsConnecting(false);
      setMachineId(MOCK_MACHINE_ID);
    }, 4000);

    return () => {
      window.clearTimeout(timeoutConnection);
      window.clearTimeout(timeoutMachineId);
    };
  }, []);

  return { machineId, isConnecting };
};

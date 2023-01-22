import React from 'react';

import { useWizard } from './hooks/useWizard';
import { useCoffeeMachineConnection } from './hooks/useCoffeeMachineConnection';
import { useCoffeeData } from './hooks/useCoffeeData';
import Landing from './components/Landing';

const App: React.FC = () => {
  const machineId = useCoffeeMachineConnection();
  const { coffeeData, error, isLoading } = useCoffeeData(machineId);
  const Steps = useWizard(coffeeData);

  // @TODO update error message, add spinner
  return (
    <main>
      {error && <h1>{error}</h1>}
      {isLoading && <p>SPINNER</p>}
      {Steps ? Steps : <Landing />}
    </main>
  );
};

export default App;

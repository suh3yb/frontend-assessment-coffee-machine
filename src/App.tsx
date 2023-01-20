import React from 'react';
import styled from 'styled-components';

import { useWizard } from './hooks/useWizard';
import { useCoffeeMachineConnection } from './hooks/useCoffeeMachineConnection';
import { useCoffeeData } from './hooks/useCoffeeData';
import Landing from './components/Landing';

const Main = styled.main`
  min-height: 100vh;
`;

const App: React.FC = () => {
  const machineId = useCoffeeMachineConnection();
  const { coffeeData, error, isLoading } = useCoffeeData(machineId);
  const ActiveStep = useWizard(coffeeData);

  // @TODO update error message, add spinner
  return (
    <Main>
      {error && <h1>{error}</h1>}
      {isLoading && <p>SPINNER</p>}
      {ActiveStep ? ActiveStep : <Landing />}
    </Main>
  );
};

export default App;

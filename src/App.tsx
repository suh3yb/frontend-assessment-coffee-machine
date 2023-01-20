import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from './theme';
import './theme/font-faces.css';

import { useWizard } from './hooks/useWizard';
import { useCoffeeMachineConnection } from './hooks/useCoffeeMachineConnection';

const Main = styled.main`
  min-height: 100vh;
`;

const App: React.FC = () => {
  const { machineId, isConnecting } = useCoffeeMachineConnection();
  const { CurrentStep } = useWizard(machineId);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <CurrentStep />
      </Main>
    </ThemeProvider>
  );
};

export default App;

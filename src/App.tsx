import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from './theme';
import './theme/font-faces.css';

import InitialStep from './components/steps/InitialStep';

const Main = styled.main`
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <InitialStep />
      </Main>
    </ThemeProvider>
  );
};

export default App;

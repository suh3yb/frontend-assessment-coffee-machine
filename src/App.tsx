import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from './theme';
import { useWizard } from './hooks/useWizard';

const App: React.FC = () => {
  const Wizard = useWizard();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{Wizard}</main>
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from './theme';
import './theme/font-faces.css';

interface Props {
  children?: React.ReactNode;
}

const Main = styled.main`
  min-height: 100vh;
`;

const App: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default App;

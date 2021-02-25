import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from 'Routes';
import Dashboard from 'levels/Dashboard';

import { GlobalStyles, theme } from 'index.styled';

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Dashboard />
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;

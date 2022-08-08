import React from 'react';

import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import { dark, light } from './styles';

const App: React.FC = () => {
  const themeStore = useSelector((state: Store) => state.auth.theme);

  return (
    <ThemeProvider theme={themeStore === 'light' ? light : dark}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;

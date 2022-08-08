import React from 'react';

import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import { dark, light } from './styles';

const App: React.FC = () => {
  const themeType = useSelector((state: Store) => state.auth.themeType);

  return (
    <ThemeProvider theme={themeType === 'light' ? light : dark}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;

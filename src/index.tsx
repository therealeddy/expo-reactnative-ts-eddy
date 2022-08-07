import React from 'react';

import './config/reactotron';

import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { LogBox, StatusBar } from 'react-native';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';

import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from './store';

import Routes from './routes';
import theme from './global/styles/theme';

LogBox.ignoreLogs(['expo-app-loading']);

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <Routes />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

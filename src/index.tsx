import 'react-native-gesture-handler';
import '~/config/ReactotronConfig';

import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store, persistor } from '~/store';

import Routes from '~/routes';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;

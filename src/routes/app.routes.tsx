import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '~/pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  const screenOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: '#7159c1' },
  };

  return (
    <App.Navigator screenOptions={screenOptions}>
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  );
};

export default AppRoutes;

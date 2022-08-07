import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn, Splash } from '../screens';

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;

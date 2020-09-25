import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  const screenOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: '#7159c1' },
  };

  return (
    <Auth.Navigator screenOptions={screenOptions}>
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;

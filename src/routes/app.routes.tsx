import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialIcons } from '@expo/vector-icons';

import {
  Listing,
  FormExample,
  ScreenTab,
  ScreenStack,
  Splash,
} from '../screens';

export type RootStackParamList = {
  [key: string]: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator<RootStackParamList>();

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.third,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Tab.Screen
        name="Listing"
        component={Listing}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              color={color}
              size={size}
              name="format-list-bulleted"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Form Example"
        component={FormExample}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons color={color} size={size} name="dynamic-form" />
          ),
        }}
      />
      <Tab.Screen
        name="Screen Tab"
        component={ScreenTab}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons color={color} size={size} name="fit-screen" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Screen Stack" component={ScreenStack} />
    </Stack.Navigator>
  );
};

export default AppRoutes;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoutes } from '../components';
import OnBoarding from './OnBoarding';
import Welcome from './Welcome';
import Login from './Login';

const AuthenticationStack = createNativeStackNavigator<AppRoutes>();
export const AuthenticationNavigation = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>  
  )
}


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from '@shopify/restyle';

import { OnBoarding, Welcome } from './src/Authentication';
import { theme, AppRoutes } from './src/components';

const AuthenticationStack = createNativeStackNavigator<AppRoutes>();
const AuthenticationNavigation = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>  
  )
}

export default function App() {
  return (
    <ThemeProvider {...{theme}}>
      <NavigationContainer>
        <AuthenticationNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

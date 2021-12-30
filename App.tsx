import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnBoarding } from './src/Authentication';

const AuthenticationStack = createNativeStackNavigator();
const AuthenticationNavigation = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        header: () => null
      }}
    >
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    </AuthenticationStack.Navigator>  
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthenticationNavigation />
    </NavigationContainer>
  );
}

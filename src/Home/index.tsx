import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OutfitIdeas from './OutfitIdeas'

const Drawer = createDrawerNavigator();
const HomeNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{
      header: () => null
    }}
>
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Drawer.Navigator>
  )
}

export default HomeNavigation;

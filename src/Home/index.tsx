import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OutfitIdeas from './OutfitIdeas';
import DrawerContent, {DRAWER_WIDTH} from './Drawer';

const Drawer = createDrawerNavigator();
const HomeNavigation = () => {
  return (
    <Drawer.Navigator 
      screenOptions={{
        header: () => null,
        drawerStyle: {
          width: DRAWER_WIDTH,
        }  
      }}
      drawerContent={DrawerContent}
    >
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Drawer.Navigator>
  )
}

export default HomeNavigation;

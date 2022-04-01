import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OutfitIdeas from './OutfitIdeas';
import DrawerContent, {DRAWER_WIDTH} from './Drawer';
import FavoriteOutfits from './FavoriteOutfits';

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
      <Drawer.Screen name="FavoriteOutfits" component={FavoriteOutfits} />
    </Drawer.Navigator>
  )
}

export default HomeNavigation;

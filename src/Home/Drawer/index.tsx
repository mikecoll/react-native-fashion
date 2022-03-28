import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Box} from '../../components/Theme';


const {width} = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items = [
  {
    icon: 'flash',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: 'rgba(37,200,162,1)'
  },
  {
    icon: 'favorite',
    label: 'Favorite Outfits',
    screen: 'FavoriteOutfits',
    color: 'rgba(238,56,37,1)'
  },
  {
    icon: 'person',
    label: 'Edit Profile',
    screen: 'EditProfile',
    color: 'rgba(244,198,45,1)'
  },
  {
    icon: 'clock',
    label: 'Transaction History',
    screen: 'TransactionHistory',
    color: 'rgba(240,141,151,1)'
  },
  {
    icon: 'setting',
    label: 'Notifications Settings',
    screen: 'NotificationsSettings',
    color: 'rgba(64,33,175,1)'
  },
  {
    icon: 'left',
    label: 'Logout',
    screen: 'Logout',
    color: 'rgba(14,13,44,1)'
  },
]

interface DrawerProps {
};

const Drawer: React.FC<DrawerProps> = props => {
  const {} = props;

  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor={"white"}>
        <Box position="absolute" top={0} left={0} bottom={0} right={0} borderBottomRightRadius={"xl"} backgroundColor={"secondary"} />
      </Box>
      <Box flex={0.8} backgroundColor={"white"}>
        <Box flex={1} backgroundColor={"secondary"} />
        <Box flex={1} backgroundColor={"primary"} />
        <Box position="absolute" top={0} left={0} bottom={0} right={0} backgroundColor={"white"} borderTopLeftRadius={"xl"} borderBottomRightRadius={"xl"}  />
      </Box>
      <Box flex={0.2} backgroundColor={"white"} width={DRAWER_WIDTH} overflow="hidden" height={height * 0.6}>
        <Image 
          source={require('../../assets/pattern3.png')}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined
          }}
        />
      </Box>
    </Box>
  )
};

export default Drawer;

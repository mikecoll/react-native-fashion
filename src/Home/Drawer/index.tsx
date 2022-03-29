import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RoundedIconButton from '../../components/RoundedIconButton';
import {Box, Text} from '../../components/Theme';
import DrawerItem from './DrawerItem';

const {width} = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

const items = [
  {
    icon: 'zap',
    label: 'Outfit Ideas',
    screen: 'OutfitIdeas',
    color: 'primary',
  },
  {
    icon: 'heart',
    label: 'Favorite Outfits',
    screen: 'FavoriteOutfits',
    color: 'orange'
  },
  {
    icon: 'user',
    label: 'Edit Profile',
    screen: 'EditProfile',
    color: 'yellow'
  },
  {
    icon: 'clock',
    label: 'Transaction History',
    screen: 'TransactionHistory',
    color: 'pink'
  },
  {
    icon: 'settings',
    label: 'Notifications Settings',
    screen: 'NotificationsSettings',
    color: 'violet'
  },
  {
    icon: 'log-out',
    label: 'Logout',
    screen: 'Logout',
    color: 'secondary'
  },
]

interface DrawerProps {
};

const Drawer: React.FC<DrawerProps> = props => {
  const {} = props;
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor={"white"}>
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          bottom={0} 
          right={0} 
          borderBottomRightRadius={"xl"} 
          backgroundColor={"secondary"}
          flexDirection="row"
          justifyContent="space-between"
          paddingHorizontal='m'
          style={{
            paddingTop: insets.top
          }}
        >
          <RoundedIconButton
            size={24}
            name="x"
            color="white"
            backgroundColor="secondary"
            onPress={() => {}}
          />
          <Text color="white">MY PROFILE</Text>
          <RoundedIconButton
            size={24}
            name="shopping-bag"
            color="white"
            backgroundColor="secondary"
            onPress={() => {}}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor={"secondary"} />
        <Box flex={1} backgroundColor={"primaryLight"} />
        <Image 
          source={require('../../assets/pattern3.png')}
          style={{
            position:'absolute',
            bottom: -height * 0.6,
            left: 0,
            right: 0,
            width: DRAWER_WIDTH,
            height: height,
          }}
        />
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          bottom={0} 
          right={0} 
          backgroundColor={"white"} 
          borderTopLeftRadius={"xl"} 
          borderBottomRightRadius={"xl"}
          justifyContent={"center"}
          padding={'xl'}
        >
          <Box
            width={100}
            height={100}
            position="absolute"
            top={-50}
            left={DRAWER_WIDTH / 2 - 50}
            alignItems="center"
            backgroundColor="primary"
            style={{
              borderRadius: 50,
            }}
          />
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">Mike Peter</Text>
            <Text variant="body" textAlign="center">mike@flexinstudio.com</Text>
          </Box>
          {items.map(item => (
            <DrawerItem key={item.screen} {...item} />
          ))}
        </Box>
      </Box>
      <Box flex={0.2} backgroundColor={"white"} width={DRAWER_WIDTH} overflow="hidden" height={height * 0.6}>
       <Image 
          source={require('../../assets/pattern3.png')}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
          }}
        />
      </Box>
    </Box>
  )
};

export default Drawer;

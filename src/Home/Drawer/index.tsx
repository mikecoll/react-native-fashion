import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import {Box, Text, useTheme} from '../../components/Theme';
import DrawerItem from './DrawerItem';
import Header from '../../components/Header';
import { CommonActions } from '@react-navigation/native';

const {width} = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 750 / 1125;
const height = DRAWER_WIDTH * aspectRatio;

interface BaseDrawerItem {
  icon: string;
  color: string;
  label: string;
}
interface ScreenDrawerItem extends BaseDrawerItem {
  screen: string;
}
interface OnPressDrawerItem extends BaseDrawerItem {
  onPress: (navigation: NavigationType) => void;
}

type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

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
    onPress: (navigation) => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'OnBoarding' }
          ]
        })
      );
    },
    color: 'secondary'
  },
]

interface DrawerProps {
};

const Drawer: React.FC<DrawerProps> = props => {
  const {navigation} = props;
  const theme = useTheme();
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor={"background"}>
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          bottom={0} 
          right={0} 
          borderBottomRightRadius={"xl"} 
          backgroundColor={"secondary"}
        >
          <Header
            left={{
              icon: 'x',
              onPress: () => navigation.closeDrawer()
            }}
            title="my profile"
            right={{
              icon: 'shopping-bag',
              onPress: () => {}
            }}
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor={"secondary"} />
        <Box 
          position="absolute" 
          top={0} 
          left={0} 
          bottom={0} 
          right={0} 
          backgroundColor={"background"} 
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
      <Box flex={0.2} backgroundColor={"background"} width={DRAWER_WIDTH} overflow="hidden" height={height * 0.6}>
       <Image 
          source={require('../../assets/drawer.png')}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: DRAWER_WIDTH,
            height: height,
            borderTopLeftRadius: theme.borderRadii.xl
          }}
        />
      </Box>
    </Box>
  )
};

export default Drawer;

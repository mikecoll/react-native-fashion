import { useNavigation } from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {ScrollView, Dimensions} from 'react-native';
import {Transitioning, Transition} from 'react-native-reanimated';

import Header from '../../components/Header';
import { Box, useTheme } from '../../components/Theme';
import Footer from './Footer';
import Outfit from './Outfit';
import TopCurve from './TopCurve';

const {width: wWidth} = Dimensions.get("window");

const defaultOutfits = [
  {
    id: 1,
    color: '#BFEAF5',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 2,
    color: '#BEECC4',
    aspectRatio: 200 / 145,
    selected: false,
  },
  {
    id: 3,
    color: '#FFE4D9',
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 4,
    color: '#FFDDDD',
    aspectRatio: 180 / 145,
    selected: false,
  },
  {
    id: 5,
    color: '#BFEAF5',
    aspectRatio: 1,
    selected: false,
  },
  {
    id: 6,
    color: '#F3F0EF',
    aspectRatio: 120 / 145,
    selected: false,
  },
  {
    id: 7,
    color: '#D5C3BB',
    aspectRatio: 210 / 145,
    selected: false,
  },
  {
    id: 8,
    color: '#DEEFC4',
    aspectRatio: 160 / 145,
    selected: false,
  },
];

interface FavoriteOutfitsProps {
};

const FavoriteOutfits: React.FC<FavoriteOutfitsProps> = props => {
  const {} = props;
  const navigation = useNavigation();
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 3) / 2;
  const [footerHeight, setFooterHeight] = useState(0);
  const [outfits, setOutfits] = useState(defaultOutfits);
  const list = useRef(null);

  const transition = (
    <Transition.Together>
      <Transition.Change interpolation={'easeInOut'} durationMs={1000} />
    </Transition.Together>
  )

  return (
    <Box flex={1} backgroundColor="white">
      <Header
      title="Outfit Ideas"
      left={{
        icon: 'menu',
        onPress: () => navigation.openDrawer()
      }}
      right={{
        icon: 'shopping-bag',
        onPress: () => {}
      }}
      dark={false}
    />
    <Box flex={1}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
        paddingHorizontal: theme.spacing.m,
        paddingBottom: footerHeight
      }}>       
        <Transitioning.View ref={list} {...{transition}}>
          <Box flexDirection="row">
            <Box marginRight="m">
              {
                outfits.filter(({ id }) => id % 2 !== 0).map(item => <Outfit key={item.id} outfit={item} width={width} />)
              }
            </Box>
            <Box>
              {
                outfits.filter(({ id }) => id % 2 === 0).map(item => <Outfit key={item.id} outfit={item} width={width}  />)
              }
            </Box>
          </Box>
        </Transitioning.View>
      </ScrollView>
      <TopCurve footerHeight={footerHeight} />
      <Box 
        position="absolute" 
        bottom={0} 
        left={0} 
        right={0}
        onLayout={({
          nativeEvent: {
            layout: {
              height
            }
          }
        }) => {
          setFooterHeight(height);
        }}
      >
        <Footer label="Add more to Favorites" onPress={() => {
          list.current?.animateNextTransition();
          setOutfits(outfits.filter(outfit => !outfit.selected));
        }} />
      </Box>  
    </Box>
   </Box>
 )
};

export default FavoriteOutfits;

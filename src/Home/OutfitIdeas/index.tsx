import React, { useState } from 'react';
import {Box} from '../../components/Theme';
import Header from '../../components/Header';
import Background from './Background';
import Card from './Card';
import {interpolate} from 'react-native-reanimated';
import {
  useTransition,
} from "react-native-redash/lib/module/v1";
import { Alert } from 'react-native';

const cards = [
  {
    index: 3,
    source: require('../../assets/1.png'),
  },
  {
    index: 2,
    source: require('../../assets/2.png'),
  },
  {
    index: 1,
    source: require('../../assets/3.png'),
  },
  {
    index: 0,
    source: require('../../assets/4.png'),
  },
]

// const step = 1 / (cards.length - 1);

interface OutfitIdeasProps {
};

const OutfitIdeas: React.FC<OutfitIdeasProps> = props => {
  const {navigation} = props;
  const [currentIndex, setCurentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);

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
      <Background />
      { cards.map(({index, source}) => {
        if (index >= currentIndex) {
          return <Card 
          key={index}
          source={source}
          position={interpolate(index, [currentIndex, cards.length - 1], [0, 1])}
          onSwipe={() => {
            console.log('121212删除');
            setCurentIndex(pre => pre + 1);
          }}
        />
        }
      })}
    </Box>
   </Box>
  )
};

export default OutfitIdeas;

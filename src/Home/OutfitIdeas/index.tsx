import React from 'react';
import {Box} from '../../components/Theme';
import Header from '../../components/Header';
import Background from './Background';
import Card from './Card';

interface OutfitIdeasProps {
};

const OutfitIdeas: React.FC<OutfitIdeasProps> = props => {
  const {navigation} = props;

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
      <Card position={1} />
      <Card position={0.5} />
      <Card position={0} />
    </Box>
   </Box>
  )
};

export default OutfitIdeas;

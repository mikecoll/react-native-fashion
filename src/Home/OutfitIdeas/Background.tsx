import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Box, useTheme} from '../../components/Theme';

interface BackgroundProps {
};

const Background: React.FC<BackgroundProps> = props => {
  const {} = props;
  const theme = useTheme();

  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <Box flex={1/3} backgroundColor="lightBlue">
        <Box flex={1} backgroundColor="background" borderBottomRightRadius="xl">

        </Box>
      </Box>
      <Box flex={1/3}>
        <Box flex={1} backgroundColor="background"/>
        <Box flex={1} backgroundColor="secondary"/>
        <Image 
          source={require('../../assets/background.png')}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl,
            borderBottomRightRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1/3} backgroundColor="lightBlue">
       <Box flex={1} backgroundColor="secondary" borderTopLeftRadius='xl'/>
      </Box>
    </View>
  )
};

export default Background;

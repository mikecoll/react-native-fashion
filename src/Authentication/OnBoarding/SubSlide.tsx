import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated from 'react-native-reanimated';

import {Button, Text} from '../../components';

const {width} = Dimensions.get("window");

interface SubSlideProps {
  subTitle: string;
  description: string;
  last?: boolean;
  x: Animated.Node<number>;
  onPress: () => void;
}

const SubSlide: React.FC<SubSlideProps> = (props) => {
  const {subTitle, description, last, x, onPress} = props;
  return (
    <View style={styles.container}>
      <Text variant="title2">{subTitle}</Text>
      <Text variant="body" style={styles.description}>{description}</Text>
      <Button 
        label={last ? "Let's go started" : "Next"} 
        variant={last ? "primary" : "default"}
        {...{onPress}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 44,
    width,
  },
  description: {
    textAlign: 'center',
    marginVertical: 12
  }
})

export default SubSlide

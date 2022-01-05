import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated from 'react-native-reanimated';

import {Button} from '../../components';

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
      <Text style={styles.subTitle}>{subTitle}</Text>
      <Text style={styles.description}>{description}</Text>
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
  subTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#0C0D34'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#0C0D34',
    textAlign: 'center',
    marginVertical: 12
  }
})

export default SubSlide

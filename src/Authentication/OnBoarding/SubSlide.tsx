import React from "react";
import { View, Text } from "react-native";
import Animated, { sub } from 'react-native-reanimated';

interface SubSlideProps {
  subTitle: string;
  description: string;
  latest?: boolean;
  x: Animated.Node<number>;
}

const SubSlide: React.FC<SubSlideProps> = (props) => {
  const {subTitle, description, latest, x} = props;
  return (
    <View>
      <Text>{subTitle}</Text>
      <Text>{description}</Text>
    </View>
  )
}

export default SubSlide

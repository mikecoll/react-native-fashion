import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";

import { Text } from '../../components';

const {width, height} = Dimensions.get("window");
export const  SLIDER_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    width
  },
  titleContainer: {
    height: 100,
    justifyContent: 'center',
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  }
})

interface SlideProps {
  label: string;
  right?: boolean;
  picture: number;
}

const Slide: React.FC<SlideProps> = (props) => {
  const {label, right, picture} = props;
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: right ? (width/2 - 50) : (-width/2 + 50) },
    { rotate: right ? '-90deg' : '90deg' }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={picture} style={styles.picture} />
      </View>
      <View style={[styles.titleContainer, {transform}]}>
        <Text variant="hero">{label}</Text>
      </View>
    </View>
  )
}

export default Slide;

import React from "react";
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated from "react-native-reanimated";
import {
  useValue,
  interpolateColor,
  onScrollEvent,
} from "react-native-redash/lib/module/v1";

import Slide, {SLIDER_HEIGHT} from "./Slide";

const BORDER_RADIUS = 75;
const {width} = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS
  },
  footer: {
    flex: 1
  },
  footerContent: {
    flex: 1, 
    backgroundColor: 'white', 
    borderTopLeftRadius: BORDER_RADIUS
  }
})

const slides = [
  { label: 'Relaxed', subTitle: 'Find Your Outfits', description: 'Confused about your outfit? Dont worry! Find the best outfit here!', color: '#BFEAF5' },
  { label: 'Playful', subTitle: 'Hear it Fisrt, Wear it First', description: 'Hating the clothes in your wardrobe? Explore hundreds of outfit ide',  color: '#BEECC4' },
  { label: 'Excentric', subTitle: 'Your Style, Your Way', description: 'Create your individual & unique style and look amazing everyday',  color: '#FFE4D9' },
  { label: 'Funky', subTitle: 'Look Good, Feel Good', description: 'Discover the latest trends in fashion and explore your personally',  color: '#FFDDDD' },
]

const OnBoarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slider => slider.color),
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor: backgroundColor }]}>
        <Animated.ScrollView 
          horizontal 
          snapToInterval={width} 
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={16}
          {...{onScroll}}
        >
          {slides.map(({label}, index) => (
            <Slide key={index} right={!!(index % 2)} {...{label}} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor: backgroundColor }} />
        <View style={styles.footerContent}>
          {slides.map(({subTitle, description}, index) => (
            <SubSlide key={index} last={index === slides.length - 1} {...{subTitle, description, x}} >
          ))}
        </View>
      </View>
    </View>
  )
}

export default OnBoarding;

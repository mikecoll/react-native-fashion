import React, { useRef } from "react";
import {View, StyleSheet, Dimensions} from 'react-native';
import Animated, {multiply} from "react-native-reanimated";
import {
  useValue,
  interpolateColor,
  onScrollEvent,
} from "react-native-redash/lib/module/v1";

import Slide, {SLIDER_HEIGHT} from "./Slide";
import SubSlide from "./SubSlide";

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
    borderTopLeftRadius: BORDER_RADIUS,
    flexDirection: 'row'
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
  const scroll = useRef<Animated.ScrollView>(null);

  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slider => slider.color),
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
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
        <Animated.View 
          style={
            [styles.footerContent, { width: width * slides.length, transform: [{ translateX: multiply(x, -1) }] }]
          }
        >
          {slides.map(({subTitle, description}, index) => (
            <SubSlide
              onPress={() => {
                if (scroll.current) {
                  scroll.current.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  })
                }
              }}
              key={index} 
              last={index === slides.length - 1} 
              {...{subTitle, description, x}}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  )
}

export default OnBoarding;

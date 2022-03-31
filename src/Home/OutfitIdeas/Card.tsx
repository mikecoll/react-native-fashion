import React from 'react';
import {StyleSheet, Dimensions, ImageRequireSource} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {add} from 'react-native-reanimated';
import {mixColor, mix} from 'react-native-redash';
import {
  usePanGestureHandler,
} from "react-native-redash/lib/module/v1";

import { Box } from '../../components/Theme';
import { useSpring } from './Animations';

const {width: wWidth} = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425/294);
const borderRadius = 24;
interface CardProps {
  position: Animated.Adaptable<number>;
  onSwipe: () => void;
  source: ImageRequireSource;
};

const Card: React.FC<CardProps> = props => {
  const {position, onSwipe, source} = props;
  const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const translateX = useSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-wWidth, 0, wWidth], // 关键点，可停留的位置点，最大偏移-width或者width
    onSnap: ([x]) => x!==0 && onSwipe()
  });
  const translateY = add(
    translateYOffset,
    useSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0], // 在y方向只可以停留在原地
    })
  );
  const imageScale = mix(position, 1.1, 1);
  return (
    <Box 
      style={StyleSheet.absoluteFillObject}
      justifyContent="center"
      alignItems="center"
    >
      <PanGestureHandler {...gestureHandler}>
        <Animated.View 
          style={{ 
            backgroundColor, 
            width, 
            height, 
            borderRadius,
            overflow: 'hidden',
            transform: [{
              translateY
            }, {
              translateX
            },{
              scale
            }]
          }} 
        >
          <Animated.Image {...{source}}  style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            transform: [{
              scale: imageScale
            }]
          }} />
        </Animated.View>
      </PanGestureHandler>
    </Box>
  )
};

export default Card;

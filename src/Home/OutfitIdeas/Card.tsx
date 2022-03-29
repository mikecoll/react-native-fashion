import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {add} from 'react-native-reanimated';
import {mixColor, mix} from 'react-native-redash';
import {
  usePanGestureHandler,
  withSpring
} from "react-native-redash/lib/module/v1";

import { Box } from '../../components/Theme';

const {width: wWidth} = Dimensions.get("window");
const width = wWidth * 0.75;
const height = width * (425/294);
const borderRadius = 24;
interface CardProps {
  position: Animated.Adaptable<number>;
};

const Card: React.FC<CardProps> = props => {
  const {position} = props;
  const {gestureHandler, translation, velocity, state} = usePanGestureHandler();
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const translateX = withSpring({
    value: translation.x,
    velocity: velocity.x,
    state,
    snapPoints: [-width, 0, width], // 关键点，可停留的位置点，最大偏移-width或者width
  });
  const translateY = add(
    translateYOffset,
    withSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0], // 在y方向只可以停留在原地
    })
  );
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
            transform: [{
              translateY
            }, {
              translateX
            },{
              scale
            }]
          }} 
        />
      </PanGestureHandler>
    </Box>
  )
};

export default Card;

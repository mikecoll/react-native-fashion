import React from 'react';
import {View} from 'react-native';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
import Animated, { and, add, cond, eq, useCode, call, startClock, stopClock, useValue, set, greaterThan, clockRunning, not, neq } from 'react-native-reanimated';
// import {useClock} from 'react-native-redash';
import {
  useTapGestureHandler,
  useClock,
} from "react-native-redash/lib/module/v1";

interface BorderlessTapProps {
  children: React.ReactNode;
  onPress: () => void;
};

const BorderlessTap: React.FC<BorderlessTapProps> = props => {
  const {children, onPress} = props;
  const { gestureHandler, state } = useTapGestureHandler();
  const clock = useClock();
  const start = useValue(0);
  const opacity = useValue(0);

  useCode(() => [
    cond(and(not(clockRunning(clock)), eq(state, State.BEGAN)), [startClock(clock), set(start, clock)]),
    cond(neq(state, State.BEGAN), stopClock(clock)),
    cond(eq(state, State.END), [call([], onPress)]),
    set(
      opacity,
      cond(
        and(greaterThan(clock, add(start, 100), clockRunning(clock))),
        0.5,
        1
      )
    ),
  ], [])

  return (
    <TapGestureHandler {...gestureHandler}>
      <Animated.View style={{ opacity }}>
        {children}
      </Animated.View>
    </TapGestureHandler>
  )
};

export default BorderlessTap;

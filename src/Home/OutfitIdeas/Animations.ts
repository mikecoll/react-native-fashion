import Animated, { spring, add, block, Clock, cond, eq, set, startClock, stopClock, useValue, call } from "react-native-reanimated"
import {State} from 'react-native-gesture-handler';
import { snapPoint } from 'react-native-redash';

interface WithSpringParams {
  value: Animated.Node<number>;
  velocity: Animated.Node<number>;
  state: Animated.Node<State>;
  snapPoints: number[];
  onSnap?: (values: number[]) => void;
}

export const useSpring = (props: WithSpringParams) => {
  const {
    value,
    velocity,
    state: gestureState,
    snapPoints,
    onSnap = (values: number[]) => {},
  } = props;
  const offset = useValue(0);
  const clock = new Clock();
  const state = {
    position: useValue(0),
    finished: useValue(0),
    time: useValue(0),
    velocity: useValue(0),
  }
  const config = {
    toValue: useValue(0),
    damping: 6,
    mass: 1,
    stiffness: 64,
    overshootClamping: useValue(0),
    resetSpeedThreshold: useValue(0.01),
    resetDisplacementThreshold: useValue(0.01),
  }
  return block([
    cond(eq(gestureState, State.BEGAN), [
      set(offset, state.position),
      stopClock(clock),
      set(state.finished, 0),
      set(state.time, 0),
    ]),
    cond(eq(gestureState, State.ACTIVE), [
      set(state.position, add(offset, value)),
      set(state.velocity, velocity),
      set(
        config.toValue,
        snapPoint(state.position, state.velocity, snapPoints),
      ),
      cond(eq(config.toValue, 0), [
        set(config.overshootClamping, 0),
        set(config.resetSpeedThreshold, 0.01),
        set(config.resetDisplacementThreshold, 0.01),
      ], [
        set(config.overshootClamping, 1),
        set(config.resetSpeedThreshold, 100),
        set(config.resetDisplacementThreshold, 100),
      ])
    ]),
    cond(eq(gestureState, State.END), [
      startClock(clock),
      spring(clock, state, config),
      cond(state.finished, [
        call([state.position], onSnap)
      ])
    ]),
    state.position,
  ]);
}
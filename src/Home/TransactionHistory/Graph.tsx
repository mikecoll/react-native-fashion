import React, { useLayoutEffect, useRef } from 'react';
import {Dimensions, View} from 'react-native';
import { useTheme, Box } from '../../components/Theme';
import Underlay from './Underlay';
import {lerp} from './Scale';
import { Transition, Transitioning } from 'react-native-reanimated';

const {width: wWidth} = Dimensions.get("window");
const aspectRatio = 195 / 305;
const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={650} interpolation={"easeInOut"} />
    <Transition.In type="slide-bottom"  durationMs={650} interpolation={"easeInOut"} />
  </Transition.Together>
);

export interface Point {
  date: number;
  value: number;
  color: string;
  id: number;
}

interface GraphProps {
  data: Point[];
  minDate: number;
  maxDate: number;
};

const Graph: React.FC<GraphProps> = props => {
  const {data, maxDate, minDate} = props;
  const ref = useRef(null);
  const theme = useTheme();

  useLayoutEffect(() => {
    ref.current?.animateNextTransition();
  });

  const numberOfMonths = new Date(maxDate - minDate).getMonth();

  const canvansWidth = wWidth - theme.spacing.m * 2;
  const canvansHeight = canvansWidth * aspectRatio
  const width = canvansWidth - theme.spacing.xl;
  const height = canvansHeight - theme.spacing.xl;

  const values = data.map(p => p.value);
  const dates = data.map(p => p.date);

  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / numberOfMonths;

  return (
    <Box marginTop="xl" paddingBottom='xl' paddingLeft='xl'>
      <Underlay step={step} minX={minDate} maxX={maxDate} minY={minY} maxY={maxY} />
      <Transitioning.View 
        style={{ width, height, overflow: 'hidden' }}
        ref={ref}
        transition={transition}
      >
        {
          data.map((point, i) => {
            const left = new Date(point.date - minDate).getMonth();
            return (
              <Box 
                key={point.date}
                position={"absolute"}
                left={left*step}
                bottom={0}
                width={step}
                height={lerp(0, height, point.value / maxY)}
              >
                <View style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: theme.spacing.m,
                  right: theme.spacing.m,
                  backgroundColor: point.color,
                  opacity: 0.1,
                  borderTopLeftRadius: theme.borderRadii.m,
                  borderTopRightRadius: theme.borderRadii.m
                }} />
                <View style={{
                  position: 'absolute',
                  top: 0,
                  height: 32,
                  left: theme.spacing.m,
                  right: theme.spacing.m,
                  backgroundColor: point.color,
                  borderRadius: theme.borderRadii.m,
                }} />
              </Box>
            )
          })
        }
      </Transitioning.View>
    </Box>
  )
};

export default Graph;

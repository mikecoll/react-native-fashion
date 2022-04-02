import React from 'react';
import {Dimensions, View} from 'react-native';
import { useTheme, Box } from '../../components/Theme';

const {width: wWidth} = Dimensions.get("window");
const aspectRatio = 195 / 305;

const lerp = (v0: number, v1: number, t: number) => {
  return (1 - t) * v0 + t * v1;
}

interface Point {
  date: number;
  value: number;
  color: string;
}

interface GraphProps {
  data: Point[];
};

const Graph: React.FC<GraphProps> = props => {
  const {data} = props;
  const theme = useTheme();
  const width = wWidth - theme.spacing.m * 2;
  const height = width * aspectRatio
  const values = data.map(p => p.value);
  const dates = data.map(p => p.date);
  const minX = Math.min(...dates);
  const maxX = Math.max(...dates);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  const step = width / data.length;

  return (
    <Box width={width} height={height} margin={"m"}>
      {
        data.map((point, i) => {
          if (point.value === 0) {
            return null;
          }
          return (
            <Box 
              key={point.date}
              position={"absolute"}
              left={i*step}
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
    </Box>
  )
};

export default Graph;

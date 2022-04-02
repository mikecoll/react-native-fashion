import React from 'react';
import {StyleSheet} from 'react-native';
import moment from 'moment';

import { Box, Text, useTheme } from '../../components/Theme';
import { lerp } from './Scale';

const ROW_HEIGHT = 16;

interface UnderlayProps {
  minY: number; //
  maxY: number; //
  minX: number; //
  maxX: number; //
  step: number; //
};

const Underlay: React.FC<UnderlayProps> = props => {
  const {step, minY, maxY, minX, maxX} = props;
  const theme = useTheme();
  const numberOfMonths = new Date(maxX - minX).getMonth();
  const minDate = moment(minX);

  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} justifyContent="space-between">
        {
          [0, 0.33, 0.66, 1].reverse().map(t => {
            return (
              <Box 
                key={t} 
                flexDirection="row" 
                alignItems="center"                   
                height={ROW_HEIGHT}
                style={{
                  top: t === 0? ROW_HEIGHT/2 : (t === 1 ? - ROW_HEIGHT/2: 0)
                }}
              >
                <Box 
                  width={theme.spacing.xl} 
                  paddingRight="s"
                >
                  <Text textAlign="right" color="darkGrey">{Math.round(lerp(minY, maxY, t))}</Text>
                </Box>
                <Box flex={1} height={1} backgroundColor="grey" />
              </Box>
            )
          })
        }
      </Box>
      <Box 
        marginLeft="xl" 
        height={theme.spacing.xl}
        flexDirection="row"
        alignItems="center"
      >
        {
          new Array(numberOfMonths)
            .fill(0)
            .map((_, i) => minDate.clone().add(i, "month"))
            .map((date, index) => (
            <Box width={step} key={index}> 
              <Text color="darkGrey" textAlign="center">
                {date.format("MMM")}
              </Text>
            </Box>
          ))
        }
      </Box>
    </Box>
  )
};

export default Underlay;

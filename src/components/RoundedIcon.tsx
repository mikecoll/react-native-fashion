import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {Theme, Box, Text} from './Theme';

export interface RoundedIconProps {
  name: string;
  size: number;
  color: Theme["colors"];
  backgroundColor: string;
};

const RoundedIcon: React.FC<RoundedIconProps> = props => {
  const {name, size, color, backgroundColor} = props;
  const iconSize = size * 0.7;
  return (
    <Box 
      height={size} 
      width={size} 
      {...{backgroundColor}}
      justifyContent='center'
      alignItems='center'
      style={{
        borderRadius: size / 2
      }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{color}}>
      <Icon {...{name}} size={iconSize} style={{ textAlign: 'center' }} />
      </Text>
    </Box>
  )
};

export default RoundedIcon;

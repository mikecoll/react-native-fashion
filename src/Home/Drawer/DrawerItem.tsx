import React from 'react';
import {View} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import RoundedIcon from '../../components/RoundedIcon';
import { Text, Box } from '../../components/Theme';

interface DrawerItemProps {
  icon: string;
  color: string;
  screen: string;
  label: string;
};

const DrawerItem: React.FC<DrawerItemProps> = props => {
  const {icon, color, screen, label} = props;

  return (
    <RectButton>
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon 
          iconRatio={0.5} 
          name={icon} 
          size={36} 
          backgroundColor={color} 
          color={'white'}
        />
        <Text variant="button" color="secondary" marginLeft="m">{label}</Text>
      </Box>
    </RectButton>
  )
};

export default DrawerItem;

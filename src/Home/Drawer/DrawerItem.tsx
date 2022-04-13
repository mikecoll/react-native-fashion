import { useNavigation } from '@react-navigation/native';
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
  const navigation = useNavigation();
  return (
    <RectButton onPress={() => {
      props.screen ? navigation.navigate(screen) : props.onPress(navigation)
    }}>
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon 
          iconRatio={0.5} 
          name={icon} 
          size={36} 
          backgroundColor={color} 
          color={'background'}
        />
        <Text variant="button" color="secondary" marginLeft="m">{label}</Text>
      </Box>
    </RectButton>
  )
};

export default DrawerItem;

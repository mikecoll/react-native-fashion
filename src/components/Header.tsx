import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RoundedIconButton from './RoundedIconButton';
import {Box, Text} from './Theme';

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  },
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  },
  dark?: boolean;
};

const Header: React.FC<HeaderProps> = props => {
  const {left, title, right, dark = true} = props;
  const insets = useSafeAreaInsets();
  const color = dark ? "background" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGrey";
  return (
    <Box 
      flexDirection="row" 
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="m" 
      style={{ marginTop: insets.top }}
    >
      <RoundedIconButton
        size={44}
        iconRatio={0.5}
        name={left.icon}
        onPress={left.onPress}
        {...{color, backgroundColor}}
      />
      <Text variant="header" {...{color}}>{title.toUpperCase()}</Text>
      <RoundedIconButton
        size={44}
        iconRatio={0.5}
        name={right.icon}
        onPress={right.onPress}
        {...{color, backgroundColor}}
      />
    </Box>
  )
};

export default Header;

import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import RoundedIcon, {RoundedIconProps} from './RoundedIcon';

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
};

const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({ onPress, ...props }) => {

  return (
    <BorderlessButton {...{onPress}}>
      <RoundedIcon {...props}/>
    </BorderlessButton>
  )
};

export default RoundedIconButton;

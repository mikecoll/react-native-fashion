import React, {useState} from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Text } from '../Theme';
import { RectButton } from 'react-native-gesture-handler';

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <RectButton onPress={() => setChecked(c => !c)} style={{ justifyContent: 'center' }}>
      <Box flexDirection="row">
        <Box 
          marginRight="m"
          height={20} 
          width={20} 
          justifyContent="center" 
          alignItems="center" 
          borderRadius="s"
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? 'primary' : 'white'}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
}

export default Checkbox;

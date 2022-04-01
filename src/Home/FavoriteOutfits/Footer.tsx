import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import { Box } from '../../components/Theme';

interface FooterProps {
  label: string;
  onPress: () => void;
};

const Footer: React.FC<FooterProps> = props => {
  const {label, onPress} = props;
  const insets = useSafeAreaInsets();
  

  return (
    <Box
      backgroundColor="secondary"
      padding="m"
      borderTopLeftRadius="xl"
    >
      <Box 
        style={{
          paddingBottom: insets.bottom
        }}
        alignItems="center"
      >
        <Button variant="primary" {...{label, onPress}} />
      </Box>
    </Box>
  )
};

export default Footer;

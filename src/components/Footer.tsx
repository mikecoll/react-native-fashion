import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import SocialLogin from './SocialLogin';
import { Box, Text } from './Theme';

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  const {onPress, title, action} = props;
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <BorderlessButton onPress={onPress}>
          <Text variant="button" color="white">
            <Text>{`${title} `}</Text>
            <Text color="primary" marginLeft="s">{action}</Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
}

export default Footer;

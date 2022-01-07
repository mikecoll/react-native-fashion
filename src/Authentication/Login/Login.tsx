import React from 'react';
import {View} from 'react-native';
import {Container, SocialLogin} from '../../components';
import {Text, Button} from '../../components';
import {Box} from '../../components/Theme';

const Login: React.FC<{}> = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent">
          <Box flexDirection="row">
            <Text variant="button" color="white">Don't have an account?</Text>
            <Text variant="button" color="primary" marginLeft="s">Sign Up here</Text>
          </Box>
        </Button>
      </Box>
    </>
  )
  return (
    <Container {...{footer}}>
      <View />
    </Container>
  );
}

export default Login;
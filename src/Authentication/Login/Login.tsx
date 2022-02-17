import React from 'react';
import {Container, SocialLogin, Text, Button} from '../../components';
import {Box} from '../../components/Theme';
import TextInput from '../../components/Form/TextInput';
import Checkbox from '../../components/Form/Checkbox';

const emailValidator = (email: string) => {
  const emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
  return emailReg.test(email);
};

const passwordValidator = (password: string) => password.length >= 6;

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
      <Box padding="xl">
        <Text variant="title1" textAlign='center' marginBottom='l'>Welcome back</Text>
        <Text variant="body" textAlign='center' marginBottom='l'>Use your credentials below to and login in your account</Text>
        <Box marginBottom="m">
          <TextInput icon='mail' placeholder='Enter your Email' validator={emailValidator} />
        </Box>
        <TextInput icon='lock' placeholder='Enter your Password' validator={passwordValidator} />
        <Box flexDirection="row" justifyContent="space-between">
          <Checkbox label="Remeber me" />
          <Button variant="transparent" onPress={() => {}}>
            <Text color="primary">Forgot password</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button variant="primary" label="Login your account" onPress={() => {}}/>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
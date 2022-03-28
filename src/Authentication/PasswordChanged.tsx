import React from 'react';
import {Container, Text, Button} from '../components';
import {Box} from '../components/Theme';
import RoundedIconButton from '../components/RoundedIconButton';
import RoundedIcon from '../components/RoundedIcon';

const SIZE = 80;

const PasswordChanged = ({navigation}) => {

  return (
    <Container pattern={0} footer={
      <Box alignItems="center">
        <RoundedIconButton 
          onPress={() => navigation.pop()}
          backgroundColor="white"
          color="secondary"
          name="x"
          size={60}
        />
      </Box>
    }
    > 
      <Box flex={1} justifyContent="center" alignItems="center">
        <RoundedIcon
          name="check"
          backgroundColor="primaryLight"
          size={SIZE}
          color="primary"
        />
        <Box padding="xl" justifyContent="center">
          <Text variant="title1" textAlign='center' marginBottom='l'>Your password was successfully changed</Text>
          <Text variant="body" textAlign='center' marginBottom='l'>Close this window and Login again</Text>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button variant="primary" label="Login again" onPress={() => navigation.navigate('Login')}/>
        </Box>
      </Box>
    </Container>
  )
}

export default PasswordChanged;

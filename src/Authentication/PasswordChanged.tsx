import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import {Container, Text, Button} from '../components';
import {Box} from '../components/Theme';
import CloseButton from '../components/CloseButton';

const SIZE = 80;

const PasswordChanged = ({navigation}) => {

  return (
    <Container footer={
      <Box alignItems="center">
        <CloseButton onPress={() => navigation.pop()}/>
      </Box>
    }
    > 
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box 
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE/2 }} 
          backgroundColor="primaryLight"
          justifyContent="center"
          alignItems="center"
          marginBottom="xl"
        >
          <Text color="primary">
            <Icon name="check" size={32} /> 
          </Text>
        </Box>
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

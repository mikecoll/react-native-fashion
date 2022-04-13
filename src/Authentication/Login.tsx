import React, { useRef } from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Container, Text, Button} from '../components';
import {Box} from '../components/Theme';
import TextInput from '../components/Form/TextInput';
import Checkbox from '../components/Form/Checkbox';
import Footer from '../components/Footer';
import { BorderlessButton } from 'react-native-gesture-handler';
import { CommonActions } from '@react-navigation/native';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});


const Login: React.FC<{}> = ({navigation}) => {
  const { handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    initialValues: { email: '12345@qq.com', password: '12345', remember: false },
    onSubmit: () => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'Home' }
          ]
        })
      );
    },
    validationSchema: LoginSchema,
  });
  const password = useRef<typeof TextInput>(null);

  const footer = <Footer onPress={() => navigation.navigate('SignUp')} title={`Don't have an account?`} action={`Sign Up here`} />

  return (
    <Container pattern={0} {...{footer}}>
      <Box padding="xl" flex={1} justifyContent="center">
        <Text variant="title1" textAlign='center' marginBottom='l'>Welcome back</Text>
        <Text variant="body" textAlign='center' marginBottom='l'>Use your credentials below to and login in your account</Text>
        <Box>
          <Box marginBottom="m">
            <TextInput 
              icon='mail' 
              placeholder='Enter your Email'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              autoCompleteType={'email'}
              autoCapitalize='none'
              returnKeyType='next'
              returnKeyLabel='next'
              onEndEditing={() => password.current?.focus()}
            />
          </Box>
          <TextInput 
            ref={password}
            icon='lock' 
            placeholder='Enter your Password'
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            error={errors.password}
            touched={touched.password}
            secureTextEntry
            autoCompleteType={'password'}
            autoCapitalize='none'
            returnKeyType='go'
            returnKeyLabel='go'
            onEndEditing={() => handleSubmit()}
          />
          <Box flexDirection="row" justifyContent="space-between" alignItems="center" marginVertical="s">
            <Checkbox 
              label="Remeber me"
              checked={values.remember}
              onChange={() => setFieldValue('remember', !values.remember)}
            />
            <BorderlessButton onPress={() => navigation.navigate('ForgotPassword')}>
              <Text color="primary">Forgot password</Text>
            </BorderlessButton>
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button variant="primary" label="Login your account" onPress={handleSubmit}/>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
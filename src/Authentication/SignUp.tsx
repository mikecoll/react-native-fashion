import React, { useRef } from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Container, Text, Button} from '../components';
import {Box} from '../components/Theme';
import TextInput from '../components/Form/TextInput';
import Footer from '../components/Footer';

const SignUpSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords not match")
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});


const SignUp: React.FC<{}> = ({navigation}) => {
  const { handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue } = useFormik({
    initialValues: { email: '', password: '', passwordConfirmation: '' },
    onSubmit: (values) => console.log(values),
    validationSchema: SignUpSchema,
  });
  const password = useRef<typeof TextInput>(null);
  const passwordConfirmation = useRef<typeof TextInput>(null);

  const footer = <Footer onPress={() => navigation.navigate('Login')} title={`Already have an account`} action={`Login here`} />

  return (
    <Container pattern={1} {...{footer}}>
      <Box padding="xl">
        <Text variant="title1" textAlign='center' marginBottom='l'>Create Account</Text>
        <Text variant="body" textAlign='center' marginBottom='l'>Let us know what your name, email and your password</Text>
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
          <Box marginBottom="m">
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
              returnKeyType='next'
              returnKeyLabel='next'
              onEndEditing={() => passwordConfirmation.current?.focus()}
            />
          </Box>
          <TextInput
            ref={passwordConfirmation}
            icon='lock' 
            placeholder='Enter your Password'
            onChangeText={handleChange('passwordConfirmation')}
            onBlur={handleBlur('passwordConfirmation')}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            secureTextEntry
            autoCompleteType={'password'}
            autoCapitalize='none'
            returnKeyType='go'
            returnKeyLabel='go'
            onEndEditing={() => handleSubmit()}
          />
          <Box alignItems="center" marginTop="m">
            <Button variant="primary" label="Create your account" onPress={handleSubmit}/>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUp;
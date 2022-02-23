import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {Container, SocialLogin, Text, Button} from '../../components';
import {Box} from '../../components/Theme';
import TextInput from '../../components/Form/TextInput';
import Checkbox from '../../components/Form/Checkbox';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});


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
        <Formik
          initialValues={{ email: '', password: '', remember: false }}
          onSubmit={(values) => console.log(values)}
          validationSchema={LoginSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput 
                  icon='mail' 
                  placeholder='Enter your Email'
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  error={errors.email}
                  touched={touched.email}
                />
              </Box>
              <TextInput 
                icon='lock' 
                placeholder='Enter your Password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password}
                touched={touched.password}
              />
              <Box flexDirection="row" justifyContent="space-between">
                <Checkbox 
                  label="Remeber me"
                  checked={values.remember}
                  onChange={() => setFieldValue('remember', !values.remember)}
                />
                <Button variant="transparent" onPress={() => {}}>
                  <Text color="primary">Forgot password</Text>
                </Button>
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button variant="primary" label="Login your account" onPress={handleSubmit}/>
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default Login;
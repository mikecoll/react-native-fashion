import React from 'react';
import { Image, Dimensions } from 'react-native';
import theme, { Box, Text } from '../../components/Theme';
import {Button} from '../../components';

const {width} = Dimensions.get("window");

const picture = {
  uri: require('../../assets/5.png'),
  width: 3383,
  height: 5074
}

const Welcome = ({ navigation }) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box flex={1} borderBottomRightRadius="xl" backgroundColor="grey" alignItems='center' justifyContent="flex-end">
        <Image source={picture.uri} style={{
            width: width - theme.borderRadii.xl,
            height: ( width - theme.borderRadii.xl ) * picture.height / picture.width
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box backgroundColor="grey" position='absolute' top={0} left={0} right={0} bottom={0}></Box>
        <Box backgroundColor="white" borderTopLeftRadius={"xl"} flex={1} justifyContent="space-evenly" alignItems="center" padding="xl">
          <Text variant="title2">
            Let's get started
          </Text>
          <Text variant="body" textAlign="center">
            Login to your account below or signup for an amazing experience
          </Text>
          <Button 
            variant="primary" 
            label="Have an account? Login" 
            onPress={() => navigation.navigate("Login")}
          />
          <Button label="Join us, it's Free" />
          <Button variant="transparent" label="Forget password?" />
        </Box>
      </Box>    
    </Box>
  )
}

export default Welcome;

import React from "react";
import { Dimensions, Image, StyleSheet, StatusBar, Platform } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Box, useTheme} from './Theme';
import Constants from 'expo-constants';

const {width, height: wHeight} = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

export const assets = [
  require("../assets/pattern1.png"),
  require("../assets/pattern2.png"),
  require("../assets/pattern3.png"),
]

interface ContainerProps {
  children: React.ReactNode;
  footer: React.ReactNode;
  pattern: 0 | 1 | 2;
}

const Container = ({
  children,
  footer,
  pattern = 0,
}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const asset = assets[pattern];
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box height={wHeight + (Platform.OS === 'android' ? Constants.statusBarHeight : 0)} backgroundColor="secondary">
        <StatusBar barStyle="light-content" />
        <Box backgroundColor="background">
          <Box borderBottomLeftRadius="xl" overflow="hidden" height={height*0.61}>
            <Image source={asset} style={{ width, height, borderBottomLeftRadius: theme.borderRadii.xl }} />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image 
            source={asset} 
            style={{ 
              ...StyleSheet.absoluteFillObject,
              width, 
              height,
              top: -height*0.61,
            }}
          />
          <Box flex={1} borderRadius="xl" borderTopLeftRadius={"zero"} backgroundColor='background'>
            {children}
          </Box>
          <Box backgroundColor="secondary" paddingTop="m">
            {footer}
            <Box height={insets.bottom} />
          </Box>
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
}

export default Container;
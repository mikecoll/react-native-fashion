import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {Box} from '../../components/Theme';
import BorderlessTap from './BoderlessTap';

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

export interface CategoryProps {
  category: {
    id: string;
    color: string;
    title: string;
  }
};

const Category: React.FC<CategoryProps> = props => {
  const {category: { id, color, title}} = props;
  const [slected, setSelected] = useState();
  return (
    <BorderlessTap onPress={() => setSelected(prev => !prev)}>
      <Box 
        marginLeft='m' 
        marginTop='s' 
        alignItems="center"
      >
        <Box 
          height={OUTER_RADIUS*2}
          width={OUTER_RADIUS*2}
          style={{
            borderRadius: OUTER_RADIUS
          }}
          justifyContent="center"
          alignItems="center"
        >
          {
            slected && (
              <View style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderWidth: 1,
                borderColor: color
              }} />
            )
          }
          <View 
            style={{ 
              width: INNER_RADIUS * 2, 
              height: INNER_RADIUS * 2, 
              borderRadius: INNER_RADIUS,
              backgroundColor: color
            }}
          />
        </Box>
        <Text>{title}</Text>
      </Box>
    </BorderlessTap>
  )
};

export default Category;

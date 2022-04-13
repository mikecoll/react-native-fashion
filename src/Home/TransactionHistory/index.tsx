import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import Header from '../../components/Header';
import { Box, Text, useTheme } from '../../components/Theme';
import TopCurve from './TopCurve';
import Graph, {Point} from './Graph';
import Transaction from './Transaction';
const minDate = new Date('2019-09-01').getTime();
const maxDate = new Date('2020-03-01').getTime();

const footerHeight = Dimensions.get('window').width / 3;

const data: Point[] = [
  {
    date: new Date('2019-09-01').getTime(),
    value: 139.42,
    color: 'orange',
    id: 245673,
  },
  {
    date: new Date('2019-12-01').getTime(),
    value: 281.23,
    color: 'yellow',
    id: 245672,
  },
  {
    date: new Date('2020-02-01').getTime(),
    value: 198.54,
    color: 'pink',
    id: 245671,
  },
];

interface TransactionHistoryProps {
};

const TransactionHistory: React.FC<TransactionHistoryProps> = props => {
  const {} = props;
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Outfit Ideas"
        left={{
          icon: 'menu',
          onPress: () => navigation.openDrawer()
        }}
        right={{
          icon: 'share',
          onPress: () => {}
        }}
        dark={false}
      />
      <Box padding="m">
        <Box flexDirection="row" justifyContent="space-between" alignItems="flex-end">
          <Box>
            <Text variant="header" color="secondary" opacity={0.3}>TOTAL SPENT</Text>
            <Text variant="title1">$619,19</Text>
          </Box>
          <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
            <Text color='primary'>All Time</Text>
          </Box>
        </Box>
        <Graph data={data} minDate={minDate} maxDate={maxDate} />
        <ScrollView 
          contentContainerStyle={{ paddingBottom: footerHeight }}
          showsVerticalScrollIndicator={false}
        >
          {data.map((transaction, index) => (
            <Transaction key={index} transaction={transaction} />
          ))}
        </ScrollView>
      </Box>
      <TopCurve {...{footerHeight}} />
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        height={footerHeight}
      >
        <Image 
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderTopLeftRadius: theme.borderRadii.xl
          }} 
          source={require('../../assets/pattern3.png')}
        />
      </Box>
    </Box>
  )
};

export default TransactionHistory;

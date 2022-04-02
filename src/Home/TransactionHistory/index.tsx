import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import { Box, Text } from '../../components/Theme';
import Graph from './Graph';

const data = [
  {
    data: new Date('2019-09-01').getTime(),
    value: 0,
    color: 'primary'
  },
  {
    data: new Date('2019-10-01').getTime(),
    value: 0,
    color: 'primary'
  },
  {
    data: new Date('2019-11-01').getTime(),
    value: 139.42,
    color: 'orange'
  },
  {
    data: new Date('2019-12-01').getTime(),
    value: 281.23,
    color: 'yellow'
  },
  {
    data: new Date('2020-01-01').getTime(),
    value: 0,
    color: 'primary'
  },
  {
    data: new Date('2020-02-01').getTime(),
    value: 198.54,
    color: 'pink'
  },
  {
    data: new Date('2020-03-01').getTime(),
    value: 0,
    color: 'primary'
  },

];

interface TransactionHistoryProps {
};

const TransactionHistory: React.FC<TransactionHistoryProps> = props => {
  const {} = props;
  const navigation = useNavigation();

  return (
    <Box flex={1} backgroundColor="white">
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
      </Box>
      <Graph data={data} />
    </Box>
  )
};

export default TransactionHistory;

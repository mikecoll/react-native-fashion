import React from 'react';
import {View} from 'react-native';
import { Box, Text } from '../../components/Theme';
import {Point} from './Graph';

interface TransactionProps {
  transaction: Point
};

const Transaction: React.FC<TransactionProps> = props => {
  const {transaction} = props;

  return (
    <Box 
      flexDirection="row" 
      justifyContent="space-between" 
      alignItems="center"
      marginTop="m"
    >
      <Box>
        <Box 
          flexDirection="row" 
          alignItems="center"
          marginBottom="s"
        >
          <Box 
            backgroundColor={transaction.color} 
            style={{ width: 10, height: 10, borderRadius: 5 }}
            marginRight="s"
          />
          <Text variant="title3">{`#${transaction.id}`}</Text>
        </Box>
        <Box>
          <Text color="darkGrey">{`$${transaction.value} - ${new Date(transaction.date).toLocaleDateString()}`}</Text>
        </Box>
      </Box>
      <Box>
        <Text color="secondary" variant="button">See more</Text>
      </Box>
    </Box>
  )
};

export default Transaction;

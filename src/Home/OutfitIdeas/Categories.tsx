import React from 'react';
import {ScrollView, View} from 'react-native';
import Category from './Category';
const categories = [
  {
    id: 'newin',
    title: 'New In',
    color: '#FFE8E9',
  },
  {
    id: 'summer',
    title: 'Summer',
    color: '#F1E0FF',
  },
  {
    id: 'activewear',
    title: 'Active Wear',
    color: '#BFFAF5',
  },
  {
    id: 'outlet',
    title: 'Outlet',
    color: '#F1E0FF',
  },
  {
    id: 'accesories',
    title: 'Accesories',
    color: '#FFE8E9',
  },
];

interface CategoriesProps {
};

const Categories: React.FC<CategoriesProps> = props => {
  const {} = props;

  return (
    <View style={{}}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {
          categories.map(cat => 
            <Category key={cat.id} category={cat}  />
          )
        }
      </ScrollView>
    </View>
  )
};

export default Categories;

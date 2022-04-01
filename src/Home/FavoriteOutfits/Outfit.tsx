import React, {useState} from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import RoundedIcon from '../../components/RoundedIcon';
import { Box } from '../../components/Theme';

interface OutfitProps {
  outfit: {
    color: string;
    aspectRatio: number;
    id: number;
    selected: boolean;  
  }
  width: number;
};

const Outfit: React.FC<OutfitProps> = props => {
  const {width, outfit} = props;
  const [selected, setSelected] = useState(false);
  return (
    <BorderlessButton onPress={() => {
      setSelected(prev => !prev);
      outfit.selected = !outfit.selected;
    }}>
      <Box 
        borderRadius='m'
        marginBottom='m'
        alignItems="flex-end"
        padding="m"
        style={{
          backgroundColor: outfit.color,
          width,
          height: width * outfit.aspectRatio
        }}
      >
        {selected && <RoundedIcon name={'check'} backgroundColor="primary" color="white" size={24} />}
      </Box>
    </BorderlessButton>
  )
};

export default Outfit;

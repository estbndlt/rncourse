import { Pressable, Text, View } from 'react-native';

const CategoryGridTile = ({ title, color }) => {
  return (
    <View>
      <Pressable></Pressable>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default CategoryGridTile;

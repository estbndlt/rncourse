import { useLayoutEffect } from 'react';
import { Text, View } from 'react-native';

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const mealTitle = route.params.mealTitle;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
    });
  }, []);

  return (
    <View>
      <Text>Meal Details Screen - {mealId}</Text>
    </View>
  );
};

export default MealDetailScreen;

import { useLayoutEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, []);

  return (
    <View>
      <Image />
      <Text>Meal Details Screen - {mealId}</Text>
      <View></View>
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
};

export default MealDetailScreen;

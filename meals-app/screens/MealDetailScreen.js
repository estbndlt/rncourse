import { useLayoutEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

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
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});

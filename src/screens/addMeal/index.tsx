import { useState, useRef, useCallback } from "react";
import { Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { router, useLocalSearchParams } from "expo-router";

import TextInput from "@/src/components/TextInput";
import useDebounce from "@/src/hooks/useDebounce";
import { Food as FoodType, useFoodSearch } from "@/src/query/hooks/useFoodSearch";
import useInsertMeal from "@/src/query/hooks/useInsertMeal";
import { Food } from "./components/Food";
import { SkeletonItem } from "./components/SkeletonItem";
import { SelectedFoodsList } from "./components/SelectedFoodsList";
import { MEAL_TIMES, MealTime } from "./constants";

const AddMeals = () => {
  const { mealTime, startDate } = useLocalSearchParams<{
    mealTime: MealTime;
    startDate: string;
    endDate: string;
  }>();

  const [selectedFood, setSelectedFood] = useState<FoodType | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedFoods, setSelectedFoods] = useState<FoodType[]>([]);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { results, fetchNextPage, isLoading } = useFoodSearch({
    searchTerm: debouncedSearchTerm,
  });

  const { insertMeal } = useInsertMeal({
    foods: selectedFoods.map((food) => ({
      id: food.id,
      multiplier: 1,
    })),
    mealTime: mealTime as string,
    date: new Date(startDate) || new Date(),
  });

  const handleRemoveFood = (foodId: string) => {
    setSelectedFoods((foods) => foods.filter((f) => f.id !== foodId));
  };

  const handleFoodPress = (food: FoodType) => {
    setSelectedFoods((foods) => {
      // Prevent adding more than 3 foods
      if (foods.length >= 3) {
        alert("You can only add 3 foods per meal");
        return foods;
      }

      if (foods.some((f) => f.id === food.id)) {
        return foods;
      }
      return [...foods, food];
    });
  };

  const handleLongPress = (food: FoodType) => {
    router.push({
      pathname: "/measurement",
      params: {
        food: food.id,
        mealTime: mealTime,
        startDate: startDate,
      },
    });
  };

  const handleSave = () => {
    insertMeal();
    router.back();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} className="flex-col gap-2 p-4">
        <Text className="text-black-400 text-xl font-semibold dark:text-gray-100">
          Add Meals / {MEAL_TIMES[mealTime].title}
        </Text>

        <SelectedFoodsList
          selectedFoods={selectedFoods}
          onRemoveFood={handleRemoveFood}
          onSave={handleSave}
        />

        <TextInput
          placeholder="Search for food"
          keyboardType="default"
          value={searchTerm}
          onChangeText={setSearchTerm}
          icon={isLoading ? "autorenew" : "search"}
        />

        <View style={{ flex: 1, minHeight: 400 }}>
          {isLoading && (
            <View className="absolute bottom-0 left-0 right-0 top-0 z-50 flex-1 opacity-30">
              {[...Array(7)].map((_, i) => (
                <SkeletonItem key={i} />
              ))}
            </View>
          )}

          <FlashList
            bounces={true}
            data={results}
            keyExtractor={(food) => food.id}
            renderItem={({ item }) => (
              <Food
                food={item}
                onSelectedFood={handleFoodPress}
                onLongPress={handleLongPress}
              />
            )}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={122}
            onEndReachedThreshold={3}
            onEndReached={fetchNextPage}
            ListEmptyComponent={() => (
              <View className="flex-1 items-center justify-center gap-2 p-2">
                <Text className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                  No results found
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default AddMeals;

import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInRight } from "react-native-reanimated";
import { Food as FoodType } from "@/src/query/hooks/useFoodSearch";
import IconButton from "@/src/components/IconButton";

interface SelectedFoodsListProps {
  selectedFoods: FoodType[];
  onRemoveFood: (foodId: string) => void;
  onSave: () => void;
}

export const SelectedFoodsList = ({
  selectedFoods,
  onRemoveFood,
  onSave,
}: SelectedFoodsListProps) => {
  return (
    <View className="h-min w-full rounded-xl border border-dashed border-gray-200 dark:border-gray-800">
      <View className="flex h-16 flex-row items-center justify-start gap-2 p-2">
        {selectedFoods.length < 1 ? (
          <Text className="text-black-400 text-sm font-semibold dark:text-gray-100">
            No foods selected
          </Text>
        ) : (
          selectedFoods.map((food) => (
            <Pressable key={food.id} onPress={() => onRemoveFood(food.id)}>
              <Animated.Image
                entering={FadeInRight}
                source={{ uri: food.image }}
                className="h-14 w-14 rounded-lg border-2 border-green-500 dark:border-lime-500"
              />
            </Pressable>
          ))
        )}
        <IconButton
          icon={<Ionicons name="add" size={24} color="red" />}
          onPress={() => {
            if (selectedFoods.length >= 1) {
              onSave();
            }
          }}
        />
      </View>
    </View>
  );
}; 
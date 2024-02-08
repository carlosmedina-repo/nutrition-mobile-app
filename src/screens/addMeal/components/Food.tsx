import { Image } from "expo-image";
import { Pressable, Text } from "react-native";
import { Food as FoodType } from "@/src/query/hooks/useFoodSearch";

interface FoodProps {
  food: FoodType;
  onSelectedFood: (food: FoodType) => void;
  onLongPress: (food: FoodType) => void;
}

export const Food = ({ food, onSelectedFood, onLongPress }: FoodProps) => {
  return (
    <Pressable
      className="mb-2 flex flex-row items-center justify-start gap-2 bg-gray-100 p-4 dark:bg-gray-800"
      style={{ borderRadius: 10 }}
      onPress={() => onSelectedFood(food)}
      onLongPress={() => onLongPress(food)}
    >
      <Image
        source={{ uri: food.image }}
        style={{
          width: 64,
          height: 64,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#10B981",
        }}
        contentFit="cover"
      />
      <Text
        numberOfLines={1}
        className="text-black-400 flex-1 text-lg font-semibold dark:text-gray-100"
      >
        {food.name}
      </Text>
    </Pressable>
  );
}; 
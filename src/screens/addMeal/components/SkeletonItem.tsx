import { View } from "react-native";
import Animated from "react-native-reanimated";

export const SkeletonItem = () => {
  return (
    <Animated.View className="h-26 mb-2 w-full rounded-lg bg-gray-100 p-4">
      <View
        className="rounded-lg border-2 border-green-500 dark:border-lime-500"
        style={{
          width: 64,
          height: 64,
        }}
      />
    </Animated.View>
  );
}; 
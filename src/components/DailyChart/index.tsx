import useSummary from "@/src/query/hooks/useSummary";
import { addDays, format } from "date-fns";
import { View, Text } from "react-native";
import Animated, { useAnimatedStyle, withSequence, withTiming } from "react-native-reanimated";

const DailyChart = ({ dateRange }: { dateRange: { start: Date; end: Date } }) => {
  const { summary } = useSummary({
    endDate: format(addDays(dateRange.end, 1), "yyyy-MM-dd"),
    startDate: format(dateRange.start, "yyyy-MM-dd"),
  });

  const dateKey = format(dateRange.start, "yyyy-MM-dd");
  const dayData = summary?.[dateKey];

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withSequence(
        withTiming(0, { duration: 0 }),
        withTiming(1, { duration: 300 }),
      ),
    };
  }, [dateRange.start]);

  const fatBarStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(`${dayData?.percentageFat || 0}%`, { duration: 500 })
    };
  }, [dayData?.percentageFat]);

  const carbBarStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(`${dayData?.percentageCarbonhydrate || 0}%`, { duration: 500 })
    };
  }, [dayData?.percentageCarbonhydrate]);

  const proteinBarStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(`${dayData?.percentageProtein || 0}%`, { duration: 500 })
    };
  }, [dayData?.percentageProtein]);

  return (
    <View className="flex-1 items-center">
      {dayData ? (
        <Animated.View  className="w-full gap-8 p-4">
          <View className="flex-row items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <View className="items-center">
              <Text className="text-xl font-bold text-yellow-600 dark:text-yellow-400">Fat</Text>
              <Text className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                {dayData.fat.toFixed(1)} g
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-xl font-bold text-green-600 dark:text-green-400">Carbs</Text>
              <Text className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                {dayData.carbonhydrate.toFixed(1)} g
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-xl font-bold text-blue-600 dark:text-blue-400">Protein</Text>
              <Text className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                {dayData.protein.toFixed(1)} g
              </Text>
            </View>
          </View>

          <View className="gap-4">
            <View className="h-8 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
              <Animated.View 
                className="h-full bg-yellow-600 dark:bg-yellow-400"
                style={fatBarStyle}
              />
            </View>

            <View className="h-8 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
              <Animated.View 
                className="h-full bg-green-600 dark:bg-green-400"
                style={carbBarStyle}
              />
            </View>

            <View className="h-8 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
              <Animated.View 
                className="h-full bg-blue-600 dark:bg-blue-400"
                style={proteinBarStyle}
              />
            </View>
          </View>

          <View className="flex-row items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              {dayData.percentageFat}%
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              {dayData.percentageCarbonhydrate}%
            </Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
              {dayData.percentageProtein}%
            </Text>
          </View>
        </Animated.View>
      ) : (
        <Animated.Text 
          style={[animatedStyle]} 
          className="text-gray-500 dark:text-gray-400"
        >
          No data available for this day
        </Animated.Text>
      )}
    </View>
  );
};

export default DailyChart;

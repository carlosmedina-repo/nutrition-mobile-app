import {
  endOfMonth,
  format,
  formatDate,
  isSameMonth,
  isWeekend,
  startOfMonth,
} from "date-fns";
import { Dimensions, Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { getWeeksOfMonth } from "./utils";
import useSummary from "@/src/query/hooks/useSummary";
import useMe from "@/src/query/hooks/useMe";
import { clamp } from "lodash";

const { width } = Dimensions.get("window");

type SquareProps = {
  isInCurrentMonth: boolean;
  date: Date;
  onPress?: () => void;
  macros?: {
    fat: number;
    protein: number;
    carbonhydrate: number;
  };
};

const Square = ({ isInCurrentMonth, date, onPress, macros }: SquareProps) => {
  return (
    <View
      style={{
        width: Math.round(width / 7) - 8,
        height: Math.round(width / 7) - 8 + 10,
        opacity: isInCurrentMonth ? 1 : 0.3,
      }}
    >
      <Pressable
        onPress={onPress}
        className={`h-full w-full items-center justify-evenly rounded-md ${
          isWeekend(date)
            ? "bg-gray-200 dark:bg-gray-900"
            : "bg-gray-100 dark:bg-gray-800"
        }`}
      >
        <View className="items-center justify-center">
          <Text
            style={{ fontSize: 12 }}
            className="font-semibold text-gray-800 dark:text-gray-100"
          >
            {format(date, "dd")}
          </Text>
          <Text
            style={{ fontSize: 8 }}
            className="text-gray-800 dark:text-gray-100"
          >
            {format(date, "MMM")}
          </Text>
          <Text
            style={{ fontSize: 8 }}
            className="text-gray-500 dark:text-gray-100"
          >
            {format(date, "EE")}
          </Text>
        </View>

        {/* Combined Macros Progress Bar */}
        <View className="bg-blue border-1 h-2 w-10 overflow-hidden rounded-full border border-gray-400 dark:border-gray-600">
          <View className="flex-row h-full">
            {/* Carbs */}
            <View
              className="h-full bg-green-600 dark:bg-green-400"
              style={{
                width: macros ? `${macros.carbonhydrate}%` : "0%",
              }}
            />
            {/* Protein */}
            <View
              className="h-full bg-blue-600 dark:bg-blue-400"
              style={{
                width: macros ? `${macros.protein}%` : "0%",
              }}
            />
            {/* Fat */}
            <View
              className="h-full bg-yellow-600 dark:bg-yellow-400"
              style={{
                width: macros ? `${macros.fat}%` : "0%",
              }}
            />
          </View>
        </View>

      </Pressable>
    </View>
  );
};

const Row = ({ children }: { children?: React.ReactNode }) => {
  return (
    <View className="flex-row items-center justify-evenly py-1">
      {children}
    </View>
  );
};

type HeatmapProps = {
  year: number;
  month: number;
  onPressDate?: (date: Date) => void;
};

const Heatmap = ({ year, month, onPressDate }: HeatmapProps) => {
  const selectedMonth = new Date(year, month - 1);

  const firstDay = formatDate(startOfMonth(selectedMonth), "yyyy-MM-dd");
  const lastDay = formatDate(endOfMonth(selectedMonth), "yyyy-MM-dd");

  const { summary, isLoading } = useSummary({
    startDate: firstDay,
    endDate: lastDay,
  });

  const { me } = useMe();

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withSequence(
        withTiming(0, { duration: 0 }),
        withTiming(1, { duration: 100 }),
      ),
    };
  }, [year, month]);

  const days = getWeeksOfMonth({
    year: year,
    month: month,
  });

  return (
    <Animated.View style={[animatedStyle]}>
      {days.map((week, index) => (
        <Row key={index}>
          {week.map((day) => {
            const dateKey = formatDate(day, "yyyy-MM-dd");
            const dayData = summary?.[dateKey];

            const macros = dayData ? {
              fat: dayData.percentageFat,
              protein: dayData.percentageProtein,
              carbonhydrate: dayData.percentageCarbonhydrate,
            } : undefined;

            return (
              <Square
                key={format(day, "dd-MM-yyyy")}
                isInCurrentMonth={isSameMonth(day, new Date(2024, month - 1))}
                date={day}
                onPress={() => onPressDate?.(day)}
                macros={macros}
              />
            );
          })}
        </Row>
      ))}
    </Animated.View>
  );
};

export default Heatmap;

import useMe from "@/src/query/hooks/useMe";
import useMeals from "@/src/query/hooks/useMeals";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import { useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import Animated, { LightSpeedInLeft } from "react-native-reanimated";
import IconButton from "../IconButton";
import { MealSectionProps, MealsProps } from "./types";
import { useTranslation } from "react-i18next";

const MAX_RECORDS_TO_SHOW = 3;

// Header component for each meal section showing title, calories and add button
const MealHeader = ({ title, calories, mealTime, startDate, endDate }: MealsProps) => {
  const { colorScheme } = useColorScheme();
  const { t } = useTranslation();

  const handleAddMeal = () => {
    router.push({
      pathname: `/addMeal`,
      params: { mealTime, startDate, endDate }
    });
  };

  return (
    <View className="flex flex-row items-center justify-between rounded-lg bg-gray-100 px-2 dark:bg-gray-700">
      <Text className="text-black-400 py-2 text-lg font-semibold dark:text-gray-100">
        {title}{" "}
        <Text className="text-sm text-gray-400 dark:text-gray-300">
          {Math.round(calories)} {t("General.CAL")}
        </Text>
      </Text>
      
      <IconButton
        icon={
          <Ionicons
            name="add"
            size={18}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        }
        onPress={handleAddMeal}
      />
    </View>
  );
};

// Individual meal item showing food details
type MealItemProps = {
  title: string;
  calories: number; 
  image: string;
  description: string;
  onPress: () => void;
};

const MealItem = ({
  title,
  calories,
  image,
  description,
  onPress,
}: MealItemProps) => {
  const MemorizedImage = useMemo(() => Image, []);
  const { t } = useTranslation();

  return (
    <Animated.View entering={LightSpeedInLeft}>
      <Pressable
        onPress={onPress}
        className="flex flex-row items-center justify-between px-4 py-3"
      >
        <View className="flex-1 flex-row items-center">
          <MemorizedImage
            source={{ uri: image }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: "#00000030",
              marginRight: 8,
            }}
          />
          <View className="flex-1">
            <Text
              className="text-black-400 text-md w-3/4 font-semibold dark:text-gray-100"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-md text-gray-400 dark:text-gray-300"
              numberOfLines={1}
            >
              {description}
            </Text>
          </View>
        </View>
        <Text className="text-xs text-gray-400 dark:text-gray-300">
          {calories} {t("General.CAL")}
        </Text>
      </Pressable>
    </Animated.View>
  );
};

// Shown when no meals are recorded
const NoRecords = () => {
  const { t } = useTranslation();
  return (
    <View className="flex flex-col justify-center px-4 py-3">
      <Text className="text-black-400 text-md dark:text-gray-100">
        {t("Meals.NO_RECORDS")}
      </Text>
    </View>
  );
};

// Shows count of additional records beyond display limit
const MoreRecords = ({ count }: { count: number }) => {
  const { t } = useTranslation();
  return (
    <View className="mb-2 flex flex-col justify-center rounded-lg bg-gray-100 px-4 py-3 opacity-50 dark:bg-gray-700">
      <Text className="text-black-400 text-md dark:text-gray-100">
        {t("Meals.MORE_RECORDS", { count })}
      </Text>
    </View>
  );
};

// Section component for each meal type (breakfast/lunch/dinner)
const MealSection = ({
  mealType,
  meals,
  energyNeed,
  startDate,
  endDate,
}: MealSectionProps) => {
  const { t } = useTranslation();
  
  const mealIcons = {
    breakfast: t("Meals.BREAKFAST"),
    lunch: t("Meals.LUNCH"),
    dinner: t("Meals.DINNER"),
  };

  const mealData = meals[mealType] || [];
  const sortedMeals = mealData
    .sort((a, b) => b.energy - a.energy)
    .slice(0, MAX_RECORDS_TO_SHOW);

  const handleMealPress = () => {
    router.push(`/daySummary?startDate=${startDate}&endDate=${endDate}`);
  };

  return (
    <>
      <MealHeader
        title={mealIcons[mealType]}
        calories={energyNeed}
        mealTime={mealType}
        startDate={startDate}
        endDate={endDate}
      />
      
      {mealData.length === 0 ? (
        <NoRecords />
      ) : (
        sortedMeals.map((meal) => (
          <MealItem
            key={meal.id + Math.random()}
            title={meal.foodName}
            calories={meal.energy}
            image={meal.lowResImage}
            description={meal.category_description}
            onPress={handleMealPress}
          />
        ))
      )}

      {mealData.length > MAX_RECORDS_TO_SHOW && (
        <MoreRecords count={mealData.length - MAX_RECORDS_TO_SHOW} />
      )}
    </>
  );
};

// Main Meals component
const Meals = ({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) => {
  const { meals } = useMeals({ startDate, endDate });
  const { me } = useMe();

  if (!me) return null;

  // Calculate calorie distribution for each meal
  const totalCalories = me.nutritionalNeed?.calories || 0;
  const energyNeedPerMeal = {
    breakfast: totalCalories * 0.3, // 30% of daily calories
    lunch: totalCalories * 0.4,     // 40% of daily calories
    dinner: totalCalories * 0.3,    // 30% of daily calories
  };

  const mealTypes = ["breakfast", "lunch", "dinner"] as const;

  return (
    <View className="overflow-hidden rounded-lg bg-gray-50 p-2 dark:bg-gray-800">
      {mealTypes.map((mealType) => (
        <MealSection
          key={mealType}
          mealType={mealType}
          meals={meals || { [mealType]: [] }}
          energyNeed={energyNeedPerMeal[mealType]}
          startDate={startDate}
          endDate={endDate}
        />
      ))}
    </View>
  );
};

export default Meals;

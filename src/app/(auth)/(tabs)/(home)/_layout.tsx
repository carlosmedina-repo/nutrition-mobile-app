import IconButton from "@/src/components/IconButton";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Stack } from "expo-router/stack";
import { useColorScheme } from "nativewind";
import { useTranslation } from "react-i18next";

const HomeStackLayout = () => {
  const { colorScheme } = useColorScheme();
  const { t } = useTranslation();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerTintColor: colorScheme === "dark" ? "white" : "black",
      }}
    >
      <Stack.Screen
        options={{
          title: t("home.HEADER_TITLE"),
          headerShown: true,
          headerLeft: () => (
            <IconButton
              onPress={() => {
                router.push("mealHistory");
              }}
              icon={
                <Ionicons
                  name="calendar-outline"
                  size={24}
                  color={colorScheme === "dark" ? "white" : "black"}
                />
              }
            />
          ),
        }}
        name="index"
      />
      <Stack.Screen
        name="addMeal"
        options={{
          presentation: "modal",
          headerShown: true,
          headerTitle: t("home.addMeal.HEADER_TITLE"),
        }}
      />
      <Stack.Screen
        name="measurement"
        options={{
          headerTitle: "Measurements",
          presentation: "modal",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="addWater"
        options={{
          presentation: "card",
          gestureEnabled: true,
          animation: "flip",
          headerShown: true,
          headerTitle: t("home.addWater.HEADER_TITLE"),
        }}
      />
      <Stack.Screen
        options={{
          title: "Meal History",
          headerShown: true,
        }}
        name="mealHistory"
      />
      <Stack.Screen
        options={{
          title: "Summary",
          headerShown: true,
        }}
        name="daySummary"
      />
      <Stack.Screen
        options={{
          title: "Nutri Guide",
          headerShown: true,
          presentation: "modal",
          animation: "fade",
        }}
        name="aiRecommendation"
      />
    </Stack>
  );
};

export default HomeStackLayout;

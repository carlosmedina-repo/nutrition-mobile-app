import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Stack } from "expo-router/stack";
import { useColorScheme } from "nativewind";
import { useTranslation } from "react-i18next";
import { Pressable } from "react-native";

const TransformationStack = () => {
  const { t } = useTranslation();

  const { colorScheme } = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: t("transformation.HEADER_TITLE"),
          headerRight: () => (
            <Pressable
              className="flex-row items-center gap-2"
              onPress={() => router.push("/(auth)/(tabs)/(transformation)/transformationMethod")}
            >
              <Ionicons
                name="add-circle-outline"
                size={24}
                color={colorScheme === "dark" ? "white" : "black"}
              />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name="transformationMethod"
        options={{
          headerShown: true,
          title: t("transformation.HEADER_TITLE"),
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default TransformationStack;

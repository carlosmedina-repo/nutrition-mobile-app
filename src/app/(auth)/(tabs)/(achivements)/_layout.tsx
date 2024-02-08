import { Stack } from "expo-router/stack";
import { useTranslation } from "react-i18next";

const AchivementsStackLayout = () => {
  const { t } = useTranslation();

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
          title: t("achievements.HEADER_TITLE"),
        }}
      />
      <Stack.Screen
        name="details"
        options={{
          presentation: "modal",
          animation: "flip",
        }}
      />
    </Stack>
  );
};

export default AchivementsStackLayout;

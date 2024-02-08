import { Stack } from "expo-router/stack";
import { useTranslation } from "react-i18next";

const ProfileStackLayout = () => {
  const { t } = useTranslation();

  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: t("profile.HEADER_TITLE")
        }} 
      />
      <Stack.Screen 
        name="language" 
        options={{ 
          title: t("profile.LANGUAGE")
        }} 
      />
      <Stack.Screen 
        name="update"
        options={{ 
          title: t("updateUser.HEADER_TITLE")
        }} 
      />
      <Stack.Screen 
        name="weight"
        options={{ 
          title: t("weightHistory.TITLE")
        }} 
      />
    </Stack>
  );
};

export default ProfileStackLayout;

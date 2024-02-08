import ScreenView from "@/src/components/ScreenView";
import { changeLanguage, LANGUAGES, useSelectedLanguage } from "@/src/i18n";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

const LanguageScreen = () => {
  const currentLanguage = useSelectedLanguage();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (code: string) => {
    changeLanguage(code);
  };

  return (
    <ScreenView padding>
      <View className="flex rounded-lg bg-gray-50 dark:bg-gray-800">
        {LANGUAGES.map((language) => (
          <Pressable
            onPress={() => handleLanguageChange(language.code)}
            key={language.code}
            className="flex flex-row items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
          >
            <View className="flex flex-row gap-2">
              <Text className="text-gray-900 dark:text-gray-100">
                {t(language.name)}
              </Text>
              <Text className="text-gray-500 dark:text-gray-400">
                ({language.originalName})
              </Text>
            </View>
            {currentLanguage === language.code && (
              <Ionicons 
                name="checkmark" 
                size={16} 
                className="text-primary-500"
              />
            )}
          </Pressable>
        ))}
      </View>
    </ScreenView>
  );
};

export default LanguageScreen;

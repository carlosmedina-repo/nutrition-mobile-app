import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorScheme } from "nativewind";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

const TransformationMethodScreen = () => {
    const { colorScheme } = useColorScheme();
    const { t } = useTranslation();

    return (
        <View className="flex-1 items-center justify-between p-4">
            <View className="flex-1 items-center justify-center gap-2">
                <Text className="text-2xl font-bold text-black dark:text-white">{t("transformationMethod.subtitle")}</Text>
                <Text className="text-lg text-gray-500 text-center dark:text-white">
                    {t("transformationMethod.description")}
                </Text>
            </View>
            <View className="bg-gray-100 rounded-lg p-4 w-full dark:bg-gray-800 mt-4 gap-4">
                <Pressable className="bg-gray-200 rounded-lg p-4 w-full dark:bg-gray-700 flex-row items-center justify-center gap-2">
                    <Ionicons name="camera" size={30} color={colorScheme === "dark" ? "white" : "black"} />
                    <Text className="text-md font-bold text-black dark:text-white">
                        {t("transformationMethod.takePhoto")}
                    </Text>
                </Pressable>

                <Pressable className="bg-gray-200 rounded-lg p-4 w-full dark:bg-gray-700 flex-row items-center justify-center gap-2">
                    <Ionicons name="image" size={30} color={colorScheme === "dark" ? "white" : "black"} />
                    <Text className="text-md font-bold text-black dark:text-white">
                        {t("transformationMethod.uploadFromGallery")}
                    </Text>
                </Pressable>

                <Pressable className="bg-red-500 rounded-lg p-4 w-full dark:bg-red-700 flex-row items-center justify-center gap-2">
                    <Ionicons name="close-circle" size={30} color="white" />
                    <Text className="text-md font-bold text-white">
                        {t("transformationMethod.close")}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
};

export default TransformationMethodScreen;
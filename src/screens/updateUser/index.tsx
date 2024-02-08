import Button from "@/src/components/Button";
import ScreenView from "@/src/components/ScreenView";
import TextInput from "@/src/components/TextInput";
import useMe, { User } from "@/src/query/hooks/useMe";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";

const UpdateUser = () => {
  const { t } = useTranslation();

  const { me, updateMe } = useMe();
  const [user, setUser] = useState<User>(me as User);

  const handleUpdate = () => {
    updateMe(user);
    router.back();
  };

  return (
    <ScreenView padding>
      <View className="gap-4">
        <View className="gap-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <Text className="text-lg font-bold color-black dark:color-white">
            {t("updateUser.HEADER_TITLE")}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            {t("updateUser.DESCRIPTION")}
          </Text>
        </View>
        <View className="gap-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <TextInput
            placeholder="Name"
            value={user?.firstName}
            onChangeText={(text) => setUser({ ...user, firstName: text })}
          />
          <TextInput
            placeholder="Last Name"
            value={user?.lastName}
            onChangeText={(text) => setUser({ ...user, lastName: text })}
          />
          <TextInput
            placeholder="Email"
            value={user?.email}
            onChangeText={(text) => setUser({ ...user, email: text })}
          />
          <TextInput
            placeholder="Weight"
            value={`${user?.weight}`}
            postFix="kg"
            onChangeText={(text) => setUser({ ...user, weight: Number(text) })}
          />
          <TextInput
            placeholder="Height"
            value={`${user?.height}`}
            postFix="cm"
            onChangeText={(text) => setUser({ ...user, height: Number(text) })}
          />
          <Button label={t("updateUser.UPDATE_BUTTON")} onPress={handleUpdate} />
        </View>
      </View>
    </ScreenView>
  );
};

export default UpdateUser;

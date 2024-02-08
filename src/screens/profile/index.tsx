import DarkModeToggle from "@/src/components/DarkModeToggle";
import ScreenView from "@/src/components/ScreenView";
import useMe from "@/src/query/hooks/useMe";
import Storage from "@/src/storage";
import { calculateBMI, getBmiCategory } from "@/src/utils/bmi";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useColorScheme } from "nativewind";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="gap-2 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
      {children}
    </View>
  );
};

const Seperator = () => {
  return (
    <View
      className="mx-2 border border-gray-200 dark:border-gray-600"
      style={{ borderWidth: 0.5 }}
    />
  );
};

const Section = ({
  leftIcon,
  text,
  rightIcon,
  rightComponent,
  onPress,
}: {
  leftIcon?: keyof typeof Ionicons.glyphMap;
  text: string | undefined;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  rightComponent?: React.ReactNode;
  onPress?: () => void;
}) => {
  const { colorScheme } = useColorScheme();
  const { t } = useTranslation();

  return (
    <Pressable
      onPress={onPress}
      className="flex flex-row items-center justify-between py-1"
    >
      <View className="flex flex-row items-center gap-4">
        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color={colorScheme === "dark" ? "white" : "black"}
          />
        )}

        <Text className="text-md dark:text-white">{text}</Text>
      </View>
      {rightIcon && (
        <Ionicons
          name={rightIcon}
          size={20}
          color={colorScheme === "dark" ? "white" : "black"}
        />
      )}
      {rightComponent && (
        <View className="absolute right-0">{rightComponent}</View>
      )}
    </Pressable>
  );
};

const Profile = () => {
  const { me, isLoading } = useMe();
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { t } = useTranslation();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!me) {
    return <Text>Error loading profile</Text>;
  }

  const logout = () => {
    console.log("logout");
    Storage.clear();
    router.replace("/login");
  };

  return (
    <ScreenView scrollable>
      <View className="flex gap-4 p-4">
        <Text className="text-xl font-bold dark:text-white">
          {t("profile.PERSONAL_INFORMATION")}
        </Text>
        <Container>
          <Section
            leftIcon="person-outline"
            text={`${me?.firstName} ${me?.lastName}`}
          />
          <Seperator />
          <Section leftIcon="mail-outline" text={me?.email} />
          <Seperator />
          <Section
            leftIcon="calendar-outline"
            text={`${me?.age} ${t("profile.YEARS")}`}
          />
          <Seperator />
          <Section
            leftIcon="person-outline"
            text={t("profile.GENDER." + me.gender.toUpperCase())}
          />
          <Seperator />
          <Section leftIcon="medkit-outline" text={`${me?.height} cm`} />
          <Seperator />
          <Section leftIcon="medkit-outline" text={`${me?.weight} kg`} />
          <Seperator />
          <Section
            leftIcon="man-outline"
            text={`${calculateBMI(me)} BMI - ${getBmiCategory(Number(calculateBMI(me)) || 0)}`}
          />
          <Seperator />
          <Section
            leftIcon="person-outline"
            text={t("profile.UPDATE_PROFILE")}
            rightIcon="chevron-forward"
            onPress={() => router.push("/update")}
          />
          <Seperator />
          <Section
            leftIcon="bar-chart-outline"
            text={t("profile.WEIGHT_HISTORY")}
            rightIcon="chevron-forward"
            onPress={() => router.push("/weight")}
          />
        </Container>
        <Text className="text-xl font-bold dark:text-white">
          {t("profile.APP_SETTINGS")}
        </Text>
        <Container>
          <Section
            leftIcon="moon-outline"
            text={t("profile.DARK_MODE")}
            rightComponent={
              <DarkModeToggle
                value={colorScheme === "dark"}
                onChange={() => toggleColorScheme()}
              />
            }
          />
          <Seperator />
          <Section
            leftIcon="language-outline"
            text={t("profile.LANGUAGE")}
            rightIcon="chevron-forward"
            onPress={() => router.push("/language")}
          />
        </Container>

        <Container>
          <Section
            leftIcon="log-out-outline"
            text={t("profile.LOGOUT")}
            rightIcon="chevron-forward"
            onPress={() => {
              logout();
            }}
          />
        </Container>
      </View>
    </ScreenView>
  );
};

export default Profile;

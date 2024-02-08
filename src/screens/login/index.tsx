import ScreenView from "@/src/components/ScreenView";
import TextInput from "@/src/components/TextInput";
import { useEffect, useState } from "react";

import Button from "@/src/components/Button";
import Checkbox from "@/src/components/Checkbox";
import { useLogin } from "@/src/query/hooks/useLogin";
import { useAuth } from "@/src/store/authStore";
import { router } from "expo-router";
import { Image, ImageBackground, ImageSourcePropType, Keyboard, SafeAreaView, Text, View } from "react-native";
import { isValidEmail, isValidPassword } from "./utils";
import { useTranslation } from "react-i18next";
import { useColorScheme } from "nativewind";

import LightBackground from "@/src/assets/images/light-bg.jpg";
import DarkBackground from "@/src/assets/images/dark-bg.jpg";

const Login = () => {
  const { t } = useTranslation();
  const [remember, setRemember] = useState(false);
  const { isLoggedIn, setToken } = useAuth();
  const { colorScheme } = useColorScheme();

  const [loginInformation, setLoginInformation] = useState<
    Record<string, { text: string; error: boolean }>
  >({
    email: {
      text: "test@gmail.com",
      error: false,
    },
    password: {
      text: "burakakyol",
      error: false,
    },
  });

  const { isError, isPending, isSuccess, login, data } = useLogin({
    email: loginInformation.email.text,
    password: loginInformation.password.text,
  });

  useEffect(() => {
    // console.log("isLoggedIn", isLoggedIn);
    if (isSuccess) {
      if (remember) {
        // Save user data to local storage
      }

      const token = data?.data.token;
      if (token) {
        setToken(token);
        router.replace("/(auth)/(home)" as any);
      }
    }
  }, [isSuccess, remember]);

  const handleLogin = () => {
    Keyboard.dismiss();
    login();

    return;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScreenView scrollable={false}>
        <ImageBackground
          source={colorScheme === "dark" ? DarkBackground : LightBackground}
          className="flex-1 items-center justify-center p-4"
        >
          <View className="items-center gap-4 w-full">
            <Image
              source={require("@/src/assets/images/icon.png")}
              className="h-16 w-16 rounded-xl bg-slate-200"
            />
            <Text className="text-2xl font-bold dark:color-white">
              {t('login.WELCOME_BACK')}
            </Text>
            <TextInput
              icon="email"
              placeholder={t('login.EMAIL_ADDRESS')}
              autoCapitalize="none"
              keyboardType="email-address"
              error={loginInformation.email.error}
              value={loginInformation.email.text}
              onChangeText={(text) =>
                setLoginInformation({
                  ...loginInformation,
                  email: {
                    text,
                    error: !isValidEmail(text),
                  },
                })
              }
            />
            <TextInput
              icon="lock"
              placeholder={t('login.PASSWORD')}
              secureTextEntry
              error={loginInformation.password.error}
              value={loginInformation.password.text}
              onChangeText={(text) =>
                setLoginInformation({
                  ...loginInformation,
                  password: { text, error: !isValidPassword(text) },
                })
              }
            />
            <View className="w-full gap-2">
              <Button
                loading={isPending}
                label={t('login.LOGIN')}
                disabled={
                  !isValidEmail(loginInformation.email.text) ||
                  !isValidPassword(loginInformation.password.text)
                }
                onPress={handleLogin}
              />
              <Checkbox
                label={t('login.REMEMBER_ME')}
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
            </View>
          </View>
          <View className="flex-1 items-center justify-end gap-2">
            <Text className="text-center text-sm dark:color-white">
              {t('login.DONT_HAVE_ACCOUNT')}{" "}
              <Text
                onPress={() => {
                  router.push("/register");
                }}
                className="text-green-500"
              >
                {t('login.SIGN_UP')}
              </Text>
            </Text>
            <Text className="text-center text-sm dark:color-white">
              {t('login.FORGOT_PASSWORD')}{" "}
              <Text className="text-green-500">{t('login.RESET_PASSWORD')}</Text>
            </Text>

            <Text className="text-center text-sm leading-6 dark:color-white">
              {t('login.TERMS_CONDITIONS')}{" "}
              <Text className="text-green-500">{t('login.TERMS_OF_SERVICE')}</Text>{" "}
              {t('login.AND')}{" "}
              <Text className="text-green-500">{t('login.PRIVACY_POLICY')}</Text>
            </Text>
          </View>
        </ImageBackground>
      </ScreenView>
    </SafeAreaView>
  );
};

export default Login;

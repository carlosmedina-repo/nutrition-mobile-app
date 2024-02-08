import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";
import { useColorScheme } from "nativewind";
import "../../global.css";
import IconButton from "../components/IconButton";
import { DarkTheme, LightTheme } from "../constants/Colors";
import { QueryProvider } from "../query/QueryProvider";
import { StatusBar } from "expo-status-bar";
import "../i18n";
import React from "react";
import { LanguageProvider } from '../i18n/LanguageProvider';

const InitialLayout = () => {
  const { colorScheme } = useColorScheme();

  const navigation = useNavigation();

  return (
    <LanguageProvider>
      <QueryProvider>
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : LightTheme}>
          <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
          <Stack
            screenOptions={{
              navigationBarColor: "white",
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="login"
              options={{
                headerShown: true,
                headerTitle: "Login",
                gestureEnabled: false,
                headerBackVisible: false,
              }}
            />
            <Stack.Screen
              name="register"
              options={{
                headerShown: true,
                headerTitle: "Register",
                gestureEnabled: false,
                headerBackVisible: false,
                headerRight: () => (
                  <IconButton
                    icon={
                      <Ionicons name="log-in-outline" size={24} color="white" />
                    }
                    onPress={() => navigation.navigate("/login")}
                  />
                ),
              }}
            />
            <Stack.Screen
              name="onboarding"
              options={{
                headerShown: true,
                headerTitle: "Onboarding",
                gestureEnabled: false,
                headerBackVisible: false,
              }}
            />
            <Stack.Screen
              name="camera"
              options={{
                presentation: "modal",
              }}
            />
            <Stack.Screen
              name="photoUpload"
              options={{
                presentation: "modal",
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="components"
              options={{
                headerShown: true,
                headerTitle: "Components",
                gestureEnabled: false,
                headerBackVisible: false,
              }}
            />
          </Stack>
        </ThemeProvider>
      </QueryProvider>
    </LanguageProvider>
  );
};

export default InitialLayout;

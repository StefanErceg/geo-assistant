import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { pages } from "./pages";
import { icons } from "./icons";
import { useSettings } from "../context/settings/SettingsProvider";
import { useTranslation } from "react-i18next";

const Tab = createMaterialBottomTabNavigator();

export const Navigation = () => {
  const { t } = useTranslation();
  const { darkMode } = useSettings();
  return (
    <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const icon = icons[route?.name];
            return (
              <Ionicons name={focused ? icon?.focused : icon?.nonFocused} size={24} color={DarkTheme.colors.text} />
            );
          },
        })}
      >
        {pages?.map((page, index) => {
          const translation = t(`pages.${page.name}`);
          return <Tab.Screen key={index} {...page} options={() => ({ tabBarLabel: translation })} />;
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

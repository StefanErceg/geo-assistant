import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { pages } from "./pages";
import { icons } from "./icons";
import { useSettings } from "../context/settings/SettingsProvider";

const Tab = createMaterialBottomTabNavigator();

export const Navigation = () => {
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
        {pages?.map((page, index) => (
          <Tab.Screen key={index} {...page} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

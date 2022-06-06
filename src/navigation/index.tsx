import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import { pages } from "./pages";
import { icons } from "./icons";

const Tab = createMaterialBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const icon = icons[route?.name];
            return (
              <Ionicons
                name={focused ? icon?.focused : icon?.nonFocused}
                size={24}
              />
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

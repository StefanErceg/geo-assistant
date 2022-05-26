import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Cities } from "../views/Cities";
import { Locations } from "../views/Locations";
import { News } from "../views/News";
import { General } from "../views/General";
import { Settings } from "../views/Settings";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Cities") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings";
            } else iconName = "home";
            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "green",
        })}
      >
        <Tab.Screen name="Cities" component={Cities} />
        <Tab.Screen name="Locations" component={Locations} />
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="General" component={General} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

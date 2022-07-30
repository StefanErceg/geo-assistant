import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";

export const Loader = () => {
  const { colors } = useTheme();
  return (
    <View>
      <ActivityIndicator animating={true} color={colors.accent} />
    </View>
  );
};

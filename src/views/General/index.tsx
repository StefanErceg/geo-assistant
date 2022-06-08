import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { stylesheet } from "../../stylesheets";

export default () => {
  const { colors } = useTheme();
  return (
    <View style={stylesheet.page}>
      <Text style={{ color: colors.text }}>General</Text>
    </View>
  );
};

import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import { stylesheet } from "../../stylesheets";

export default () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={stylesheet.container}>
      <Text style={{ color: colors.text }}>Cities</Text>
    </SafeAreaView>
  );
};

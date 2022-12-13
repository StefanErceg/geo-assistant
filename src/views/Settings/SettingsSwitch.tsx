import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { Switch } from "react-native-paper";

interface Props {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const SettingsSwitch = ({ label, value, onChange }: Props) => {
  const { colors } = useTheme();
  return (
    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginHorizontal: 70 }}>
      <Text style={{ color: colors.text, width: "50%" }}>{label}</Text>
      <Switch value={value} onValueChange={onChange} style={{ width: "50%" }} />
    </View>
  );
};

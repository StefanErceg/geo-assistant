import { View, Text } from "react-native";
import React, { FC } from "react";
import { useTheme, withTheme } from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";
import { stylesheet } from "../../stylesheets";

interface Props {
  theme: Theme;
}

const News: FC<Props> = ({ theme }) => {
  const { colors } = useTheme();
  return (
    <View style={stylesheet.page}>
      <Text style={{ color: colors.text }}>News</Text>
    </View>
  );
};

export default News;

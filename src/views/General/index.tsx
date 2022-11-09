import React from "react";
import { SafeAreaView, ScrollView, Text, View, Image } from "react-native";
import { useTheme } from "react-native-paper";
import { general } from "../../mock/general";
import { stylesheet } from "../../stylesheets";

export default () => {
  const { colors } = useTheme();
  const { countryName, history, population, capital, flagImageUrl, officialLanguage, currency } = general;
  return (
    <SafeAreaView style={stylesheet.container}>
      <ScrollView style={stylesheet.generalPage}>
        <Text style={{ color: colors.text, ...stylesheet.generalTitle }}>{countryName} details</Text>
        <View style={stylesheet.generalData}>
          <View style={stylesheet.generalInfo}>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ color: colors.text, width: "40%" }}>Population:</Text>
              <Text style={{ color: colors.text }}>{population}</Text>
            </View>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ color: colors.text, width: "40%" }}>Capital:</Text>
              <Text style={{ color: colors.text }}>{capital}</Text>
            </View>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ color: colors.text, width: "40%" }}>Language:</Text>
              <Text style={{ color: colors.text }}>{officialLanguage}</Text>
            </View>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ color: colors.text, width: "40%" }}>Currency:</Text>
              <Text style={{ color: colors.text }}>{currency}</Text>
            </View>
          </View>
          <View style={stylesheet.generalFlag}>
            <Image source={{ uri: flagImageUrl }} style={{ ...stylesheet.generalFlagImage }} />
          </View>
        </View>
        <Text style={{ color: colors.text }}></Text>
        <Text style={{ color: colors.text, ...stylesheet.generalTitle }}>History</Text>
        <Text style={{ color: colors.text }}>{history}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

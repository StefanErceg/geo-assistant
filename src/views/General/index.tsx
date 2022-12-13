import React from "react";
import { Text } from "react-native-paper";
import { SafeAreaView, ScrollView, View, Image } from "react-native";

import { general } from "../../mock/general";
import { stylesheet } from "../../stylesheets";
import { formatNumber } from "../../utils/format";

export default () => {
  const { countryName, history, population, capital, flagImageUrl, officialLanguage, currency } = general;
  return (
    <SafeAreaView style={stylesheet.container}>
      <ScrollView style={stylesheet.generalPage}>
        <Text style={{ ...stylesheet.generalTitle }}>{countryName} details</Text>
        <View style={stylesheet.generalData}>
          <View style={stylesheet.generalInfo}>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ width: "40%" }}>Population:</Text>
              <Text style={{}}>{formatNumber(population)}</Text>
            </View>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ width: "40%" }}>Capital:</Text>
              <Text style={{}}>{capital}</Text>
            </View>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ width: "40%" }}>Language:</Text>
              <Text style={{}}>{officialLanguage}</Text>
            </View>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ width: "40%" }}>Currency:</Text>
              <Text style={{}}>{currency}</Text>
            </View>
          </View>
          <View style={stylesheet.generalFlag}>
            <Image source={{ uri: flagImageUrl }} style={{ ...stylesheet.generalFlagImage }} />
          </View>
        </View>
        <Text style={{}}></Text>
        <Text style={{ ...stylesheet.generalTitle }}>History</Text>
        <Text style={{}}>{history}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

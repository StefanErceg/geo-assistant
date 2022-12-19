import React from "react";
import { Text } from "react-native-paper";
import { useTranslation } from "react-i18next";
import { SafeAreaView, ScrollView, View, Image } from "react-native";

import { general } from "../../mock/general";
import { stylesheet } from "../../stylesheets";
import { formatNumber } from "../../utils/format";

export default () => {
  const { t } = useTranslation();
  const { countryName, history, population, capital, flagImageUrl, officialLanguage, currency } = general;
  return (
    <SafeAreaView style={stylesheet.container}>
      <ScrollView style={stylesheet.generalPage}>
        <Text style={{ ...stylesheet.generalTitle }}>{countryName}</Text>
        <View style={stylesheet.generalData}>
          <View style={stylesheet.generalInfo}>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ width: "40%" }}>{t("general.population")}:</Text>
              <Text>{formatNumber(population)}</Text>
            </View>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ width: "40%" }}>{t("general.capital")}:</Text>
              <Text>{capital}</Text>
            </View>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ width: "40%" }}>{t("general.language")}:</Text>
              <Text>{officialLanguage}</Text>
            </View>
            <View style={stylesheet.generalInfoItem}>
              <Text style={{ width: "40%" }}>{t("general.currency")}:</Text>
              <Text>{currency}</Text>
            </View>
          </View>
          <View style={stylesheet.generalFlag}>
            <Image source={{ uri: flagImageUrl }} style={{ ...stylesheet.generalFlagImage }} />
          </View>
        </View>
        <Text></Text>
        <Text style={{ ...stylesheet.generalTitle }}>{t("general.history")}</Text>
        <Text>{history}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

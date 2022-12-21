import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { citiesStylesheet, stylesheet } from "../../stylesheets";
import cities from "../../../cities.json";
import { City } from "./City";
import { weather } from "../../api";

export default () => {
  weather.getCurrentWeather({ city: "Belgrade", lang: "" });
  return (
    <SafeAreaView style={stylesheet.container}>
      <ScrollView style={citiesStylesheet.cityList}>
        {cities?.map((city) => (
          <City key={city?.id} {...city} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

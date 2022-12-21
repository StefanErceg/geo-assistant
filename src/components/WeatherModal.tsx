import { useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Portal, Text } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { weather } from "../api";
import { stylesheet } from "../stylesheets";
import { WeatherResponse } from "../types/weather";
import { Image, View } from "react-native";
import { OPEN_WEATHER_API_URL } from "@env";

interface Props {
  city: string;
  visible: boolean;
  onClose: () => void;
}

export const WeatherModal = ({ city, visible, onClose }: Props) => {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { colors } = useTheme();

  const [weatherData, setWeatherData] = useState({} as WeatherResponse);

  useEffect(() => {
    (async () => {
      const data = await weather.getCurrentWeather({ city, lang: language });
      setWeatherData(data);
    })();
  }, []);

  const iconLink = weatherData ? `${OPEN_WEATHER_API_URL}img/w/${weatherData?.weather?.[0]?.icon}.png` : "";

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onClose}
        contentContainerStyle={{ ...stylesheet.weatherModal, backgroundColor: colors.background }}
      >
        <Ionicons style={stylesheet.modalClose} name="close-outline" size={24} onPress={onClose} color={colors.text} />
        <Text style={{ marginLeft: 30, marginRight: "auto" }}>{city}</Text>
        {iconLink && (
          <Image source={{ uri: iconLink }} style={{ width: 70, height: 70, marginLeft: 30, marginRight: "auto" }} />
        )}
        {weatherData && (
          <View>
            <View style={stylesheet.weatherItem}>
              <Text>{t("weather.feelsLike")}</Text>
              <Text>{weatherData.main?.feels_like}</Text>
            </View>
            <View style={stylesheet.weatherItem}>
              <Text>{t("weather.temp")}</Text>
              <Text>{weatherData.main?.temp}</Text>
            </View>
            <View style={stylesheet.weatherItem}>
              <Text>{t("weather.humidity")}</Text>
              <Text>{weatherData.main?.humidity}</Text>
            </View>
            <View style={stylesheet.weatherItem}>
              <Text>{t("weather.windSpeed")}</Text>
              <Text>{weatherData.wind?.speed}</Text>
            </View>
          </View>
        )}
      </Modal>
    </Portal>
  );
};

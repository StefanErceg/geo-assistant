import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import YouTubePlayer from "react-native-youtube-iframe";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Modal, Portal, Text, useTheme } from "react-native-paper";
import { View, Image, ScrollView, Dimensions, useWindowDimensions } from "react-native";

import { City as CityType } from "./types";
import { formatNumber } from "../../utils/format";
import { WeatherModal } from "../../components/WeatherModal";
import { citiesStylesheet, stylesheet } from "../../stylesheets";

export const City: FC<CityType> = ({ name, description, population, area, images, youtubeVideoId, coordinates }) => {
  const { t } = useTranslation();
  const { colors } = useTheme();

  const { width } = useWindowDimensions();

  const [descriptionOpened, setDescriptionOpened] = useState(false);
  const [videoOpened, setVideoOpened] = useState(false);
  const [mapsOpened, setMapsOpened] = useState(false);
  const [weatherOpened, setWeatherOpened] = useState(false);

  const openDescription = () => setDescriptionOpened(true);
  const closeDescription = () => setDescriptionOpened(false);

  const openVideo = () => youtubeVideoId && setVideoOpened(true);
  const closeVideo = () => setVideoOpened(false);

  const openMaps = () => setMapsOpened(true);
  const closeMaps = () => setMapsOpened(false);

  const openWeather = () => setWeatherOpened(true);
  const closeWeather = () => setWeatherOpened(false);

  const { longitude, latitude } = coordinates;

  return (
    <View style={{ ...citiesStylesheet.cityItem, borderColor: colors.accent }}>
      <Text style={citiesStylesheet.cityName}>{name}</Text>
      <View style={citiesStylesheet.cityPopulation}>
        <Ionicons style={citiesStylesheet.cityPopulationIcon} name="people-outline" size={24} color={colors.text} />
        <Text style={citiesStylesheet.cityDataLabel}>{t("city.population")}: </Text>
        <Text>{formatNumber(population)}</Text>
      </View>
      <View style={citiesStylesheet.cityArea}>
        <Ionicons style={citiesStylesheet.cityAreaIcon} name="earth-outline" size={24} color={colors.text} />
        <Text style={citiesStylesheet.cityDataLabel}>{t("city.area")}: </Text>
        <Text>{formatNumber(area)} km&sup2;</Text>
      </View>

      <ScrollView horizontal>
        {images?.map((imageSource, index) => (
          <Image
            key={index}
            source={{
              uri: imageSource,
              height: 200,
              width: 250,
            }}
            style={citiesStylesheet.cityImage}
          />
        ))}
      </ScrollView>
      <View style={citiesStylesheet.cityDetails}>
        <Ionicons name="information-circle-outline" color={colors.text} size={36} onPress={openDescription} />
        <Ionicons
          name="videocam-outline"
          color={youtubeVideoId ? colors.text : colors.disabled}
          size={36}
          onPress={openVideo}
        />
        <Ionicons name="location-outline" color={colors.text} size={36} onPress={openMaps} />
        <Ionicons name="cloud-outline" color={colors.text} size={36} onPress={openWeather} />
      </View>
      <Portal>
        <Modal
          visible={descriptionOpened}
          onDismiss={closeDescription}
          contentContainerStyle={{ ...stylesheet.modalContainer, backgroundColor: colors.background }}
        >
          <Ionicons
            style={stylesheet.modalClose}
            color={colors.text}
            name="close-outline"
            size={24}
            onPress={closeDescription}
          />
          <ScrollView>
            <Text>{description}</Text>
          </ScrollView>
        </Modal>
      </Portal>
      <Portal>
        <Modal
          visible={videoOpened}
          onDismiss={closeVideo}
          contentContainerStyle={{ backgroundColor: colors.background, ...stylesheet.videoModal }}
        >
          <Ionicons
            name="close-outline"
            size={24}
            onPress={closeVideo}
            color={colors.text}
            style={stylesheet.videoModalClose}
          />
          <YouTubePlayer videoId={youtubeVideoId!} height={240} width={width - 80} />
        </Modal>
      </Portal>
      <Portal>
        <Modal visible={mapsOpened} onDismiss={closeMaps} contentContainerStyle={stylesheet.mapModal}>
          <MapView
            provider={PROVIDER_GOOGLE}
            style={{ height: Dimensions.get("screen").height - 300, width: Dimensions.get("screen").width - 50 }}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.2,
              longitudeDelta: 0.2,
            }}
          ></MapView>
        </Modal>
      </Portal>
      <WeatherModal city={name} visible={weatherOpened} onClose={closeWeather} />
    </View>
  );
};

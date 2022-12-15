import React, { FC, useState } from "react";

import MapView from "react-native-maps";
import YouTubePlayer from "react-native-youtube-iframe";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Image, ScrollView, Dimensions } from "react-native";
import { Modal, Portal, Text, useTheme } from "react-native-paper";

import { stylesheet } from "../../stylesheets";
import { formatNumber } from "../../utils/format";
import { City as CityType } from "./types";

export const City: FC<CityType> = ({ name, description, population, area, imageUrl, youtubeVideoId }) => {
  const { colors } = useTheme();

  const [descriptionOpened, setDescriptionOpened] = useState(false);
  const [videoOpened, setVideoOpened] = useState(false);
  const [mapsOpened, setMapsOpened] = useState(false);

  const openDescription = () => setDescriptionOpened(true);
  const closeDescription = () => setDescriptionOpened(false);

  const openVideo = () => youtubeVideoId && setVideoOpened(true);
  const closeVideo = () => setVideoOpened(false);

  const openMaps = () => setMapsOpened(true);
  const closeMaps = () => setMapsOpened(false);

  return (
    <View style={{ ...stylesheet.cityItem, borderColor: colors.accent }}>
      <Text style={{ ...stylesheet.cityName }}>{name}</Text>
      <View style={stylesheet.cityPopulation}>
        <Ionicons style={stylesheet.cityPopulationIcon} name="people-outline" size={24} color={colors.text} />
        <Text style={{ ...stylesheet.cityDataLabel }}>Population: </Text>
        <Text>{formatNumber(population)}</Text>
      </View>
      <View style={stylesheet.cityArea}>
        <Ionicons style={stylesheet.cityAreaIcon} name="earth-outline" size={24} color={colors.text} />
        <Text style={{ ...stylesheet.cityDataLabel }}>Area: </Text>
        <Text>{formatNumber(area)} km&sup2;</Text>
      </View>
      {imageUrl ? <Image source={{ uri: imageUrl }} style={{ ...stylesheet.cityImage }} /> : null}
      <View style={stylesheet.cityDetails}>
        <Ionicons name="information-circle-outline" color={colors.text} size={36} onPress={openDescription} />
        <Ionicons
          name="videocam-outline"
          color={youtubeVideoId ? colors.text : colors.disabled}
          size={36}
          onPress={openVideo}
        />
        <Ionicons name="location-outline" color={colors.text} size={36} onPress={openMaps} />
        <Ionicons name="cloud-outline" color={colors.text} size={36} />
      </View>
      <Portal>
        <Modal
          visible={descriptionOpened}
          onDismiss={closeDescription}
          contentContainerStyle={stylesheet.modalContainer}
        >
          <Ionicons style={stylesheet.modalClose} name="close-outline" size={24} onPress={closeDescription} />
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
          <YouTubePlayer videoId={youtubeVideoId!} play height={270} />
        </Modal>
      </Portal>
      <Portal>
        <Modal visible={mapsOpened} onDismiss={closeMaps} contentContainerStyle={stylesheet.mapModal}>
          <MapView
            style={{ height: Dimensions.get("screen").height - 300, width: Dimensions.get("screen").width - 50 }}
            initialRegion={{
              latitude: 44.8152453,
              longitude: 20.422597,
              latitudeDelta: 0.3,
              longitudeDelta: 0.3,
            }}
          ></MapView>
        </Modal>
      </Portal>
    </View>
  );
};

import React, { FC, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Modal, Portal, useTheme } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { stylesheet } from "../../stylesheets";
import { formatNumber } from "../../utils/format";
import { City as CityType } from "./types";

export const City: FC<CityType> = ({ name, description, population, area, imageUrl, videoUrl }) => {
  const { colors } = useTheme();

  const [descriptionOpened, setDescriptionOpened] = useState(false);
  const [videoOpened, setVideoOpened] = useState(false);

  const openDescription = () => setDescriptionOpened(true);
  const closeDescription = () => setDescriptionOpened(false);

  const openVideo = () => setVideoOpened(true);
  const closeVideo = () => setVideoOpened(false);

  return (
    <View style={stylesheet.cityItem}>
      <Text style={{ color: colors.text, ...stylesheet.cityName }}>{name["sr"]}</Text>
      <View style={stylesheet.cityPopulation}>
        <Ionicons style={stylesheet.cityPopulationIcon} name="people-outline" size={24} color={colors.text} />
        <Text style={{ color: colors.text, ...stylesheet.cityDataLabel }}>Population: </Text>
        <Text style={{ color: colors.text }}>{formatNumber(population)}</Text>
      </View>
      <View style={stylesheet.cityArea}>
        <Ionicons style={stylesheet.cityAreaIcon} name="earth-outline" size={24} color={colors.text} />
        <Text style={{ color: colors.text, ...stylesheet.cityDataLabel }}>Area: </Text>
        <Text style={{ color: colors.text }}>{formatNumber(area)} km&sup2;</Text>
      </View>
      {imageUrl ? <Image source={{ uri: imageUrl }} style={{ ...stylesheet.cityImage }} /> : null}
      <View style={stylesheet.cityDetails}>
        <Ionicons name="information-circle-outline" color={colors.text} size={36} onPress={openDescription} />
        <Ionicons name="videocam-outline" color={colors.text} size={36} onPress={openVideo} />
        <Ionicons name="location-outline" color={colors.text} size={36} />
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
        <Modal visible={videoOpened} onDismiss={closeVideo} contentContainerStyle={stylesheet.modalContainer}>
          <Ionicons style={stylesheet.modalClose} name="close-outline" size={24} onPress={closeVideo} />
        </Modal>
      </Portal>
    </View>
  );
};

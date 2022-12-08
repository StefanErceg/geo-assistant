import React, { useMemo } from "react";
import { useTheme } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { stylesheet } from "../../stylesheets";

interface Props {
  id: number;
  name: string;
  description: string;
  favorites: number[];
  selectedAttraction: number | null;
  addToFavorites: (attractionId: number) => void;
  selectAttraction: (attractionId: number) => void;
  removeFromFavorites: (attractionId: number) => void;
  setYCoordinate: (itemId: number, value: number) => void;
}

export const AttractionItem = ({
  id,
  name,
  favorites,
  description,
  setYCoordinate,
  addToFavorites,
  selectAttraction,
  selectedAttraction,
  removeFromFavorites,
}: Props) => {
  const { colors } = useTheme();
  const imageSource = require("../News/news-placeholder.jpg");

  const selected = favorites.includes(id);

  const handleFavoritesClick = () => {
    if (selected) return removeFromFavorites(id);
    return addToFavorites(id);
  };

  return (
    <View
      style={{
        ...stylesheet.attractionItem,
        borderColor: colors.accent,
        backgroundColor: selectedAttraction === id ? "#333" : colors.background,
      }}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        const yCoordinate = layout.y;
        setYCoordinate(id, yCoordinate);
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => selectAttraction(id)}>
          <Text style={{ color: colors.text, ...stylesheet.attractionTitle }}>{name}</Text>
        </TouchableOpacity>
        <Ionicons
          name={`bookmark${selected ? "" : "-outline"}`}
          size={24}
          color={selected ? colors.accent : colors.text}
          onPress={handleFavoritesClick}
        />
      </View>
      <View style={stylesheet.attractionData}>
        <TouchableOpacity onPress={() => selectAttraction(id)}>
          <Text style={{ color: colors.text, ...stylesheet.attractionDescription }}>{description}</Text>
        </TouchableOpacity>
        <Image source={imageSource} style={{ ...stylesheet.attractionImage }} />
      </View>
    </View>
  );
};

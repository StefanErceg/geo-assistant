import React, { useMemo } from "react";
import { useTheme, Text } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";

import { attractionsStylesheet } from "../../stylesheets";

interface Props {
  id: number;
  name: string;
  images: string[];
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
  images,
  favorites,
  description,
  setYCoordinate,
  addToFavorites,
  selectAttraction,
  selectedAttraction,
  removeFromFavorites,
}: Props) => {
  const { colors } = useTheme();

  const selected = favorites.includes(id);

  const handleFavoritesClick = () => {
    if (selected) return removeFromFavorites(id);
    return addToFavorites(id);
  };

  return (
    <View
      style={{
        ...attractionsStylesheet.attractionItem,
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
          <Text style={{ ...attractionsStylesheet.attractionTitle }}>{name}</Text>
        </TouchableOpacity>
        <Ionicons
          name={`bookmark${selected ? "" : "-outline"}`}
          size={24}
          color={selected ? colors.accent : colors.text}
          onPress={handleFavoritesClick}
        />
      </View>
      <View style={attractionsStylesheet.attractionData}>
        <TouchableOpacity onPress={() => selectAttraction(id)}>
          <Text style={{ ...attractionsStylesheet.attractionDescription }}>{description}</Text>
        </TouchableOpacity>
        <ScrollView horizontal>
          {images?.map((imageSource, index) => (
            <Image
              key={index}
              source={{
                uri: imageSource,
                height: 200,
                width: 200,
              }}
              style={attractionsStylesheet.attractionImage}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

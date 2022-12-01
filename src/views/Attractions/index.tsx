import React, { useState } from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { useTheme } from "react-native-paper";
import { Dimensions, SafeAreaView, Text } from "react-native";

import { attractions } from "../../mock/attractions";
import { mapRegion } from "../../mock/general";
import { stylesheet } from "../../stylesheets";

export default () => {
  const { colors } = useTheme();

  const [selectedAttraction, selectAttraction] = useState<number | null>(null);
  return (
    <SafeAreaView style={stylesheet.container}>
      <Text style={{ color: colors.text, marginTop: 20, fontSize: 20 }}>Attractions</Text>
      <MapView
        style={{
          height: Dimensions.get("screen").height / 2,
          width: Dimensions.get("screen").width - 50,
          marginTop: 20,
        }}
        initialRegion={mapRegion}
      >
        {attractions.map(({ id, name, coordinate, shortDescription }) => (
          <Marker
            key={id}
            coordinate={coordinate}
            title={name}
            description={shortDescription}
            opacity={selectedAttraction === id ? 1 : 0.7}
            onPress={() => selectAttraction(id)}
          />
        ))}
      </MapView>
    </SafeAreaView>
  );
};

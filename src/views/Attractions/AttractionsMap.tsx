import React from "react";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { mapRegion } from "../../mock/general";
import { Attraction } from "./types";

interface Props {
  attractions: Attraction[];
  selectedAttraction: number | null;
  selectAttraction: (attractionId: number) => void;
}

export const AttractionsMap = ({ attractions, selectedAttraction, selectAttraction }: Props) => {
  return (
    <MapView
      style={{
        height: Dimensions.get("screen").height / 3,
        width: Dimensions.get("screen").width - 40,
        marginTop: 20,
      }}
      initialRegion={mapRegion}
    >
      {attractions?.map(({ id, name, coordinate, shortDescription }) => (
        <Marker
          key={`${id}_map_marker`}
          coordinate={coordinate}
          title={name}
          description={shortDescription}
          opacity={selectedAttraction === id ? 1 : 0.5}
          onPress={() => selectAttraction(id)}
        />
      ))}
    </MapView>
  );
};

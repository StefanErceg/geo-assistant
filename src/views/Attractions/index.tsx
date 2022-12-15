import React, { useState } from "react";
import { Text } from "react-native-paper";
import { SafeAreaView, useWindowDimensions, View } from "react-native";

import attractions from "../../../attractions.json";
import { stylesheet } from "../../stylesheets";
import { AttractionList } from "./AttractionsList";
import { AttractionsMap } from "./AttractionsMap";
export default () => {
  const [selectedAttraction, selectAttraction] = useState<number | null>(null);

  const { height, width } = useWindowDimensions();
  return (
    <SafeAreaView style={stylesheet.container}>
      <Text style={{ marginTop: 20, fontSize: 20 }}>Attractions</Text>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: height > width ? "column" : "row",
        }}
      >
        <AttractionsMap
          attractions={attractions}
          selectedAttraction={selectedAttraction}
          selectAttraction={selectAttraction}
        />
        <AttractionList
          attractions={attractions}
          selectedAttraction={selectedAttraction}
          selectAttraction={selectAttraction}
        />
      </View>
    </SafeAreaView>
  );
};

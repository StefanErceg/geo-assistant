import React, { useState } from "react";
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

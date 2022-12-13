import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import { SafeAreaView, Text } from "react-native";

// import { attractions } from "../../mock/attractions";
import attractions from "../../../attractions.json";
import { stylesheet } from "../../stylesheets";
import { AttractionList } from "./AttractionsList";
import { AttractionsMap } from "./AttractionsMap";
export default () => {
  const { colors } = useTheme();

  const [selectedAttraction, selectAttraction] = useState<number | null>(null);
  return (
    <SafeAreaView style={stylesheet.container}>
      <Text style={{ color: colors.text, marginTop: 20, fontSize: 20 }}>Attractions</Text>
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
    </SafeAreaView>
  );
};

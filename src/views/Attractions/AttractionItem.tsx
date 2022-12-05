import { View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import { stylesheet } from "../../stylesheets";

interface Props {
  id: number;
  name: string;
  description: string;
  selectedAttraction: number | null;
  selectAttraction: (attractionId: number) => void;
  setYCoordinate: (itemId: number, value: number) => void;
}

export const AttractionItem = ({
  id,
  name,
  description,
  selectedAttraction,
  selectAttraction,
  setYCoordinate,
}: Props) => {
  const { colors } = useTheme();
  const imageSource = require("../News/news-placeholder.jpg");

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
      <TouchableOpacity onPress={() => selectAttraction(id)}>
        <Text style={{ color: colors.text, ...stylesheet.attractionTitle }}>{name}</Text>
      </TouchableOpacity>
      <View style={stylesheet.attractionData}>
        <TouchableOpacity onPress={() => selectAttraction(id)}>
          <Text style={{ color: colors.text, ...stylesheet.attractionDescription }}>{description}</Text>
        </TouchableOpacity>
        <Image source={imageSource} style={{ ...stylesheet.attractionImage }} />
      </View>
    </View>
  );
};

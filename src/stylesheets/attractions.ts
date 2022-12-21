import { StyleSheet } from "react-native";

export const attractionsStylesheet = StyleSheet.create({
  attractionsList: {
    paddingHorizontal: 20,
  },

  attractionItem: {
    paddingTop: 20,
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  attractionTitle: {
    fontSize: 20,
    fontWeight: "600",
  },

  attractionData: {},

  attractionImage: {
    borderRadius: 6,
    resizeMode: "cover",
    margin: 10,
  },

  attractionDescription: {
    textAlign: "justify",
  },
});

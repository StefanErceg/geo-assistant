import { StyleSheet } from "react-native";

export const newsStylesheet = StyleSheet.create({
  newsItem: {
    alignItems: "stretch",
    marginVertical: 20,
    paddingVertical: 10,
    marginLeft: 2,
    marginRight: 2,
    paddingHorizontal: 2,
    shadowColor: "#fff",
    shadowOpacity: 0.4,
  },

  newsTitle: {
    fontSize: 18,
    textAlign: "justify",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  description: {
    fontSize: 12,
    textAlign: "justify",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  newsImage: {
    resizeMode: "cover",
    width: 320,
    height: 240,
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

import { StyleSheet } from "react-native";

export const newsStylesheet = StyleSheet.create({
  newsItem: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
    marginVertical: 20,
    paddingVertical: 10,
    marginLeft: 2,
    marginRight: 2,
    paddingHorizontal: 2,
    shadowColor: "#fff",
    shadowOpacity: 0.4,
  },

  newsTitle: {
    padding: 10,
    fontSize: 16,
  },

  newsImage: {
    resizeMode: "cover",
    width: 320,
    height: 240,
    borderRadius: 6,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

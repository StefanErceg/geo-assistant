import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  newsItem: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
    marginVertical: 20,
    paddingVertical: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingHorizontal: 10,
    shadowColor: "#fff",
    shadowOpacity: 0.4,
  },

  newsTitle: {
    padding: 10,
    fontSize: 16,
  },

  newsImage: {
    resizeMode: "cover",
    width: 300,
    height: 240,
    borderRadius: 20,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

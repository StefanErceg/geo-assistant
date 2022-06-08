import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  newsItem: {
    alignContent: "stretch",
    textAlign: "justify",
    marginVertical: 20,
    paddingVertical: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 5,
  },
});

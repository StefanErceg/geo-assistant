import { StyleSheet } from "react-native";

export const citiesStylesheet = StyleSheet.create({
  cityList: {
    width: "90%",
    height: "100%",
  },

  cityItem: {
    width: "100%",
    height: 430,
    paddingHorizontal: 20,
    paddingTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderRadius: 6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  cityName: {
    fontSize: 24,
    fontWeight: "600",
  },
  cityPopulationIcon: { marginRight: 5 },

  cityPopulation: { display: "flex", flexDirection: "row", alignItems: "center", marginTop: 10 },

  cityImage: {
    resizeMode: "cover",
    width: "100%",
    height: 200,
    borderRadius: 6,
    marginTop: 10,
  },

  cityDataLabel: {
    marginRight: 10,
    width: 105,
  },

  cityArea: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  cityAreaIcon: {
    marginRight: 5,
  },

  cityDetails: {
    width: "100%",
    display: "flex",
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

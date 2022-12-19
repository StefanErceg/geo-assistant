import { StyleSheet } from "react-native";

export const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "90%",
    paddingBottom: 5,
    marginTop: 50,
  },

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

  modalContainer: {
    backgroundColor: "#dbdbdb",
    padding: 20,
    maxHeight: 400,
    minHeight: 150,
  },

  modalClose: {
    marginBottom: 20,
    color: "black",
    marginRight: 20,
    marginLeft: "auto",
  },

  videoModal: {
    padding: 40,
    display: "flex",
    justifyContent: "center",
  },

  videoModalClose: {
    marginRight: 20,
    marginLeft: "auto",
    marginBottom: 30,
  },

  mapModal: {
    padding: 20,
  },

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

  generalPage: {
    width: "95%",
  },

  generalTitle: {
    fontSize: 28,
  },

  generalData: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  generalInfo: {
    paddingVertical: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: 120,
    width: "60%",
  },

  generalInfoItem: { display: "flex", flexDirection: "row", marginBottom: 10 },

  generalFlag: {
    width: "40%",
    maxHeight: 200,
  },

  generalFlagImage: {
    width: "80%",
    height: "60%",
  },

  settings: {
    marginTop: 50,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});

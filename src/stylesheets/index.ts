import { StyleSheet } from "react-native";
import { newsStylesheet } from "./news";
import { citiesStylesheet } from "./cities";
import { attractionsStylesheet } from "./attractions";
export { newsStylesheet, citiesStylesheet, attractionsStylesheet };

export const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    height: "90%",
    paddingBottom: 5,
    marginTop: 50,
  },

  modalContainer: {
    padding: 20,
    maxHeight: 400,
    minHeight: 150,
  },

  modalClose: {
    marginBottom: 20,
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

  weatherModal: {
    padding: 20,
    height: 300,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  weatherItem: {
    display: "flex",
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
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

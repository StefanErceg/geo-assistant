import { citiesPage, generalPage, attractionsPage, newsPage, settingsPage } from "../consts/pages";

export interface Icon {
  nonFocused: string;
  focused: string;
}

export const icons: { [key: string]: Icon } = {
  [citiesPage]: {
    nonFocused: "business-outline",
    focused: "business",
  },
  [attractionsPage]: {
    nonFocused: "location-outline",
    focused: "location",
  },
  [newsPage]: {
    nonFocused: "newspaper-outline",
    focused: "newspaper",
  },
  [generalPage]: {
    nonFocused: "information-circle-outline",
    focused: "information-circle",
  },
  [settingsPage]: {
    nonFocused: "settings-outline",
    focused: "settings",
  },
};

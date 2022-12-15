import React from "react";
import { DarkTheme, DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { useSettings } from "./context/settings/SettingsProvider";
import { Navigation } from "./navigation";

export const Main = () => {
  const { darkMode } = useSettings();

  const theme = darkMode ? DarkTheme : DefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
};

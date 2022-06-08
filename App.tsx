import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Navigation } from "./src/navigation";

export default function App() {
  const theme = {
    ...DarkTheme,
  };
  return (
    <PaperProvider theme={theme}>
      <Navigation />
    </PaperProvider>
  );
}

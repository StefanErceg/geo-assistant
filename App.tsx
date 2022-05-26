import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  ActivityIndicator,
  DarkTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { Navigation } from "./src/navigation";

export default function App() {
  return (
    <PaperProvider theme={DarkTheme}>
      <Navigation />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

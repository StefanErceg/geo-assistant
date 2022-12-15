import { createContext } from "react";

interface ContextProps {
  darkMode: boolean;
  offlineMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  setOfflineMode: (offlineMode: boolean) => void;
}

const defaultValue: ContextProps = {
  darkMode: true,
  offlineMode: true,
  setDarkMode: () => {},
  setOfflineMode: () => {},
};

export const SettingsContext = createContext(defaultValue);

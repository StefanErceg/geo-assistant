import { FC, useContext, useState } from "react";
import { SettingsContext } from "./SettingsContext";

export const SettingsProvider: FC = (props) => {
  const [darkMode, setDarkMode] = useState(true);
  const [offlineMode, setOfflineMode] = useState(true);

  const context = {
    darkMode,
    offlineMode,
    setDarkMode,
    setOfflineMode,
  };

  return <SettingsContext.Provider value={context} {...props} />;
};

export const useSettings = () => useContext(SettingsContext);

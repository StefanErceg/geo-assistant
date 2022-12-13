import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Dropdown, DropdownItem } from "../../components/common/Dropdown";

import { stylesheet } from "../../stylesheets";
import { SettingsSwitch } from "./SettingsSwitch";

const languages: DropdownItem[] = [
  {
    label: "Srpski",
    value: "sr",
  },
  {
    label: "English",
    value: "en",
  },
];

const selectLanguageLabel: { [key: string]: string } = {
  sr: "Jezik",
  en: "Language",
};

export default () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);

  const [language, setLanguage] = useState(languages[0].value);

  const label = selectLanguageLabel[language] || "language";

  return (
    <SafeAreaView style={stylesheet.container}>
      <View style={stylesheet.settings}>
        <SettingsSwitch value={darkTheme} onChange={(value) => setDarkTheme(value)} label="Dark theme" />
        <SettingsSwitch value={offlineMode} onChange={(value) => setOfflineMode(value)} label="Offline mode" />
        <View style={{ width: "75%" }}>
          <Dropdown label={label} value={language} setValue={setLanguage} list={languages} />
        </View>
      </View>
    </SafeAreaView>
  );
};

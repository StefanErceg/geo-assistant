import React from "react";
import { useTranslation } from "react-i18next";
import { SafeAreaView, View } from "react-native";
import { Dropdown, DropdownItem } from "../../components/common/Dropdown";
import { useSettings } from "../../context/settings/SettingsProvider";

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

export default () => {
  const { t, i18n } = useTranslation();
  const { darkMode, offlineMode, setDarkMode, setOfflineMode } = useSettings();

  const setLanguage = (value: string) => i18n.changeLanguage(value);

  return (
    <SafeAreaView style={stylesheet.container}>
      <View style={stylesheet.settings}>
        <SettingsSwitch value={darkMode} onChange={(value) => setDarkMode(value)} label={t("settings.darkTheme")} />
        <SettingsSwitch
          value={offlineMode}
          onChange={(value) => setOfflineMode(value)}
          label={t("settings.offlineMode")}
        />
        <View style={{ width: "75%" }}>
          <Dropdown label={t("settings.language")} value={i18n.language} setValue={setLanguage} list={languages} />
        </View>
      </View>
    </SafeAreaView>
  );
};

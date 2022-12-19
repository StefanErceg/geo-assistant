import { Main } from "./src/Main";
import "./src/localization/i18n";
import { SettingsProvider } from "./src/context/settings/SettingsProvider";

export default function App() {
  return (
    <SettingsProvider>
      <Main />
    </SettingsProvider>
  );
}

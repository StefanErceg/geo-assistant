import { Main } from "./src/Main";
import { SettingsProvider } from "./src/context/settings/SettingsProvider";

export default function App() {
  return (
    <SettingsProvider>
      <Main />
    </SettingsProvider>
  );
}

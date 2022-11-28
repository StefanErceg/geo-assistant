import Cities from "../views/Cities";
import General from "../views/General";
import Attractions from "../views/Attractions";
import News from "../views/News";
import Settings from "../views/Settings";
import { citiesPage, generalPage, attractionsPage, newsPage, settingsPage } from "../consts/pages";

export interface Page {
  name: string;
  component: () => JSX.Element;
}

export const cities: Page = { name: citiesPage, component: Cities };
export const attractions: Page = { name: attractionsPage, component: Attractions };
export const news: Page = { name: newsPage, component: News };
export const general: Page = { name: generalPage, component: General };
export const settings: Page = { name: settingsPage, component: Settings };

export const pages = [cities, attractions, news, general, settings];

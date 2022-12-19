import axios from "axios";
import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL, OPEN_WEATHER_STATE_ID } from "@env";

const http = axios.create({
  baseURL: OPEN_WEATHER_API_URL,
});

interface Props {
  city: string;
  lang: string;
}
export interface GeoData {
  country: string;
  lat: number;
  local_names: { [key: string]: string }[];
  lon: number;
  name: string;
  state: string;
}

export const weather = {
  async getCurrentWeather({ city, lang }: Props) {
    const { data } = await http.get<GeoData[]>(
      `geo/1.0/direct?q=${city},${OPEN_WEATHER_STATE_ID}&limit=1&appid=${OPEN_WEATHER_API_KEY}`
    );
    const { lat, lon } = data[0] || {};
    const { data: weather } = await http.get(
      `data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&appid=${OPEN_WEATHER_API_KEY}`
    );
    console.log(weather);
  },

  getWeatherIcon(iconId: string) {
    return http.get(`img/w/${iconId}.png`);
  },
};

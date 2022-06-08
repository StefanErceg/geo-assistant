import axios from "axios";
import settings from "../settings.json";

const http = axios.create({
  baseURL: settings.newsUrl,
});

http.interceptors.request.use((config) => {
  config.headers = {
    "X-Api-Key": settings.newsApiKey,
  };
  return config;
});

interface Props {
  country: string;
}

export const news = {
  getTopHeadlines({ country }: Props) {
    return http
      .get(`v2/top-headlines?country=${country}`)
      .then((res) => res.data);
  },
};

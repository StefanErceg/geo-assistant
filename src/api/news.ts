import axios from "axios";
import settings from "../settings.json";
import { Article } from "../views/News/types";

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
  category?: string;
  pageSize?: number;
  page?: number;
}

interface Response {
  status: string;
  totalResults: number;
  articles: Article[];
}

export const news = {
  getTopHeadlines({
    country,
    category,
    pageSize,
    page,
  }: Props): Promise<Response> {
    return http
      .get(
        `v2/top-headlines?country=${country}${
          category ? `&category=${category}` : ""
        }${pageSize ? `&pageSize=${pageSize}` : ""}${
          page ? `&page=${page}` : ""
        }`
      )
      .then((res) => res.data);
  },
};

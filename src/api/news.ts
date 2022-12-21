import axios from "axios";
import { Article } from "../views/News/types";
import { NEWS_API_URL, NEWS_API_KEY } from "@env";

const http = axios.create({
  baseURL: NEWS_API_URL,
});

http.interceptors.request.use((config) => {
  config.headers = {
    "X-Api-Key": NEWS_API_KEY,
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
  getTopHeadlines({ country, category, pageSize, page }: Props): Promise<Response> {
    return http
      .get(
        `v2/top-headlines?country=${country}${category ? `&category=${category}` : ""}${
          pageSize ? `&pageSize=${pageSize}` : ""
        }${page ? `&page=${page}` : ""}`
      )
      .then((res) => res.data);
  },
};

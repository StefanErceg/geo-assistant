import * as Network from "expo-network";
import { Text } from "react-native-paper";
import React, { useEffect, useState } from "react";
import { View, Image, FlatList, ListRenderItemInfo } from "react-native";

import { news } from "../../api";
import { Article } from "./types";
import { Loader } from "../../components/common/Loader";
import { loadData, storeData } from "../../utils/persist";
import { SafeAreaView } from "react-native-safe-area-context";
import { stylesheet, newsStylesheet } from "../../stylesheets";
import { PERSISTED_ARTICLES, PERSISTED_PAGE } from "../../consts/news";

const News = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalArticles, setTotalArticles] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [isOnline, setIsOnline] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const pageSize = 10;

  useEffect(() => {
    (async () => {
      const { isInternetReachable = false } = await Network.getNetworkStateAsync();
      setIsOnline(isInternetReachable);
    })();
  }, []);

  useEffect(() => {
    if (isOnline) loadNews();
    loadNewsFromStore();
  }, [page, isOnline]);

  const loadNews = async () => {
    try {
      const { articles: data, totalResults } = await news.getTopHeadlines({
        country: "rs",
        pageSize,
        page,
      });
      setArticles((articles) => [...articles, ...data]);
      setTotalArticles(totalResults);
    } catch (err) {
      console.error(err);
    } finally {
      setLoaded(true);
    }
  };

  const loadNewsFromStore = async () => {
    if (loaded) return;
    const articlesFromStore = await loadData(PERSISTED_ARTICLES);
    if (articlesFromStore) {
      const persistedArticles = JSON.parse(articlesFromStore);
      setArticles(persistedArticles);
    }

    const pageFromStore = await loadData(PERSISTED_PAGE);
    if (pageFromStore) {
      const persistedPage = +pageFromStore;
      setPage(persistedPage);
    }
    setLoaded(true);
  };

  useEffect(() => {
    const persistData = JSON.stringify(articles);
    storeData(PERSISTED_ARTICLES, persistData);
  }, [articles]);

  return (
    <SafeAreaView style={stylesheet.container}>
      {loaded && articles.length ? (
        <FlatList
          data={articles}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item: { title, urlToImage }, index }: ListRenderItemInfo<Article>) => {
            const imageSource = urlToImage ? { uri: urlToImage } : require("./news-placeholder.jpg");
            return (
              <View style={newsStylesheet.newsItem} key={index}>
                <Image source={imageSource} style={newsStylesheet.newsImage} />
                <Text style={newsStylesheet.newsTitle}>{title}</Text>
              </View>
            );
          }}
          onEndReached={() => setPage((page) => page + 1)}
          onEndReachedThreshold={0.7}
          initialNumToRender={10}
        />
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  );
};

export default News;

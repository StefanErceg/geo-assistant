import { View, Text, ScrollView, Image, FlatList, ListRenderItemInfo } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { stylesheet } from "../../stylesheets";
import { news } from "../../api";
import { SafeAreaView } from "react-native-safe-area-context";
import { Article } from "./types";
import { Loader } from "../../components/common/Loader";

const News = () => {
  const { colors } = useTheme();
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalArticles, setTotalArticles] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const pageSize = 20;

  useEffect(() => {
    loadNews();
  }, [page]);

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

  return (
    <SafeAreaView style={stylesheet.container}>
      {loaded ? (
        // <ScrollView>
        //   {articles?.map(({ author, title, urlToImage }, index) => {
        //     const imageSource = urlToImage
        //       ? { uri: urlToImage }
        //       : require("./news-placeholder.jpg");
        //     return (
        //       <View style={stylesheet.newsItem} key={index}>
        //         <Image
        //           source={imageSource}
        //           style={{ ...stylesheet.newsImage }}
        //         />
        //         <Text style={{ color: colors.text, ...stylesheet.newsTitle }}>
        //           {title}
        //         </Text>
        //       </View>
        //     );
        //   })}
        // </ScrollView>
        <FlatList
          // contentContainerStyle={{
          //   flex: 1,
          //   flexDirection: "column",
          //   height: "100%",
          //   width: "100%",
          // }}
          data={articles}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item: { title, urlToImage }, index }: ListRenderItemInfo<Article>) => {
            const imageSource = urlToImage ? { uri: urlToImage } : require("./news-placeholder.jpg");
            return (
              <View style={stylesheet.newsItem} key={index}>
                <Image source={imageSource} style={{ ...stylesheet.newsImage }} />
                <Text style={{ color: colors.text, ...stylesheet.newsTitle }}>{title}</Text>
              </View>
            );
          }}
          onEndReached={() => setPage((page) => page + 1)}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
        />
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  );
};

export default News;

import { View, Text, ScrollView } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { useTheme, withTheme } from "react-native-paper";
import { Theme } from "react-native-paper/lib/typescript/types";
import { stylesheet } from "../../stylesheets";
import { news } from "../../api";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  theme: Theme;
}

const News: FC<Props> = ({ theme }) => {
  const { colors } = useTheme();
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { articles } = await news.getTopHeadlines({ country: "rs" });
        setData(articles);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={stylesheet.container}>
      <ScrollView>
        <Text style={{ color: colors.text }}>News</Text>
        {data?.map((item, index) => {
          return (
            <Text
              style={{ color: colors.text, ...stylesheet.newsItem }}
              key={index}
            >
              {item?.title}
            </Text>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;

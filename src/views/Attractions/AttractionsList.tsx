import React, { useEffect, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { FAVORITES } from "../../consts/attractions";
import { stylesheet } from "../../stylesheets";
import { loadData, storeData } from "../../utils/persist";
import { AttractionItem } from "./AttractionItem";
import { Attraction } from "./types";

interface Props {
  attractions: Attraction[];
  selectedAttraction: number | null;
  selectAttraction: (attractionId: number) => void;
}

export const AttractionList = ({ attractions, selectedAttraction, selectAttraction }: Props) => {
  const [ref, setRef] = useState<ScrollView | null>(null);
  const [yCoordinates, setYCoordinates] = useState<{ [key: string]: number }>({});
  const [favorites, setFavorites] = useState<number[]>([]);
  const [loaded, setLoaded] = useState(false);

  const setItemYCoordinate = (itemId: number, value: number) => {
    setYCoordinates((yCoordinates) => ({ ...yCoordinates, [itemId]: value }));
  };

  useEffect(() => {
    if (selectedAttraction) {
      ref?.scrollTo({
        x: 0,
        y: yCoordinates[selectedAttraction] - 10,
        animated: true,
      });
    }
  }, [selectedAttraction]);

  useEffect(() => {
    (async () => {
      loadFavorites();
    })();
  }, []);

  const loadFavorites = async () => {
    try {
      const favoritesFromStore = await loadData(FAVORITES);
      if (favoritesFromStore) {
        const favorites = JSON.parse(favoritesFromStore);
        setFavorites(favorites);
      }
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    if (!loaded) return;
    const data = JSON.stringify(favorites);
    storeData(FAVORITES, data);
  }, [favorites]);

  const addToFavorites = (attractionId: number) => {
    setFavorites((favorites) => [...favorites, attractionId]);
  };

  const removeFromFavorites = (attractionId: number) => {
    setFavorites((favorites) => favorites.filter((id) => id !== attractionId));
  };

  const sortedAttractions = useMemo(() => {
    return [...attractions].sort(({ id: A }, { id: B }) => +favorites.includes(B) - +favorites.includes(A));
  }, [attractions, favorites]);

  return loaded ? (
    <ScrollView
      style={stylesheet.attractionsList}
      ref={(ref) => {
        setRef(ref);
      }}
    >
      {sortedAttractions?.map(({ id, name, description, images }) => (
        <AttractionItem
          key={`${id}_item`}
          id={id}
          name={name}
          images={images}
          description={description}
          selectedAttraction={selectedAttraction}
          selectAttraction={selectAttraction}
          setYCoordinate={setItemYCoordinate}
          favorites={favorites}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
        />
      ))}
    </ScrollView>
  ) : (
    <View></View>
  );
};

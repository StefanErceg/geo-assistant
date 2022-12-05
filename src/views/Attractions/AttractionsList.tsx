import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { stylesheet } from "../../stylesheets";
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

  const setItemYCoordinate = (itemId: number, value: number) => {
    setYCoordinates((yCoordinates) => ({ ...yCoordinates, [itemId]: value }));
  };

  useEffect(() => {
    if (selectedAttraction) {
      ref?.scrollTo({
        x: 0,
        y: yCoordinates[selectedAttraction] - 30,
        animated: true,
      });
    }
  }, [selectedAttraction]);

  return (
    <ScrollView
      style={stylesheet.attractionsList}
      ref={(ref) => {
        setRef(ref);
      }}
    >
      {attractions?.map(({ id, name, description }) => (
        <AttractionItem
          key={`${id}_item`}
          id={id}
          name={name}
          description={description}
          selectedAttraction={selectedAttraction}
          selectAttraction={selectAttraction}
          setYCoordinate={setItemYCoordinate}
        />
      ))}
    </ScrollView>
  );
};

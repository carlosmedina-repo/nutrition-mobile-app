import { Ionicons } from "@expo/vector-icons";
import { clamp } from "lodash";
import { useColorScheme } from "nativewind";
import React, { useRef } from "react";
import { FlatList, Pressable, useWindowDimensions, View } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue
} from "react-native-reanimated";

import ScreenView from "@/src/components/ScreenView";
import { Item } from "./components/Item";
import { TransformationImage } from "./components/TransformationImage";
import { DUMMY_TRANSFORMATION_DATA } from "./dummy_data";

type TransformationItem = {
  date: string | null;
  url: string | null;
  weight: number;
};

const TransformationScreen = () => {
  const { width } = useWindowDimensions();
  const listRef = useRef<FlatList>(null);
  const { colorScheme } = useColorScheme();

  const data = [null, ...DUMMY_TRANSFORMATION_DATA, null];

  const scrollPosition = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollPosition.value = event.contentOffset.x;
    },
  });

  return (
    <ScreenView scrollable={false}>
      <View style={{ flex: 1 }}>
        {data
          .filter((i) => i)
          .map((item, index) => (
            <TransformationImage
              key={`image-${index}`}
              index={index}
              scrollPosition={scrollPosition}
              width={width}
              url={item?.url ?? null}
            />
          ))}

        {data.length > 2 && (
          <Pressable
            className="absolute bottom-4 right-4 bg-gray-200/80 dark:bg-gray-800/80 p-4 rounded-full flex-row items-center justify-center gap-2"
            onPress={() => {
              // Share functionality here
            }}
          >
            <Ionicons
              name="share-outline"
              size={24}
              color={colorScheme === "dark" ? "white" : "black"}
            />
          </Pressable>
        )}
      </View>

      <View style={{ height: 96, width: "100%" }}>
        <Animated.FlatList
          ref={listRef}
          data={data as TransformationItem[]}
          horizontal
          pagingEnabled
          snapToOffsets={[width / 3, (width / 3) * 2, width]}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          keyExtractor={(_, i) => i.toString()}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Item
              {...item}
              width={width}
              weight={item?.weight ?? 0}
              onPress={() => {
                listRef.current?.scrollToIndex({
                  index: clamp(index - 1, 0, data.length - 1),
                  animated: true,
                });
              }}
            />
          )}
        />
      </View>
    </ScreenView>
  );
};

export default TransformationScreen;

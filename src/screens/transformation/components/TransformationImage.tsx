import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
} from "react-native-reanimated";

type TransformationImageProps = {
  index: number;
  scrollPosition: Animated.SharedValue<number>;
  width: number;
  url: string | null;
};

export const TransformationImage = React.memo(({
  index,
  scrollPosition,
  width,
  url,
}: TransformationImageProps) => {
  const animatedImageStyle = useAnimatedStyle(() => {
    const currentSegment = scrollPosition.value / (width / 3);
    const offset = currentSegment - index;

    let opacity = 0;
    if (offset >= 0 && offset < 1) {
      opacity = 1 - offset;
    } else if (offset >= -1 && offset < 0) {
      opacity = offset + 1;
    }

    return {
      ...StyleSheet.absoluteFillObject,
      opacity,
    };
  });

  if (!url) return null;

  return (
    <View style={{ position: "absolute", width, height: "100%" }}>
      <Animated.Image
        source={{ uri: url }}
        style={[animatedImageStyle]}
        resizeMode="cover"
      />
    </View>
  );
}); 
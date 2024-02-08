import { useEffect } from "react";
import { View, Animated } from "react-native";

interface ProgressBarProps {
    value?: number;
}

const ProgressBar = ({ value = 0 }: ProgressBarProps) => {
    const progressAnim = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(progressAnim, {
            toValue: value,
            duration: 1600,
            useNativeDriver: false,
        }).start();
    }, [value]);

    return (
        <View className="w-64 h-4 bg-gray-200 rounded-full overflow-hidden">
            <Animated.View
                className="h-full bg-lime-500"
                style={{
                    width: progressAnim.interpolate({
                        inputRange: [0, 100],
                        outputRange: ["0%", "100%"],
                    }),
                }}
            />
        </View>
    );
};

export default ProgressBar;
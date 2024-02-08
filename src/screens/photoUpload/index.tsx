import Button from "@/src/components/Button";
import ProgressBar from "@/src/components/ProgressBar";
import usePhotoSearch from "@/src/query/hooks/usePhotoSearch";
import { router, useLocalSearchParams } from "expo-router";
import { Alert, Image, Text, useWindowDimensions, View } from "react-native";
import Animated, { BounceIn, BounceInUp, BounceOutUp } from "react-native-reanimated";
import * as FileSystem from 'expo-file-system';
import { SEARCH_FOOD_BY_IMAGE_API } from "@/src/constants/Api";
import { useEffect, useState } from "react";
import { clamp } from "lodash";

const PhotoUploadScreen = () => {
    const { photo } = useLocalSearchParams();

    const { width } = useWindowDimensions();

    const [progress, setProgress] = useState(0);

    const { result, isLoading, error } = usePhotoSearch(photo as string, (progress) => {
        console.log("progress", progress);
        setProgress(clamp(progress, 0, 0.7));
    });

    useEffect(() => {
        if (result) {
            setProgress(1);
            setTimeout(() => {
                console.log("result", result.length);
                //modal'ı kapat ve foods sayfasına gönder
                router.replace("/(auth)/(tabs)/(foods)?resultsFromCamera=" + JSON.stringify(result));
            }, 1000);
        }

        if (error) {
            Alert.alert("Error", error.message);
            router.replace("/camera");
        }
    }, [result, error]);


    return (
        <View className="flex-1 items-center justify-between gap-4 p-4 pb-16">

            <Animated.View
                entering={BounceInUp.duration(500).springify()}
                className="flex-1 items-center justify-center gap-4">
                <Image
                    source={{ uri: photo as string }}
                    style={{
                        width: width * 0.8,
                        height: width * 0.8,
                        borderRadius: 20,
                        resizeMode: "cover",
                        borderWidth: 1,
                        borderColor: "red",
                        aspectRatio: 1,
                    }}
                />

            </Animated.View>

            <View className="items-center justify-center gap-4 bg-gray-100 p-4 rounded-2xl dark:bg-gray-800 mb-16">
                <Text
                    className="text-lg font-bold text-black dark:text-white text-center"
                >Photo is uploading...</Text>
                <ProgressBar value={progress * 100} />
                <Text
                    className="text-sm text-gray-500 dark:text-gray-400 text-center"
                >
                    Please wait while we process your photo. We are analyzing your photo to determine the best possible result.
                    We do not save your photo, it is only used for analysis.
                </Text>

                <View className="flex-row gap-2 w-full">


                    <Button
                        label="Cancel"
                        onPress={() => {
                            router.replace("/camera");
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default PhotoUploadScreen;
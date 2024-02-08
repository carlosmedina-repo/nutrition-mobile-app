import ScreenView from "@/src/components/ScreenView";
import useFoodDetails from "@/src/query/hooks/useFoodDetails";
import { router, useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";
import { Alert, Image, ImageSourcePropType, Pressable, Text, TouchableOpacity, View } from "react-native";
import { ServingIcon, OunceIcon, CupIcon, GramIcon, PieceIcon, SliceIcon, DozenIcon, BowlIcon, PortionIcon, PlateIcon } from "@/src/assets/icons";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import Button from "@/src/components/Button";
import addMeal from "@/src/app/(auth)/(tabs)/(home)/addMeal";
import useInsertMeal from "@/src/query/hooks/useInsertMeal";

type Measurement = {
    type: string;
    unit: string;
    description: string;
    amount: number;
}

const MeasurementIcons = {
    serving: ServingIcon,
    ounce: OunceIcon,
    cup: CupIcon,
    gram: GramIcon,
    piece: PieceIcon,
    slice: SliceIcon,
    dozen: DozenIcon,
    bowl: BowlIcon,
    portion: PortionIcon,
    plate: PlateIcon,
} as const;

const MeasurementScreen = () => {
    const { food, mealTime, startDate } = useLocalSearchParams();
    const { colorScheme } = useColorScheme();
    const { foodDetails } = useFoodDetails(food as string);
    const { t } = useTranslation();
    const [measurements, setMeasurements] = useState<Measurement[]>([]);

    const calculateTotalWeight = () => {
        return measurements.reduce((acc, measurement) => {
            return acc + (measurement.amount * measurement.unit);
        }, 0);
    }

    const { insertMeal } = useInsertMeal({
        foods: [{
            id: food as string,
            multiplier: calculateTotalWeight() / 100
        }],
        mealTime: mealTime as string,
        date: new Date(startDate) || new Date(),
    });


    useEffect(() => {
        if (foodDetails?.measurements) {
            setMeasurements(foodDetails.measurements.map((measurement) => ({
                type: measurement.type,
                unit: measurement.unit,
                description: measurement.description,
                amount: 0,
            })));
        }
    }, [foodDetails]);



    const handleAmountChange = (type: string, amount: number) => {
        setMeasurements(prev => {
            return prev.map(measurement => {
                if (measurement.type === type) {
                    return {
                        ...measurement,
                        amount: Math.max(0, measurement.amount + amount)
                    };
                }
                return measurement;
            });
        });
    }

    return (
        <ScreenView padding scrollable>
            <View className="flex flex justify-between items-center gap-4">
                <Text className="text-2xl font-bold text-black dark:text-white">
                    {foodDetails?.foodName}
                </Text>
                <Image
                    className="w-full h-[160px] rounded-lg"
                    resizeMode="cover"
                    source={{ uri: foodDetails?.highResImage }} />

                <View className="flex flex-col gap-4 w-full">
                    {foodDetails?.measurements.map((measurement) => (
                        <View key={measurement.type} className="flex w-full flex-col items-center justify-between bg-gray-100 pb-2 rounded-lg dark:bg-gray-800">
                            <View className="flex w-full flex-row items-center justify-between bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
                                <View className="flex flex-row items-center">
                                    <Image
                                        source={MeasurementIcons[measurement.type as keyof typeof MeasurementIcons] || MeasurementIcons.serving}
                                        resizeMode="cover"
                                        className="w-10 h-10 rounded-lg mr-4"
                                        style={{ tintColor: colorScheme === "dark" ? "white" : "black" }}
                                    />
                                    <View className="flex flex-col gap-2">
                                        <Text className="text-lg font-bold text-black dark:text-white">
                                            {t(`home.addMeal.MEASUREMENTS.${measurement.type.toUpperCase()}`)}
                                        </Text>
                                    </View>
                                </View>

                                <View className="flex flex-row items-center gap-2">
                                    <TouchableOpacity
                                        onPress={() => handleAmountChange(measurement.type, -1)}
                                        className="bg-gray-200 px-4 py-2 rounded-lg">
                                        <Text className="text-2xl font-bold">-</Text>
                                    </TouchableOpacity>
                                    <View className="flex flex-col gap-2 w-10 items-center justify-center">
                                        <Text className="text-2xl font-bold text-black dark:text-white">
                                            {measurements.find(m => m.type === measurement.type)?.amount || 0}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => handleAmountChange(measurement.type, 1)}
                                        className="bg-gray-200 px-4 py-2 rounded-lg">
                                        <Text className="text-2xl font-bold">+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <Text className="text-sm text-gray-500">{measurement.description}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View className="flex flex-col mt-4 justify-center items-center gap-2">
                <Text className="text-lg font-bold text-black dark:text-white">
                    Total Weight: {calculateTotalWeight()} gr
                </Text>
                <Text className="text-lg font-bold text-black dark:text-white">
                    Total Calories: {calculateTotalWeight() / 100 * foodDetails?.energy} kcal
                </Text>
                <Button
                    label={t('home.addMeal.MEASUREMENTS.ADD_MEAL')}
                    onPress={() => {
                        //log total weight
                        const totalWeight = calculateTotalWeight();
                        const multiplier = totalWeight / 100;
                        console.log(multiplier);

                        if (totalWeight > 0 && multiplier > 0) {
                            insertMeal();
                            router.replace('/(auth)/(tabs)/(home)');
                        }
                        else {
                            Alert.alert(t('home.addMeal.MEASUREMENTS.NO_MEASUREMENT'));
                        }
                    }}
                />
            </View>
        </ScreenView>
    )
}

export default MeasurementScreen;
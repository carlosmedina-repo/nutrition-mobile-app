import ActivityOverview from "@/src/components/ActivityOverview";
import DailyTips from "@/src/components/DailyTips";
import DatePickerSlider from "@/src/components/DatePickerSlider";
import Meals from "@/src/components/Meals";
import NumberSelector from "@/src/components/NumberSelector";
import Overview from "@/src/components/Overview";
import ScreenView from "@/src/components/ScreenView";
import WaterOverview from "@/src/components/WaterOverview";
import { format } from "date-fns";
import { useState } from "react";
import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const today = new Date();
  const dateObj = new Date(today);
  const nextDay = new Date(dateObj.setDate(dateObj.getDate() + 1));

  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: format(today, "yyyy-MM-dd"),
    endDate: format(nextDay, "yyyy-MM-dd"),
  });

  const handleDateChange = (date: Date) => {
    const nextday = new Date(date);
    nextday.setDate(date.getDate() + 1);

    const previousDay = new Date(date);
    previousDay.setDate(date.getDate());

    setSelectedDateRange({
      startDate: format(previousDay, "yyyy-MM-dd"),
      endDate: format(nextday, "yyyy-MM-dd"),
    });
  };

  return (
    <ScreenView scrollable bounces>
      <DatePickerSlider onDateChange={handleDateChange} />
      <View className="p-4 pt-0">
        <Text className="pb-2 text-lg font-bold text-black dark:text-white">
          {t("home.OVERVIEW")}
        </Text>
        <Overview
          startDate={selectedDateRange.startDate}
          endDate={selectedDateRange.endDate}
        />
        <Text className="pb-2 pt-2 text-lg font-bold text-black dark:text-white">
          {t("home.MEALS")}
        </Text>
        <Meals
          startDate={selectedDateRange.startDate}
          endDate={selectedDateRange.endDate}
        />
        <Text className="pb-2 pt-2 text-lg font-bold text-black dark:text-white">
          {t("home.DAILY_TIPS")}
        </Text>
        <DailyTips />
        <Text className="pb-2 pt-2 text-lg font-bold text-black dark:text-white">
          {t("home.WATER_INTAKE")}
        </Text>
        <WaterOverview />
        <Text className="pb-2 pt-2 text-lg font-bold text-black dark:text-white">
          {t("home.WEIGHT_UPDATE")}
        </Text>
        <NumberSelector />
        <Text className="pb-2 pt-2 text-lg font-bold text-black dark:text-white">
          {t("home.ACTIVITIES")}
        </Text>
        <ActivityOverview />
      </View>
    </ScreenView>
  );
};

export default Home;

import React, { useMemo } from "react";
import { Text, Pressable } from "react-native";
import { format, formatDistance } from "date-fns";
import { useSelectedLanguage } from "@/src/i18n";
import { de, enUS, es, fr, it, tr, zhCN } from "date-fns/locale";

type ItemProps = {
    date: string | null;
    url: string | null;
    width: number;
    onPress: () => void;
    weight: number;
};

export const Item = ({
    date,
    url,
    width,
    onPress,
    weight,
}: ItemProps) => {
    const language = useSelectedLanguage();

    const { locale, formattedDate, localizedDistance } = useMemo(() => {
        const localeMap = {
            tr,
            it,
            fr,
            es,
            de,
            zh: zhCN
        } as const;

        const locale = localeMap[language as keyof typeof localeMap] || enUS;
        const formattedDate = date ? format(new Date(date), "dd MMM yyyy") : null;
        const localizedDistance = date ? formatDistance(new Date(date), new Date(), {
            addSuffix: true,
            locale: locale,
        }) : "";

        return { locale, formattedDate, localizedDistance };
    }, [date, language]);

    return (
        <Pressable
            onPress={onPress}
            style={{
                height: "100%",
                width: width / 3,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text
                style={{
                    display: weight === 0 ? "none" : "flex",
                }}
                className="mb-2 rounded-xl bg-black p-1 px-2 text-2xl font-bold text-white dark:bg-gray-400 dark:text-black"
            >
                {weight}
                <Text className="text-sm"> kg</Text>
            </Text>

            <Text className="text-md text-black dark:text-white">{formattedDate}</Text>
            <Text className="text-sm text-gray-500 dark:text-gray-400">
                {localizedDistance}
            </Text>
        </Pressable>
    );
};
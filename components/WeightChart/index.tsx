import { WeightHistory } from "@/src/query/hooks/useMe";
import { Fragment } from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";
import {
  Circle,
  Defs,
  Line,
  LinearGradient,
  Path,
  Stop,
  Svg,
  Text,
} from "react-native-svg";

const GuideLine = ({ y, width }: { y: number; width: number }) => {
  return (
    <Line
      x1="0"
      y1={y}
      x2={width}
      y2={y}
      stroke="lightgray"
      strokeWidth={0.5}
    />
  );
};

const generatePath = (data: WeightHistory[]) => {
  const maxWeight = Math.max(...data.map((item) => item.newWeight));
  const minWeight = Math.min(...data.map((item) => item.newWeight));
  const padding = (maxWeight - minWeight) * 0.1; // Add 10% padding

  const weightRange = (maxWeight + padding) - (minWeight - padding);

  const x = (index: number) => index * 50 + 30;

  const y = (weight: number) => {
    const percentage = (weight - (minWeight - padding)) / weightRange;
    return 170 - (percentage * 140); // Use 140 as range to leave space for labels
  };

  return data
    .map((item, index) => {
      return `${index === 0 ? "M" : "L"} ${x(index)} ${y(item.newWeight)}`;
    })
    .join(" ");
};

const generateCirclePoints = (data: WeightHistory[]) => {
  const maxWeight = Math.max(...data.map((item) => item.newWeight));
  const minWeight = Math.min(...data.map((item) => item.newWeight));
  const padding = (maxWeight - minWeight) * 0.1; // Add 10% padding

  const weightRange = (maxWeight + padding) - (minWeight - padding);

  const x = (index: number) => index * 50 + 30;

  const y = (weight: number) => {
    const percentage = (weight - (minWeight - padding)) / weightRange;
    return 170 - (percentage * 140); // Use 140 as range to leave space for labels
  };

  return data.map((item, index) => {
    return {
      x: x(index),
      y: y(item.newWeight),
    };
  });
};

const WeightChart = ({ data }: { data: WeightHistory[] }) => {
  const { width } = useWindowDimensions();

  // Calculate exact width needed for the chart
  // 50px spacing per point + 30px initial offset + 30px end padding
  const CHART_WIDTH = Math.max(data.length * 50 + 60, width);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}`;
  };

  return (
    <View className="flex">
      <ScrollView
        horizontal
        bounces={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Svg width={CHART_WIDTH} height="220">
          <Defs>
            <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <Stop offset="0" stopColor="#4ade80" stopOpacity="0.4" />
              <Stop offset="1" stopColor="#4ade80" stopOpacity="0" />
            </LinearGradient>
          </Defs>
          {[30, 65, 100, 135, 170].map((_, index) => {
            const y = _;
            return <GuideLine key={index} y={y} width={CHART_WIDTH} />;
          })}
          {generateCirclePoints(data).map((point, index) => (
            <Fragment key={`vertical-${index}`}>
              <Line
                x1={point.x}
                y1={30}
                x2={point.x}
                y2={170}
                stroke="lightgray"
                strokeWidth={0.5}
                strokeDasharray="4,4"
              />
              <Text
                x={point.x}
                y={200}
                fill="gray"
                fontSize={10}
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {formatDate(data[index].createdAt)}
              </Text>
            </Fragment>
          ))}
          <Path
            d={generatePath(data)}
            fill="url(#gradient)"
            stroke="#4ade80"
            strokeWidth={4}
          />
          {generateCirclePoints(data).map((point, index) => {
            return (
              <Fragment key={index}>
                <Circle
                  cx={point.x}
                  cy={point.y}
                  r={10}
                  fill="#4ade80"
                  stroke={"white"}
                  strokeWidth={0}
                />
                <Text
                  x={point.x}
                  y={point.y + 1}
                  fill="black"
                  fontSize={10}
                  textAnchor="middle"
                  alignmentBaseline="middle"
                  fontWeight={"bold"}
                >
                  {data[index].newWeight}
                </Text>
              </Fragment>
            );
          })}
        </Svg>
      </ScrollView>
    </View>
  );
};

export default WeightChart;

import React from "react";
import { Text, View, StyleSheet } from "react-native";

type StepperProps = {
  steps: string[];
  activeStep: number;
};

const Dot = ({ stepName, active }: { stepName: string; active?: boolean }) => {
  return (
    <View style={[styles.dot, active ? styles.activeDot : styles.inactiveDot]}>
      <Text
        style={[styles.text, active ? styles.activeText : styles.inactiveText]}
      >
        {stepName}
      </Text>
    </View>
  );
};

const Line = () => {
  return <View style={styles.line}></View>;
};

const Stepper = ({ steps, activeStep }: StepperProps) => {
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View style={styles.stepContainer} key={index}>
          <Dot stepName={step} active={index === activeStep} />
          {index !== steps.length - 1 && <Line />}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  activeDot: {
    backgroundColor: "#84cc16", // Lime green for active
    transform: [{ scale: 1.1 }],
    zIndex: 10,
  },
  inactiveDot: {
    backgroundColor: "#e5e5e5", // Gray for inactive
    transform: [{ scale: 1 }],
  },
  line: {
    height: 4,
    width: 16,
    backgroundColor: "#e5e5e5", // Gray line
  },
  text: {
    fontSize: 12,
    textAlign: "center",
  },
  activeText: {
    color: "white", // Text color for active step
  },
  inactiveText: {
    color: "black", // Text color for inactive step
  },
});

export default Stepper;

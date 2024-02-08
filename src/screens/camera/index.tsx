import ScreenView from "@/src/components/ScreenView";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Rect } from "react-native-svg";
import {
  CameraDevice,
  PhotoFile,
  Camera as VisionCamera,
  useCameraDevice,
  useCameraFormat,
  useCameraPermission,
} from "react-native-vision-camera";

const styles = StyleSheet.create({
  cameraStyle: {
    flex: 1,
    width: "100%",
  },
});

const CameraWrapper = ({
  hasPermission,
  devices,
  cameraRef,
}: {
  hasPermission: boolean;
  devices: CameraDevice[];
  cameraRef: React.RefObject<VisionCamera>;
}) => {
  const format = useCameraFormat(devices[0], [{
    photoResolution: {
      width: 1080,
      height: 1920
    }
  }]);

  if (!hasPermission) {
    return <View style={styles.cameraStyle} />;
  }
  if (devices.length === 0) {
    return <View style={styles.cameraStyle} />;
  }

  return (
    <VisionCamera
      ref={cameraRef}
      style={styles.cameraStyle}
      device={devices[0]}
      isActive={true}
      photo={true}
      photoQualityBalance="speed"
      format={format}
    />
  );
};

const CameraOverlay = ({
  onPressCamera,
}: {
  onPressCamera: () => void;
}) => {
  return (
    <View className="absolute z-10 h-full w-full flex-1 items-center justify-center">
      <Pressable
        onPress={onPressCamera}
        className="absolute bottom-20 z-20 rounded-2xl bg-lime-400 p-4 dark:bg-lime-500 mb-10 items-center justify-center">
        <Ionicons name="camera" size={24} color="black" />
        <Text className="text-black dark:text-white">Take Picture</Text>
      </Pressable>
      <Svg height="100%" width="100%" viewBox="0 0 120 120">
        <Rect
          x="10"
          y="0"
          width="100"
          height="100"
          fill="transparent"
          strokeWidth={1}
          stroke="#ffffff50"
          rx={10}
        />
      </Svg>
    </View>
  );
};

const Camera = () => {
  const cameraRef = useRef<VisionCamera>(null);
  const device = useCameraDevice("back");
  const { hasPermission, requestPermission } = useCameraPermission();
  const [photo, setPhoto] = useState<PhotoFile | null>(null);

  if (!hasPermission) {
    requestPermission();
  }

  const handleTakePicture = async () => {
    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePhoto();
        setPhoto(photo);

        router.replace(`/photoUpload?photo=${encodeURIComponent(photo.path)}`);
      }
    } catch (error) {
      console.error("Error taking picture:", error);
    }
  };

  return (
    <View className="flex-1">
      <CameraWrapper
        hasPermission={hasPermission}
        devices={device ? [device] : []}
        cameraRef={cameraRef}
      />
      <CameraOverlay
        onPressCamera={handleTakePicture}
      />
    </View>
  );
};

export default Camera;

import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function () {
  const insets = useSafeAreaInsets();
  // TODO 自定义head
  return (
    <>
      <StatusBar style="inverted" />
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          paddingTop: insets.top,
          backgroundColor: "#000",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
          }}
        >
          Custom Head
        </Text>
      </View>
    </>
  );
}

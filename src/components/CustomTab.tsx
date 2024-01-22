import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Button, Pressable, View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HomeTabParamList } from "../type";

export default function () {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<BottomTabScreenProps<HomeTabParamList>["navigation"]>();
  // TODO 自定义tab
  return (
    <>
      <View
        style={{
          paddingBottom: insets.bottom,
          // backgroundColor: "#000",
        }}
      >
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 20,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text>Home Page</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              navigation.navigate("Mine");
            }}
          >
            <Text>Details Page</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

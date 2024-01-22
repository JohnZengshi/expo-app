import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Button, View } from "react-native";
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
          <Button
            title="Home Page"
            onPress={() => {
              navigation.navigate("Home");
            }}
          ></Button>

          <Button
            title="Details Page"
            onPress={() => {
              navigation.navigate("Mine");
            }}
          ></Button>
        </View>
      </View>
    </>
  );
}

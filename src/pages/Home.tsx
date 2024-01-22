/*
 * @LastEditors: John
 * @Date: 2024-01-19 10:46:20
 * @LastEditTime: 2024-01-22 14:00:29
 * @Author: John
 */
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import useBearStore from "../store/Bear";
import { baseFont } from "../constants";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { HomeTabParamList, RootStackParamList } from "../type";
/*
 * @LastEditors: John
 * @Date: 2024-01-19 10:46:20
 * @LastEditTime: 2024-01-22 11:53:33
 * @Author: John
 */

export default function (
  props: BottomTabScreenProps<HomeTabParamList, "Home">
) {
  const navigation =
    useNavigation<
      NativeStackScreenProps<RootStackParamList, "Details">["navigation"]
    >();
  const { bears } = useBearStore();
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: baseFont }}>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details", { count: bears })}
        />
        <Text style={{ fontFamily: baseFont }}>bears is : {bears}</Text>
      </View>
    </>
  );
}

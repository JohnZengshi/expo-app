/*
 * @LastEditors: John
 * @Date: 2024-01-22 13:41:05
 * @LastEditTime: 2024-01-22 13:43:29
 * @Author: John
 */
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeTabParamList } from "../type";
import { View, Text, Button } from "react-native";

export default function (
  props: BottomTabScreenProps<HomeTabParamList, "Mine">
) {
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Mine Screen</Text>
      </View>
    </>
  );
}

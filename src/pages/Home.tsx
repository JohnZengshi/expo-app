/*
 * @LastEditors: John
 * @Date: 2024-01-19 10:46:20
 * @LastEditTime: 2024-01-22 19:14:18
 * @Author: John
 */
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button, Pressable } from "react-native";
import useBearStore from "../store/Bear";
import { baseFont } from "../constants";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { HomeTabParamList, RootStackParamList } from "../type";
import styled from "styled-components/native";

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
        <CustomPressable
          onPress={() => navigation.navigate("Details", { count: bears })}
        >
          <Text>Go to Details</Text>
        </CustomPressable>
        <Text style={{ fontFamily: baseFont }}>bears is : {bears}</Text>
      </View>
    </>
  );
}

const CustomPressable = styled(Pressable)`
  /* 矩形 2 */

  width: 668.18px;
  height: 59.57px;
  border-radius: 4.73px;
  opacity: 1;

  background: #f58c00;

  box-sizing: border-box;
  border: 0.95px solid #f58c00;

  /* box-shadow: 0px 9.46px 94.64px -17px #633800; */
`;

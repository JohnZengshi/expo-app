/*
 * @LastEditors: John
 * @Date: 2024-01-19 10:48:44
 * @LastEditTime: 2024-01-22 17:45:38
 * @Author: John
 */
import { View, Text, Button, Pressable } from "react-native";
import useBearStore from "../store/Bear";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../type";
import CustomHead from "../components/CustomHead";

export default function (
  props: NativeStackScreenProps<RootStackParamList, "Details">
) {
  const { increase } = useBearStore();
  return (
    <>
      <CustomHead />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        {/* <Text>count value is : {props.route.params}</Text> */}
        <Pressable onPress={() => increase(1)}>
          <Text>increase bears</Text>
        </Pressable>
      </View>
    </>
  );
}

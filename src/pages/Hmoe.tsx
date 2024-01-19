import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import { RootStackParamList } from "../type";
import useBearStore from "../store/Bear";
import { baseFont } from "../constants";
/*
 * @LastEditors: John
 * @Date: 2024-01-19 10:46:20
 * @LastEditTime: 2024-01-19 11:52:36
 * @Author: John
 */

export default function ({
  navigation,
}: NativeStackScreenProps<RootStackParamList["Home"]>) {
  const { bears } = useBearStore();
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontFamily: baseFont }}>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
        <Text style={{ fontFamily: baseFont }}>bears is : {bears}</Text>
      </View>
    </>
  );
}

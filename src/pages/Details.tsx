/*
 * @LastEditors: John
 * @Date: 2024-01-19 10:48:44
 * @LastEditTime: 2024-01-19 11:34:39
 * @Author: John
 */
import { View, Text, Button } from "react-native";
import useBearStore from "../store/Bear";

export default function () {
  const { increase } = useBearStore();
  return (
    <>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button title="increase bears" onPress={() => increase(1)} />
      </View>
    </>
  );
}

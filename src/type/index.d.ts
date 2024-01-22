/*
 * @LastEditors: John
 * @Date: 2024-01-19 11:17:17
 * @LastEditTime: 2024-01-22 14:56:28
 * @Author: John
 */
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type {
  StackScreenProps,
  NativeStackScreenProps,
} from "@react-navigation/stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  Index: any;
  Details: {
    count: number;
  };
};

export type HomeTabParamList = {
  Home: any;
  Mine: any;
};

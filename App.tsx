/*
 * @LastEditors: John
 * @Date: 2024-01-19 09:45:34
 * @LastEditTime: 2024-01-22 15:48:39
 * @Author: John
 */
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./src/pages/Details";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Button, View, Text } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { HomeTabParamList, RootStackParamList } from "./src/type";
import Mine from "./src/pages/Mine";
import CustomHead from "./src/components/CustomHead";
import CustomTab from "./src/components/CustomTab";
import Home from "./src/pages/Home";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Raleway-Medium": require("./assets/fonts/Raleway-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator>
          <Stack.Screen
            name="Index"
            options={{
              header: () => <></>,
            }}
          >
            {() => {
              return (
                <Tab.Navigator tabBar={(props) => <CustomTab />}>
                  <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                      header: () => <CustomHead />,
                    }}
                  />
                  <Tab.Screen
                    name="Mine"
                    component={Mine}
                    options={{
                      header: () => <CustomHead />,
                    }}
                  />
                </Tab.Navigator>
              );
            }}
          </Stack.Screen>
          <Stack.Screen
            name="Details"
            component={Details}
            options={(params) => ({
              title: "Details page",
              header: () => <></>,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

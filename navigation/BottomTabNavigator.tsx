import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import DateScreen from "../screens/DateScreen";
import MathScreen from "../screens/TabOneScreen";
import TrivialScreen from "../screens/TrivialScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
import NumberStackNavigation from "./NumberStackNavigation";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Numbers"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        tabStyle: { borderTopWidth: 0 },
        style: { borderTopWidth: 0 }
      }}>
      <BottomTab.Screen
        name="Numbers"
        component={NumbersNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Random"
        component={RandomNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function NumbersNavigator() {
  return (
    <TabOneStack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          borderTopColor: "transparent",
        },
      }}>
      <TabOneStack.Screen
        name="NumberStack"
        component={NumberStackNavigation}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function RandomNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Random Numbers" }}
      />
    </TabTwoStack.Navigator>
  );
}

import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import DateScreen from "../screens/DateScreen";
import MathScreen from "../screens/MathScreen";
import TrivialScreen from "../screens/TrivialScreen";
import { StyleSheet, Text, View } from "react-native";
import NumberStackHome from "../screens/NumberStackHome";

const NumberStack = createStackNavigator();

const NumberStackNavigation = () => {
  return (
    <NumberStack.Navigator
      screenOptions={{
        // headerTitle: () => null,
        headerStyle: { shadowColor: "transparent" },
      }}>
      <NumberStack.Screen
        name="NumberStackHome"
        component={NumberStackHome}
        options={{ title: "Go back" }}
      />
      <NumberStack.Screen
        name="MathScreen"
        component={MathScreen}
        options={{ headerTitle: () => null }}
      />
      <NumberStack.Screen
        name="TrivialScreen"
        component={TrivialScreen}
        options={{ headerTitle: () => null }}
      />
      <NumberStack.Screen
        name="DateScreen"
        component={DateScreen}
        options={{ headerTitle: () => null }}
      />
    </NumberStack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default NumberStackNavigation;

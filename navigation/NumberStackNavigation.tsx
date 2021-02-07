import { createStackNavigator } from "@react-navigation/stack";

import React from "react";
import DateScreen from "../screens/DateScreen";
import MathScreen from "../screens/TabOneScreen";
import TrivialScreen from "../screens/TrivialScreen";
import { StyleSheet, Text, View } from "react-native";
import NumberStackHome from "../screens/NumberStackHome";

const NumberStack = createStackNavigator();

const NumberStackNavigation = () => {
  return (
    <NumberStack.Navigator
      screenOptions={{
        headerTitle: () => null,
        headerStyle: { shadowColor: "transparent" },
      }}>
      <NumberStack.Screen name="NumberStackHome" component={NumberStackHome} />
      <NumberStack.Screen
        name="MathScreen"
        component={MathScreen}
        options={{ headerTitle: "Math" }}
      />
      <NumberStack.Screen
        name="TrivialScreen"
        component={TrivialScreen}
        options={{ headerTitle: "Trivial" }}
      />
      <NumberStack.Screen
        name="DateScreen"
        component={DateScreen}
        options={{ headerTitle: "Date" }}
      />
    </NumberStack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default NumberStackNavigation;

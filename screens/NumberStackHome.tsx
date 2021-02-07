import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Button } from "react-native";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

const NumberStackHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.numberStack}>
      <Button
        onPress={() => {
          navigation.navigate("MathScreen");
        }}
        title="MathScreen"
      />
      <Button
        onPress={() => {
          navigation.navigate("TrivialScreen");
        }}
        title="TrivialScreen"
      />
      <Button
        onPress={() => {
          navigation.navigate("DateScreen");
        }}
        title="DateScreen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  numberStack: {
    flex: 1,

  },
});

export default NumberStackHome;

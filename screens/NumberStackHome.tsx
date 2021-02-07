import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

const NumberStackHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.numberStack}>
      <TouchableOpacity style={styles.math}>
        <Button
          onPress={() => {
            navigation.navigate("MathScreen");
          }}
          title="MathScreen"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.math}>
        <Button
          onPress={() => {
            navigation.navigate("TrivialScreen");
          }}
          title="TrivialScreen"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.math}>
        <Button
          onPress={() => {
            navigation.navigate("DateScreen");
          }}
          title="DateScreen"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  numberStack: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  math: {
    backgroundColor: "pink",
    padding: 5,
    borderRadius: 100,
  },
  trivial: {
    backgroundColor: "green",
  },
  date: {
    backgroundColor: "orange",
  },
});

export default NumberStackHome;

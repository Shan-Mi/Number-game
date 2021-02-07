import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet } from "react-native";
import MyButton from "../components/MyButton";
import { View } from "../components/Themed";

const NumberStackHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.numberStack}>
      <MyButton
        screen="MathScreen"
        cb={() => navigation.navigate("MathScreen")}
      />
      <MyButton
        screen="TrivialScreen"
        cb={() => navigation.navigate("TrivialScreen")}
      />
      <MyButton
        screen="DateScreen"
        cb={() => navigation.navigate("DateScreen")}
      />
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
});

export default NumberStackHome;

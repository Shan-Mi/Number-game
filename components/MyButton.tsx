import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Button } from "react-native";
import { Platform, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

interface Props {
  screen: string;
  cb: any;
}

const MyButton: React.FC<Props> = ({ screen, cb }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.bg}>
      <Button color={styles.btn.color} onPress={cb} title={screen} />
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: Platform.OS === "android" ? Colors.white : Colors.green,
    padding: 5,
    borderRadius: 3,
    textTransform: "uppercase",
  },

  btn: {
    textTransform: "uppercase",
    color: Platform.OS === "android" ? Colors.green : Colors.white,
  },
});

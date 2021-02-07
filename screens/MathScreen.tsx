import * as React from "react";
import { useState } from "react";
import { Platform, TouchableOpacity } from "react-native";
import { Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getOneMath } from "../API";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export default function MathScreen() {
  const initialText = "Input a number";
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState("");
  const [errorMsg, setErrorMsg] = useState({
    message: "Please input any NUMBER",
    show: false,
  });
  let textInputRef: TextInput | null;

  const handlePress = async () => {
    const num = Number(result);
    if (isNaN(num) || num === 0) {
      return setErrorMsg({ ...errorMsg, show: true });
    }
    try {
      const res = await getOneMath(num);
      setErrorMsg({ ...errorMsg, show: false });
      setShowResult(res);
    } catch (e) {
      console.error(e);
    }
  };

  const handleReplay = () => {
    setResult("");
    setShowResult("");
    setErrorMsg({ ...errorMsg, show: false });
    textInputRef?.clear();
  };

  const handleOnChange = (e: string) => {
    setResult(e);
    if (!e) {
      setResult("");
      setShowResult("");
      setErrorMsg({ ...errorMsg, show: false });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Math</Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          onChangeText={handleOnChange}
          placeholder={initialText}
          clearButtonMode="always"
          ref={(ref) => (textInputRef = ref)}
        />

        <TouchableOpacity style={styles.button}>
          <Button
            color={styles.button.color}
            onPress={handlePress}
            title="Get your result!"
          />
        </TouchableOpacity>
      </View>

      {showResult ? (
        <View style={styles.results}>
          <Text style={styles.text}>{showResult}</Text>
          <TouchableOpacity style={styles.button}>
            <Button
              color={styles.button.color}
              title="Play again"
              onPress={handleReplay}
            />
          </TouchableOpacity>
        </View>
      ) : null}

      {errorMsg.show ? (
        <View style={styles.results}>
          <Text style={styles.text}>{errorMsg.message}</Text>
          <TouchableOpacity style={styles.button}>
            <Button
              color={styles.button.color}
              title="Play again"
              onPress={handleReplay}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleArea: {
    // display: 'flex',
    // justifyContent: "center",
    // flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // backgroundColor: "red",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  inputArea: {
    // flex: 2
    flexDirection: "row",
    // justifyContent: "space-around",
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    paddingVertical: Platform.OS === "android" ? 4 : 10,
    paddingLeft: 10,
    backgroundColor: Colors.grey,
    borderRadius: 3,
    width: 120,
    marginRight: 10,
  },
  button: {
    paddingVertical: 0,
    backgroundColor: Platform.OS === "ios" ? Colors.green : Colors.white,
    borderRadius: 2,
    color: Platform.OS === "android" ? Colors.green : Colors.white,
    maxWidth: 150,
  },
  results: {
    flex: 1,
    marginHorizontal: "15%",
    marginTop: "10%",
    minWidth: 270,
    alignItems: "center",
  },
  text: {
    marginBottom: 20,
    textAlign: "center",
  },
});

import * as React from "react";
import { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { getOneMath } from "../API";

import { Text, View } from "../components/Themed";

export default function MathScreen() {
  const initialText = "Input a number";
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState("");
  const [errorMsg, setErrorMsg] = useState({
    message: "Please input only number",
    show: false,
  });
  let textInputRef: TextInput | null;

  const handlePress = async () => {
    const num = Number(result);
    if (isNaN(num)) {
      console.log(errorMsg);
      return setErrorMsg({ ...errorMsg, show: true });
    }
    try {
      const res = await getOneMath(num);
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

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Math</Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          onChangeText={setResult}
          placeholder={initialText}
          clearButtonMode="always"
          ref={(ref) => (textInputRef = ref)}
        />
        <View style={styles.button}>
          <Button onPress={handlePress} title="Get your result!" />
        </View>
      </View>
      {showResult ? (
        <View>
          <Text>{showResult}</Text>
          <View>
            <Button title="Play again" onPress={handleReplay} />
          </View>
        </View>
      ) : null}
      {errorMsg.show ? (
        <View>
          <Text>{errorMsg.message}</Text>
          <View>
            <Button title="Play again" onPress={handleReplay} />
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "space-between",
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
    padding: 20,
    backgroundColor: "#CFCFD5",
    borderRadius: 10,
    width: 120,
    marginRight: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#9abcf2",
    borderRadius: 10,
  },
});
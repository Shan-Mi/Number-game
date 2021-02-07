import React from "react";
import { useState } from "react";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { getOneDate } from "../API";

import { Text, View } from "../components/Themed";

const DataScreen = () => {
  const initialText = "Input a number";
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [showResult, setShowResult] = useState("");
  const [errorMsg, setErrorMsg] = useState({
    message: "Please input only number",
    show: false,
  });
  let monthInputRef: TextInput | null;
  let dateInputRef: TextInput | null;

  const handlePress = async () => {
    const num1 = Number(month);
    const num2 = Number(day);
    if (isNaN(num1) || isNaN(num2) || num1 === 0 || num2 === 0) {
      return setErrorMsg({ ...errorMsg, show: true });
    }
    try {
      const res = await getOneDate(num1, num2);
      setShowResult(res);
    } catch (e) {
      console.error(e);
    }
  };

  const handleReplay = () => {
    setMonth("");
    setDay("");
    setShowResult("");
    setErrorMsg({ ...errorMsg, show: false });
    monthInputRef?.clear();
    dateInputRef?.clear();
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Trivia</Text>
      </View>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          onChangeText={setMonth}
          placeholder={initialText}
          clearButtonMode="always"
          ref={(ref) => (monthInputRef = ref)}
        />
        <TextInput
          style={styles.input}
          onChangeText={setDay}
          placeholder={initialText}
          clearButtonMode="always"
          ref={(ref) => (dateInputRef = ref)}
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
};

export default DataScreen;

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
    width: 50,
    marginRight: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "#9abcf2",
    borderRadius: 10,
  },
});

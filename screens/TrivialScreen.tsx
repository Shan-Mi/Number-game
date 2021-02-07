import React from "react";
import { useState } from "react";
import { Button, Platform } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { getOneTrivia } from "../API";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

const TrivialScreen = () => {
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
      const res = await getOneTrivia(num);
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
        <Text style={styles.title}>Trivia</Text>
      </View>

      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          onChangeText={handleOnChange}
          placeholder={initialText}
          clearButtonMode="always"
          keyboardType="numeric"
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
};

export default TrivialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  titleArea: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  inputArea: {
    flexDirection: "row",
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

import * as React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { StyleSheet } from "react-native";

import { getRandom } from "../API";

import { Text, View } from "../components/Themed";

export default function RandomScreen() {
  const [result, setResult] = useState({ message: "", error: "" });

  const handleResult = async (type: string) => {
    try {
      const res = await getRandom(type);
      setResult({ ...result, message: res });
    } catch (e) {
      console.error(e);
      setResult({ message: "", error: e.message });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Result</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.containerBottow}>
        <Text>Press a button to try it out!</Text>
        <View style={styles.btns}>
          <TouchableOpacity style={styles.math}>
            <Button
              onPress={() => {
                handleResult("trivia");
              }}
              title="Trivia"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.math}>
            <Button
              onPress={() => {
                handleResult("year");
              }}
              title="Year"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.math}>
            <Button
              onPress={() => {
                handleResult("date");
              }}
              title="Date"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.math}>
            <Button
              onPress={() => {
                handleResult("math");
              }}
              title="Math"
            />
          </TouchableOpacity>
        </View>

        <View>
          <Text>Error or result comes here:</Text>
          {result.message ? <Text>{result.message}</Text> : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btns: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30,
    width: "80%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  containerBottow: {
    flex: 1,
    alignItems: "center",
  },
  math: {
    backgroundColor: "pink",
    padding: 5,
    borderRadius: 100,
  },
});

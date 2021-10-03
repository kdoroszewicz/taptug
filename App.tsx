import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

const RED_COLOR = "#FF2442";
const BLUE_COLOR = "#3DB2FF";

const App = () => {
  const [gameValue, setGameValue] = useState(0);
  const [gameStatus, setGameStatus] = useState<"idle" | "running">("idle");

  const incrementGameValue = () => {
    setGameValue((oldValue) => oldValue + 0.25);
  };

  const decrementGameValue = () => {
    setGameValue((oldValue) => oldValue - 0.25);
  };

  const redValue = 1 + gameValue;
  const bluValue = 1 - gameValue;

  return (
    <>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <View
          style={{
            backgroundColor: RED_COLOR,
            flex: redValue,
            width: "100%",
          }}
        ></View>
        <View
          style={{
            backgroundColor: BLUE_COLOR,
            flex: bluValue,
            width: "100%",
          }}
        ></View>
      </View>
      <View style={styles.container}>
        <Pressable
          onPress={incrementGameValue}
          style={{
            flex: 1,
            width: "100%",
          }}
        ></Pressable>
        <Pressable
          onPress={decrementGameValue}
          style={{
            flex: 1,
            width: "100%",
          }}
        ></Pressable>
        <StatusBar hidden style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;

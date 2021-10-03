import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import GameBoard from "./components/GameBoard";
import GamePressableField from "./components/GamePressableField";

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
  const blueValue = 1 - gameValue;

  return (
    <>
      <GameBoard redValue={redValue} blueValue={blueValue} />
      <GamePressableField
        incrementGameValue={incrementGameValue}
        decrementGameValue={decrementGameValue}
      />
      <StatusBar hidden style="auto" />
    </>
  );
};

export default App;

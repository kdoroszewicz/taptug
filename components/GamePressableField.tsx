import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface GamePressableFieldProps {
  incrementGameValue: () => void;
  decrementGameValue: () => void;
}

const GamePressableField = ({
  incrementGameValue,
  decrementGameValue,
}: GamePressableFieldProps) => {
  return (
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
    </View>
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

export default GamePressableField;

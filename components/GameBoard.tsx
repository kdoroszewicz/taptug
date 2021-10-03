import React from "react";
import { View } from "react-native";
const RED_COLOR = "#FF2442";
const BLUE_COLOR = "#3DB2FF";

interface GameBoardProps {
  redValue: number;
  blueValue: number;
}

const GameBoard = ({ redValue, blueValue }: GameBoardProps) => {
  return (
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
          flex: blueValue,
          width: "100%",
        }}
      ></View>
    </View>
  );
};

export default GameBoard;

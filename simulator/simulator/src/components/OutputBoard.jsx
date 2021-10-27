import React from "react";
import Button from "./Button";
import Light from "./Light";
import {colorsTable} from "../utils/constants";

const OutputBoard = () => {
  const componentPosition = {x: 500, y: -800};
  const style = {};

  const boardBackground = {
    x: componentPosition.x,
    y: componentPosition.y,
    width: 300,
    height: 400,
    style: {
      fill: "#E0D8D3",
      stroke: "#444",
      strokeWidth: "2px",
    },
  };

  return (
    <g>
      <rect {...boardBackground}></rect>
      <text x={componentPosition.x+115} y="-620" fontSize="30">Q0.0</text>
      <Light position={{ x: componentPosition.x+150, y: -700}} color={colorsTable.yellowLight} type="PUSH_BUTTON" state={true}></Light>
      <text x={componentPosition.x+115} y="-420" fontSize="30">Q0.1</text>
      <Light position={{ x: componentPosition.x+150, y: -500}} color={colorsTable.yellowLight} type="PUSH_BUTTON"></Light>
    </g>
  );
};

export default OutputBoard;

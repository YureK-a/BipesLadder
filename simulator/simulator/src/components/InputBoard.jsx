import React, { useEffect, useState } from "react";
import Button from "./Button";
import Light from "./Light";
import { colorsTable } from "../utils/constants";
import PropTypes from "prop-types";

const InputBoard = (props) => {
  const style = {};
  const [input, setInput] = useState();

  const inputFromButton = (input) => {
    setInput(input);
  };

  useEffect(() => {
    props.inputs(input);
  }, [input]);

  const boardBackground = {
    x: -750,
    y: -800,
    width: 300,
    height: 200 + props.programmer.inputs.length * 100,
    style: {
      fill: "#E0D8D3",
      stroke: "#444",
      strokeWidth: "2px",
    },
  };

  return (
    <g>
      <rect {...boardBackground}></rect>

      {props.programmer.inputs.map((input, index) => {
        return (
          <Button
            position={{ x: -650, y: -700 + index * 200, index: index }}
            color={colorsTable.green}
            type="PUSH_BUTTON"
            address={input}
            inputFromButton={inputFromButton}
          ></Button>
        );
      })}
    </g>
  );
};

InputBoard.propTypes = {
  programmer: PropTypes.object.isRequired,
  inputs: PropTypes.func.isRequired,
};

export default InputBoard;

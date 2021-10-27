import React, { useEffect, useReducer, useState } from "react";
import Button from "./Button";
import Light from "./Light";
import { colorsTable } from "../utils/constants";
import PropTypes from "prop-types";
import { prodDependencies } from "mathjs";

let inp = [];
let addNewInput = true;

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_STATE":
      return { data: action.data };
    default:
      throw new Error();
  }
}

const InputBoard = (props) => {
  const initialState = {data: [{ address: "I0", state: false },{ address: "I1", state: false }]};
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputFromButton = (input) => {
    addNewInput = true;

    if (input.address != undefined) {
      console.log("Não é indefinido");
      if (inp.length < 1) {
        console.log("Inicial");
        inp.push(input);
        return;
      }
      inp.map((i, index) => {
        console.log(i);
        if (i.address == input.address) {
          i.state = input.state;
          addNewInput = false;
          return;
        }
      });

      if (addNewInput) {
        console.log("Adiciona uma nova linha no inp");
        inp.push(input);
      }
    }

    dispatch({ type: "CHANGE_STATE", data: inp });
  };

  useEffect(() => {
    console.log(state);
    props.changeInputs(state);
  }, [state]);

  const boardBackground = {
    x: -750,
    y: -800,
    width: 300,
    height: 200*props.programmer.inputs.length + props.programmer.inputs.length * 10,
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
            simulatorState={props.simulatorState}
          ></Button>
        );
      })}
    </g>
  );
};

export default InputBoard;

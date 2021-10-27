import React, { useCallback, useState, useReducer } from "react";
import { simulatorWidth } from "../utils/constants";
import ItemMenu from "./ItemMenu";
import Light from "./Light";
import Menu from "./Menu";
import Title from "./Title";
import InputBoard from "./InputBoard";
import PropTypes from "prop-types";
import PLC from "./PLC";
import OutputBoard from "./OutputBoard";
import logoLaica from "../images/logoLaica.png";
import ControllerBar from "./ControllerBar";

var inputsArray = [];
function reducer(input, action) {
  switch (action.type) {
    case "CHANGE_STATE":
      return action.data;
    default:
      throw new Error();
  }
}
const Canvas = (props) => {
  const programmer = { inputs: ["I0","I1","I2"], outputs: ["Q0.0", "Q0.1", "Q0.2","Q0.3"] };
  const simulatorHeight = 1200;
  const [inputs, setInputs] = useState([]);
  const [outputs, setOutputs] = useState({});

  const initialState = { data: { address: "I0", state: false } };
  const [input, dispatch] = useReducer(reducer, initialState);

  const getOutputValues = (outputs) => {
    setOutputs(outputs);
  };
  const changeInputs = (inp) => {
    console.log(inp);
    //inputsArray.push(inp);

    //setInputs(inp, () => );
    //console.log(inputs);
    dispatch({ type: "CHANGE_STATE", data: inp });
  };

  const viewBox = [
    window.innerWidth / -2,
    100 - simulatorHeight,
    window.innerWidth,
    simulatorHeight,
  ];

  const style = {};

  React.useEffect(() => {
    console.log(input);
    //setInputs(input);
  }, [input]);

  return (
    <g>
      <svg
        id="simulator-canvas"
        preserveAspectRatio="xMaxYMax none"
        viewBox={viewBox}
        style={style}
      >
        {!props.simulatorState.startedBasicSimulator && (
          <g>
            <Title
              position={{
                x: 0,
                y: -500,
                text: "Bipes Ladder - Simulador",
                size: "80",
              }}
            />
            <Title
              position={{
                x: 150,
                y: -400,
                text: "Selecione o modo do simulador",
                size: "40",
              }}
            />
            <g style={style}>
              <ItemMenu
                onClick={() => props.startBasicSimulator()}
                text="Modo Básico"
                index="0"
              />
              <ItemMenu
                onClick={() => console.log("Modo Projeto")}
                text="Modo Projeto"
                index="1"
              />
              <ItemMenu
                onClick={() => console.log("Modo Criação")}
                text="Modo Criação"
                index="2"
              />
            </g>
          </g>
        )}

        {props.simulatorState.startedBasicSimulator && (
          <g>
            <Title
              position={{
                x: -750,
                y: -720,
                text: "Bipes Ladder - Simulador",
                size: "60",
              }}
            />
            <Title
              position={{
                x: -750,
                y: -670,
                text: "Modo Básico",
                size: "40",
              }}
            />
            <InputBoard
              programmer={programmer}
              simulatorState={props.simulatorState}
              changeInputs={changeInputs}
            />
            <svg x="-450" y="-900" width="500">
              <path
                d="M0 200 L150 200 L150 10 L290 10 L290 150"
                stroke="green"
                strokeWidth="10"
                fill="transparent"
              ></path>
            </svg>
            <svg x="-450" y="-850" width="500">
              <path
                d="M0 350 L200 350 L200 10 L330 10 L330 150"
                stroke="red"
                strokeWidth="10"
                fill="transparent"
              ></path>
            </svg>

            <svg x="-170" y="-850" width="1000">
              <path
                d="M10 450 L10 500 L500 500 L500 10 L820 10 L820 100"
                stroke="green"
                strokeWidth="10"
                fill="transparent"
              ></path>
            </svg>
            <svg x="-130" y="-850" width="1000">
              <path
                d="M10 450 L10 550 L780 550 L780 400"
                stroke="black"
                strokeWidth="10"
                fill="transparent"
              ></path>
            </svg>
            <PLC
              simulatorState={props.simulatorState}
              getInputsValues={input}
              getOutputValues={getOutputValues}
            />
            <OutputBoard
              simulatorState={props.simulatorState}
              outputs={outputs}
              programmer={programmer}
            />
            <g onClick={() => props.returnToMenu()}>
              <svg x="900" y="-1050">
                <path
                  d="M2 30 L70 30 M0 30 L35 60 M0 30 L35 0"
                  stroke="#568"
                  strokeWidth="10"
                  fill="transparent"
                />
              </svg>
              <Title
                position={{
                  x: 1380,
                  y: -710,
                  text: "Voltar",
                  size: "40",
                }}
              />
            </g>
          </g>
        )}
        <img src={logoLaica} />
      </svg>
    </g>
  );
};

export default Canvas;

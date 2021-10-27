import React from "react";
import PropTypes from "prop-types";

const Display = (props) => {
  let initialInputs = [
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
  ];
  const startPointPanel = { x: -175, y: -700 };
  const [inputs, setInputs] = React.useState(initialInputs);

  function convertInputs(inputs) {
    console.log(inputs);
    inputs.map((input, index) => {
      if (input.state == true) {
        initialInputs[parseInt(input.address.split('.')[1])] = "#000";
      }
    });
    setInputs(initialInputs);
  }

  React.useEffect(() => {
    convertInputs(props.inputs);
  }, [props]);

  const outputs = [
    "transparent",
    "#000",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
    "transparent",
  ];
  const displayBackground = {
    x: startPointPanel.x,
    y: startPointPanel.y,
    width: 315,
    height: 200,
    style: {
      fill: "#56D856",
      stroke: "#444",
      strokeWidth: "2px",
    },
  };

  const textStyle = {
    style: {
      fontFamily: '"Press Start 2P", cursive',
      fontSize: 20,
    },
  };

  return (
    <g>
      <rect {...displayBackground}></rect>
      <text {...textStyle} x={startPointPanel.x + 5} y={startPointPanel.y + 25}>
        Entradas
      </text>
      {inputs.map((input, index) => {
        {
          console.log(input);
        }
        return (
          <rect
            x={startPointPanel.x + 10 + 30 * index}
            y={startPointPanel.y + 30}
            width="25"
            height="40"
            strokeWidth="1"
            fill={input}
            stroke="#000"
          ></rect>
        );
      })}
      ;
      <text
        {...textStyle}
        x={startPointPanel.x + 5}
        y={startPointPanel.y + 190}
      >
        Saídas
      </text>
      {outputs.map((input, index) => {
        {
          console.log(input);
        }
        return (
          <rect
            x={startPointPanel.x + 10 + 30 * index}
            y={startPointPanel.y + 120}
            width="25"
            height="40"
            strokeWidth="1"
            fill={input}
            stroke="#000"
          ></rect>
        );
      })}
      ;
    </g>
  );
};

Display.propTypes = {
  state: PropTypes.bool.isRequired,
  inputs: PropTypes.array.isRequired,
  outputs: PropTypes.array.isRequired,
};

export default Display;

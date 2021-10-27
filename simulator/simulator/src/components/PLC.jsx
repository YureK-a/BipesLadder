import React from "react";
import Display from "./Display";
import PropTypes from "prop-types";
import { evaluate } from "mathjs";

const PLC = (props) => {
  const startPointPanel = { x: -200, y: -800 };
  const inputsFromExpression = ["I0", "I1", "I2"];
  const expression = "(I0 and (I0 or I1))";
  const outputFromExpression = ["Q0.0","Q0.1"];
  const [scope, setScope] = React.useState({});
  const [outputs, setOutputs] = React.useState({});

  const plcBackground = {
    x: startPointPanel.x,
    y: startPointPanel.y,
    width: 450,
    height: 400,
    style: {
      fill: "#E0D8D3",
      stroke: "#444",
      strokeWidth: "2px",
    },
  };

  function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  }

  const translateCode = () => {
    const outs = {};

    if (!isEmpty(scope)) {
      console.log(scope);
      for (let index = 0; index < outputFromExpression.length; index++) {
        const output = outputFromExpression[index];
        outs[output] = evaluate(expression, scope);
      }
      console.log(outs);

      setOutputs(outs);
      props.getOutputValues(outs);
    }
  };

  function convertScope(data) {
    let data_ = data;
    if (typeof data == "object") {
      data_ = { data: data.data };
    }
    let scope = {};
    console.log(data_);
    for (let index = 0; index < data_.data.length; index++) {
      const d = data_.data[index];
      scope[d.address] = d.state;
    }
    console.log(scope);
    setScope(scope);
  }

  React.useEffect(() => {
    let sco = props.getInputsValues;
    console.log(sco);
    convertScope(sco);
  }, [props.getInputsValues]);

  React.useEffect(() => {
    console.log(scope);
    translateCode();
  }, [scope]);

  return (
    <g>
      <rect {...plcBackground}></rect>
      <svg x="-200" y="-800">
        <path
          d="M0 75 L450 75 M0 325 L450 325"
          stroke="black"
          strokeWidth="2"
        ></path>
      </svg>
      <g>
        <circle
          cx={String(startPointPanel.x + 40)}
          cy={String(startPointPanel.y + 40)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 80)}
          cy={String(startPointPanel.y + 40)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 120)}
          cy={String(startPointPanel.y + 40)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 160)}
          cy={String(startPointPanel.y + 40)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 200)}
          cy={String(startPointPanel.y + 40)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 240)}
          cy={String(startPointPanel.y + 40)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 280)}
          cy={String(startPointPanel.y + 40)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 320)}
          cy={String(startPointPanel.y + 40)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 360)}
          cy={String(startPointPanel.y + 40)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 400)}
          cy={String(startPointPanel.y + 40)}
          r="10"
        ></circle>
      </g>
      <g>
        <circle
          cx={String(startPointPanel.x + 40)}
          cy={String(startPointPanel.y + 360)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 80)}
          cy={String(startPointPanel.y + 360)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 120)}
          cy={String(startPointPanel.y + 360)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 160)}
          cy={String(startPointPanel.y + 360)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 200)}
          cy={String(startPointPanel.y + 360)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 240)}
          cy={String(startPointPanel.y + 360)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 280)}
          cy={String(startPointPanel.y + 360)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 320)}
          cy={String(startPointPanel.y + 360)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 360)}
          cy={String(startPointPanel.y + 360)}
          r="10"
        ></circle>
        <circle
          cx={String(startPointPanel.x + 400)}
          cy={String(startPointPanel.y + 360)}
          r="10"
        ></circle>
      </g>
      <Display
        simulatorState={props.simulatorState}
        getInputsValues={props.getInputsValues}
        getOutputValues={outputs}
      ></Display>
      <g transform="rotate(270,220,-525)">
        <text x="220" y="-525" fontSize="30">
          CLP BIPES
        </text>
      </g>
    </g>
  );
};

PLC.propType = {
  inputs: PropTypes.object.isRequired,
  simulatorState: PropTypes.shape({
    startedBasicSimulator: PropTypes.bool.isRequired,
    startedProjectSimulator: PropTypes.bool.isRequired,
    running: PropTypes.bool.isRequired,
    inputs: PropTypes.object.isRequired,
  }).isRequired,
};

export default PLC;

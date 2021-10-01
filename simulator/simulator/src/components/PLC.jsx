import React from "react";
import Display from "./Display";
import PropTypes from "prop-types";
import { evaluate } from "mathjs";
import { parseJSON } from "../utils/helpers";

const PLC = (props) => {
  const startPointPanel = { x: -200, y: -800 };

  const [scope, setScope] = React.useState({});
  //const [outputs, setOutputs] = React.useState({});
  //const [code, setCode] = React.useState(parseJSON(props.code));
  const [code, setCode] = React.useState(parseJSON(props.code));

  //Physical inputs and outputs
  const [inputs, setInputs] = React.useState(code.inputs);
  console.log("Inputs", inputs);
  const [outputs, setOutputs] = React.useState(code.outputs);
  console.log("Outputs", outputs);

  //Image tables inputs and outputs
  const [inputsTable, setInputsTable] = React.useState(
    props.getInputsValues.data
  );
  console.log("Inputs Table", inputsTable);

  const convertOutputs = (outputs) => {
    console.log(outputs);
    if (outputs.length > 0) {
      let outs = [];
      for (let index = 0; index < outputs.length; index++) {
        const out = outputs[index];

        outs.push({ address: out, state: false });
      }
      console.log(outs);

      return outs;
    }
  };

  const [outputsTable, setOutputsTable] = React.useState(
    convertOutputs(code.outputs)
  );

  const convertFromOutputsTableToOutputs = (outputsTable) => {
    let data_ = outputsTable;

    let outputs = [];
    data_.map((outs, index) => {
      if (outs.address[0] != "R") {
        outputs.push(outs.state);
      }
    });

    return outputs;
  };

  //All rows of the code
  const rows = code.row;

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
    const outs = outputsTable;
    console.log("translateCode", scope);

    if (!isEmpty(scope)) {
      for (let indexLine = 0; indexLine < rows.length; indexLine++) {
        const expression = rows[indexLine].expression;
        let outputsFromExpression = rows[indexLine].outputs;
        for (let index = 0; index < outputsFromExpression.length; index++) {
          const outputAddress = outputsFromExpression[index];
          console.log("translateCode", outputAddress);
          console.log("translateCode", outs);

          outs.map((o, index) => {
            if (o.address == outputAddress) {
              o.state = evaluate(expression, scope);
            }
          });

          if (outputAddress[0] == "R") {
            let i = inputsTable;
            console.log("translateCode", i);
            i.map((e, index) => {
              if (e.address == outputAddress) {
                e.state = evaluate(expression, scope);
              }
            });
            //i[outputAddress] = evaluate(expression, scope);
            setInputsTable(i);
          }
        }
      }

      setOutputsTable(outs);
      console.log(outputsTable);
      //convertOutputs(code.outputs);
      setOutputs(convertFromOutputsTableToOutputs(outs));
      //props.getOutputValues(convertFromOutputsTableToOutputs(outs));
    }
  };

  const updateInputsTableFromInputs = (inputs) => {
    let inputsTable_ = inputsTable;
    console.log("updatingInputsTable", inputs);
    console.log("updatingInputsTable", inputsTable_);
    if (!(JSON.stringify(inputs) === JSON.stringify(inputsTable_))) {
      console.log("updatingInputsTable");
      inputs.map((inp, indexInputs) => {
        inputsTable_.map((inpTable, indexInpTables) => {
          if (inp.address[0] != "R") {
            if (
              inp.address == inpTable.address &&
              inp.state != inpTable.state
            ) {
              inpTable.state = inp.state;
            }
          }
        });
      });
      setInputsTable(inputsTable_);
    }
  };

  function convertScope(data) {
    let data_ = data;
    console.log(data_);

    console.log(data_);
    let scope = {};

    for (let index = 0; index < data_.length; index++) {
      const d = data_[index];
      scope[d.address] = d.state;
    }
    console.log(scope);
    setScope(scope);
  }

  React.useEffect(() => {
    let inputsValues = props.getInputsValues;
    console.log("SCOPE", inputsValues);
    updateInputsTableFromInputs(inputsValues.data);
    console.log("SCOPE", inputsTable);
    convertScope(inputsTable);
  }, [props.getInputsValues, inputsTable]);

  React.useEffect(() => {
    console.log("ScopeEffect", scope);
    translateCode();
  }, [scope]);

  React.useEffect(() => {
    console.log("Outputs Table", outputsTable);
    setOutputs(convertFromOutputsTableToOutputs(outputsTable));
  }, [outputsTable]);

  React.useEffect(() => {
    props.getOutputValues(outputs);
  }, [outputs]);

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

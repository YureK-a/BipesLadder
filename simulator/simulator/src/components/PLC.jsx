import React from "react";
import Display from "./Display";
import PropTypes from "prop-types";

const PLC = (props) => {
  const startPointPanel = { x: -200, y: -800 };

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

  function drawPLC() {
    let startPointString = "M" + 0 + " " + 0;
    startPointString = startPointString + " L200 100";
    console.log(startPointString);
    return startPointString;
  }

  return (
    <g >
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
      <Display inputs={props.inputs}></Display>
      <g transform="rotate(270,220,-525)">
          <text x="220" y="-525" fontSize="30">CLP BIPES</text>
      </g>
    </g>
  );
};

PLC.propType = {
  inputs: PropTypes.array.isRequired,
}

export default PLC;

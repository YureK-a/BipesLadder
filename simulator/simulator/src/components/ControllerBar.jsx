import React from "react";
import Title from "./Title";

const ControllerBar = () => {
  const startPointPanel = { x: -1150, y: -200 };
  const rectStyle = {
    x: startPointPanel.x,
    y: startPointPanel.y,
    width: 390,
    height: 200,
    style: {
      fill: "#F0F8FF",
      stroke: "#444",
      strokeWidth: "2px",
    },
  };

  return (
    <g>
      <rect {...rectStyle}></rect>

      <Title
        position={{
          x: -690,
          y: 135,
          text: "Painel de Controle",
          size: "40",
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="#568"
        x="-1025"
        y="-675"
        width="15vmin"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
          clipRule="evenodd"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="#568"
        x="-1150"
        y="-675"
        width="15vmin"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="#568"
        x="-900"
        y="-675"
        width="15vmin"
      >
        <path
          fillRule="evenodd"
          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
          clipRule="evenodd"
        />
      </svg>
    </g>
  );
};

export default ControllerBar;

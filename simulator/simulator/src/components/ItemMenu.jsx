import React from "react";
import PropTypes from "prop-types";
import { simulatorWidth } from "../utils/constants";

const ItemMenu = (props) => {
  const button = {
    x: simulatorWidth / -2,
    y: -600 + props.index*80,
    width: simulatorWidth,
    height: 70,
    rx: 10,
    ry: 10,
    style: {
      fill: "#568",
      cursor: "pointer",
    },
    onClick: props.onClick,
  };

  const text = {
    textAnchor: "middle",
    x: 0,
    y: -550  + props.index*80,
    style: {
      fontSize: 50,
      fill: "#e3e3e3",
      cursor: "pointer",
    },
    onClick: props.onClick,
  };

  return (
    <g>
      <rect {...button} />
      <text {...text}>{props.text}</text>
    </g>
  );
};

ItemMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ItemMenu;

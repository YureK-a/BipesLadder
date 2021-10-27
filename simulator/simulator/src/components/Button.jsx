import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import {addHexColor} from "../utils/functions"

const Button = (props) => {
  const [state, setState] = useState(props.color);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    props.inputFromButton({address:props.address, state:pressed});
  }, [pressed]);

  const onChange = () => {
    let pressColor;
    if (pressed) {
      pressColor = props.color;
      setPressed(false);
    } else {
      pressColor = addHexColor(props.color, "#006600");
      setPressed(true);
    }

    setState(pressColor);
    props.inputFromButton(pressed);
  };

  const textYPosition = "" + (-690 + props.position.index*200);

  return (
    <g>
      <text x="-560" y={textYPosition} fontSize="30">
        {props.address}
      </text>
      <circle
        style={{ fill: state, stroke: "#444", strokeWidth: "10px" }}
        cx={props.position.x}
        cy={props.position.y}
        r={60}
        onClick={onChange}
      />
    </g>
  );
};

Button.propTypes = {
  inputFromButton: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired
  }).isRequired,
};

export default Button;

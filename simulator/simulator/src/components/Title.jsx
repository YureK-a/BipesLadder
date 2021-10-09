import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const Title = (props) => {
  const titleRef = useRef();

  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const getTitleSize = () => {
      const newWidth = titleRef.current.clientWidth;
      setWidth(newWidth);

      const newHeight = titleRef.current.clientHeight;
      setHeight(newHeight);
  }

  const titleStyle = {
    fontSize: props.position.size,
    fill: "#568",
  };

  return (
    <g transform={`translate(${props.position.x - 400}, ${props.position.y - 300})`}>
      <text style={titleStyle}>{props.position.text}</text>

    </g>
  );
};

Title.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  }).isRequired,
};

export default Title;

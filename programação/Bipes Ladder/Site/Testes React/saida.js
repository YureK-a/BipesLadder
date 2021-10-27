import Konva from '/konva';
import ReactDOM from '/@react-dom';
import React from '/react';
import { Stage, Layer, Rect } from '/react-konva';

function Palco() {
  return /*#__PURE__*/React.createElement(Stage, {
    width: window.innerWidth,
    height: window.innerHeight
  }, /*#__PURE__*/React.createElement(Layer, null, /*#__PURE__*/React.createElement(Rect, {
    x: -100,
    y: -150,
    width: 350,
    height: 8000,
    fill: "white",
    stroke: "#212529",
    strokeWidth: 7
  })));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Palco, null), document.getElementById('react'));

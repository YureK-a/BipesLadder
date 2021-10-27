import React, { Component } from "react";

import PropTypes from "prop-types";
import Canvas from "./components/Canvas";

class App extends Component {
  render() {
    return (
      <Canvas
        simulatorState={this.props.simulatorState}
        startBasicSimulator={this.props.startBasicSimulator}
        returnToMenu={this.props.returnToMenu}
      />
    );
  }

  componentDidMount() {
    window.onresize = () => {
      const cnv = document.getElementById("simulator-canvas");
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };

    window.onresize();
  }
}
App.propTypes = {
  simulatorState: PropTypes.shape({
    startedBasicSimulator: PropTypes.bool.isRequired,
    startedProjectSimulator: PropTypes.bool.isRequired,
  }).isRequired,
  startBasicSimulator: PropTypes.func.isRequired,
  returnToMenu: PropTypes.func.isRequired,
};

export default App;

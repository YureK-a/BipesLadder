import React, { Component, useCallback } from "react";

import PropTypes from "prop-types";
import Canvas from "./components/Canvas";
import Stack from "@mui/material/Stack";
import ControllerBar from "./components/ControllerBar";
import runSimulation from "./reducers/runSimulation";

class App extends Component {
  render() {
    return (
      <Stack spacing={0}>
        <Canvas
          simulatorState={this.props.simulatorState}
          startBasicSimulator={this.props.startBasicSimulator}
          returnToMenu={this.props.returnToMenu}
          changeInputs={this.props.changeInputs}          
        />{" "}
        {this.props.simulatorState.startedBasicSimulator && (
          <ControllerBar
            runSimulation={this.props.runSimulation}
            stopSimulation={this.props.stopSimulation}
          ></ControllerBar>
        )}
      </Stack>
    );
  }

  componentDidMount() {
    window.onresize = () => {
      const cnv = document.getElementById("simulator-canvas");
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = "650px";
    };

    window.onresize();
  }
}


export default App;

import React, { Component, useCallback, useState, useEffect } from "react";

import PropTypes from "prop-types";
import Canvas from "./components/Canvas";
import Stack from "@mui/material/Stack";
import ControllerBar from "./components/ControllerBar";
import runSimulation from "./reducers/runSimulation";



class App extends Component {
  constructor(props) {
    super(props);
    this.code = "";
    this.state = "";
  
  }

  

  getCode = (code) => {
    this.code = code;
    this.state = code;
    console.log(this.state);
    
  };


  render() {
    return (
      <Stack spacing={0}>
        
        <Canvas
          simulatorState={this.props.simulatorState}
          startBasicSimulator={this.props.startBasicSimulator}
          returnToMenu={this.props.returnToMenu}
          changeInputs={this.props.changeInputs}
          code={this.state}
        />{" "}
        {this.props.simulatorState.startedBasicSimulator && (
          <ControllerBar
            runSimulation={this.props.runSimulation}
            stopSimulation={this.props.stopSimulation}
            code={this.getCode}
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

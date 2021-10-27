import { connect } from 'react-redux';

import App from '../App';
import { startBasicSimulator, returnToMenu, runSimulation, stopSimulation, changeInputs } from '../actions/index'

/*
    App State
    state : {
        simulatorState: {
            startedBasicSimulator: true,
            startedProjectSimulator: false,
            running: false,
            inputs: {},
            outputs: {},
        }
    }

*/


const mapStateToProps = state => ({
    simulatorState: state.simulatorState,
    inputs: state.simulatorState.inputs

});

const mapDispatchToProps = dispatch => ({
    startBasicSimulator: () => {
        dispatch(startBasicSimulator());
    },
    returnToMenu: () => {
        dispatch(returnToMenu());
    },
    runSimulation: () => {
        dispatch(runSimulation());
    },
    stopSimulation: () => {
        dispatch(stopSimulation());
    },
    changeInputs: () => {
        dispatch(changeInputs());
    }

});

const Simulator = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Simulator;
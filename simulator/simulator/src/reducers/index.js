import { START_BASIC_SIMULATOR, RETURN_TO_MENU, RUN_SIMULATION, STOP_SIMULATION, CHANGE_INPUTS } from '../actions';
import startBasicSimulator from './startBasicSimulator';
import returnToMenu from './returnToMenu';
import runSimulation from './runSimulation';
import stopSimulation from './stopSimulation';
import changeInputs from './changeInputs';

const initialSimulatorState = {
    inputs: {},
    outputs: {},
    startedBasicSimulator: false,
    startedProjectSimulator: false,
    running: false,
};

const initialState = {
    simulatorState: initialSimulatorState,
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case START_BASIC_SIMULATOR:
            return startBasicSimulator(state, initialSimulatorState);
        case RETURN_TO_MENU:
            return returnToMenu(state, initialSimulatorState);
        case RUN_SIMULATION:
            return runSimulation(state, initialSimulatorState);
        case STOP_SIMULATION:
            return stopSimulation(state, initialSimulatorState);
        case CHANGE_INPUTS:
            return changeInputs(state, initialSimulatorState);
        default:
            return state;
    }

}

export default reducer;
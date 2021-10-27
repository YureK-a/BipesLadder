import { START_BASIC_SIMULATOR, RETURN_TO_MENU } from '../actions';
import startBasicSimulator from './startBasicSimulator';
import returnToMenu from './returnToMenu';



const initialSimulatorState = {
    startedBasic: false,
    startedProject: false,
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
        default:
            return state;
    }

}

export default reducer;
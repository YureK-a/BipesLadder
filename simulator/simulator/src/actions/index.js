export const START_BASIC_SIMULATOR = 'START_BASIC_SIMULATOR';
export const RUN_SIMULATION = 'RUN_SIMULATION';
export const RETURN_TO_MENU = 'RETURN_TO_MENU';
export const STOP_SIMULATION = 'STOP_SIMULATION';
export const CHANGE_INPUTS = 'CHANGE_INPUTS';

export const startBasicSimulator = () => ({
    type: START_BASIC_SIMULATOR,
})

export const returnToMenu = () => ({
    type: RETURN_TO_MENU,
})

export const runSimulation = () => ({
    type: RUN_SIMULATION,
})

export const stopSimulation = () => ({
    type: STOP_SIMULATION,
})

export const changeInputs = () => ({
    type: CHANGE_INPUTS,
})
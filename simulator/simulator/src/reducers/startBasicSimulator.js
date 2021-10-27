export default (state, initialSimulatorState) => {
    return {
        ...state,
        simulatorState: {
            ...initialSimulatorState,
            startedBasicSimulator: true,
        }
    }
};
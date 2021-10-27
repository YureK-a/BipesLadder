export default (state, initialSimulatorState) => {
    return {
        ...state,
        simulatorState: {
            ...initialSimulatorState,
            inputs: state.inputs,
            outputs: state.outputs
        }
    }
};
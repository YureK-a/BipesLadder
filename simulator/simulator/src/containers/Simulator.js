import { connect } from 'react-redux';

import App from '../App';
import { startBasicSimulator, returnToMenu } from '../actions/index'


const mapStateToProps = state => ({
    simulatorState: state.simulatorState,
});

const mapDispatchToProps = dispatch => ({
    startBasicSimulator: () => {
        dispatch(startBasicSimulator());
    },
    returnToMenu: () => {
        dispatch(returnToMenu());
    },
});

const Simulator = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Simulator;
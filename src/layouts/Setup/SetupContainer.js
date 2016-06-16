import { Component } from 'react';
import { connect } from 'react-redux';

import { loadPrograms, } from '~/actions/programs';

import SetupView from './SetupView';

class Setup extends Component {
    
    componentWillMount() {
        this.props.loadPrograms();
    }
    
    render() {
        return <SetupView {...this.props} />;
    }
    
}

const SetupContainer = connect(
    null, { loadPrograms }
)(Setup);

export default SetupContainer;
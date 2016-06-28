import { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import DashboardView from './DashboardView';

class Dashboard extends Component {
    
    componentWillMount() {
        this.requireSetup(this.props);
    }
    
    componentWillReceiveProps(newProps) {
        this.requireSetup(newProps);
    }
    
    requireSetup({ dispatch }) {
        dispatch(push('/setup'));
    }
    
    render() {
        return <DashboardView {...this.props} />;
    }
    
}

const DashboardContainer = connect(
    null
)(Dashboard);

export default DashboardContainer;
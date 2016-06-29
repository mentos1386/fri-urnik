import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { loader } from '~/decorators';

import DashboardView from './DashboardView';

const DashboardContainer = connect(
    null
)(DashboardView);

const DashboardLoader = loader(({ dispatch }) => {
    dispatch(push('/setup'));
})(DashboardContainer);

export default DashboardLoader;
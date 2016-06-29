import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { layout, loader } from '~/decorators';

import DashboardView from './DashboardView';

const DashboardLayout = layout()(DashboardView);

const DashboardContainer = connect(
    null
)(DashboardLayout);

const DashboardLoader = loader(({ dispatch }) => {
    dispatch(push('/setup'));
})(DashboardContainer);

export default DashboardLoader;
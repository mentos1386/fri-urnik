import { connect } from 'react-redux';

import RootView from './RootView';

const RootContainer = connect(
    (state) => state.app
)(RootView);

export default RootContainer;
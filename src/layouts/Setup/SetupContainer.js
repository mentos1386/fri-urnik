import { connect } from 'react-redux';

import { loader } from '~/decorators';
import { loadPrograms } from '~/actions/programs';

import SetupView from './SetupView';

const SetupContainer = connect(
    null
)(SetupView);

const SetupLoader = loader(({ dispatch }) => {
    dispatch(loadPrograms());
})(SetupContainer);

export default SetupLoader;
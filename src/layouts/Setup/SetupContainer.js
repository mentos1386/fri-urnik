import { connect } from 'react-redux';

import { layout, loader } from '~/decorators';
import { setTitle } from '~/actions/app';
import { loadPrograms } from '~/actions/programs';

import SetupView from './SetupView';

const SetupLayout = layout()(SetupView);

const SetupContainer = connect(
    null, { setTitle }
)(SetupLayout);

const SetupLoader = loader(({ dispatch }) => {
    dispatch(loadPrograms());
})(SetupContainer);

export default SetupLoader;
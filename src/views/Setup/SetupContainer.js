import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import SetupView from './SetupView';

const openSchedule = (id, field) => push(`/${field}/${id}`);

const SetupContainer = connect(
    null, { openSchedule }
)(SetupView);

export default SetupContainer;
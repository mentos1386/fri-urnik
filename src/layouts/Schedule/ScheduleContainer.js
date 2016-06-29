import { connect } from 'react-redux';

import { loader } from '~/decorators';
import { getSchedule } from '~/selectors/schedules';
import { loadSchedule } from '~/actions/schedules';

import ScheduleView from './ScheduleView';

const ScheduleContainer = connect(
    (state, { params }) => ({
        ...getSchedule(state, params)
    }), {
        loadSchedule
    }
)(ScheduleView);

const ScheduleLoader = loader(({ params: { id, field }, dispatch }) => {
    dispatch(loadSchedule(id, field));
})(ScheduleContainer);

export default ScheduleLoader;
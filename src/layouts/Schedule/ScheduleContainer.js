import { connect } from 'react-redux';

import { layout, loader } from '~/decorators';
import { setTitle } from '~/actions/app';
import { loadSchedule } from '~/actions/schedules';
import { getSchedule } from '~/selectors/schedules';

import ScheduleView from './ScheduleView';

const ScheduleLayout = layout({
    title({ parent }) {
        if (parent.group) {
            return `${parent.group}. skupina`;
        } else {
            return parent.name;
        }
    }
})(ScheduleView);

const ScheduleContainer = connect(
    (state, { params }) => ({
        ...getSchedule(state, params)
    }), {
        loadSchedule,
        setTitle
    }
)(ScheduleLayout);

const ScheduleLoader = loader(({ params: { id, field }, dispatch }) => {
    dispatch(loadSchedule(id, field));
})(ScheduleContainer);

export default ScheduleLoader;
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import { fetchSchedule } from '~/api/schedules';
import { LOAD_SCHEDULE } from '~/constants/actions';

import {
    requestSchedule, receiveSchedule,
} from '~/actions/schedules';


function* updateSchedule({ id, field }) {
    try {
        yield put(requestSchedule(id, field));
        const schedule = yield call(fetchSchedule, id, field);
        yield put(receiveSchedule(id, field, schedule));
    } catch (error) {
        console.log(error);
    }
}

function* schedules() {
    yield* takeEvery(LOAD_SCHEDULE, updateSchedule);
}

export default schedules;
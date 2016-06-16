import { takeEvery } from 'redux-saga';
import { take, fork, call, put } from 'redux-saga/effects';

import { fetchPrograms, fetchGroups } from '~/api/programs';
import { LOAD_PROGRAMS, SET_PROGRAM } from '~/constants/actions';

import {
    requestPrograms, receivePrograms,
    requestGroups, receiveGroups,
} from '~/actions/programs';

function* updatePrograms() {
    try {
        yield put(requestPrograms());
        const items = yield call(fetchPrograms);
        yield put(receivePrograms(items));
    } catch (error) {
        console.log(error);
    }
}

function* watchPrograms() {
    while (yield take(LOAD_PROGRAMS)) {
        yield call(updatePrograms);
    }
}

function* updateGroups({ program }) {
    try {
        yield put(requestGroups(program));
        const items = yield call(fetchGroups, program);
        yield put(receiveGroups(program, items));
    } catch (error) {
        console.log(error);
    }
}

function* watchGroups() {
    yield* takeEvery(SET_PROGRAM, updateGroups);
}

function* programs() {
    yield fork(watchPrograms);
    yield fork(watchGroups);
}

export default programs;
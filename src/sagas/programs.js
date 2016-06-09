import fetch from 'isomorphic-fetch';
import { sortBy } from 'lodash';

import { takeEvery } from 'redux-saga';
import { take, fork, call, put } from 'redux-saga/effects';

import {
    REQUEST_PROGRAMS, RECEIVE_PROGRAMS,
    REQUEST_GROUPS, RECEIVE_GROUPS
} from '~/constants/actions';

import {
    receivePrograms,
    receiveGroups
} from '~/actions/programs';

async function fetchPrograms() {
    const response = await fetch('/api/programs');
    const { index: programs } = await response.json();
    
    return sortBy(programs, [ 'year', 'name' ]);
}

async function fetchGroups(program) {
    const response = await fetch(`/api/programs/${program}/groups`);
    const { index: groups } = await response.json();
    
    return sortBy(groups, 'group');
}

function* watchPrograms() {
    while (yield take(REQUEST_PROGRAMS)) {
        try {
            const items = yield call(fetchPrograms);
            yield put(receivePrograms(items));
        } catch (error) {
            console.log(error);
        }
    }
}

function* updateGroups({ program }) {
    try {
            const items = yield call(fetchGroups, program);
            yield put(receiveGroups(program, items));
        } catch (error) {
            console.log(error);
        }
}

function* watchGroups() {
    yield* takeEvery(REQUEST_GROUPS, updateGroups);
}

function* programs() {
    yield fork(watchPrograms);
    yield fork(watchGroups);
}

export default programs;
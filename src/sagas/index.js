import { fork } from 'redux-saga/effects';

import programs from './programs';
import schedules from './schedules';

function* sagas() {
    yield fork(programs);
    yield fork(schedules);
}

export default sagas;
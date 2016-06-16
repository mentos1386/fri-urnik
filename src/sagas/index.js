import { fork } from 'redux-saga/effects';

import programs from './programs';

function* sagas() {
    yield fork(programs);
}

export default sagas;
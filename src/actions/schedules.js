import {
    REQUEST_SCHEDULE, RECEIVE_SCHEDULE, LOAD_SCHEDULE
} from '~/constants/actions';

function requestSchedule(id, field) {
    return {
        type: REQUEST_SCHEDULE,
        id, field
    };
}

function receiveSchedule(id, field, schedule) {
    return {
        ...schedule,
        type: RECEIVE_SCHEDULE,
        id, field
    };
}

function loadSchedule(id, field) {
    return {
        type: LOAD_SCHEDULE,
        id, field
    };
}

export { requestSchedule, receiveSchedule, loadSchedule };
import fetch from 'isomorphic-fetch';
import { sortBy } from 'lodash';

const REQUEST_SCHEDULE = 'REQUEST_SCHEDULE';
const RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE';

function requestSchedule(id, field) {
    return {
        type: REQUEST_SCHEDULE,
        id, field
    };
}

function receiveSchedule(id, field, parent, allocations) {
    return {
        type: RECEIVE_SCHEDULE,
        id, field, parent, allocations
    };
}

function fetchSchedule(id, field) {
    return async dispatch => {
        dispatch(requestSchedule(id, field));
        
        try {
            const response = await fetch(`/api/${field}s/${id}/schedules`);
            const { parent, allocations } = await response.json();
            
            const items = sortBy(allocations, [ 'day', 'hour' ]);
            
            dispatch(receiveSchedule(id, field, parent, items));
        } catch (error) {
            console.warn(error);
        }
    };
}

export {
    REQUEST_SCHEDULE, RECEIVE_SCHEDULE
};

export { fetchSchedule };
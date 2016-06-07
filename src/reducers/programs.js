import { combineReducers } from 'redux';
import { map, mapValues, sortedUniq, groupBy, partial } from 'lodash';

import {
    REQUEST_PROGRAMS, RECEIVE_PROGRAMS,
    REQUEST_GROUPS, RECEIVE_GROUPS
} from '~/actions/programs';

const initial = {
    items: [],
    loading: false
};

function list(state = initial, { type, items }) {
    switch (type) {
        case REQUEST_PROGRAMS:
        case REQUEST_GROUPS:
            return { ...state, loading: true };
            
        case RECEIVE_PROGRAMS:
        case RECEIVE_GROUPS:
            return { ...state, loading: false, items };
            
        default:
            return state;
    }
}

function years(state = initial, { type, items }) {
    switch (type) {
        case REQUEST_PROGRAMS:
        case RECEIVE_PROGRAMS:
            const years = sortedUniq(map(items, 'year'));
            return list(state, { type, items: years });
            
        default:
            return state;
    }
}

function programsByYear(state = {}, { type, items }) {
    const reducer = partial(list, undefined);
    
    switch (type) {
        case REQUEST_PROGRAMS:
            return mapValues(state, programs => reducer({
                type
            }));
            
        case RECEIVE_PROGRAMS:
            return mapValues(groupBy(items, 'year'), programs => reducer({
                items: programs,
                type
            }));
            
        default:
            return state;
    }
}

function groupsByProgram(state = {}, action) {
    const { type, program } = action;
    
    switch (type) {
        case REQUEST_GROUPS:
        case RECEIVE_GROUPS:
            return {
                ...state,
                [program]: list(state[program], action)
            };
            
        default:
            return state;
    }
}

export default combineReducers({
  years,
  programsByYear,
  groupsByProgram
});
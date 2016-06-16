import { combineReducers } from 'redux';
import { map, mapValues, sortedUniq, groupBy } from 'lodash';

import {
    REQUEST_PROGRAMS, RECEIVE_PROGRAMS,
    REQUEST_GROUPS, RECEIVE_GROUPS,
} from '~/constants/actions';

const initial = {
    items: [],
    loading: false
};

function entries(state = initial, { type, items }) {
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
            return entries(state, { type, items: years });
            
        default:
            return state;
    }
}

function programsByYear(state = {}, { type, items }) {
    switch (type) {
        case REQUEST_PROGRAMS:
            return mapValues(state, programs => {
                return entries(programs, { type });
            });
            
        case RECEIVE_PROGRAMS:
            return mapValues(groupBy(items, 'year'), programs => {
                return entries(undefined, { type, items: programs });
            });
            
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
                [program]: entries(state[program], action)
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
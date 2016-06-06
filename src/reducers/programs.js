import { combineReducers } from 'redux';

import {
    REQUEST_PROGRAMS, RECEIVE_PROGRAMS,
    REQUEST_GROUPS, RECEIVE_GROUPS
} from '~/actions/programs';

const initialIndex = {
    items: [],
    loading: false
};

function index(state = initialIndex, { type, items }) {
    switch (type) {
        case REQUEST_PROGRAMS:
            return { ...state, loading: true };
            
        case RECEIVE_PROGRAMS:
            return { ...state, loading: false, items };
            
        default:
            return state;
    }
}

const initialGroups = {
    items: [],
    loading: false
};

function groups(state = initialGroups, { type, items }) {
    switch (type) {
        case REQUEST_GROUPS:
            return { ...state, loading: true };
            
        case RECEIVE_GROUPS:
            return { ...state, loading: false, items };
            
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
                [program]: groups(state[program], action)
            };
            
        default:
            return state;
    }
}

export default combineReducers({
  index,
  groupsByProgram
});
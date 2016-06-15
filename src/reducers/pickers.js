import { combineReducers } from 'redux';

import {
    REQUEST_PROGRAMS, RECEIVE_PROGRAMS,
    REQUEST_GROUPS, RECEIVE_GROUPS,
    
    SET_YEAR, SET_GROUP, SET_PROGRAM, SET_STUDENT
} from '~/constants/actions';

function studentSelection(state = '', { type, student }) {
    switch (type) {
        case SET_STUDENT:
            return student;
        
        default:
            return state;
    }
}

function groupSelection(state = {}, { type, ...values }) {
    switch (type) {
        case SET_YEAR:
            return { ...state, ...values, program: null, group: null };
            
        case SET_PROGRAM:
            return { ...state, ...values, group: null };
            
        case SET_GROUP:
            return { ...state, ...values };
        
        default:
            return state;
    }
}

export default combineReducers({
  studentSelection,
  groupSelection
});
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

function groupSelection(state = {}, { type, year, program, group }) {
    if (type === SET_YEAR && year !== state.year) {
        return { ...state, year, program: null, group: null };
    }
    
    if (type === SET_PROGRAM && program !== state.program) {
        return { ...state, program, group: null };
    }
    
    if (type === SET_GROUP && group !== state.group) {
        return { ...state, group };
    }
    
    return state;
}

export default combineReducers({
  studentSelection,
  groupSelection
});
import fetch from 'isomorphic-fetch';
import { sortBy } from 'lodash';

import {
    REQUEST_PROGRAMS, RECEIVE_PROGRAMS,
    REQUEST_GROUPS, RECEIVE_GROUPS
} from '~/constants/actions';

function requestPrograms() {
    return {
        type: REQUEST_PROGRAMS
    };
}

function receivePrograms(items) {
    return {
        type: RECEIVE_PROGRAMS,
        items
    };
}

function fetchPrograms() {
    return async dispatch => {
        dispatch(requestPrograms());
        
        try {
            const response = await fetch('/api/programs');
            const { index: programs } = await response.json();
            
            const items = sortBy(programs, [ 'year', 'name' ]);
            
            dispatch(receivePrograms(items));
        } catch (error) {
            console.warn(error);
        }
    };
}

function requestGroups(program) {
    return {
        type: REQUEST_GROUPS,
        program
    };
}

function receiveGroups(program, items) {
    return {
        type: RECEIVE_GROUPS,
        program, items
    };
}

function fetchGroups(program) {
    return async dispatch => {
        dispatch(requestGroups(program));
        
        try {
            const response = await fetch(`/api/programs/${program}/groups`);
            const { index: groups } = await response.json();
            
            const items = sortBy(groups, 'group');
            
            dispatch(receiveGroups(program, items));
        } catch (error) {
            console.warn(error);
        }
    };
}

export { fetchPrograms, fetchGroups };
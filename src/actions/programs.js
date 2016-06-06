import fetch from 'isomorphic-fetch'

const REQUEST_PROGRAMS = Symbol('REQUEST_PROGRAMS');
const RECEIVE_PROGRAMS = Symbol('RECEIVE_PROGRAMS');

const REQUEST_GROUPS = Symbol('REQUEST_GROUPS');
const RECEIVE_GROUPS = Symbol('RECEIVE_GROUPS');

function requestPrograms() {
    return {
        type: REQUEST_PROGRAMS
    };
}

function receivePrograms({ index }) {
    return {
        type: RECEIVE_PROGRAMS,
        items: index
    };
}

function fetchPrograms() {
    return async dispatch => {
        dispatch(requestPrograms());
        
        try {
            const response = await fetch('/api/programs');
            const programs = await response.json();
            
            dispatch(receivePrograms(programs));
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

function receiveGroups(program, { index }) {
    return {
        type: RECEIVE_GROUPS,
        items: index,
        program
    };
}

function fetchGroups(program) {
    return async dispatch => {
        dispatch(requestGroups(program));
        
        try {
            const response = await fetch(`/api/programs/${program}/groups`);
            const groups = await response.json();
            
            dispatch(receiveGroups(program, groups));
        } catch (error) {
            console.warn(error);
        }
    };
}

export {
    REQUEST_PROGRAMS, RECEIVE_PROGRAMS,
    REQUEST_GROUPS, RECEIVE_GROUPS
};

export { fetchPrograms, fetchGroups };
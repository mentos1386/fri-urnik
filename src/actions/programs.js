import {
    REQUEST_PROGRAMS, RECEIVE_PROGRAMS,
    REQUEST_GROUPS, RECEIVE_GROUPS,
    LOAD_PROGRAMS
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

function loadPrograms() {
    return {
        type: LOAD_PROGRAMS
    };
}

export {
    requestPrograms, receivePrograms,
    requestGroups, receiveGroups,
    loadPrograms
};
import {
    SET_YEAR, SET_GROUP, SET_PROGRAM, SET_STUDENT
} from '~/constants/actions';

function setYear(year) {
    return {
        type: SET_YEAR,
        year
    };
}

function setGroup(group) {
    return {
        type: SET_GROUP,
        group
    };
}

function setProgram(program) {
    return {
        type: SET_PROGRAM,
        program
    };
}

function setStudent(student) {
    return {
        type: SET_STUDENT,
        student
    };
}

export {
    setYear, setGroup, setProgram, setStudent
};
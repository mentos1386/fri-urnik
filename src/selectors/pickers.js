import { createSelector } from 'reselect';

const findYears = (state) => {
    return state.programs.years;
};

const findPrograms = (state) => {
    return state.programs.programsByYear[getSelection(state).year];
};

const findGroups = (state) => {
    return state.programs.groupsByProgram[getSelection(state).program];
};

const getStudent = (state) => {
    return state.pickers.studentSelection;
};

const getSelection = (state) => {
    return state.pickers.groupSelection;
};

const getYears = createSelector(findYears, (years) => {
    return years ? years.items.map(year => ({
        value: year,
        label: `${year}. letnik`
    })) : [];
});

const getPrograms = createSelector(findPrograms, (programs) => {
    return programs ? programs.items.map(program => ({
        value: program.id,
        label: program.name
    })) : [];
});

const groupName = ({ group, activity, tag }) => {
    if (tag) {
        return `${activity} (${tag}), ${group}. skupina`;
    }
    
    if (activity) {
        return `${activity}, ${group}. skupina`;
    }
    
    return `${group}. skupina`;
};

const getGroups = createSelector(getSelection, findGroups, ({ program }, groups) => {
    return groups ? groups.items.map(group => ({
        value: group.id,
        label: groupName(group)
    })) : [];
});

export {
    findYears, findPrograms, findGroups,
    getStudent, getSelection, getYears, getPrograms, getGroups 
};
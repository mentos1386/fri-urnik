import { createSelector } from 'reselect';

const getProgram = (state, { program }) => program;

const getYears = (state) => {
    return state.programs.years;
};

const getPrograms = (state, { year }) => {
    return state.programs.programsByYear[year];
};

const getGroups = (state, { program }) => {
    return state.programs.groupsByProgram[program];
};

const selectYears = createSelector(getYears, (years) => {
    return years ? years.items.map(year => ({
        value: year,
        label: `${year}. letnik`
    })) : [];
});

const selectPrograms = createSelector(getPrograms, (programs) => {
    return programs ? programs.items.map(program => ({
        value: program.id,
        label: program.name
    })) : [];
});

const selectGroups = createSelector(getProgram, getGroups, (program, groups) => {
    return groups ? [{
        value: program,
        label: 'Brez skupine'
    }, ...groups.items.map(group => ({
        value: group.id,
        label: `${group.group}. skupina`
    }))] : [];
});

export { selectYears, selectPrograms, selectGroups };
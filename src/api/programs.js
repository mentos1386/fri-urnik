import fetch from 'isomorphic-fetch';
import sortBy from 'lodash/sortBy';

const fetchPrograms = async () => {
    const response = await fetch('/api/programs');
    const { index: programs } = await response.json();
    
    return sortBy(programs, [ 'year', 'name' ]);
};

const fetchGroups = async (program) => {
    const response = await fetch(`/api/programs/${program}/groups`);
    const { index: groups } = await response.json();
    
    return sortBy(groups, 'group');
};

export { fetchPrograms, fetchGroups };
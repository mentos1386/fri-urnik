import fetch from 'isomorphic-fetch';
import sortBy from 'lodash/sortBy';

const baseUrl = process.env.API;

const fetchPrograms = async () => {
    const response = await fetch(`${baseUrl}/api/programs`);
    const { index: programs } = await response.json();
    
    return sortBy(programs, [ 'year', 'name' ]);
};

const fetchGroups = async (program) => {
    const response = await fetch(`${baseUrl}/api/programs/${program}/groups`);
    const { index: groups } = await response.json();
    
    return groups;
};

export { fetchPrograms, fetchGroups };
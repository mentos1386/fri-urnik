import fetch from 'isomorphic-fetch';
import sortBy from 'lodash/sortBy';

const fetchSchedule = async (id, field) => {
    try {
        const response = await fetch(`/api/${field}s/${id}/schedules`);
        const { parent, allocations } = await response.json();
        
        return {
            parent,
            allocations: sortBy(allocations, [ 'day', 'hour' ])
        };
    } catch (error) {
        console.warn(error);
    }
};

export { fetchSchedule };
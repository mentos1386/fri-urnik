const getSchedule = (state, { field, id }) => {
    const schedules = state.schedules[field] || [];
    
    return schedules[id];
};

export { getSchedule };
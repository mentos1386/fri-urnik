import {
    REQUEST_SCHEDULE, RECEIVE_SCHEDULE
} from '~/constants/actions';

const initial = {
    parent: {},
    allocations: [],
    loading: false
};

function schedulesById(state = initial, { type, parent, allocations }) {
    switch (type) {
        case REQUEST_SCHEDULE:
            return {
                ...state,
                loading: true 
            };
            
        case RECEIVE_SCHEDULE:
            return {
                ...state,
                loading: false,
                parent, allocations
            };
            
        default:
            return state;
    }
}

function schedulesByField(state = {}, action) {
    const { type, id } = action;
    
    switch (type) {
        case REQUEST_SCHEDULE:
        case RECEIVE_SCHEDULE:
            return {
                ...state,
                [id]: schedulesById(state[id], action)
            };
            
        default:
            return state;
    }
}

function schedules(state = {}, action) {
    const { type, field } = action;
    
    switch (type) {
        case REQUEST_SCHEDULE:
        case RECEIVE_SCHEDULE:
            return {
                ...state,
                [field]: schedulesByField(state[field], action)
            };
            
        default:
            return state;
    }
}

export default schedules;
import { combineReducers } from 'redux';

import { UPDATE_TITLE } from '~/constants/actions';

function title(state = 'FRI Urnik', { type, title }) {
    switch(type) {
        case UPDATE_TITLE:
            return title;
        
        default:
            return state;
    }
}

export default combineReducers({
    title
});
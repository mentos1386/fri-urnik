import { combineReducers } from 'redux';

import { SET_TITLE, RESET_TITLE } from '~/constants/actions';

const initialTitle = 'FRI Urnik';

function title(state = initialTitle, { type, title }) {
    switch(type) {
        case SET_TITLE:
            return title;
        
        case RESET_TITLE:
            return initialTitle;
        
        default:
            return state;
    }
}

export default combineReducers({
    title
});
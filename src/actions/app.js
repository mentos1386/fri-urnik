import { SET_TITLE, RESET_TITLE } from '~/constants/actions';

function setTitle(title) {
    return {
        type: SET_TITLE,
        title
    };
}

function resetTitle() {
    return {
        type: RESET_TITLE
    };
}

export { setTitle, resetTitle };
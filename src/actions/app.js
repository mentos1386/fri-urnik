import { SET_TITLE } from '~/constants/actions';

function setTitle(title) {
    return {
        type: SET_TITLE,
        title
    };
}

export { setTitle };
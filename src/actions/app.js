import { UPDATE_TITLE } from '~/constants/actions';

function setTitle(title) {
    return {
        type: UPDATE_TITLE,
        title
    };
}

export { setTitle };
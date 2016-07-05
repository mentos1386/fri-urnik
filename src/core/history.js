import { hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const browser = process.env.APP_ENV === 'browser';

let reduxHistory = null;

function createHistory(store, history) {
    if (!reduxHistory) {
        reduxHistory = syncHistoryWithStore(history, store);
    }
    
    return reduxHistory;
}

export { createHistory };
export default browser ? browserHistory : hashHistory;
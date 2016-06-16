import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

let reduxHistory = null;

function createHistory(store, history) {
    if (!reduxHistory) {
        reduxHistory = syncHistoryWithStore(history, store);
    }
    
    return reduxHistory;
}

export { createHistory };
export default browserHistory;
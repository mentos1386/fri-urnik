import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import reducer from '~/reducers';

const enhancer = compose(...[
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
].filter(func => func));

const store = createStore(reducer, enhancer);

export default store;
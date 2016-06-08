import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux'
import { createStore, compose, applyMiddleware } from 'redux';

import history from '~/history';
import reducer from '~/reducers';

const middleware = [
    thunk,
    routerMiddleware(history)
];

const enhancer = compose(...[
    applyMiddleware(...middleware),
    window.devToolsExtension && window.devToolsExtension()
].filter(func => func));

const store = createStore(reducer, enhancer);

export default store;
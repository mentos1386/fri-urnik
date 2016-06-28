import localforage from 'localforage';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';

import sagas from '~/sagas';
import history from './history';
import reducer from '~/reducers';

const saga = createSagaMiddleware();

const middleware = [
    saga,
    routerMiddleware(history),
];

const enhancer = compose(...[
    autoRehydrate(),
    applyMiddleware(...middleware),
    window.devToolsExtension && window.devToolsExtension()
].filter(func => func));

const store = createStore(reducer, enhancer);

persistStore(store, {
    storage: localforage,
    blacklist: [ 'routing' ]
});

saga.run(sagas);

export default store;
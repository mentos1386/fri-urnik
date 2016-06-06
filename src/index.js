import 'material-design-icons/iconfont/material-icons';
import 'roboto-fontface/css/roboto-fontface';
import 'react-toolbox/lib/commons';
import '~/style';

import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';

import reducer from '~/reducers';
import App from '~/App';

const store = createStore(reducer, applyMiddleware(thunk));

render((
    <App store={store} history={browserHistory} />
), document.getElementById('app'));
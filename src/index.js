import 'material-design-icons/iconfont/material-icons';
import 'roboto-fontface/css/roboto-fontface';
import 'react-toolbox/lib/commons';
import '~/style';

import { render } from 'react-dom';
import { browserHistory } from 'react-router';

import store from '~/store';
import routes from '~/routes';

import App from '~/App';

render((
    <App store={store} routes={routes} history={browserHistory} />
), document.getElementById('app'));
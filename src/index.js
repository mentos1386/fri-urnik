import 'material-design-icons/iconfont/material-icons';
import 'roboto-fontface/css/roboto-fontface';
import 'react-toolbox/lib/commons';
import '~/style';

import { render } from 'react-dom';

import history from '~/history';
import routes from '~/routes';
import store from '~/store';

import App from '~/App';

render((
    <App
        store={store}
        routes={routes}
        history={history}
    />
), document.getElementById('app'));
import 'material-design-icons/iconfont/material-icons';
import 'roboto-fontface/css/roboto-fontface';
import 'react-toolbox/lib/commons';
import '~/style';

import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Root, Dashboard } from '~/containers';

render((
    <Router history={browserHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={Dashboard} />
        </Route>
    </Router>
), document.getElementById('app'));
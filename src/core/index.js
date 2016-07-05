import { render } from 'react-dom';

import runtime from './runtime';
import history from './history';
import routes from '~/routes';
import styles from '~/styles';
import store from './store';

import App from './App';

runtime();

render((
    <App
        store={store}
        routes={routes}
        styles={styles}
        history={history}
    />
), document.getElementById('app'));
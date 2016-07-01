import { render } from 'react-dom';

import { register } from './runtime';
import history from './history';
import routes from '~/routes';
import styles from '~/styles';
import store from './store';

import App from './App';

register();

render((
    <App
        store={store}
        routes={routes}
        styles={styles}
        history={history}
    />
), document.getElementById('app'));
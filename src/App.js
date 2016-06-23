import { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import { createHistory } from '~/history';

function App({ store, routes, history }) {
    return (
        <Provider store={store}>
            <Router
                routes={routes}
                history={createHistory(store, history)}
            />
        </Provider>
    );
}

App.propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default App;
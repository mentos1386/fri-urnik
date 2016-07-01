import { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-css-themr';

import { createHistory } from './history';

function App({ store, routes, styles, history }) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={styles}>
                <Router
                    routes={routes}
                    history={createHistory(store, history)}
                />
            </ThemeProvider>
        </Provider>
    );
}

App.propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    styles: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default App;
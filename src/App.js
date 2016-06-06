import { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import { Root, Dashboard } from '~/containers';

class App extends Component {
    
    render() {
        const { store, history } = this.props;
        
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Root}>
                        <IndexRoute component={Dashboard} />
                    </Route>
                </Router>
            </Provider>
        );
    }
    
}

export default App;
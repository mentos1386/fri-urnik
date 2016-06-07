import { Component } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

class App extends Component {
    
    render() {
        const { store, routes, history } = this.props;
        
        return (
            <Provider store={store}>
                <Router routes={routes} history={history} />
            </Provider>
        );
    }
    
}

export default App;
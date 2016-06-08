import { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

class App extends Component {
    
    createHistory() {
        const { store, history } = this.props;
        
        return syncHistoryWithStore(history, store);
    }
    
    render() {
        const { store, routes } = this.props;
        
        return (
            <Provider store={store}>
                <Router routes={routes} history={this.createHistory()} />
            </Provider>
        );
    }
    
}

export default App;
import { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { Root, Dashboard } from '~/containers';

class App extends Component {
    
    render() {
        const { history } = this.props;
        
        return (
            <Router history={history}>
                <Route path="/" component={Root}>
                    <IndexRoute component={Dashboard} />
                </Route>
            </Router>
        );
    }
    
}

export default App;
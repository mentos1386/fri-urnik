const route = {
    
    path: '/',
    
    getChildRoutes(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, [
                require('./setup').default,
                require('./schedule').default
            ]);
        });
    },
    
    getIndexRoute(partialNextState, callback) {
        require.ensure([], function (require) {
            callback(null, {
                component: require('~/layouts/Dashboard').default
            });
        });
    },
    
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('~/layouts/Root').default);
        });
    }
    
};

export default route;
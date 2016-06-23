const route = {
    
    path: ':field/:id',
    
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('~/layouts/Schedule').default);
        });
    }
    
};

export default route;
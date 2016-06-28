const route = {
    
    path: 'setup',
    
    getComponents(nextState, callback) {
        require.ensure([], function (require) {
            callback(null, require('~/layouts/Setup').default);
        });
    }
    
};

export default route;
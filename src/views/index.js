const context = require.context('.', true, /^\.\/[\w]+\/index$/);

context.keys().forEach(key => {
    exports[key.split('/')[1]] = context(key).default; 
});
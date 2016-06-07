// Import all subdirectories

let modules = {};
const context = require.context('.', true, /^\.\/[\w]+\/index$/);

context.keys().forEach(key => {
    const name = key.split('/')[1];
    
    exports[name] = modules[name] = context(key).default; 
});

exports.default = modules;
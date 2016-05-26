// Import all subdirectories
const context = require.context('.', true, /^\.\/(\w+)\/index$/);

context.keys().forEach(key => {
    const module = context(key);
    const name = key.split('/')[1];
    
    exports[name[0].toUpperCase() + name.substr(1)] = module.default; 
});
// Import all subdirectories
const context = require.context('.', true, /^\.\/([\w-]+)\/\1$/);

function capitalize(value) {
    return value[0].toUpperCase() + value.substr(1);
}

function getName(key) {
    return key.split('/')[1].split('-').map(capitalize).join('');
}

context.keys().forEach(key => {
    exports[getName(key)] = context(key).default; 
});
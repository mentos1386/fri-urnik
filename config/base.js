import webpack from 'webpack';
import { resolve } from 'path';

class Config {
    
    get base() {
        // Depends on the location of this file
        return resolve(__dirname, '..');
    }
    
    path(path) {
        return resolve(this.base, path);
    }
    
    get devtool() {
        return null;
    }
    
    get entry() {
        return [ './src/index.js' ];
    }
    
    get output() {
        return {
            path: this.path('build'),
            filename: 'app.js',
            publicPath: '/'
        };
    }
    
    get module() {
        return {
            loaders: Object.values(this.loaders)
        };
    }
    
    get loaders() {
        // While webpack expects an array loaders returns an object
        // for easier overriding of the loaders
        return {
            js: {
                test: /\.js$/,
                include: this.path('src'),
                loaders: [ 'babel' ]
            }
        };
    }
    
    get resolve() {
        return {
            alias: this.alias
        };
    }
    
    get alias() {
        return {
            // Resolve paths starting with ~ as project relative
            '~': this.path('src')
        };
    }
    
    get plugins() {
        return [
            new webpack.ProvidePlugin({
                React: 'react'
            })
        ];
    }
    
    get webpack() {
        return {
            devtool: this.devtool,
            entry: this.entry,
            output: this.output,
            module: this.module,
            resolve: this.resolve,
            plugins: this.plugins
        };
    }
    
}

export default Config;
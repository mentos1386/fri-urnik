import webpack from 'webpack';
import { join, resolve } from 'path';

class Config {
    
    get base() {
        // Depends on the location of this file
        return resolve(__dirname, '..');
    }
    
    path(...path) {
        return join(this.base, ...path);
    }
    
    get devtool() {
        return null;
    }
    
    get entry() {
        return [ 'babel-polyfill', './src/index.js' ];
    }
    
    get output() {
        return {
            path: this.path('build'),
            filename: 'app.js',
            chunkFilename: 'app.[id].js',
            publicPath: '/'
        };
    }
    
    get module() {
        const prebuilt = [
            this.path('node_modules', 'localforage')
        ];
        
        return {
            loaders: Object.values(this.loaders),
            noParse: prebuilt
        };
    }
    
    get loaders() {
        // While webpack expects an array, loaders returns an object
        // for easier overriding of the loaders
        return {
            js: {
                test: /\.js$/,
                include: this.path('src'),
                loaders: [ 'babel' ]
            },
            css: {
                test: /\.css$/,
                loaders: [ 'style', 'css' ]
            },
            scss: {
                test: /\.scss$/,
                loaders: [ 'style', 'css?modules', 'sass', 'toolbox' ]
            },
            woff: {
                test: /\.woff2?(\?.*)?$/,
                loaders: [ 'url?limit=1000&mimetype=application/font-woff' ]
            },
            svg: {
                test: /\.svg(\?.*)?$/,
                loaders: [ 'url?limit=1000&mimetype=svg+xml' ]
            },
            ttf: {
                test: /\.ttf(\?.*)?$/,
                loaders: [ 'file' ]
            },
            eot: {
                test: /\.eot(\?.*)?$/,
                loaders: [ 'file' ]
            },
            html: {
                test: /\.html$/,
                loaders: [ 'file?name=[name].[ext]' ]
            }
        };
    }
    
    get resolve() {
        return {
            alias: this.alias,
            extensions: this.extensions
        };
    }
    
    get alias() {
        return {
            // Resolve paths starting with ~ as project relative
            '~': this.path('src')
        };
    }
    
    get extensions() {
        return [ '', '.js', '.css', '.scss' ];
    }
    
    get plugins() {
        return [
            new webpack.ProvidePlugin({
                React: 'react'
            }),
            
            new webpack.optimize.DedupePlugin()
        ];
    }
    
    get toolbox() {
        return {
            theme: this.path('src', 'theme.scss')
        };
    }
    
    get webpack() {
        return {
            devtool: this.devtool,
            entry: this.entry,
            output: this.output,
            module: this.module,
            resolve: this.resolve,
            plugins: this.plugins,
            toolbox: this.toolbox
        };
    }
    
}

export default Config;
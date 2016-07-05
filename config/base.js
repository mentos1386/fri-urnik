import webpack from 'webpack';
import { join, resolve } from 'path';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.APP_ENV = process.env.HISTORY || 'browser';
process.env.API = process.env.API || '';

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
        return [ 'babel-polyfill', this.path('src', 'index.js') ];
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
                loaders: [ 'style', 'css?modules', 'sass' ]
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
            // React needs NODE_ENV for it's production build
            new webpack.EnvironmentPlugin([
                'NODE_ENV',
                'APP_ENV',
                'API'
            ]),
            
            new webpack.ProvidePlugin({
                React: 'react'
            }),
            
            new webpack.optimize.DedupePlugin()
        ];
    }
    
    get sassLoader() {
        return {
            data: `@import "${this.path('src', 'styles', 'theme.scss')}";`
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
            sassLoader: this.sassLoader
        };
    }
    
}

export default Config;
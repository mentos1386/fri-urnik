import webpack from 'webpack';
import ServiceWorkerWepbackPlugin from 'serviceworker-webpack-plugin';

import Base from './base';

class Config extends Base {
    
    get plugins() {
        return [
            // React needs NODE_ENV for it's production build
            new webpack.EnvironmentPlugin([
                'NODE_ENV'
            ]),
            
            ...super.plugins,
            
            new ServiceWorkerWepbackPlugin({
                filename: 'service.js',
                entry: this.path('src', 'service.js')
            }),
            
            new webpack.optimize.UglifyJsPlugin({
                warnings: false
            })
        ];
    }
    
}

export default Config;
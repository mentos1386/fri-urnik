import webpack from 'webpack';
import ServiceWorkerWepbackPlugin from 'serviceworker-webpack-plugin';

import Base from './base';

process.env.NODE_ENV = 'production';

class Config extends Base {
    
    get plugins() {
        return [
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
import webpack from 'webpack';
import CordovaPlugin from 'webpack-cordova-plugin';

import Base from './base';

process.env.NODE_ENV = 'production';
process.env.APP_ENV = 'cordova';

class Config extends Base {
    
    constructor(platform) {
        super();
        
        this.platform = platform;
    }
    
    get output() {
        return {
            ...super.output,
            
            publicPath: ''
        };
    }
    
    get plugins() {
        return [
            ...super.plugins,
            
            new webpack.optimize.UglifyJsPlugin({
                warnings: false
            }),
            
            new CordovaPlugin({
                config: 'config.xml',
                src: 'cordova.html',
                platform: this.platform,
                version: false
            })
        ];
    }
    
}

export default Config;
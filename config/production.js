import webpack from 'webpack';

import Base from './base';

class Config extends Base {
    
    get plugins() {
        return [
            // React needs NODE_ENV for it's production build
            new webpack.EnvironmentPlugin([ 'NODE_ENV' ]),
            ...super.plugins,
            new webpack.optimize.UglifyJsPlugin({ warnings: false })
        ];
    }
    
}

export default Config;
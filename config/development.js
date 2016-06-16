import webpack from 'webpack';

import Base from './base';

class Config extends Base {
    
    get devtool() {
        return '#eval-source-map';
    }
    
    get entry() {
        return [
            'webpack-dev-server/client',
            'webpack/hot/only-dev-server',
            ...super.entry
        ];
    }
    
    get loaders() {
        const { js, ...rest } = super.loaders;
        
        return {
            ...rest,
            
            // Add the react-hot loader
            js: {
                ...js,
                loaders: [ 'react-hot', ...js.loaders ]
            }
        };
    }
    
    get plugins() {
        return [
            ...super.plugins,
            new webpack.HotModuleReplacementPlugin()
        ];
    }
    
}

export default Config;
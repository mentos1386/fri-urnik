import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import Config from '../config/development';

const config = new Config();
const compiler = webpack(config.webpack);

const proxy = {
    '/api*': {
        changeOrigin: true,
        target: process.env.API
    }
};

const server = new WebpackDevServer(compiler, {
    proxy,
    hot: true,
    historyApiFallback: true,
    contentBase: config.output.path,
});

server.listen(process.env.PORT);
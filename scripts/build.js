import webpack from 'webpack';

import Config from '../config/production';

process.env.NODE_ENV = 'production';

const config = new Config();
const compiler = webpack(config.webpack);

compiler.run((error, stats) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        const elapsed = (stats.endTime - stats.startTime) / 1e3;
        console.log(`Finished build in ${elapsed.toFixed(2)} seconds`);
    }
});
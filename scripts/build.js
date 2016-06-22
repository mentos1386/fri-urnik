import webpack from 'webpack';

import Config from '../config/production';

process.env.NODE_ENV = 'production';

const config = new Config();
const compiler = webpack(config.webpack);

const json = process.argv.slice(-1)[0] === 'json';

compiler.run((error, stats) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else if (json) {
        console.log(JSON.stringify(stats.toJson()));
    } else {
        const elapsed = (stats.endTime - stats.startTime) / 1e3;
        console.log(`Finished build in ${elapsed.toFixed(2)} seconds`);
    }
});
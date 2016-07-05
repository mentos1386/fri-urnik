import webpack from 'webpack';

import Config from '../config/production';
import { wrap } from './utils';

const config = new Config();
const compiler = webpack(config.webpack);

const outputJson = process.argv.slice(-1)[0] === 'json';

const compile = wrap(::compiler.run);

(async () => {
    try {
        const start = Date.now();
        
        const stats = await compile();
        const json = stats.toJson();
        
        if (outputJson) {
            console.log(JSON.stringify(stats.toJson()));
            return;
        }
        
        if (json.errors.length > 0) {
            console.log('Compilation errors:');
            json.errors.forEach(::console.log);
            console.log();
        }
        
        const elapsed = (Date.now() - start) / 1e3;
        console.log(`Finished build in ${elapsed.toFixed(2)} seconds`);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
})();